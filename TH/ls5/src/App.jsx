import React from 'react'
import { Form, Input, Button, Checkbox, Switch, Radio, Select, ConfigProvider } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons';

const options = [
  { label: 'Dropdown option', value: 'option-0' },
  { label: 'Dropdown option 1', value: 'option-1' },
  { label: 'Dropdown option 2', value: 'option-2' },
];
const LabelCustom = (props) => {
  const title = props.title
  return <span className="text-[12px] text-gray-500 pb-0">{title}</span>

}

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#7056F5',
          borderRadius: 8,
        },
      }}
    > 
    <section className="bg-gray-50 px-6 py-14">
      <div className="max-w-[540px] mx-auto w-full border border-gray-300 rounded-lg p-6">
        <Form layout="vertical" className="">
          <Form.Item label={<LabelCustom title="Name" />} className="p-0" name="name">
            <Input size="large" placeholder="Enter your name" className="h-[48px]" />
          </Form.Item>

          <Form.Item extra={<span className="text-[10px] text-gray-400">Your password is between 4 and 12 characters</span>} label={<LabelCustom title="Password" />} name="password">
            <Input.Password size="large" placeholder="Enter your Password" className="h-[48px]" />
          </Form.Item>

          <Form.Item
          extra={<span className="text-[10px] text-red-500">Error message informing me of a problem</span>}
            label={<LabelCustom title="Input Text Label" />} className="mb-6">
            <Input
              size="large"
              status="error"
              placeholder="Typing..."
              className="h-[48px]"
              suffix={<ExclamationCircleFilled />}
            />
          </Form.Item>

          <Form.Item>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <div className='flex items-center gap-2'>
              <Switch />
              <span>Off</span>
            </div>
          </Form.Item>

          <Form.Item>
            <Radio.Group vertical>
              <Radio value="radio-1">Radio selection 1</Radio>
              <Radio value="radio-2">Radio selection 2</Radio>
              <Radio value="radio-3">Radio selection 3</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label={<LabelCustom title="Dropdown Title" />}>
            <Select showSearch size="large" placeholder="Select an option" options={options} />
          </Form.Item>

          <div className='flex items-center justify-between'>
            <Button variant="outlined" color="primary" size="large">Cancel</Button>
            <Button type="primary" size="large">Next</Button>
          </div>
        </Form>
      </div>
    </section>
    </ConfigProvider>
  )
}

export default App