import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/app/prsima";

const schema = z
    .object({
        name: z.string().min(3),
        email: z.string().email(),
        password: z.string().min(5),
        phoneNumber: z.string().min(10),
      });

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log('in route')
    console.log(body)

      const validation = schema.safeParse(body);
      if (!validation.success) {
        return NextResponse.json(validation.error.errors, {status: 400})
      }
        const user = await prisma.user.findUnique({
          where: {
            email: body.email,
          },
        });
  
        if (user) {
          console.log("user already exists");
          return NextResponse.json({error: 'User already Exists'}, {status: 400})
            
        }
        // const hashedPassword = await bcrypt.hash(data.password, 10);
        const newUser = await prisma.user.create({
          data: {
            email: body.email,
            hashedPassword: body.password,
            name: body.name,
            phoneNumber: body.phoneNumber,
          },
        });
      
        return NextResponse.json(newUser, {status: 201})
      
}