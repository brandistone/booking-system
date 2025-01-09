import { Link } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full boarder-b'>
        <div className='wrapper flex items-center justify-between'>
            <Link href={'/'} className='w-36'>
                <Image src="/assets/images/logo.svg" />
            </Link>
           

        </div>
    </header>
  )
}

export default Header