import { SignedOut } from '@clerk/nextjs'
import { Link } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='w-full boarder-b'>
        <div className='wrapper flex items-center justify-between'>
            <Link href={'/'} className='w-36'>
                <img src="/logo.svg" width={128} height={38} alt="Brandy logo" 
                />
            </Link>
            <div className='flex w-32 justify-end gap-3'>
              <SignedOut>
                <Button asChild className='rounded-full' size='lg'>
                  <Link href="/sign-in">
                    Login
                  </Link>
                </Button>
              </SignedOut>

            </div>
           

        </div>
    </header>
  )
}

export default Header