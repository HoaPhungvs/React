import { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
    const navigate = useNavigate()
    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    const onFinish = (_values: any) => {

        alert('Đăng nhập thành công')
        navigate('/admin')
    };

    return (

        <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} style={{ paddingTop: 100, paddingLeft: 400 }}>
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" rev={undefined} />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" rev={undefined} />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item shouldUpdate>
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={
                            !form.isFieldsTouched(true) ||
                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                        }
                    >
                        Log in
                    </Button>
                )}
            </Form.Item>
        </Form>
    );
};

export default SignIn;