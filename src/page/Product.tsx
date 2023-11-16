import { useEffect, useState } from 'react'
import { IProduct } from '../type/product'
import { Badge, Card, Col, Divider, List, Pagination, Row } from 'antd'
import Meta from 'antd/es/card/Meta'
import { ICate } from '../type/cate'
import { ShoppingCartOutlined } from '@ant-design/icons'
interface IProps {
    products: IProduct[],
    cate: ICate[],

}
const ProductPage = (props: IProps) => {
    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const [cate, setCate] = useState<ICate[]>([])
    useEffect(() => {
        setCate(props.cate)
    }, [props])
    return (
        <>

            <Row>
                <Col span={4}>
                    <Divider orientation="center">Danh mục</Divider>
                    <List
                        style={{ width: 160, paddingLeft: 20, marginLeft: 10 }}
                        size="small"
                        bordered
                        dataSource={cate}
                        renderItem={(item) =>
                            <List.Item>
                                <a href="">{item.name}</a>
                            </List.Item>} />
                </Col>

                <Col span={20}>
                    <Divider orientation="center">Sản phẩm </Divider>
                    <Row gutter={16} >
                        {data.map(item => {
                            return (
                                <Col className="gutter-row" span={8} style={{ paddingBottom: 20 }}  >


                                    <Row>
                                        <Col span={18}>
                                            <Badge.Ribbon text="Hippies">
                                                <Card
                                                    hoverable
                                                    style={{ width: 240, height: 300 }}
                                                    cover={<img style={{ height: 220 }} alt="example" src={item.image} />}
                                                >
                                                    <Meta title={item.name} />
                                                    {/* description={item.description} */}
                                                    <Meta title={item.price}
                                                    />

                                                </Card>
                                            </Badge.Ribbon>
                                        </Col>
                                        <Col span={6} style={{ paddingTop: 240 }}>
                                            <ShoppingCartOutlined rev={undefined} />
                                        </Col>
                                    </Row>
                                </Col>

                            )
                        })}
                    </Row>
                </Col>
            </Row>
            <Pagination defaultCurrent={6} total={500} style={{ paddingLeft: 380 }} />
        </>
    )
}
export default ProductPage