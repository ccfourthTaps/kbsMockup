import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormSelect,
  CFormTextarea,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilPhone } from '@coreui/icons'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const Kbsregister = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={9}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>เปิดโควต้า</h1>
                  <p className="text-medium-emphasis">สร้างผู้ใช้</p>
                  {/* Row 1 */}
                  <CRow>
                    <CCol sm={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput placeholder="ชื่อผู้ใช้" autoComplete="username" />
                      </CInputGroup>
                    </CCol>
                    <CCol sm={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput placeholder="นามสกุล" autoComplete="username" />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  {/* Row 2 */}
                  <CRow>
                    <CCol sm={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput placeholder="อายุ" autoComplete="username" />
                      </CInputGroup>
                    </CCol>
                    <CCol sm={6}>
                      <CInputGroup className="mb-3">
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  {/* Row 3 */}
                  <CRow>
                    <CCol sm={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          สถานะ
                        </CInputGroupText>
                        <CFormSelect id="inputGroupSelect01">
                          <option value="1">โสด</option>
                          <option value="2">แต่งงาน</option>
                          <option value="3">หย่าร้าง</option>
                        </CFormSelect>
                      </CInputGroup>
                    </CCol>
                    <CCol sm={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput placeholder="ชื่อผู้ใช้" autoComplete="username" />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow >
                    <CCol sm={12}>
                      <CInputGroup className='mb-3'>
                        <CInputGroupText>ที่อยู่</CInputGroupText>
                        <CFormTextarea aria-label="With textarea"></CFormTextarea>
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilPhone} />
                    </CInputGroupText>
                    <CFormInput placeholder="เบอร์โทรศัพท์" autoComplete="phone" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput type="password" placeholder="รหัส" autoComplete="new-password" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="รหัสเพื่อความถูกต้อง"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success">สร้างผู้ใช้</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Kbsregister
