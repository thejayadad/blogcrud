import { auth } from '@/auth'
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

const WebsitePage = async ({params}) => {
  const {id} = await params
  const websiteId = id
   const session = await auth();
    if (!session) {
      redirect('/');
    }
  
  const website = await getData(websiteId)
  if(!website){
    redirect('/admin')
  }
  return (
    <div>WebsitePage
      {website.name}
    </div>
  )

}

export default WebsitePage