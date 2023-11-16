import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ICate } from '../../../type/cate';
import { Link } from 'react-router-dom'

interface DataType {
    key: string | number;
    id: number;
    name: string;

}
interface IProps {
    categories: ICate[],
    onRemove: (id: number) => void
}

const CateManagementPage = (props: IProps) => {
    const removeCate = (id: number) => {
        props.onRemove(id)
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Cate Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeCate(record.id)}>Remove</Button>
                    <Button type="primary" ><Link to={`/admin/cate/${record.id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.categories.map((item: ICate) => {
        return {
            key: item.id,
            ...item
        }
    })

    return (
        <div>
            <Button type='primary'><Link to={'/admin/cate/add'}>Add New Cate</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    )
}

export default CateManagementPage