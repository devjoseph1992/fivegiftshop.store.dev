import navLinks from '../src/navlinks'

import Link from 'next/link'

const Dropnav = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows items-center bg-green-700' : 'hidden'} onClick={toggle}>
            <div className='px-5 py-3 border-b border-green-800'>
            {
                navLinks.map((link, index) => (
                    <Link key={index} href={link.path}>
                        <a className='mt-3 block text-white uppercase'>{link.title}</a>
                    </Link>
                ))
            }
            </div>
        </div>
    )
}

export default Dropnav
