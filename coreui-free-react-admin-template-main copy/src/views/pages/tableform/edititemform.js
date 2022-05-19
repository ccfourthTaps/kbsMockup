import React, { useState } from 'react'
import { Table, Row, Col, Input, DatePicker, Menu, Dropdown, Space, Button } from 'antd'

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
import { DownOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const Edititemform = (props) => {

  let history = useNavigate()
  Edititemform.propTypes = {
    record: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  }
  const location = useLocation()
  const [activeTab, setActivetab] = useState(1)
  const [startDate, setStartDate] = useState(new Date())
  const [itemstack, setItemstack] = useState([])
  const onClicktabs = (e) => {
    setActivetab(e)
  }

  console.log('showMeProps', location)
  const onSubmitForm = (e) => {}
  const onCancel = () => {
      history(`/kbsantd`)
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="text-center">
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
                <CFormInput type="text" id="inputPassword" value={location.state.record.customerFname} />
              </CCol>
              <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                นามสกุล
              </CFormLabel>
              <CCol sm={4}>
                <CFormInput type="text" id="inputPassword" value={location.state.record.customerLname} />
              </CCol>
            </CRow>
            {/* Row2 */}
            <CRow className="mb-3">
              <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                จำนวนเงิน
              </CFormLabel>
              <CCol sm={4}>
                <CFormInput type="number" id="inputPassword" value={parseInt(location.state.record.amount)} />
              </CCol>
              <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
                ผู้อนุมัติ
              </CFormLabel>
              <CCol sm={4}>
              <CFormSelect
                    defaultValue={location.state.record.approverID}
                  aria-label="Default select example"
                  options={[
                    'เลือกผู้อนุมัติ',
                    { label: 'เจณภพ', value: '1' },
                    { label: 'มาแต', value: '2' },
                    { label: 'กาย', value: '3' },
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
                <CFormTextarea id="exampleFormControlTextarea1" rows="3" value={location.state.record.address} ></CFormTextarea>
              </CCol>
            </CRow>
            {/* Submit */}
            <CRow className="justify-content-center mb-4" >
            <CCol xs={4} >
                </CCol>  
              <CCol xs={2} >
                <CButton color='success' >บันทึก</CButton>
              </CCol>
              <CCol xs={2}>
              <CButton color='danger' onClick={()=> onCancel()}>ยกเลิก</CButton>
                </CCol>
              <CCol xs={4} ></CCol>
            </CRow>
          </CContainer>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Edititemform
