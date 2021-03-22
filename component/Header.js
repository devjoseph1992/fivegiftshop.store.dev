import navLinks from '../src/navlinks'

import Link from 'next/link'

const Header = ({ toggle }) => {
    return (
        <header className='bg-green-700 px-4 py-3 shadow-lg border-b border-green-900 sm:justify-between'>
            <nav className='flex justify-between items-center relative' role='navigation'> 
                <Link href='/'>
                    <a className='text-white font-semibold'>FiveGiftShop</a>
                </Link>
                <div className='px-4 cursor-pointer sm:hidden' onClick={toggle}>
                    <svg className='h-6 w-6 text-white' xmlns="http://www.w3.org/2000/svg" fillRule="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className='pr-8 md:block hidden'>
                    {
                        navLinks.map((link, index) => (
                            <Link key={index} href={link.path}>
                                <a className='p-4 text-white uppercase hover:text-gray-200 sm:text-sm sm:px-2'>{link.title}</a>
                            </Link>
                        ))
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header
