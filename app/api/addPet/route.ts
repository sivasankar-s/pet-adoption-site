import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/prsima";
import { z } from "zod";

// const schema = z
//     .object({
//         name: z.string().min(3),
        
//         email: z.string().email(),
//         password: z.string().min(5),
//         phoneNumber: z.string().min(10),
//       });

export async function POST(req : NextRequest) {
    const body = await req.json();

    // const validation = schema.safeParse(body);
    //   if (!validation.success) {
    //     return NextResponse.json(validation.error.errors, {status: 400})
    //   }

      const newPet = await prisma.petDetails.create({
        data: {
            name: body.name,
            breed: body.breed,
            dateOfBirth: body.dob,
            gender: body.gender,
            type: body.animalType,
            imageUrl: body.url,
            owner: body.email,
            description: body.description,
            slug: body.slug,
        }
      })

      return NextResponse.json(newPet, {status: 201});
}