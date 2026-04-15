import React from 'react'
import { Form, Input, Space, Select, Button } from 'antd'

const COUNTRY_CODES = [
    { value: '+84', label: '+84' },
    { value: '+1', label: '+1' },
    { value: '+234', label: '+234' },
]

const LOCATION_OPTIONS = [
    { value: 'Hanoi', label: 'Hanoi' },
    { value: 'Ho Chi Minh City', label: 'Ho Chi Minh City' },
    { value: 'Da Nang', label: 'Da Nang' },
]

const Register = () => {
    return (
        <div className="max-w-[520px] bg-white rounded-lg mx-auto p-8 shadow-lg"  >
            <p className='font-bold text-4xl text-slate-900'>Let's get you started</p>

            <Form
                layout="vertical"
                className="auth-form"
            >
                <Form.Item
                    name="fullName"
                    label="Full name"
                >
                    <Input placeholder='Enter your full name' size="large" />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email address"
                >
                    <Input placeholder='Enter your email' size="large" />
                </Form.Item>

                <Form.Item
                    name="phoneNumber"
                    label="Phone number"
                >
                    <Space.Compact className="w-full">
                        <Select
                            defaultValue="+84"
                            options={COUNTRY_CODES}
                            size="large"
                            style={{ maxWidth: 120 }}
                        />
                        <Input size="large" />
                    </Space.Compact>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Create password"
                >
                    <Input.Password placeholder='Enter your password' size="large" />
                </Form.Item>

                <Form.Item
                    name="location"
                    label="Location (Optional)"
                >
                    <Select
                        size="large"
                        allowClear
                        options={LOCATION_OPTIONS}
                        placeholder="Select Location"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" block>Sign Up</Button>
                </Form.Item>

            </Form>

            <p className="mt-7 text-center text-base text-slate-500">
                Already a user?{' '}
                <button
                    type="button"
                    className="font-semibold text-sky-700 underline"
                    onClick={() => { }}
                >
                    Login
                </button>
            </p>

        </div>
    )
}

export default Register