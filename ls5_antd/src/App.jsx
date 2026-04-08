import React, { useState } from 'react';
import { Button, Space, Table, Tag ,Drawer, Switch} from 'antd';
import FormInputInfo from './components/FormInputInfo';
import FormInputDemoShadcn from './components/FormInputDemoShadcn';
import TaiwindComponentDemo from './components/TaiwindComponentDemo';
import Demo from './components/Demo';

const customers = [
  {
    key: 'CUS001',
    name: 'John Brown',
    email: 'john.brown@email.com',
    age: 32,
    city: 'New York',
    status: 'active',
    tags: ['vip', 'developer'],
  },
  {
    key: 'CUS002',
    name: 'Jim Green',
    email: 'jim.green@email.com',
    age: 42,
    city: 'London',
    status: 'inactive',
    tags: ['new'],
  },
  {
    key: 'CUS003',
    name: 'Joe Black',
    email: 'joe.black@email.com',
    age: 29,
    city: 'Sydney',
    status: 'active',
    tags: ['loyal', 'teacher'],
  },
  {
    key: 'CUS004',
    name: 'Anna White',
    email: 'anna.white@email.com',
    age: 36,
    city: 'Hanoi',
    status: 'pending',
    tags: ['lead'],
  },
];

const statusColors = {
  active: 'green',
  inactive: 'red',
  pending: 'gold',
};

const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [open, setOpen] = useState(false);


  const columns = [
    {
      title: 'Customer ID',
      dataIndex: 'key',
      width: 120,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      align: 'right',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'City',
      dataIndex: 'city',
      filters: [
        { text: 'New York', value: 'New York' },
        { text: 'London', value: 'London' },
        { text: 'Sydney', value: 'Sydney' },
        { text: 'Hanoi', value: 'Hanoi' },
      ],
      onFilter: (value, record) => record.city === value,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      filters: [
        { text: 'Active', value: 'active' },
        { text: 'Inactive', value: 'inactive' },
        { text: 'Pending', value: 'pending' },
      ],
      onFilter: (value, record) => record.status === value,
      render: (value) => <Tag color={statusColors[value]}>{value.toUpperCase()}</Tag>,
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      render: (tags) => (
        <Space>
          {tags.map((tag) => (
            <Tag key={tag} color="magenta">
              {tag}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space>
          <Button type="link">View</Button>
          <Button type="link" danger>
            Block
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1>Customer Management</h1>
      <Table
        columns={columns}
        dataSource={customers}
        rowSelection={{
          selectedRowKeys,
          onChange: (newSelectedRowKeys) => setSelectedRowKeys(newSelectedRowKeys),
        }}
        pagination={{
          pageSize: 3,
          showSizeChanger: false,
          showTotal: (total) => `Total ${total} customers`,
        }}
        onChange={(pagination, filters, sorter) => {
          console.log('Table changed:', { pagination, filters, sorter });
        }}
      />

      <h1>Drawer</h1>

      <Switch checked={open} onChange={(value)=>{
        setOpen(value);
      }}/>

      <Drawer
        title="Basic Drawer"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={()=>{
          setOpen(false);
        }}
        open={open}
      >
        <div>
          <FormInputInfo />
        </div>
      </Drawer>
      <FormInputDemoShadcn />
      <TaiwindComponentDemo />
      <Demo />
    </>


  );

};

export default App;