import { authMiddleware } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

// All routes are public; Clerk's authMiddleware here only runs the URL rewrite
// (/ -> /dashboard) before auth. Per-route auth enforcement happens inside
// individual handlers (e.g., app/api/conversation/route.ts checks userId).
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

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
