'use server';

import { getServerSession } from "next-auth";
import prisma from "./prsima";
import { AuthOptions } from "./api/auth/[...nextauth]/AuthOptions";
import { Router } from "next/router";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";
import slugify from 'slugify'
import { z } from "zod";
import { FieldValues } from "react-hook-form";

const addPetSchema = z
    .object({
        name: z.string().min(3, {message: 'Name must be atleast 3 letters'}),
        breed: z.string().min(1, {message: "Please specify the breed"}),
        // password: z.string().min(6, {message: 'Password must be atleast 6 characters'}),
        // phoneNumber: z.string().min(10, {message: 'Phone number must be atleast 10 digits'}),
        dob: z.string().refine((value) => {
            const regex = /^(\d+)\s*(months?|years?|weeks?|days?|month?|year?|day?|week?|Months?|Years?|Weeks?|Days?|Month?|Year?|Day?|Week?)$/;
            return regex.test(value);
          }, {
            message: "Please mention age in 'years','months' 'weeks', or 'days'.",
          }),
        imgurl: z.string().min(1, {message: "Please upload an Image"}),

      });

export const onSubmitNewPet = async (body: FieldValues) => {
    const session = await getServerSession(AuthOptions);
    console.log(body);
    const slug = slugify(body.name + Math.floor(Math.random() * 10000).toString())
    body =  {...body,owner: session?.user?.email!, slug: slug}
    console.log(body);
    
    const dat = {
        // name: body.get('name')?.toString()!, 
        // slug: slug, 
        // breed: body.get('breed')?.toString()!,
        // dateOfBirth: body.get('dob')?.toString()!,
        // gender: body.get('gender')?.toString()!,
        // type: body.get('animalType')?.toString()!,
        // imageUrl: body.get("url")?.toString()!,
        // owner: session?.user?.email!,
        // description: body.get("description")?.toString()!,
    }

    const validation = addPetSchema.safeParse(body);

    if(!validation.success){
        // 'use client';
        const errors = validation.error.errors as z.ZodIssue[];

        console.log(errors)
        return errors;

        // errors.map(err => toast.error(err.message));
        
    }

    const newPet = await prisma.petDetails.create({
        data: {
            name: body.name,
            slug: slug,
            breed: body.breed,
            dateOfBirth: body.dob,
            gender: body.gender,
            type: body.animalType,
            imageUrl: body.imgurl,
            owner: session?.user?.email!,
            description: body.description,
        }
    })
    // revalidatePath('/');
    if(newPet){
        redirect('/');
        return null;
        
    }
}
    

export const checkPhoneAdded = async () => {
    const session = await getServerSession(AuthOptions);

    if(session) {
    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email!
        }
    });
    if(!user?.phoneNumber) return false;
    }
    // return true;
}

export const updatePhone = async (formData : FormData) => {
    const session = await getServerSession(AuthOptions);

    if(!session) return null;

   
    const user = await prisma.user.update({
        where: {
            email: session?.user?.email!
        },
        data: {
            phoneNumber: formData.get('phn')?.toString()
        }
    });

    revalidatePath('/')
    return user;    
}

export async function changeAdoptStatus (id : string) {
    const oldPet = await prisma.petDetails.findUnique({
        where: {id:id},select:{availableStatus:true}
    })
    const status =  oldPet?.availableStatus;
    const pet = await prisma.petDetails.update({
        where: {
            id: id
        },
        data: {
            availableStatus: !status
        }
    })
    revalidatePath('/')
    revalidatePath('/adopted')
    revalidatePath(`/pet/${id}`)
}