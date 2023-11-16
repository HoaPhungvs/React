import { Button, Card, Col, Row, Typography } from 'antd';

const { Title, Paragraph } = Typography;

import { useEffect, useState } from 'react';

import { IProduct } from '../type/product';
import Meta from 'antd/es/card/Meta';
import { ForwardOutlined, ShoppingOutlined } from '@ant-design/icons';


interface IProps {
    products: IProduct[],

}
const HomePage = (props: IProps) => {
    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])

    return (
        <>
            <Row style={{ padding: '5px' }} >
                <Col span={12}>
                    <img style={{ paddingTop: '10px', paddingRight: '10px', }} src="https://picsum.photos/500/500" alt="" sizes="" />
                </Col>
                <Col span={12} style={{ paddingTop: '30px', paddingRight: '10px' }}>
                    <Title style={{ textAlign: 'center' }}  >About us</Title>
                    <Paragraph style={{ paddingRight: '10px' }} >
                        In the process of internal desktop applications development, many different design specs and
                        implementations would be involved, which might cause designers and developers difficulties and
                        duplication and reduce the efficiency of development.
                    </Paragraph>
                    <Button ><ForwardOutlined rev={undefined} />Default Button</Button>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Title style={{ paddingTop: '10px', textAlign: 'center' }}>Sản phẩm</Title>
                </Col>

                {data.map(item => {
                    return (
                        <>

                            <Row gutter={16} >

                                <Col className="gutter-row" span={6} style={{ padding: '30px 40px' }} >

                                    <Card
                                        hoverable
                                        style={{ width: 240, height: 300 }}
                                        cover={<img style={{ height: 220 }} alt="example" src={item.image} />}
                                    >
                                        <Row>
                                            <Col span={20}>
                                                <Meta title={item.name} />
                                                <Meta title={item.price} />
                                            </Col>
                                            <Col span={4}>
                                                <ShoppingOutlined rev={undefined} />
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </>
                    )
                })}
            </Row>
        </>
    )
}


export default HomePage;