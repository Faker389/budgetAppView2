import { authMiddleware,redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
    // afterAuth(auth, req, evt) {

    //   if (auth.userId && !auth.isPublicRoute) {
    //     return NextResponse.next();
    //   }
    //   return NextResponse.next();
    // }
    publicRoutes:['/']
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};