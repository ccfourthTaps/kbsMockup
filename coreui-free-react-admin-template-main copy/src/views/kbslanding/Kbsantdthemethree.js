import React, { useState } from 'react'
import { Table, Space, Input, Select, DatePicker,AutoComplete } from 'antd'
import { CCard, CRow, CCol, CButton, CLink, CContainer } from '@coreui/react'
import { Link, useNavigate } from 'react-router-dom'
import Tablemain from 'src/components/Table/Tablemain'
import 'antd/dist/antd.css'
import { DeleteOutlined, EditOutlined, SearchOutlined,PlusOutlined} from '@ant-design/icons'
import { Button as ButtonUI, css } from '@nextui-org/react'
import { Delete } from 'react-iconly'


const Kbsantdthemethree = () => {
  let history = useNavigate()
  const { Option } = Select

  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  const [autoOption,setAutooption] = useState([
    {label: 'มาโนช', value: 'มาโนช'}, 
    {label: 'ไก่แก้ว', value: 'ไก่แก้ว'},
    {label: 'เกรียงไกร', value: 'เกรียงไกร'}, 
    {label: 'มิเชล', value: 'มิเชล'},
    {label: 'ศรัญ', value: 'ศรัญ'}
  ]);
  const [autoApprover,setAutoapprover] = useState([
    {label: 'เจณภพ', value: 'เจณภพ'}, 
    {label: 'มาแต', value: 'มาแต'},
    {label: 'กาย', value: 'กาย'}, 
  ])
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
      sorter:(a,b) => a.idno - b.idno,
    },
    {
      title: 'ประเภทสัญญา',
      dataIndex: 'category',
      key: 'category',
      responsive: ['md', 'sm', 'xs'],
      align: 'center',
      filters:
        selectOption.map((item)=> ({
          text:item.itemName,
          value:item.itemName
        }))
      ,
      onFilter:(value,record) => record.category.indexOf(value) === 0,
    },
    {
      title: 'ชื่อผู้ทำสัญญา',
      dataIndex: 'customerFname',
      key: 'customerFname',
      responsive: ['md', 'sm', 'xs'],
      align: 'center',
      filters:
        data.map((item) => ({
          text:item.customerFname,
          value:item.customerFname
        })),
        onFilter:(value,record) => record.customerFname.indexOf(value) === 0,
    },
    {
      title: 'วันที่',
      dataIndex: 'date',
      key: 'date',
      responsive: ['md', 'sm', 'xs'],
      align: 'center',
      defaultSortOrder: 'descend',
      sorter:(a,b) => new Date(a.date) - new Date(b.date),
    },
    {
      title: 'ผู้อนุมัติ',
      dataIndex: 'approver',
      key: 'approver',
      responsive: ['md', 'sm', 'xs'],
      align: 'center',
      filters:
        selectApprover.map((item)=> ({
          text:item.itemName,
          value:item.itemName
        }))
      ,
      onFilter:(value,record) => record.approver.indexOf(value) === 0,
    
    },
    {
      title: 'จำนวนเงิน',
      dataIndex: 'amount',
      key: 'amount',
      responsive: ['md', 'sm', 'xs'],
      align: 'center',
      defaultSortOrder: 'descend',
      sorter:(a,b) => a.amount - b.amount,
      render: (text, record) => {
        return record.amount.toLocaleString('en') + ' บาท'
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      responsive: ['md', 'sm', 'xs'],
      width:'20%',
      align: 'center',
      render: (text, record) => (
        <Space size="middle" align="center" style={{ display: 'flex', textAlign: 'center' }} wrap>
          <ButtonUI
            size={'xs'}
            color="warning"
            rounded
            ghost
            shadow
            icon={<EditOutlined />}
            onClick={() => editOnclick(record)}
          >
            {/* แก้ไข */}
          </ButtonUI>
          <ButtonUI size={'xs'} color="error" ghost shadow rounded icon={<DeleteOutlined />}>
            {/* ลบ */}
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
      <CCard >
        <CContainer>
        <CRow  className='text-center mt-3'>
          <h4>รายการสัญญา</h4>
        </CRow>
        <CRow
          xs={{ cols: 1, gutter: 2 }}
          md={{ cols: 2, gutter: 2 }}
          lg={{ cols: 4, gutter: 2 }}
          className="px-4 pt-2"
        >
          <CCol className='p-2'>
          <AutoComplete 
        options={autoOption}
        filterOption={true}
        style={{width:'100%'}}
        placeholder="ชื่อ"
        >
            </AutoComplete>
          </CCol>
          <CCol className='p-2'>
            <DatePicker className="customDatePickerWidth" />
          </CCol>
          <CCol className='p-2'>
            <DatePicker className="customDatePickerWidth" />
          </CCol>
          <CCol className='p-2'>
          <AutoComplete 
        options={autoApprover}
        filterOption={true}
        style={{width:'100%'}}
        placeholder="ผู้อนุมัติ"
        >
            </AutoComplete>
          </CCol>
        </CRow>
        <CRow
          xs={{ cols: 1, gutter: 2 }}
          md={{ cols: 2, gutter: 2 }}
          lg={{ cols: 4, gutter: 2 }}
          className="px-4"
        >
          <CCol className='p-2'>
            {/* <Dropdown overlay={menu} trigger={['click']}>
            <Button>
              <Space>
                ประเภทสัญญา
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown> */}
            <Select
              defaultValue="สัญญาก่อนเบิกใช้"
              onChange={handleChange}
              style={{ width: '100%' }}
            >
              {/* <Option value="jack">สัญญาก่อนเบิกใช้</Option>
            <Option value="lucy">สัญญาผู้รับเหมา</Option>
            <Option value="Yiminghe">สัญญาพ่อค้าอ้อย</Option>
            {} */}
              {selectOption.map((item) => (
                <Option key={item.itemid} value={item.itemid}>
                  {item.itemName}
                </Option>
              ))}
            </Select>
          </CCol>
          <CCol className='p-2'>
            <Input placeholder="จำนวนเงิน" />
          </CCol>
          <CCol style={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
            <ButtonUI size={'sm'} color="default" shadow rounded icon={<SearchOutlined />}>
              {/* ค้นหา */}
            </ButtonUI>
          </CCol>
          <CCol style={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
            <ButtonUI size={'sm'} color="success" shadow rounded icon={<PlusOutlined />}>
              {/* สร้าง */}
            </ButtonUI>
          </CCol>
        </CRow>
        <CRow className='p-4'>
          <Table
            columns={tablecolumn}
            dataSource={data}
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ['10', '20', '30'],
            }}
            bordered={true}
              scroll={{ x: 'max-content' }}
          />
        </CRow>
        {/* <CRow className="p-4"> */}
          {/* <CCol className="p-4"> */}
          {/* <Table dataSource={data} columns={tablecolumn} bordered  
            rowClassName={"red"}
            /> */}
          {/* <Tablemain columns={tablecolumn} dataSource={data} bordered={true} /> */}
          {/* </CCol> */}
        {/* </CRow> */}
        </CContainer>
      </CCard>
    </div>
  )
}

export default Kbsantdthemethree
