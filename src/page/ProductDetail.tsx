import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../type/product'
import { Button, Card, Typography, Flex, Row, Col, Switch, Rate, InputNumber, Radio, RadioChangeEvent, Descriptions, DescriptionsProps, Space } from 'antd';
import { MessageOutlined } from '@ant-design/icons';


interface IProps {
    products: IProduct[],
    onDetail: (id: number) => void

}
const cardStyle: React.CSSProperties = {
    width: 1240,
    height: 600

};

const imgStyle: React.CSSProperties = {

    width: 700,
    paddingTop: 10,
    paddingLeft: 10
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onChange = (value: number) => {
    console.log('changed', value);
};

const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];
const items: DescriptionsProps['items'] = [

    {
        key: '4',
        label: 'Amount',
        children: '$80.00',
    },
    {
        key: '5',
        label: 'Discount',
        children: '$20.00',
    },
    {
        key: '6',
        label: 'Official',
        children: '$60.00',
    },
];
const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
const { Text, Paragraph, Title } = Typography;

const DetailProduct = (props: IProps) => {

    const { id } = useParams()
    const currentProduct = props.products.find((item) => item.id === Number(id))
    console.log(currentProduct);
    const [ellipsis, setEllipsis] = useState(true);
    // giá
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [size, setSize] = useState<'default' | 'middle' | 'small'>('default');

    const onChange = (e: RadioChangeEvent) => {
        console.log('size checked', e.target.value);
        setSize(e.target.value);
    };

    //  loại
    const [value3, setValue3] = useState('Apple');
    const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
        console.log('radio3 checked', value);
        setValue3(value);
    };
    return (
        <>
            <Card hoverable style={cardStyle} bodyStyle={{ padding: 0, overflow: 'hidden' }}>
                <Flex justify="space-between" >
                    <img
                        src={currentProduct?.image}
                        style={imgStyle}
                    />
                    <Flex vertical align="flex-start" justify="space-between" style={{ width: 500, paddingBottom: 10 }}>
                        <Title level={3}> {currentProduct?.name}</Title>
                        <br />
                        <Descriptions
                            // title="Custom Size"
                            // size={size}
                            // extra={<Button type="primary">Edit</Button>}
                            items={items}
                        />
                        <Text strong>{currentProduct?.price} </Text>
                        <br />
                        <Text strong>Màu sắc
                            <Radio.Group style={{ paddingLeft: 10 }} options={options} onChange={onChange3} value={value3} optionType="button" />
                        </Text>
                        <br />
                        <Text strong>Số lượng <InputNumber min={0} max={10} defaultValue={3} onChange={onChange} /> </Text>
                        <br />
                        <Rate allowHalf defaultValue={2.5} />
                        <br />
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}>
                            {currentProduct?.description}
                        </Paragraph>
                        <Switch
                            checked={ellipsis}
                            onChange={() => {
                                setEllipsis(!ellipsis);
                            }}
                        />
                        <br />
                        <Row>
                            <Col span={12}>
                                <Button type="primary" target="_blank">
                                    Thêm giở hàng
                                </Button>
                            </Col>
                            <Col span={12} style={{ paddingLeft: 30 }}>
                                <Button type="primary" target="_blank">
                                    Mua hàng
                                </Button>
                            </Col>
                        </Row>
                    </Flex>
                </Flex>
            </Card>
        </>
    )
}

export default DetailProduct