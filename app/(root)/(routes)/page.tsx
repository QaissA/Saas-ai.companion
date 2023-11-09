import { UserButton } from '@clerk/nextjs'
import React from 'react'

function RootPage() {
    return (
        <div>
            <UserButton afterSignOutUrl='/' />
        </div>
    )
}

export default RootPage