import React,{Component} from 'react';
import {Layout,Menu,Icon} from "antd";
import {Link,HashRouter,Route,Switch} from 'react-router-dom'
import Admin from '../Admin'

const {Header,Content,Sider,Footer} = Layout;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

        render(){
    return (
    <HashRouter>
        <Layout style={{minHeight: '100vh'}}>
            <Sider
                style={{zIndex: 10000}}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo">
                </div>

                <Menu onClick={() => {
                }} mode="vertical" theme={'dark'}>
                    <Menu.Item key={'Admin'}>
                        <Link to={'./admin'}>
                            <Icon type="user"/>
                            <span>Admin Page</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key={'Event'}>
                        <Link to={'./Event'}>
                            <Icon type="form"/>
                            <span>Event Page</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key={'Login'}>
                        <Link to={'./Login'}>
                            <Icon type="form"/>
                            <span>Login</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key={'Sign Up'}>
                        <Link to={'./sign up'}>
                            <Icon type="form"/>
                            <span>Sign Up</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key={'ManageEvent'}>
                        <Link to={'./manage'}>
                            <Icon type="form"/>
                            <span>Manage Events</span>
                        </Link>
                    </Menu.Item>

                </Menu>
            </Sider>

            <Layout>
                <Header style={{background: '#fff', padding: 0}}>
                </Header>
                <Content>
                    <div>
                        <Switch>
                            <Route  path= "../admin" component={Admin}/>
                            <Route  path= "../Event" component={Event}/>
                        </Switch>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    ©{new Date().getFullYear()} SFEVENT
                </Footer>
            </Layout>
        </Layout>
    </HashRouter>

    )

    }
}



