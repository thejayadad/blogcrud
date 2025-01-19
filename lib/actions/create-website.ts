'use server'

import { prisma } from '@/lib/prisma'; // Adjust the import path for your prisma instance

export async function createOrUpdateWebsite(userEmail: string | null | undefined): Promise<{ hasWebsite: boolean; websiteId?: string }> {
  if (!userEmail) {
    throw new Error('User email is required to check website.');
  }

  // Fetch the user's websites from the database
  const userWebsites = await prisma.website.findMany({
    where: { userEmail },
    orderBy: { createdAt: 'desc' }, // Ensure the most recent is fetched first
  });

  if (userWebsites.length > 0) {
    // If websites exist, return the most recent one
    const mostRecentWebsite = userWebsites[0];
    return { hasWebsite: true, websiteId: mostRecentWebsite.id };
  } else {
    // If no websites exist, indicate no website exists
    return { hasWebsite: false };
  }
}
