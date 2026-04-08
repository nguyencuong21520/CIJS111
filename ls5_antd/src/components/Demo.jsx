import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Checkbox, ConfigProvider, Form, Input, Radio, Select, Switch } from 'antd';

const options = [
  { label: 'Dropdown option', value: 'option-0' },
  { label: 'Dropdown option 1', value: 'option-1' },
  { label: 'Dropdown option 2', value: 'option-2' },
];

const Demo = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#7056F5',
          borderRadius: 8,
        },
      }}
    >
      <section className="min-h-screen bg-[#f5f5f5] px-6 py-14">
        <div className="mx-auto w-full max-w-[540px]">
          <Form layout="vertical" requiredMark={false} initialValues={{ radio: 'radio-2', select: 'option-0' }}>
            <Form.Item label={<span className="text-[14px] text-[#4a4a4a]">Username</span>} className="mb-6">
              <Input size="large" placeholder="Enter username" className="h-[48px]" />
            </Form.Item>

            <Form.Item
              label={<span className="text-[14px] text-[#4a4a4a]">Password</span>}
              extra={<span className="text-[14px] text-[#7a7a7a]">Your password is between 4 and 12 characters</span>}
              className="mb-6"
            >
              <Input.Password size="large" placeholder="Enter password" className="h-[48px]" visibilityToggle={false} />
            </Form.Item>

            <Form.Item label={<span className="text-[14px] text-[#4a4a4a]">Input Text Label</span>} className="mb-6">
              <Input
                size="large"
                status="error"
                placeholder="Typing |"
                className="h-[48px]"
                suffix={<ExclamationCircleFilled className="text-[#f35b63]" />}
              />
              <p className="mt-2 text-[14px] text-[#f35b63]">Error message informing me of a problem</p>
            </Form.Item>

            <Form.Item className="mb-5">
              <Checkbox className="text-[16px] text-[#5a5a5a]">Remember me</Checkbox>
            </Form.Item>

            <Form.Item className="mb-5">
              <div className="flex items-center gap-4">
                <Switch size="default" checked={false} />
                <span className="text-[16px] text-[#5a5a5a]">Off</span>
              </div>
            </Form.Item>

            <Form.Item name="radio" className="mb-6">
              <Radio.Group className="flex flex-col gap-4">
                <Radio value="radio-1" className="text-[16px] text-[#5a5a5a]">
                  Radio selection 1
                </Radio>
                <Radio value="radio-2" className="text-[16px] text-[#5a5a5a]">
                  Radio selection 2
                </Radio>
                <Radio value="radio-3" className="text-[16px] text-[#5a5a5a]">
                  Radio selection 3
                </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label={<span className="text-[14px] text-[#4a4a4a]">Dropdown Title</span>} name="select" className="mb-10">
              <Select
                size="large"
                className="[&_.ant-select-selector]:h-[48px]! [&_.ant-select-selector]:items-center!"
                options={options}
              />
            </Form.Item>

            <div className="flex items-center justify-between">
              <Button
                size="large"
                className="h-[48px] w-[150px] border-[#7056F5] text-[16px] text-[#7056F5] hover:border-[#7056F5]! hover:text-[#7056F5]!"
              >
                Cancel
              </Button>
              <Button type="primary" size="large" className="h-[48px] w-[150px] text-[16px]">
                Next
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default Demo;
