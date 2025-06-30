import { stripe } from '../../lib/stripe';
import { getAuth } from '@clerk/nextjs/server';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      message: 'Method not allowed',
      allowedMethods: ['POST'] 
    });
  }

  try {
    // Verify authentication
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ 
        message: 'Unauthorized - Please sign in',
        code: 'UNAUTHORIZED'
      });
    }

    // Validate request body
    if (!req.body || !req.body.items) {
      return res.status(400).json({
        message: 'Bad request - Missing items in request body',
        code: 'MISSING_ITEMS'
      });
    }

    const { items } = req.body;

    // Validate items array
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        message: 'Bad request - Invalid items format',
        code: 'INVALID_ITEMS_FORMAT'
      });
    }

    // Prepare line items for Stripe
    const lineItems = items.map(item => {
      // Validate each item
      if (!item.name || typeof item.price !== 'number' || typeof item.quantity !== 'number') {
        throw new Error('Invalid item structure');
      }

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      };
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.origin}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cart`,
      metadata: {
        userId: userId,
        checkoutId: uuidv4(), // Unique identifier for this checkout
      },
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB'], // Customize as needed
      },
    }, {
      idempotencyKey: uuidv4() // Prevent duplicate charges
    });

    return res.status(200).json({ 
      id: session.id,
      url: session.url 
    });

  } catch (err) {
    console.error('Checkout error:', err);

    // Handle specific Stripe errors
    if (err.type === 'StripeInvalidRequestError') {
      return res.status(400).json({
        message: 'Payment processing error',
        code: 'STRIPE_INVALID_REQUEST',
        details: err.message
      });
    }

    return res.status(500).json({
      message: 'Internal server error',
      code: 'SERVER_ERROR',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
}