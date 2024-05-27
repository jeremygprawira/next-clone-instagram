import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      const isLoggedIn = !!token;
      const isOnDashboard = req.nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect to unauthenticated user to login page
      }
      return true;
    },
  },
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.png).*)"],
};
