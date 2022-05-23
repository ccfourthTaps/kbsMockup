import React, { useState } from 'react'
import { Table, Input, DatePicker, Menu, Dropdown, Space, Button, Select, AutoComplete } from 'antd'
import { CCard, CRow, CCol, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch, cilPlus } from '@coreui/icons'

import PropTypes from 'prop-types'
import { DownOutlined } from '@ant-design/icons'

import { Button as ButtonUI } from '@nextui-org/react'

const Tablemain = (props) => {
  Tablemain.propTypes = {
    category: PropTypes.arrayOf(PropTypes.string),

    columns: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    dataSource: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    pagination: PropTypes.arrayOf(PropTypes.string),
    bordered: PropTypes.bool,
  }
  const { Option } = Select
  const [value, setValue] = useState('')
  const [autoOption, setAutooption] = useState([
    { label: 'มาโนช', value: 'มาโนช' },
    { label: 'ไก่แก้ว', value: 'ไก่แก้ว' },
    { label: 'เกรียงไกร', value: 'เกรียงไกร' },
    { label: 'มิเชล', value: 'มิเชล' },
    { label: 'ศรัญ', value: 'ศรัญ' },
  ])
  const [autoApprover, setAutoapprover] = useState([
    { label: 'เจณภพ', value: 'เจณภพ' },
    { label: 'มาแต', value: 'มาแต' },
    { label: 'กาย', value: 'กาย' },
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

  const menu = (
    <Menu
      items={[
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              สัญญาก่อนเบิกใช้
            </a>
          ),
          key: '0',
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              สัญญาผู้รับเหมา
            </a>
          ),
          key: '1',
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              สัญญาพ่อค้าอ้อย
            </a>
          ),
          key: '2',
        },
      ]}
    />
  )

  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  const onSelect = (value) => {
    console.log(`onSelect`, value)
  }

  const onChangeauto = (data, option) => {}

  const onSearch = (searchText) => {
    setAutooption(!searchText ? [] : autoOption)
  }

  return (
    <>
      <CRow
        xs={{ cols: 1, gutterX: 2 }}
        md={{ cols: 2, gutterX: 2 }}
        lg={{ cols: 4, gutterX: 2 }}
        
      >
        <CCol className='p-2'>
          {/* <Input placeholder="ชื่อ" /> */}
          <AutoComplete
            options={autoOption}
            filterOption={true}
            style={{ width: '100%' }}
            placeholder="ชื่อ"
          ></AutoComplete>
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
            style={{ width: '100%' }}
            placeholder="ผู้อนุมัติ"
          ></AutoComplete>
        </CCol>
      </CRow>
      <CRow
        xs={{ cols: 1, gutter: 2 }}
        md={{ cols: 2, gutter: 2 }}
        lg={{ cols: 4, gutter: 2 }}
        // className="px-2 p-2"
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
          <Select defaultValue="สัญญาก่อนเบิกใช้" onChange={handleChange} style={{ width: '100%' }}>
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
        <CCol style={{ display: 'flex', justifyContent: 'center',alignItems:'center'  }}>
          <ButtonUI size={'sm'} color="default" flat>
            ค้นหา
          </ButtonUI>
        </CCol>
        <CCol style={{ display: 'flex', justifyContent: 'center',alignItems:'center'  }}>
          <ButtonUI size={'sm'} color="success" flat>
            สร้าง
          </ButtonUI>
        </CCol>
      </CRow>
      <CRow>
      <Table
        columns={props.columns}
        dataSource={props.dataSource}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '30'],
        }}
        bordered={true}
        size="middle"
        scroll={{ x: 'max-content'  }}
      />
      </CRow>
    </>
  )
}

export default Tablemain
