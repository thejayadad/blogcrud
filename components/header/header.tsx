import { auth } from '@/auth'
import React from 'react'
import SignOut from './signut'
import SignIn from './sigin-btn'

const Header = async () => {
    const session = await auth()
    const userEmail = session?.user?.email
  return (
    <div className='w-full h-20 border-b'>
        <div className='flex justify-between h-full px-4 items-center max-w-screen-xl mx-auto'>
            <div>
                Logo
            </div>
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
  )
}

export default Header