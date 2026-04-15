import { Button, Form, Input, Typography } from 'antd'

export function LoginForm({ onSubmit, loading, onSwitchToRegister }) {
  return (
    <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-lg bg-white p-8 shadow-lg sm:p-10">
      <div className="pointer-events-none absolute -left-22 -top-16 h-72 w-72 rounded-full bg-blue-50/80" />

      <Typography.Title level={2} className="!mb-8 !text-4xl !font-bold !text-slate-900">
        Welcome back
      </Typography.Title>

      <Form className="auth-form" layout="vertical" requiredMark={false} onFinish={onSubmit}>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please enter your username.' }]}
        >
          <Input size="large" placeholder="emilys" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please enter your password.' }]}
        >
          <Input.Password size="large" placeholder="********" />
        </Form.Item>

        <Form.Item className="!mb-0 !mt-8">
          <Button type="primary" htmlType="submit" size="large" block loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>

      <p className="mt-7 text-center text-base text-slate-500">
        New here?{' '}
        <button
          type="button"
          className="font-semibold text-sky-700 underline"
          onClick={onSwitchToRegister}
        >
          Create account
        </button>
      </p>
    </div>
  )
}
