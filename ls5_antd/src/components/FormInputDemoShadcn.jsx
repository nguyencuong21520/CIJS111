import React from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Space,
  Switch,
  Typography,
} from 'antd';

const { Title, Paragraph, Text } = Typography;

const bankOptions = [
  { value: 'vcb', label: 'Vietcombank' },
  { value: 'tcb', label: 'Techcombank' },
  { value: 'mb', label: 'MB Bank' },
  { value: 'acb', label: 'ACB' },
];

const ewalletOptions = [
  { value: 'momo', label: 'MoMo' },
  { value: 'zalopay', label: 'ZaloPay' },
  { value: 'shopeepay', label: 'ShopeePay' },
];

const FormInputDemoShadcn = () => {
  const [form] = Form.useForm();
  const selectedMethod = Form.useWatch('paymentMethod', form) || 'credit-card';

  const onFinish = (values) => {
    console.log('Payment form submitted:', values);
  };

  return (
    <Card
      style={{
        maxWidth: 680,
        margin: '0 auto',
        borderRadius: 16,
        border: '1px solid #e5e7eb',
        boxShadow: '0 14px 36px rgba(15, 23, 42, 0.08)',
      }}
      styles={{
        body: {
          padding: 28,
          background:
            'linear-gradient(180deg, rgba(248,250,252,0.88) 0%, rgba(255,255,255,1) 36%)',
          borderRadius: 16,
        },
      }}
    >
      <Space direction="vertical" size={4} style={{ marginBottom: 20 }}>
        <Title level={3} style={{ margin: 0 }}>
          Payment Method
        </Title>
        <Paragraph type="secondary" style={{ margin: 0 }}>
          Choose how you want to pay. Your information is validated before submission.
        </Paragraph>
      </Space>

      <Alert
        type="info"
        showIcon
        style={{ marginBottom: 20, borderRadius: 10 }}
        message="Secure checkout"
        description="Card fields are only required when Credit Card is selected."
      />

      <Form
        form={form}
        layout="vertical"
        initialValues={{
          paymentMethod: 'credit-card',
          billingEmail: '',
          saveMethod: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item label="Payment Type" name="paymentMethod" rules={[{ required: true }]}>
          <Radio.Group
            optionType="button"
            buttonStyle="solid"
            options={[
              { value: 'credit-card', label: 'Credit Card' },
              { value: 'bank-transfer', label: 'Bank Transfer' },
              { value: 'e-wallet', label: 'E-Wallet' },
            ]}
          />
        </Form.Item>

        {selectedMethod === 'credit-card' && (
          <>
            <Row gutter={16}>
              <Col xs={24}>
                <Form.Item
                  label="Cardholder Name"
                  name="cardholderName"
                  rules={[{ required: true, message: 'Please enter cardholder name.' }]}
                >
                  <Input placeholder="Nguyen Van A" size="large" />
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item
                  label="Card Number"
                  name="cardNumber"
                  rules={[
                    { required: true, message: 'Please enter card number.' },
                    {
                      pattern: /^\d{16}$/,
                      message: 'Card number must contain exactly 16 digits.',
                    },
                  ]}
                >
                  <Input placeholder="1234567812345678" size="large" maxLength={16} />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  label="Expiry Date"
                  name="expiryDate"
                  rules={[
                    { required: true, message: 'Please enter expiry date.' },
                    { pattern: /^(0[1-9]|1[0-2])\/\d{2}$/, message: 'Use MM/YY format.' },
                  ]}
                >
                  <Input placeholder="MM/YY" size="large" maxLength={5} />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  label="CVV"
                  name="cvv"
                  rules={[
                    { required: true, message: 'Please enter CVV.' },
                    { pattern: /^\d{3,4}$/, message: 'CVV should be 3 or 4 digits.' },
                  ]}
                >
                  <Input placeholder="123" size="large" maxLength={4} />
                </Form.Item>
              </Col>
            </Row>
          </>
        )}

        {selectedMethod === 'bank-transfer' && (
          <Form.Item
            label="Bank"
            name="bankCode"
            rules={[{ required: true, message: 'Please select your bank.' }]}
          >
            <Select
              size="large"
              placeholder="Select bank"
              options={bankOptions}
              showSearch
              optionFilterProp="label"
            />
          </Form.Item>
        )}

        {selectedMethod === 'e-wallet' && (
          <Form.Item
            label="E-Wallet"
            name="ewalletProvider"
            rules={[{ required: true, message: 'Please choose an e-wallet provider.' }]}
          >
            <Select size="large" placeholder="Choose e-wallet" options={ewalletOptions} />
          </Form.Item>
        )}

        <Row gutter={16}>
          <Col xs={24} sm={16}>
            <Form.Item
              label="Billing Email"
              name="billingEmail"
              rules={[
                { required: true, message: 'Please enter billing email.' },
                { type: 'email', message: 'Please enter a valid email.' },
              ]}
            >
              <Input placeholder="you@example.com" size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Item label="Save Method" name="saveMethod" valuePropName="checked">
              <Switch checkedChildren="On" unCheckedChildren="Off" />
            </Form.Item>
          </Col>
        </Row>

        <Card
          size="small"
          style={{
            marginBottom: 18,
            borderRadius: 10,
            border: '1px dashed #d1d5db',
            background: '#fafafa',
          }}
        >
          <Text type="secondary">
            Tip: For demo purpose, submitted values are printed in the browser console.
          </Text>
        </Card>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button type="primary" size="large" htmlType="submit" block>
            Save Payment Method
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FormInputDemoShadcn;
