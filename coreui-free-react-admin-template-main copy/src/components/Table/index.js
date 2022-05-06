import React, { useState } from 'react';
import {Tablemain} from './Tablemain';

import { Table, Space } from 'antd'
import { CCard, CRow, CCol, CButton } from '@coreui/react'
import 'antd/dist/antd.css'

const IndexTable = () => {

const [columns,setColumns] = useState([{
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
    dataIndex: 'customer',
    key: 'customer',
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
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => (
      <Space size="middle">
        <CButton color='warning'>Edit {record.name}</CButton>
        <CButton color='danger'>Delete {record.name}</CButton>
      </Space>
    ),
  },]);
const [dataSource,setDatasource] = useState([{
    key: '1',
    idno: '1',
    category: 'สัญญาก่อนเบิกใช้',
    customer: 'มาโนช',
    date: '07/01/2022',
    approver: 'เจณภพ',
    amount: '100,000',
  },
  {
    key: '2',
    idno: '2',
    category: 'สัญญาผู้รับเหมา',
    customer: 'ไก่แก้ว',
    date: '11/02/2022',
    approver: 'มาแต',
    amount: '100,000',
  },
  {
    key: '3',
    idno: '3',
    category: 'สัญญาพ่อค้าอ้อย',
    customer: 'เกรียงไกร',
    date: '25/03/2022',
    approver: 'กาย',
    amount: '22,000',
  },
  {
    key: '4',
    idno: '4',
    category: 'สัญญาก่อนเบิกใช้',
    customer: 'มิเชล',
    date: '11/01/2022',
    approver: 'เจณภพ',
    amount: '500,000',
  },{
      key: '5',
      idno: '5',
      category: 'สัญญาก่อนเบิกใช้',
      customer: 'ศรัญ',
      date: '07/02/2022',
      approver: 'กาย',
      amount: '200,000',
    },]);

    return(
        <div>
            <Tablemain
            columns={columns}
            dataSource={dataSource}
            />
        </div>
    )
}

export default IndexTable