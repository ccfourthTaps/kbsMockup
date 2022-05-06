import React, { useState } from 'react'
import { Table, Input, DatePicker, Menu, Dropdown, Space, Button, Select } from 'antd'
import { CCard, CRow, CCol, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch, cilPlus } from '@coreui/icons'

import PropTypes from 'prop-types'
import { DownOutlined } from '@ant-design/icons'

const Tablemain = (props) => {
  Tablemain.propTypes = {
    category: PropTypes.arrayOf(PropTypes.string),

    columns: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    dataSource: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    pagination: PropTypes.arrayOf(PropTypes.string),
    bordered: PropTypes.bool,
  }
  const { Option } = Select
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

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

  return (
    <>
      <CRow xs={{ cols: 2, gutter: 2 }} lg={{ cols: 4, gutter: 2 }} className="px-4 py-2">
        <CCol>
          <Input placeholder="ชื่อ" />
        </CCol>
        <CCol>
          <DatePicker style={{ width: 266 }} />
        </CCol>
        <CCol>
          <DatePicker style={{ width: 266 }} />
        </CCol>
        <CCol>
          <Input placeholder="ผู้อนุมัติ" />
        </CCol>
      </CRow>
      <CRow xs={{ cols: 4, gutter: 2 }} lg={{ cols: 4, gutter: 2 }} className="p-4">
        <CCol>
          {/* <Dropdown overlay={menu} trigger={['click']}>
            <Button>
              <Space>
                ประเภทสัญญา
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown> */}
          <Select defaultValue="สัญญาก่อนเบิกใช้" style={{ width: 266 }} onChange={handleChange}>
            <Option value="jack">สัญญาก่อนเบิกใช้</Option>
            <Option value="lucy">สัญญาผู้รับเหมา</Option>
            <Option value="Yiminghe">สัญญาพ่อค้าอ้อย</Option>
          </Select>
        </CCol>
        <CCol>
          <Input placeholder="จำนวนเงิน" />
        </CCol>
        <CCol style={{display:'flex' ,'justify-content':'flex-end' }} >
          <CButton color="secondary" size='sm' >
            {' '}
            <CIcon icon={cilSearch} className="me-2" />
            ค้นหา{' '}
          </CButton>
        </CCol>
        <CCol style={{display:'flex' ,'justify-content':'flex-end' }}>
          <CButton color="success" size='sm'>
            <CIcon icon={cilPlus} className="me-2" />สร้าง{' '}
          </CButton>
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
        />
      </CRow>
    </>
  )
}

export default Tablemain
