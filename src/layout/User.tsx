import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Input, Layout, Menu, MenuProps, Row, Space } from 'antd';
import { AppstoreTwoTone, HomeTwoTone, IdcardTwoTone, UserAddOutlined } from '@ant-design/icons';
import type { SearchProps } from 'antd/es/input/Search';
// import type { SearchProps } from '../Search';
const { Header, Footer, Content } = Layout;
const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#ffffff',
};
const items: MenuProps['items'] = [
    {
        label: (<a href='/'>Trang chủ</a>),
        key: 'alipay',
        icon: <HomeTwoTone rev={undefined} />,
    },
    {
        label: (<a href='/products'>Sản phẩm </a>),
        key: 'mails',
        icon: <AppstoreTwoTone rev={undefined} />,
    },
    {
        label: (<a href='/blog'>Blog </a>),
        key: 'me',
        icon: <IdcardTwoTone rev={undefined} />,
    },
    {
        label: (<a href='/products'>Tài khoản </a>),
        key: 'he',
        icon: <UserAddOutlined rev={undefined} />,
    },


]
const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
const UserPage: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Header style={headerStyle} >


                <Row>
                    <Col span={12}>
                        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
                    </Col>
                    <Col span={6}>
                        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 400, paddingTop: 15 }} />

                    </Col>

                </Row>

            </Header>
            <Content>
                <Outlet />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Space>
    )
        ;
};
export default UserPage;