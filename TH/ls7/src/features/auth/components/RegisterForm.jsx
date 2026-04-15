import { Button, Form, Input, Select, Typography } from 'antd'

const LOCATION_OPTIONS = [
  { value: 'Hanoi', label: 'Hanoi' },
  { value: 'Ho Chi Minh City', label: 'Ho Chi Minh City' },
  { value: 'Da Nang', label: 'Da Nang' },
]

const COUNTRY_CODES = [
  { value: '+84', label: '+84' },
  { value: '+1', label: '+1' },
  { value: '+234', label: '+234' },
]

export function RegisterForm({ onSubmit, loading, onSwitchToLogin }) {
  return (
    <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-lg bg-white p-8 shadow-lg sm:p-10">
      <div className="pointer-events-none absolute -left-22 -top-16 h-72 w-72 rounded-full bg-blue-50/80" />

      <Typography.Title level={2} className="!mb-8 !text-4xl !font-bold !text-slate-900">
        Let's get you started
      </Typography.Title>

      <Form
        className="auth-form"
        layout="vertical"
        requiredMark={false}
        initialValues={{ countryCode: '+84' }}
        onFinish={onSubmit}
      >
        <Form.Item
          name="fullName"
          label="Full name"
          rules={[{ required: true, message: 'Please enter your full name.' }]}
        >
          <Input placeholder="Ade Tiger" size="large" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email address"
          rules={[
            { required: true, message: 'Please enter your email.' },
            { type: 'email', message: 'Please enter a valid email address.' },
          ]}
        >
          <Input placeholder="yourname@mail.com" size="large" />
        </Form.Item>

        <Form.Item label="Phone number" required className="!mb-4">
          <div className="flex w-full gap-2">
            <Form.Item name="countryCode" className="!mb-0 !w-[120px]">
              <Select options={COUNTRY_CODES} size="large" />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              className="!mb-0 !flex-1"
              rules={[{ required: true, message: 'Please enter your phone number.' }]}
            >
              <Input size="large" placeholder="800 2738 0700" />
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item
          name="password"
          label="Create password"
          rules={[
            { required: true, message: 'Please create a password.' },
            { min: 8, message: 'Password must have at least 8 characters.' },
            {
              pattern: /[^A-Za-z0-9]/,
              message: 'Password must contain at least one symbol.',
            },
          ]}  
        >
          <Input.Password placeholder="********" size="large" />
        </Form.Item>

        <Form.Item name="location" label="Location (Optional)">
          <Select
            size="large"
            allowClear
            placeholder="Select Location"
            options={LOCATION_OPTIONS}
          />
        </Form.Item>

        <Form.Item className="!mb-0 !mt-8">
          <Button type="primary" htmlType="submit" size="large" block loading={loading}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>

      <p className="mt-7 text-center text-base text-slate-500">
        Already a user?{' '}
        <button
          type="button"
          className="font-semibold text-sky-700 underline"
          onClick={onSwitchToLogin}
        >
          Login
        </button>
      </p>
    </div>
  )
}
