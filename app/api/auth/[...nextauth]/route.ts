import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { PrismaClient, Role } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';



interface typerole {
  roleGlobal : string
}
let  roleGlobal = "STUDENT" 

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    session: {
      strategy: 'jwt',
    },
    providers: [
      Google({
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
      }),
    ],
    pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
    },
    callbacks: {
      async redirect({ url, baseUrl }) {
        console.log(url)
        if(url.includes('ALUMNI')){
          roleGlobal = "ALUMNI"
        }else{
          roleGlobal = "STUDENT"
        }

        console.log(roleGlobal)
        return url;
      },
      async signIn({ account, profile }) {
        if (!profile?.email) {
          throw new Error('No profile');
        }

        const userRole : Role | undefined = Role[roleGlobal as keyof typeof Role] 
        
        if (userRole == Role.STUDENT){
          await prisma.studentUser.upsert({
          where: {
            email: profile.email,
          },
          create: {
            email: profile.email,
            name: profile.name || '',
            role: userRole as Role,
          },
          update: {
            name: profile.name,
          },
        });} 
        else{
          await prisma.alumniUser.upsert({
            where: {
              email: profile.email,
            },
            create: {
              email: profile.email,
              name: profile.name || '',
              role: userRole as Role,
            },
            update: {
              name: profile.name,
            },
          });
        }
        

        return true;
      },
    },
  });
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    session: {
      strategy: 'jwt',
    },
    providers: [
      Google({
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
      }),
    ],
    pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
    },
    callbacks: {
      async redirect({ url, baseUrl }) {
        console.log(url)
        if(url.includes('ALUMNI')){
          roleGlobal = "ALUMNI"
        }else{
          roleGlobal = "STUDENT"
        }

        console.log(roleGlobal)
        return url;
      },
      async signIn({ account, profile }) {
        if (!profile?.email) {
          throw new Error('No profile');
        }

        const userRole : Role | undefined = Role[roleGlobal as keyof typeof Role] 
        
        if (userRole == Role.STUDENT){
          await prisma.studentUser.upsert({
          where: {
            email: profile.email,
          },
          create: {
            email: profile.email,
            name: profile.name || '',
            role: userRole as Role,
          },
          update: {
            name: profile.name,
          },
        });} 
        else{
          await prisma.alumniUser.upsert({
            where: {
              email: profile.email,
            },
            create: {
              email: profile.email,
              name: profile.name || '',
              role: userRole as Role,
            },
            update: {
              name: profile.name,
            },
          });
        }
        

        return true;
      },
    },
  });
}
