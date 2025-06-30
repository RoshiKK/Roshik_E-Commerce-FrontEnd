// pages/_app.js
import '../styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Provider } from 'react-redux';
import { store, persistor } from "../store/store";
import { PersistGate } from 'redux-persist/integration/react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Elements stripe={stripePromise}>
            <Component {...pageProps} />
          </Elements>
        </PersistGate>
      </Provider>
    </ClerkProvider>
  );
}

// This export is crucial - it was missing in your code
export default MyApp;