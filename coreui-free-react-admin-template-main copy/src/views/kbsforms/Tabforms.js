import React, { useState } from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CTabContent,
  CTabPane,
  CForm,
  CFormLabel,
  CFormInput,
  CFormText,
  CFormCheck,
  CButton,
  CContainer,
  CInputGroup,
  CCardTitle,
  CCardText,
  CFormTextarea,
  CFormSelect,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const Tabforms = () => {
  const [activeTab, setActivetab] = useState(1)
  const [startDate, setStartDate] = useState(new Date())
  const [itemstack, setItemstack] = useState([])
  const onClicktabs = (e) => {
    setActivetab(e)
  }
  const onSubmitForm = (e) => {}
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="text-center">
          <CCardHeader>
            <CNav variant="tabs" className="card-header-tabs">
              <CNavItem>
                <CNavLink active={activeTab === 1} onClick={() => onClicktabs(1)}>
                  ประวัติ
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink active={activeTab === 2} onClick={() => onClicktabs(2)}>
                  รูปแบบสัญญา
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink active={activeTab === 3} onClick={() => onClicktabs(3)}>
                  เอกสาร
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink active={activeTab === 4} onClick={() => onClicktabs(4)}>
                  หลักประกัน
                </CNavLink>
              </CNavItem>
            </CNav>
          </CCardHeader>
          <CTabContent>
            {/* Tab 1 */}
            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeTab === 1}>
              <CContainer>
                {/* Title */}
                <CRow className="mb-3 mt-3">
                  <h4>ประวัติผู้เปิดสัญญา</h4>
                </CRow>
                {/* Row1 */}
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                    ชิ่อ
                  </CFormLabel>
                  <CCol sm={4}>
                    <CFormInput type="text" id="inputPassword" />
                  </CCol>
                  <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                    นามสกุล
                  </CFormLabel>
                  <CCol sm={4}>
                    <CFormInput type="text" id="inputPassword" />
                  </CCol>
                </CRow>
                {/* Row2 */}
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                    อายุ
                  </CFormLabel>
                  <CCol sm={4}>
                    <CFormInput type="number" id="inputPassword" />
                  </CCol>
                  <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                    วันเกิด
                  </CFormLabel>
                  <CCol sm={4}>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                  </CCol>
                </CRow>
                {/* Row3 */}
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                    เพศ
                  </CFormLabel>
                  <CCol sm={4}>
                    <CFormCheck
                      inline
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineCheckbox1"
                      value="option1"
                      label="ชาย"
                    />
                    <CFormCheck
                      inline
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineCheckbox2"
                      value="option2"
                      label="หญิง"
                    />
                    <CFormCheck
                      inline
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineCheckbox3"
                      value="option3"
                      label="ไม่ระบุ"
                    />
                  </CCol>
                  <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                    สถานะ
                  </CFormLabel>
                  <CCol sm={4}>
                    <CFormSelect
                      aria-label="Default select example"
                      options={[
                        'เลือกสถานะ',
                        { label: 'โสด', value: '1' },
                        { label: 'แต่งงาน', value: '2' },
                        { label: 'หย่าร้าง', value: '3' },
                      ]}
                    />
                  </CCol>
                </CRow>
                {/* Row4 */}
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                    ที่อยู่
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                  </CCol>
                </CRow>
                {/* Submit */}
                <CRow className="justify-content-center mb-4">
                  <CCol xs={4}>
                    <CButton onClick={() => onClicktabs(2)}>ถัดไป</CButton>
                  </CCol>
                </CRow>
              </CContainer>
            </CTabPane>
            {/* Tab2 */}
            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeTab === 2}>
              <CContainer>
                {/* Title */}
                <CRow className="mb-3 mt-3">
                  <h4>รูปแบบสัญญา</h4>
                </CRow>
                {/* Row1 */}
                <CRow className="justify-content-cente">
                  <CCol sm={4}></CCol>
                  <CCol xs={4} className="mb-4">
                    <CFormCheck id="1" label="สัญญาก่อนเบิกใช้" />
                    <CFormCheck id="2" label="สัญญาพ่อค้าอ้อย" />
                    <CFormCheck id="3" label="สัญญาผู้รับเหมา" />
                  </CCol>
                  <CCol sm={4}></CCol>
                </CRow>
                {/* Submit */}
                <CRow className="justify-content-center mb-4">
                  <CCol xs={4}>
                    <CButton onClick={() => onClicktabs(3)}>ถัดไป</CButton>
                  </CCol>
                </CRow>
              </CContainer>
            </CTabPane>
            {/* Tab3 */}
            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeTab === 3}>
              <CContainer>
                {/* Title */}
                <CRow className="mb-3 mt-3">
                  <h4>เอกสาร</h4>
                </CRow>
                {/* Row1 */}
                <CRow className="justify-content-cente">
                  <CCol sm={3}></CCol>
                  <CCol xs={6} className="mb-4">
                    <CFormLabel htmlFor="formFile">อัพโหลดเอกสาร</CFormLabel>
                    <CFormInput type="file" id="formFile" />
                  </CCol>
                  <CCol sm={3}></CCol>
                </CRow>
                {/* Submit */}
                <CRow className="justify-content-center mb-4">
                  <CCol xs={4}>
                    <CButton onClick={() => onClicktabs(4)}>ถัดไป</CButton>
                  </CCol>
                </CRow>
              </CContainer>
            </CTabPane>
            {/* Tab4 */}
            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeTab === 4}>
              <CContainer>
                {/* Title */}
                <CRow className="mb-3 mt-3">
                  <h4>หลักประกัน</h4>
                </CRow>
                {/* Row1 */}
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                    ชื่อหลักประกัน
                  </CFormLabel>
                  <CCol sm={4}>
                    <CFormInput />
                  </CCol>

                  <CCol sm={4}>
                    <CFormInput type="file" id="formFile" />
                  </CCol>
                </CRow>
                {/* Row2 */}
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                    ชื่อหลักประกัน
                  </CFormLabel>
                  <CCol sm={4}>
                    <CFormInput />
                  </CCol>

                  <CCol sm={4}>
                    <CFormInput type="file" id="formFile" />
                  </CCol>
                </CRow>
                {/* Row3 */}
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                    ชื่อหลักประกัน
                  </CFormLabel>
                  <CCol sm={4}>
                    <CFormInput />
                  </CCol>

                  <CCol sm={4}>
                    <CFormInput type="file" id="formFile" />
                  </CCol>
                </CRow>
                {/* Submit */}
                <CRow className="justify-content-center mb-4">
                  <CCol xs={4}>
                    <CButton onClick={() => onSubmitForm()}>บันทึก</CButton>
                  </CCol>
                </CRow>
              </CContainer>
            </CTabPane>
          </CTabContent>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tabforms
