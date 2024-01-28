import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import prisma from './lib/prisma';

export const config = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.GOOGLE_OAUTH_CLIENTSECRET,
  providers: [
    Google({
      clientId: process.env.GOOGLE_OAUTH_CLIENTID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENTSECRET
    })
  ]
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
