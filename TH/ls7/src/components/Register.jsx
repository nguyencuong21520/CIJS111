import React, { useState } from 'react'
import axios from 'axios'
import { Form, Input, Space, Select, Button, message } from 'antd'


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
    const API_KEY = "67fe6ce4c590d6933cc126d9"
    const BASE_URL = "https://mindx-mockup-server.vercel.app/api"

    const [loading, setLoading] = useState(false)

    const addUser = async(values) =>{
        try {
            setLoading(true)    
            await axios.post(`${BASE_URL}/resources/accounts?apiKey=${API_KEY}`, {
            fullName: values.fullName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            phoneCode: values.phoneCode,
            password: values.password,
            location: values.location,
        })
        message.success('User added successfully')
        } catch (error) {
            message.error('Failed to add user')
        } finally {
            setLoading(false)
        }
    }

    const onSubmit = (values) => {
        addUser(values)
    }
    return (
        <div className="relative max-w-[520px] bg-white rounded-lg mx-auto p-8 shadow-lg overflow-hidden"  >
            <div className="pointer-events-none absolute -left-22 -top-16 h-72 w-72 rounded-full bg-blue-50/80 z-0" ></div>
            <div className="pointer-events-none absolute -right-5 -bottom-22 h-72 w-72 rounded-full bg-blue-50/80 z-0" ></div>

            <p className='relative z-10 font-bold text-4xl text-slate-900'>Let's get you started </p>

            <Form
                layout="vertical"
                className="auth-form"
                onFinish={onSubmit}
                initialValues={{ phoneCode: '+84' }}
            >
                <Form.Item
                    name="fullName"
                    label="Full name"
                    rules={[{ required: true, message: 'Please enter your full name.' }]}
                >
                    <Input placeholder='Enter your full name' size="large" />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email address"
                    rules={[
                        { required: true, message: 'Please enter your email.' },
                        { type: 'email', message: 'Please enter a valid email address.' },
                    ]}
                >
                    <Input placeholder='Enter your email' size="large" />
                </Form.Item>

                <Form.Item label="Phone number" required>
                    <Space.Compact className="w-full">
                        <Form.Item
                            name="phoneCode"
                            noStyle
                            rules={[{ required: true, message: 'Please select country code.' }]}
                        >
                            <Select
                                options={COUNTRY_CODES}
                                size="large"
                                style={{ width: 120 }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="phoneNumber"
                            noStyle
                            rules={[{ required: true, message: 'Please enter your phone number.' }]}
                        >
                            <Input size="large" />
                        </Form.Item>
                    </Space.Compact>
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
                    <Button type="primary" htmlType="submit" size="large" block loading={loading}>Sign Up</Button>
                </Form.Item>

            </Form>

            <p className="mt-7 text-center text-base text-slate-500 z-10 relative">
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