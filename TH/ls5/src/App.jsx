import React from 'react'
import { Form, Input, Button } from 'antd'

const App = () => {
  return (
    <section className="bg-gray-50 px-6 py-14">
      <div className="max-w-[540px] mx-auto w-full border border-gray-300 rounded-lg p-6">
        <Form >
          <Form.Item label="Name" name="name">
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Enter your Password" />
          </Form.Item>

        </Form>
      </div>
    </section>
  )
}

export default App