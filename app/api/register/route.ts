import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/app/prsima";
import toast from "react-hot-toast";

const schema = z
    .object({
        name: z.string().min(3, {message: 'Name must be atleast 3 letters'}),
        email: z.string().email(),
        password: z.string().min(6, {message: 'Password must be atleast 6 characters'}),
        phoneNumber: z.string().min(10, {message: 'Phone number must be atleast 10 digits'}),
      });

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log('in route')
    console.log(body)

      const validation = schema.safeParse(body);
      if (!validation.success) {
        // toast.error(validation.error.message)
        // console.log(validation.error.errors)
        return NextResponse.json(validation.error.errors, {status: 400})
      }
        const user = await prisma.user.findUnique({
          where: {
            email: body.email,
          },
        });
  
        if (user) {
          console.log("user already exists");
          // toast.error('User already Exists')
          return NextResponse.json({error: 'Email already exists'}, {status: 401})
          // NextResponse.json()
            
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
      
        // toast.success("Registered Successfully")
        return NextResponse.json(newUser, {status: 201})
      
}