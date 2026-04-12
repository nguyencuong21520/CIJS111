import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Switch, Radio, Select, ConfigProvider } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons'
import './App.css'

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
  const [form] = Form.useForm();
  const inputTextValue = Form.useWatch('inputText', form);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const hasNumberInInputText = /\d/.test(inputTextValue || '');

  const handleSwitchChange = (checked) => {
    setIsSwitchOn(checked);
    form.setFieldValue('status', checked);
  };

  const handleFinish = (values) => {
    console.log('Form data:', { ...values, status: isSwitchOn });
  };

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
        <Form
          layout="vertical"
          className=""
          form={form}
          onFinish={handleFinish}
          initialValues={{ remember: false, status: false, dropdown: 'option-0' }}
        >
          <Form.Item label={<LabelCustom title="Name" />} className="p-0" name="name">
            <Input size="large" placeholder="Enter your name" className="h-[48px]" />
          </Form.Item>

          <Form.Item extra={<span className="text-[10px] text-gray-400">Your password is between 4 and 12 characters</span>} label={<LabelCustom title="Password" />} name="password">
            <Input.Password size="large" placeholder="Enter your Password" className="h-[48px]" />
          </Form.Item>

          <Form.Item
            label={<LabelCustom title="Input Text Label" />}
            className="mb-6"
            name="inputText"
            validateStatus={hasNumberInInputText ? 'error' : ''}
            help={hasNumberInInputText ? <span className="text-[10px] text-red-500">Error message informing me of a problem</span> : null}
            rules={[
              {
                validator: (_, value) => {
                  if (!value || !/\d/.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Error message informing me of a problem'));
                },
              },
            ]}
            validateTrigger="onChange"
          >
            <Input
              size="large"
              placeholder="Typing..."
              className="h-[48px]"
              suffix={hasNumberInInputText ? <ExclamationCircleFilled /> : null}
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <div className='flex items-center gap-2 mb-6'>
            <Switch checked={isSwitchOn} onChange={handleSwitchChange} />
            <span>{isSwitchOn ? 'On' : 'Off'}</span>
          </div>

          <Form.Item name="radioSelection">
            <Radio.Group vertical>
              <Radio value="radio-1">Radio selection 1</Radio>
              <Radio value="radio-2">Radio selection 2</Radio>
              <Radio value="radio-3">Radio selection 3</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label={<LabelCustom title="Dropdown Title" />} name="dropdown" className="mb-0">
            <Select
              size="large"
              placeholder="Select an option"
              options={options}
              className="form-dropdown-select-wrap"
              popupClassName="form-dropdown-select-popup"
              popupMatchSelectWidth
            />
          </Form.Item>

          <div className='flex items-center justify-between'>
            <Button variant="outlined" color="primary" size="large">Cancel</Button>
            <Button type="primary" size="large" htmlType="submit">Next</Button>
          </div>
        </Form>
      </div>
    </section>
    </ConfigProvider>
  )
}

export default App