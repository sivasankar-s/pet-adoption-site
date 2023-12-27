import prisma from "./prsima";

export default async function sitemap() {
    const baseUrl = "https://adore-a-pet.vercel.app";

    const petDetails = await prisma.petDetails.findMany({select: {
        slug: true
    }});

    const petUrls = petDetails.map((pet) => ({
        url: `${baseUrl}/pet/${pet.slug}`,
        lastModified: new Date(),
    }));

    return [
        {url: baseUrl, lastModified: new Date()},
        {url: `${baseUrl}/register`, lastModified: new Date()},
        {url: `${baseUrl}/signIn`, lastModified: new Date()},
        {url: `${baseUrl}/giveAPet`, lastModified: new Date()},
        ...petUrls
    ];
}