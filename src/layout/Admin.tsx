import React, { useState } from 'react';
import {
    LineChartOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const AdminPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="h-screen">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <LineChartOutlined />,
                            label: <Link to="/admin">Dashoard</Link>,
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: <Link to="/admin/cate">Cate</Link>,
                        },
                        {
                            key: '3',
                            icon: <VideoCameraOutlined />,
                            label: <Link to="/admin/products">Product</Link>,
                        },
                        {
                            key: '4',
                            icon: <UploadOutlined />,
                            label: <Link to="/admin/user">User</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminPage;