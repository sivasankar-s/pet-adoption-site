'use server';

import { getServerSession } from "next-auth";
import prisma from "./prsima";
import { AuthOptions } from "./api/auth/[...nextauth]/AuthOptions";
import { Router } from "next/router";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";

export const onSubmitNewPet = async (body: FormData) => {
    const session = await getServerSession(AuthOptions);
    const newPet = await prisma.petDetails.create({
        data: {
            name: body.get('name')?.toString()!,
            breed: body.get('breed')?.toString()!,
            dateOfBirth: body.get('dob')?.toString()!,
            gender: body.get('gender')?.toString()!,
            type: body.get('animalType')?.toString()!,
            imageUrl: body.get("url")?.toString()!,
            owner: session?.user?.email!,
            description: body.get("description")?.toString()!,
        }
    })
    // revalidatePath('/');
    redirect('/');
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