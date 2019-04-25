import React,{Component} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link,HashRouter,Route,Switch} from 'react-router-dom'
import Admin from '../Admin'
import Event from '../Event'

const {Header,Content,Sider,Footer} = Layout;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

        render(){
    return (
    <HashRouter>
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Admin</Menu.Item>
                    <Menu.Item key="2">Event</Menu.Item>
                    <Menu.Item key="3">Login</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>,
        mountNode
        );
    </HashRouter>

    )

    }
}



