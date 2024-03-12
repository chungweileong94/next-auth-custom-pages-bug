import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
} = NextAuth({
  pages: {
    error: "/custom/error",
  },
  providers: [
    CredentialsProvider({
      authorize: () => {
        throw new Error("Fake Error");
      },
    }),
  ],
});
