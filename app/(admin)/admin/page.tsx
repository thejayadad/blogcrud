import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { createOrUpdateWebsite } from '@/lib/actions/create-website';
import WebsiteForm from '@/components/(admin)/form/website-form';

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
        <>
          <WebsiteForm 

          userEmail={userEmail}
          />        
        </>
      )}
    </div>
  );
};

export default AdminPage;
