import { useState } from 'react'

import Header from './Header';
import Dropnav from './Dropnav';
import Section from './Section'
import Filter from './Filter';

const Layout = ( {children} ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFilter, setIsFilter] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    const find = () => {
        setIsFilter(!isFilter)
    }

    return(
        <>
            <Header toggle={toggle}/>
            <Dropnav isOpen={isOpen} toggle={toggle}/>
            <Section find={find}/>
            <Filter isFilter={isFilter} find={find}/>
            {children}
        </>
    )
}

export default Layout;