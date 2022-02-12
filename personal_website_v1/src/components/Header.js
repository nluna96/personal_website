import React, {useState}  from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Modal } from './Modal';

const Navbar = styled.nav`
    height: 60px;
    background: transparent;
    padding: 0rem calc((100vw - 1300px) / 2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

const Logo = styled(Link)`
    color: #fff;
    padding-left: 1rem;
    text-decoration: none;
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Comforter', cursive;
    `;

const NavbarItems = styled.div`

    button{
    background-color: transparent;
    color: #fff;
    padding: 10px 20px;
    border: 1px solid #fff;
    transition: all 0.3s ease-out;
    font-size: 1.2rem;
    border-radius: 4px;
    margin: 1rem;
    cursor: pointer;
    &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    color: #242424;
    transition: 250ms;};
    }`
    ;

const NavbarLink = styled(Link)`
    color: #fff;
    font-size: 1.2rem;
    text-decoration: none;
    padding: 2rem;
    `;

function Header() {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev);
    }

    return (
        <>
            <Navbar>
                <Logo to="/">NL</Logo>
                <NavbarItems>
                    <NavbarLink to="/">Resume</NavbarLink>
                    <button onClick={openModal}>Contact</button>
                </NavbarItems>
            </Navbar>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}

export default Header;