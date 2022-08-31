import { useState } from 'react';
import { Link } from 'react-router-dom'
import { NavIcon, Nav, NavUL, NavLI, P } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navbarData } from '../../utils/navbarData/navbarData'

export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [isActive, setIsActive] = useState('');

    return (
        <>
            <NavIcon onClick={() => setNavbar(!navbar)}>
                {
                    navbar ? <FaTimes /> : <FaBars />
                }
            </NavIcon>
            <Nav navbar={navbar}>
                <NavUL>
                    {navbarData.map((item, index) => {
                        const { id, title, path } = item
                        return (
                            <NavLI
                                key={id}

                            >
                                <Link to={path}>
                                    <P
                                        onClick={() => setIsActive(index)}
                                        className={`${index === isActive && 'active'}`}
                                    >{title}</P>
                                </Link>
                            </NavLI>
                        )
                    })}
                </NavUL>
            </Nav>
        </>
    )
}
