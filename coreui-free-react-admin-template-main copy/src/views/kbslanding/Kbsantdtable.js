import React, { useState } from 'react'
import { Table, Space } from 'antd'
import { CCard, CRow, CCol, CButton, CLink } from '@coreui/react'
import { Link, useNavigate } from 'react-router-dom'
import Tablemain from 'src/components/Table/Tablemain'
import 'antd/dist/antd.css'

const Kbsantdtable = () => {
  let history = useNavigate()
  const [data, setDatasource] = useState([
    {
      key: '1',
      idno: '1',
      category: 'สัญญาก่อนเบิกใช้',
      customerFname: 'มาโนช',
      customerLname: 'โพกิ้น',
      date: '07/01/2022',
      approver: 'เจณภพ',
      approverID: '1',
      amount: 100000,
      address:'789 Homie island Bangkok 10240'
    },
    {
      key: '2',
      idno: '2',
      category: 'สัญญาผู้รับเหมา',
      customerFname: 'ไก่แก้ว',
      customerLname: 'กิ่งก้าน',
      date: '11/02/2022',
      approver: 'มาแต',
      approverID: '2',
      amount: 100000.55,
      address:'789 Homie island Bangkok 10240'
    },
    {
      key: '3',
      idno: '3',
      category: 'สัญญาพ่อค้าอ้อย',
      customerFname: 'เกรียงไกร',
      customerLname: 'กำกวม',
      date: '25/03/2022',
      approver: 'กาย',
      approverID: '3',
      amount: 22000.08,
      address:'789 Homie island Bangkok 10240'
    },
    {
      key: '4',
      idno: '4',
      category: 'สัญญาก่อนเบิกใช้',
      customerFname: 'มิเชล',
      customerLname: 'ชูมัคเค่อ',
      date: '11/01/2022',
      approver: 'เจณภพ',
      approverID: '1',
      amount: 500000,
      address:'789 Homie island Bangkok 10240'
    },
    {
      key: '5',
      idno: '5',
      category: 'สัญญาก่อนเบิกใช้',
      customerFname: 'ศรัญ',
      customerLname: 'ทำไร',
      date: '07/02/2022',
      approver: 'กาย',
      approverID: '3',
      amount: 200000.24,
      address:'789 Homie island Bangkok 10240'
    },
  ])

  const [tablecolumn, setTablecolumn] = useState([
    {
      title: 'เลขที่สัญญา',
      dataIndex: 'idno',
      key: 'idno',
    },
    {
      title: 'ประเภทสัญญา',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'ชื่อผู้ทำสัญญา',
      dataIndex: 'customerFname',
      key: 'customerFname',
    },
    {
      title: 'วันที่',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'ผู้อนุมัติ',
      dataIndex: 'approver',
      key: 'approver',
    },
    {
      title: 'จำนวนเงิน',
      dataIndex: 'amount',
      key: 'amount',
      render: (text,record) =>{
        return record.amount.toLocaleString("en") + ' บาท';
      }
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text, record) => (
        <Space size="middle">
          <CButton color="warning" onClick={() => editOnclick(record)}>
            แก้ไข
          </CButton>
          <CButton color="danger">ลบ</CButton>
        </Space>
      ),
    },
  ])

  const editOnclick = (record) => {
    history(`/edititemform`, { state: { record } })
    console.log('showRec', record)
  }

  return (
    <div>
      <CCard className="d-grid gap-2 d-md-flex justify-content-md-end">
        <CRow className="mt-3 text-center">
          <h4>รายการสัญญา</h4>
        </CRow>
        <CRow>
          {/* <CCol className="p-4"> */}
            {/* <Table dataSource={data} columns={tablecolumn} bordered  
            rowClassName={"red"}
            /> */}
            <Tablemain columns={tablecolumn} dataSource={data} bordered={true} />
          {/* </CCol> */}
        </CRow>
      </CCard>
    </div>
  )
}

export default Kbsantdtable
