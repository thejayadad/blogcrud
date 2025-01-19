import { auth } from '@/auth';
import Aside from '@/components/(admin)/components/aside/aside';
import Header from '@/components/header/header';
import React from 'react'

const layout = async ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const session = await auth()
    const userEmail = session?.user?.email
  return (
    <div className='h-full'>
        <Header />
       <main className='flex h-full'>
        <div className='w-12 lg:w-32 h-full'>
          <Aside
          userEmail={userEmail}
          />
        </div>
       {children}
       </main>
    </div>
  )
}

export default layout