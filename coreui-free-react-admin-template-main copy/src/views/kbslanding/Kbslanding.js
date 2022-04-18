import React from 'react'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CCard,
  CContainer,
  CPagination,
  CPaginationItem,
  CRow,
  CCol,
  CButton,
} from '@coreui/react'
const Kbslanding = () => {
  return (
    <CContainer>
      <CCard className="d-grid gap-2 d-md-flex justify-content-md-end">
        <CRow className="mt-3 text-center">
          <h4>รายการสัญญา</h4>
        </CRow>
        <CRow>
          <CCol xs={12} className="p-4">
            <CTable bordered hover className="text-center">
              <CTableHead color="primary">
                <CTableRow >
                  <CTableHeaderCell scope="col" class="col-md-2">
                    เลขที่สัญญา
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">ประเภทสัญญา</CTableHeaderCell>
                  <CTableHeaderCell scope="col">ชื่อผู้ทำสัญญา</CTableHeaderCell>
                  <CTableHeaderCell scope="col" class="col-md-2">
                    วันที่
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">ผู้อนุมัติ</CTableHeaderCell>
                  <CTableHeaderCell scope="col">จำนวนเงิน</CTableHeaderCell>
                  <CTableHeaderCell scope="col" class="col-md-2">
                    Action
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>สัญญาก่อนเบิกใช้</CTableDataCell>
                  <CTableDataCell>มาโนช</CTableDataCell>
                  <CTableDataCell>07/01/2022</CTableDataCell>
                  <CTableDataCell>เจณภพ</CTableDataCell>
                  <CTableDataCell>100,000</CTableDataCell>
                  <CTableDataCell className="text-center">
                    <CButton color="warning" style={{ marginRight: 5 }}>
                      Edit
                    </CButton>
                    <CButton color="danger">Delete</CButton>{' '}
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>สัญญาผู้รับเหมา</CTableDataCell>
                  <CTableDataCell>ไก่แก้ว</CTableDataCell>
                  <CTableDataCell>11/02/2022</CTableDataCell>
                  <CTableDataCell>มาแต</CTableDataCell>
                  <CTableDataCell>100,000</CTableDataCell>
                  <CTableDataCell className="text-center">
                    <CButton color="warning" style={{ marginRight: 5 }}>
                      Edit
                    </CButton>
                    <CButton color="danger">Delete</CButton>{' '}
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">3</CTableHeaderCell>
                  <CTableDataCell>สัญญาพ่อค้าอ้อย</CTableDataCell>
                  <CTableDataCell>เกรียงไกร</CTableDataCell>
                  <CTableDataCell>25/03/2022</CTableDataCell>
                  <CTableDataCell>กาย</CTableDataCell>
                  <CTableDataCell>22,000</CTableDataCell>
                  <CTableDataCell className="text-center">
                    <CButton color="warning" style={{ marginRight: 5 }}>
                      Edit
                    </CButton>
                    <CButton color="danger">Delete</CButton>{' '}
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">4</CTableHeaderCell>
                  <CTableDataCell>สัญญาก่อนเบิกใช้</CTableDataCell>
                  <CTableDataCell>มิเชล</CTableDataCell>
                  <CTableDataCell>11/01/2022</CTableDataCell>
                  <CTableDataCell>เจณภพ</CTableDataCell>
                  <CTableDataCell>500,000</CTableDataCell>
                  <CTableDataCell className="text-center">
                    <CButton color="warning" style={{ marginRight: 5 }}>
                      Edit
                    </CButton>
                    <CButton color="danger">Delete</CButton>{' '}
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">5</CTableHeaderCell>
                  <CTableDataCell>สัญญาก่อนเบิกใช้</CTableDataCell>
                  <CTableDataCell>ศรัญ</CTableDataCell>
                  <CTableDataCell>07/02/2022</CTableDataCell>
                  <CTableDataCell>กาย</CTableDataCell>
                  <CTableDataCell>200,000</CTableDataCell>
                  <CTableDataCell className="text-center">
                    <CButton color="warning" style={{ marginRight: 5 }}>
                      Edit
                    </CButton>
                    <CButton color="danger">Delete</CButton>{' '}
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
            <CPagination aria-label="Page navigation example">
              <CPaginationItem aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </CPaginationItem>
              <CPaginationItem>1</CPaginationItem>
              <CPaginationItem>2</CPaginationItem>
              <CPaginationItem>3</CPaginationItem>
              <CPaginationItem aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </CPaginationItem>
            </CPagination>
          </CCol>
        </CRow>
      </CCard>
    </CContainer>
  )
}

export default Kbslanding
