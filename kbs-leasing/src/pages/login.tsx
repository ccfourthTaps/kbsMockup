import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@coreui/coreui/dist/css/coreui.min.css'
import './login.scss';
import logoKBS from '../assets/images/kbs-logo.png';
import {
    CForm,
    CFormLabel,
    CFormInput,
    CFormCheck,
    CFormText,
    CButton,
    CCard,
    CCardBody,
    CCardTitle,
    CCardImage,
} from '@coreui/react';

const LoginPage = () => {

    const Login = () => {
        
    }

    return (
        <div className='Login-component'>
            <CCard className='mx-auto mb-3 border-warning' style={{ width: '18rem', marginTop: '10%' }} color={'primary'} textColor={'white'} >
                
                <img src={logoKBS} className='logo'/>
                <CCardTitle >
                    Log In  Leasing System
                </CCardTitle>
                <CCardBody>
                    <CForm>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleInputEmail1">Username</CFormLabel>
                            <CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleInputPassword1">Password</CFormLabel>
                            <CFormInput type="password" id="exampleInputPassword1" />
                        </div>
                        {/* <CFormCheck
                            className="mb-3"
                            label="Check me out"
                            onChange={(e) => {
                                console.log(e.target)
                            }}
                        /> */}
                        <CButton type="submit" color="success" href="/" >
                            Log in
                        </CButton>
                    </CForm>

                </CCardBody>

            </CCard>
        </div>
    )

}

export default LoginPage