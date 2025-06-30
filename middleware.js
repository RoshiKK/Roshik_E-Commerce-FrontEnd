import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  publicRoutes: [
    '/',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/shop',
    '/about',
    '/api/webhook(.*)',
    '/api/checkout' // Add this if you want to handle auth manually
  ],
  // Optional: Add afterAuth if you need custom logic
  async afterAuth(auth, req) {
    if (!auth.userId && !auth.isPublicRoute) {
      // Handle unauthenticated users trying to access protected routes
    }
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};