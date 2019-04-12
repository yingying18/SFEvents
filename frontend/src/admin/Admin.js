import React,{Component} from 'react';
import {Layout,Menu,Icon} from "antd";
import {Link,HashRouter,Route,Switch} from 'react-router-dom'
import ReportedUser from './ReportedUser'
import ReportedEvent from './ReportedEvent'
const {Header,Content,Sider,Footer} = Layout;

export default class Admin extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render(){
        return (
            <HashRouter>
                    <Layout style={{ minHeight: '100vh' }}>
                        <Sider
                            style={{zIndex:10000}}
                            breakpoint="lg"
                            collapsedWidth="0"
                            onBreakpoint={(broken) => { console.log(broken); }}
                            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                        >
                            <div className="logo" >
                            </div>
                            <Menu onClick={()=>{}} mode="vertical" theme={'dark'}>
                                <Menu.Item key={'reportedUsers'} >
                                    <Link to={'/admin/report/users'}>
                                        <Icon type="user" />
                                        <span>Reported Users</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key={'reportedEvents'} >
                                    <Link to={'/admin/report/events'}>
                                        <Icon type="form" />
                                        <span>Reported Events</span>
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>

                        <Layout>
                            <Header style={{ background: '#fff', padding: 0}} >


                            </Header>
                            <Content >
                                <div>
                                    <Switch>
                                        <Route exact path={'/admin/report/users'} component={ReportedUser}/>
                                        <Route exact path={'/admin/report/events'} component={ReportedEvent}/>
                                    </Switch>
                                </div>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                                ©{new Date().getFullYear()} SFEVENT
                            </Footer>
                        </Layout>
                    </Layout>
            </HashRouter>

        )
    }

}