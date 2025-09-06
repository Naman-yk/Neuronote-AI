import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes
const isPublicRoute = createRouteMatcher([
  "/",                // Home page
  "/sign-in(.*)",     // Sign-in page
  "/sign-up(.*)",     // Sign-up page
  "/api/uploadthing(.*)", // Allow UploadThing API routes
]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) {
    // ✅ Don't require auth for public routes
    return;
  }

  // ❌ Require auth for everything else
 
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
