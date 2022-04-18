import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CContainer,
    CButton,
    CBadge,
    CRow,
    CCol,
} from '@coreui/react';

const LeasingList = () => {
    return(
        <div>
            <div style={{marginTop:25}}>
            

            <CContainer className="overflow-hidden">
                <CRow xs={{ gutterY: 2 }} lg={{ gutterY: 3}} >
                    <h3>สัญญา</h3>
                </CRow>
                <CRow xs={{ gutterY: 2 }} lg={{ gutterY: 3}} >
                    <CCol sm={10}></CCol>
                    <CCol sm={2}><CButton color='success'>สร้างสัญญา</CButton> </CCol>
               
                    <CTable bordered>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">No.</CTableHeaderCell>
                                <CTableHeaderCell scope="col">วันที่</CTableHeaderCell>
                                <CTableHeaderCell scope="col">ผู้ร้องขอ</CTableHeaderCell>
                                <CTableHeaderCell scope="col">ผู้อนุมัติ</CTableHeaderCell>
                                <CTableHeaderCell scope="col">สถานะสัญญา</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow>
                                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                <CTableDataCell>01/01/2022</CTableDataCell>
                                <CTableDataCell>สมปอนด์</CTableDataCell>
                                <CTableDataCell>อเนก</CTableDataCell>
                                <CTableDataCell><CBadge color='warning'>รอการอนุมัติ</CBadge> </CTableDataCell>
                                <CTableDataCell ><CButton color='warning' style={{ marginRight: 5 }} >Edit</CButton><CButton color='danger' >Delete</CButton> </CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                <CTableDataCell>21/02/2022</CTableDataCell>
                                <CTableDataCell>สมชาย</CTableDataCell>
                                <CTableDataCell>อนันต์</CTableDataCell>
                                <CTableDataCell><CBadge color='success'>อนุมัติ</CBadge> </CTableDataCell>
                                <CTableDataCell><CButton color='warning' style={{ marginRight: 5 }} >Edit</CButton><CButton color='danger' >Delete</CButton></CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                <CTableDataCell>11/03/2022</CTableDataCell>
                                <CTableDataCell>สมศักดิ์</CTableDataCell>
                                <CTableDataCell>อนันต์</CTableDataCell>
                                <CTableDataCell><CBadge color='danger'>ไม่อนุมัติ</CBadge> </CTableDataCell>
                                <CTableDataCell><CButton color='warning' style={{ marginRight: 5 }} >Edit</CButton><CButton color='danger' >Delete</CButton></CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CRow>
            </CContainer>
        </div>
        </div>
    )
}


export default LeasingList