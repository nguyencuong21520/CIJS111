import React from 'react'
import { Form, Input, Button, Checkbox, Switch } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons';

const LabelCustom = (props) => {
  const title = props.title
  return <span className="text-[12px] text-gray-500 pb-0">{title}</span>

}

const App = () => {
  return (
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

        </Form>
      </div>
    </section>
  )
}

export default App