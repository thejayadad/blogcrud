import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { createOrUpdateWebsite } from '@/lib/actions/create-website';

const AdminPage = async () => {
  const session = await auth();
  if (!session) {
    redirect('/');
  }

  const userEmail = session?.user?.email;

  const { hasWebsite, websiteId } = await createOrUpdateWebsite(userEmail);
  if(websiteId){
    redirect(`/admin/${websiteId}`)
  }
  return (
    <div>
      {hasWebsite ? (
        <p>Your most recent website ID is: {websiteId}</p>
      ) : (
        <p>No website found. Please create a new website!</p>
      )}
    </div>
  );
};

export default AdminPage;
