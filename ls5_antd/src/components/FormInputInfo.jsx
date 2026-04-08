import React from 'react';
import { Button, Form, Input, Select } from 'antd';

const FormInputInfo = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // In real apps, send this payload to API.
    console.log('Submitted values:', values);
  };

  return (
    <Form
      form={form}
      name="register-form"
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      style={{ maxWidth: 420 }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          { required: true, message: 'Please enter your name' },
          { min: 2, message: 'Name must be at least 2 characters' },
        ]}
      >
        <Input placeholder="Enter your full name" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required: true, message: 'Please select your gender' }]}
      >
        <Select
          placeholder="Select gender"
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' },
          ]}
        />
      </Form.Item>

      <Form.Item
        label="Country"
        name="country"
        rules={[{ required: true, message: 'Please select your country' }]}
      >
        <Select
          placeholder="Select country"
          showSearch
          options={[
            { value: 'vietnam', label: 'Vietnam' },
            { value: 'japan', label: 'Japan' },
            { value: 'singapore', label: 'Singapore' },
            { value: 'thailand', label: 'Thailand' },
            { value: 'united-states', label: 'United States' },
          ]}
          
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Please enter your password' },
          { min: 6, message: 'Password must be at least 6 characters' },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={['password']}
        hasFeedback
        rules={[
          { required: true, message: 'Please confirm your password' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords do not match'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Re-enter your password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormInputInfo;
