import React, { useEffect, useState } from 'react'

import { IProduct } from '../../../type/product'
import { Button, Form, Input, InputNumber, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ICate } from '../../../type/cate'
import Upload, { UploadFile, UploadProps } from 'antd/es/upload';
import { UploadOutlined } from '@ant-design/icons';




interface IProps {
    onAdd: (product: IProduct) => void
    categories: ICate[],
}

const AddProductPage = (props: IProps) => {

    const [data, setData] = useState<ICate[]>([])
    useEffect(() => {
        setData(props.categories)
    }, [props])
    const navigate = useNavigate()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (values: any) => {
        props.onAdd(values);
        alert("Thêm sản phẩm thành công")
        navigate('/admin/products')
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    const [fileList, setFileList] = useState<UploadFile[]>([

    ]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange: UploadProps['onChange'] = (info: { fileList: any; }) => {
        let newFileList = [...info.fileList];

        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        newFileList = newFileList.slice(-2);

        // 2. Read from response and show file link
        newFileList = newFileList.map((file) => {
            if (file.response) {
                // Component will show file.url as link
                file.url = file.response.url;
            }
            return file;
        });

        setFileList(newFileList);
    };

    const prop = {
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        onChange: handleChange,
        multiple: true,
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
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ type: 'number', min: 1, required: true, message: 'Please input your price >0!' }]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    label="Product Image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your image!' }]}
                >
                    <Input />
                </Form.Item>

                {/* <Upload {...prop} fileList={fileList}
                    name="image"
                >
                    <Button icon={<UploadOutlined rev={undefined} />}>Upload</Button>
                </Upload> */}
                <Form.Item
                    label="Product description"
                    name="description"

                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Cate" name="cate" rules={[{ required: true, message: 'Please input your cate!' }]}>
                    <Select placeholder="" allowClear>

                        {data.map((item: any) => {
                            return (

                                <Option value={item.id}>{item.name}</Option>

                            )
                        })}

                    </Select>

                </Form.Item>



                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>

            </Form>
        </div>

    )
}

export default AddProductPage
