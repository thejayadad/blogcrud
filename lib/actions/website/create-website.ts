'use server';

import { prisma } from '@/lib/prisma'; // Adjust the path to your Prisma instance
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function newWebsite(formData: FormData) {
  try {
    // Extract fields from formData
    const name = formData.get('name') as string;
    const subdirectory = formData.get('subdirectory') as string;
    const userEmail = formData.get('userEmail') as string;

    // Validation: Ensure required fields are provided
    if (!name || !subdirectory || !userEmail) {
      throw new Error('Missing required fields: name, subdirectory, or userEmail.');
    }

    // Create a new website in the database
    const website = await prisma.website.create({
      data: {
        name,
        subdirectory,
        userEmail,
      },
    });

  } catch (error) {
    console.error('Error creating website:', error);
    throw new Error('Failed to create website.');
  }
  revalidatePath('/admin')
  redirect('/admin')
}
