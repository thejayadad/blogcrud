import React from 'react'
import MainNav from './main-nav'
import StoreSwitcher from './store-switch'
import { auth } from '@/auth'

interface Props {
    userEmail: string;
}

const Aside = async ({userEmail}:Props) => {

  return (
    <aside className='flex h-full items-center border-r flex-col '>
        <div className='text-sm'>
            <StoreSwitcher
            userEmail={userEmail}
            />
        </div>
        <div>
            <MainNav />
        </div>
    </aside>
  )
}

export default Aside