import { authMiddleware } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/")
    return NextResponse.rewrite(new URL("/dashboard", request.url));
}

export default authMiddleware({
  beforeAuth: (req) => {
    return middleware(req);
  },
  publicRoutes: ["/(.*)"],
});
// export default authMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
