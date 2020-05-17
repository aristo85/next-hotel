import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="stickIt"
        >
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src="/images/logo.svg" alt="Resort" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/rooms">Rooms</NavLink>
                        </NavItem>
                    </Nav>
                    {/*<NavbarText>Simple Text</NavbarText>*/}
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;