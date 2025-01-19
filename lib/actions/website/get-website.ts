'use server';

import { prisma } from "@/lib/prisma";

export async function getWebsitesByUser(userEmail: string) {
  try {
    const websites = await prisma.website.findMany({
      where: {
        userEmail,
      },
      select: {
        id: true,
        name: true, // Include fields you need
      },
    });

    return websites;
  } catch (error) {
    console.error("Error fetching websites:", error);
    throw new Error("Failed to fetch websites.");
  }
}
