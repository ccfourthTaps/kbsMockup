import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    CButton,
    CNavbar,
    CContainer,
    CNavItem,
    CNavLink,
    CNavbarBrand,
    CCollapse,
    CNavbarNav,
    CForm,
} from '@coreui/react';
import Logoimg from '../../assets/images/kbs-logo.png'
import { Link } from 'react-router-dom';
import Leasing from '../leasing/leasinglist'

const Header = () => {

const onLogout = () => {

}

    return (
        <div>
            <CNavbar expand="lg" colorScheme="light" className="bg-info">
                <CContainer fluid>
                    <CNavbarBrand href="#">
                        <img src={Logoimg} alt="" width="50" height="50" />
                    </CNavbarBrand>
                    <CCollapse className="navbar-collapse">
                        <CNavbarNav>
                            <CNavItem href='#' active>
                            <CNavLink href="/landing">Home</CNavLink>

                            </CNavItem>
                            <CNavItem href='#' active>
                            <CNavLink href="/leasing">Leasing</CNavLink>

                            </CNavItem>
                            <CNavItem href='#' active>
                            <CNavLink >About</CNavLink>
                            </CNavItem>
                        </CNavbarNav>
                    </CCollapse>
                    <CForm className="d-flex">
                        <CButton type="submit" color="danger"  href="/login" >
                            <Link to="/leasing"> Log Out</Link>
                        </CButton>

                    </CForm>
                </CContainer>
            </CNavbar>
        </div>
    )
}

export default Header