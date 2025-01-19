import { auth } from '@/auth'
import React from 'react'
import SignOut from './signut'
import SignIn from './sigin-btn'

const Header = async () => {
    const session = await auth()
    const userEmail = session?.user?.email
  return (
    <div className='w-full h-16 border-b'>
        <div className='flex w-full  h-full px-4 items-center max-w-screen-2xl mx-auto'>
                <div>LOGO</div>
       
                <div className='ml-auto flex items-center space-x-4'>
                {
                session ? (
                    <>
                        <SignOut />
                    </>
                ) : (
                    <>
                       <SignIn />
                    </>
                )
            }
                </div>
        </div>
    </div>
  )
}

export default Header