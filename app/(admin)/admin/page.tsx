import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const AdminPage = async () => {
        const session = await auth()
        const userEmail = session?.user?.email
        if(!session){
            redirect('/')
        }
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage