// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Col, Form, Input, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { IUser } from '../../src/type/user';



interface IProps {
    onAdd: (user: IUser) => void

}
const SignUp = (props: IProps) => {


    const navigate = useNavigate()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (values: any) => {
        props.onAdd(values);
        alert('Đăng kí tài khoản thành công')
        navigate('/')

    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    // const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <>

            <Row style={{ paddingTop: '120px' }}>
                <Col span={12} offset={6} style={{ borderBottomColor: "#f5f5f5", background: '#f5f5f5' }}>

                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600, borderBlockColor: "lightgreen" }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="User Name"
                            name="name"

                            rules={[{ required: true, message: 'Please input your user name!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"

                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>







                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Đăng kí
                            </Button>
                        </Form.Item>

                    </Form>
                    <div style={{ paddingLeft: 300 }}>

                        <Button type="primary" ><Link to={`/login`}>Đăng nhập</Link></Button>
                    </div>
                </Col>
            </Row>


        </>

    )

}

export default SignUp