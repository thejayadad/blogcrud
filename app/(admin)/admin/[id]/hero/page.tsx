import { auth } from '@/auth'
import HeroForm from '@/components/(admin)/form/hero-form'
import { prisma } from '@/lib/prisma'
import { notFound, redirect } from 'next/navigation'
import React from 'react'


async function getData(id:string){
  const website = await prisma.website.findUnique({
    where: {
      id: id,
    }
  })
  if(!website){
    return notFound()
  }
  return website
}

const HeroSection = async ({params}) => {
  const {id} = await params
  const websiteId = id
   const session = await auth();
    if (!session) {
      redirect('/');
    }
    const userEmail = session.user?.email
  const website = await getData(websiteId)
  if(!website){
    redirect('/admin')
  }
  return (
    <div className='p-4'>
        <HeroForm
            userEmail={userEmail}
            websiteId={websiteId}
        />
        {websiteId}
    </div>
  )
}

export default HeroSection