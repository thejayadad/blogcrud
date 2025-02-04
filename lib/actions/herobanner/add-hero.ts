'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function newHeroBanner(formData: FormData) {
  try {
    // Extract fields from FormData
    const userEmail = formData.get('userEmail') as string;
    const websiteId = formData.get('websiteId') as string;
    const label = formData.get('label') as string;
    const imageUrl = formData.get('imageUrl') as string;

    // Validation: Check for required fields
    if (!userEmail || !websiteId || !label || !imageUrl) {
      throw new Error('Missing required fields: userEmail, websiteId, label, or imageUrl.');
    }

    // Create the hero banner in the database
    const heroBanner = await prisma.heroBanner.create({
      data: {
        userEmail,
        websiteId,
        label,
        imageUrl,
      },
    });

  } catch (error) {
    console.error('Error creating herobanner: ' + error);
    throw new Error('Failed to create herobanner.');
  }
  revalidatePath('/admin')
  redirect('/admin')
}
