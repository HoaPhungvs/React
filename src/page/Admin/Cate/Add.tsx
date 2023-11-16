import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ICate } from '../../../type/cate';

interface IProps {
    onAdd: (cate: ICate) => void
}
const AddCatePage = (props: IProps) => {


    const navigate = useNavigate()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (values: any) => {
        props.onAdd(values);
        alert("Thêm danh mục thành công")
        navigate('/admin/cate')
    };

    const onFinishFailed = (errorInfo: unknown) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>

            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Cate Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your cate!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add New Cate
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddCatePage