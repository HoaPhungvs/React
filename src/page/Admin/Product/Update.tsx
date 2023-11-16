import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IProduct } from '../../../type/product'
import { Button, Form, Input, Select } from 'antd';
import { ICate } from '../../../type/cate';
interface IProps {
    products: IProduct[],
    categories: ICate[],
    onUpdate: (product: IProduct) => void
}
const UpdateProductPage = (props: IProps) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [products, setProducts] = useState<IProduct>()
    useEffect(() => {
        const currentProduct = props.products.find((products: IProduct) => products.id == Number(id))
        setProducts(currentProduct)
    }, [props])

    useEffect(() => { setFields() }, [products])


    const [data, setData] = useState<ICate[]>([])

    useEffect(() => { setData(props.categories) }, [props])


    const [form] = Form.useForm();
    const setFields = () => {
        form.setFieldsValue({
            id: products?.id,
            name: products?.name,
            price: products?.price,
            image: products?.image,
            description: products?.description,
            categoryId: products?.categoryId
        })
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (values: any) => {
        props.onUpdate(values);
        alert("Cập nhật product thành công")
        navigate('/admin/products')
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
                    label="Product Name"
                    name="name"

                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Product Image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your image!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Product description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Cate" name="categoryId" rules={[{ required: true, message: 'Please input your categoryId!' }]}>
                    <Select placeholder="" allowClear>


                        {data.map((item: any) => {
                            return (


                                <Option value={item.id}> {item.name}</Option>

                            )
                        })}

                    </Select>

                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Update Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default UpdateProductPage