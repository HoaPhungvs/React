import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button, Form, Input } from 'antd';
import { ICate } from '../../../type/cate';
interface IProps {
    cates: ICate[],
    onUpdate: (cate: ICate) => void
}
const UpdateCatePage = (props: IProps) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [cates, setCates] = useState<ICate>()
    useEffect(() => {
        const currentProduct = props.cates.find((cate: ICate) => cate.id == Number(id))
        setCates(currentProduct)
    }, [props])

    useEffect(() => { setFields() }, [cates])


    const [form] = Form.useForm();
    const setFields = () => {
        form.setFieldsValue({
            id: cates?.id,
            name: cates?.name,

        })
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (values: any) => {
        props.onUpdate(values);
        alert("Cập nhật cate thành công")
        navigate('/admin/cate')
    };

    return (
        <div>
            <Form
                form={form}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
            >
                <Form.Item
                    label=""
                    name="id"
                    style={{ display: 'none' }} // ẩn input này đi
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Cate Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your cate!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Update Cate
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default UpdateCatePage