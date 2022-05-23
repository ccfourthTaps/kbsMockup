import React, { useState } from 'react'
import { Table, Space, Select } from 'antd'
import { CCard, CRow, CCol, CButton, CLink, CContainer } from '@coreui/react'
import { Link, useNavigate } from 'react-router-dom'
import Tablemain from 'src/components/Table/Tablemain'
import 'antd/dist/antd.css'
import { DeleteOutlined, EditOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons'
import { Button as ButtonUI, css } from '@nextui-org/react'

const Kbsantdtable = () => {
  let history = useNavigate()
  const { Option } = Select

  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  const [selectOption, setSelectoption] = useState([
    {
      itemid: 1,
      itemName: 'สัญญาก่อนเบิกใช้',
    },
    {
      itemid: 2,
      itemName: 'สัญญาผู้รับเหมา',
    },
    {
      itemid: 3,
      itemName: 'สัญญาพ่อค้าอ้อย',
    },
  ])
  const [selectApprover, setSelectapprover] = useState([
    {
      itemid: 1,
      itemName: 'เจณภพ',
    },
    {
      itemid: 2,
      itemName: 'มาแต',
    },
    {
      itemid: 3,
      itemName: 'กาย',
    },
  ])
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
      address: '789 Homie island Bangkok 10240',
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
      address: '789 Homie island Bangkok 10240',
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
      address: '789 Homie island Bangkok 10240',
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
      address: '789 Homie island Bangkok 10240',
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
      address: '789 Homie island Bangkok 10240',
    },
  ])

  const [tablecolumn, setTablecolumn] = useState([
    {
      title: 'เลขที่สัญญา',
      dataIndex: 'idno',
      key: 'idno',
      responsive: ['md', 'sm', 'xs'],
      align: 'center',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.idno - b.idno,
    },
    {
      title: 'ประเภทสัญญา',
      dataIndex: 'category',
      key: 'category',
      responsive: ['md', 'sm', 'xs'],
      align: 'center',
      filters: selectOption.map((item) => ({
        text: item.itemName,
        value: item.itemName,
      })),
      onFilter: (value, record) => record.category.indexOf(value) === 0,
    },
    {
      title: 'ชื่อผู้ทำสัญญา',
      dataIndex: 'customerFname',
      key: 'customerFname',
      responsive: ['md', 'sm', 'xs'],
      align: 'center',
      filters: data.map((item) => ({
        text: item.customerFname,
        value: item.customerFname,
      })),
      onFilter: (value, record) => record.customerFname.indexOf(value) === 0,
    },
    {
      title: 'วันที่',
      dataIndex: 'date',
      key: 'date',
      responsive: ['md', 'sm', 'xs'],
      align: 'center',
      defaultSortOrder: 'descend',
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    {
      title: 'ผู้อนุมัติ',
      dataIndex: 'approver',
      key: 'approver',
      responsive: ['md', 'sm', 'xs'],
      align: 'center',
      filters: selectApprover.map((item) => ({
        text: item.itemName,
        value: item.itemName,
      })),
      onFilter: (value, record) => record.approver.indexOf(value) === 0,
    },
    {
      title: 'จำนวนเงิน',
      dataIndex: 'amount',
      key: 'amount',
      responsive: ['md', 'sm', 'xs'],
      align: 'center',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.amount - b.amount,
      render: (text, record) => {
        return record.amount.toLocaleString('en') + ' บาท'
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      responsive: ['md', 'sm', 'xs'],
      align: 'center',
      width: '20%',
      render: (text, record) => (
        <Space size="middle" align="center" style={{ textAlign: "center" }} wrap>
          <ButtonUI
            size={'xs'}
            color="warning"
            onClick={() => editOnclick(record)}
          >
            แก้ไข
          </ButtonUI>
          <ButtonUI size={'xs'} color="error">
            ลบ
          </ButtonUI>
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
      <CCard>
        <CContainer>
          <CRow>
            <CCol xs="12" className='text-center mt-3'>
              <h4>รายการสัญญา</h4>
            </CCol>
          </CRow>
          <CRow className="p-4">
            <CCol xs="12">
              {/* <CCol className="p-4"> */}
              {/* <Table dataSource={data} columns={tablecolumn} bordered
            rowClassName={"red"}
            /> */}
              <Tablemain columns={tablecolumn} dataSource={data} bordered={true} />
              {/* </CCol> */}
            </CCol>
          </CRow>
        </CContainer>
      </CCard>
    </div>
  )
}

export default Kbsantdtable
