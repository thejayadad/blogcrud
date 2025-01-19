'use client'
import React from 'react'
import { newWebsite } from '@/lib/actions/website/create-website'

interface Props {
    userEmail: string
}

const WebsiteForm = ({userEmail}:Props) => {
  return (
    <div>
        <form action={newWebsite}>
            <input hidden defaultValue={userEmail} id='userEmail' name='userEmail' />
            <input
                placeholder='Title...'
                name='name'
                id='name'
            />
            <input
            id='subdirectory'
            name='subdirectory'
            placeholder='Subdirectory...'
            />
            <button type='submit'>Create Website</button>
        </form>
    </div>
  )
}

export default WebsiteForm