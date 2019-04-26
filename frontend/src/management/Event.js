import React,{Component} from 'react';
import {Layout,Menu,Icon} from "antd";
import {Link,HashRouter,Route,Switch} from 'react-router-dom'
import CreateEvent from './CreateEvent'
import MyEvent from './MyEvent'
const {Header,Content,Sider,Footer} = Layout;
const SubMenu = Menu.SubMenu;

/**
 * This class creates new event
 */
export default class Event extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render(){
        const myEvents =[{name: 'Birthday Party'}]
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
                        <Menu onClick={()=>{}} mode="inline" theme={'dark'}  defaultOpenKeys={['sub1']} defaultSelectedKeys={['menu1']}>
                            <Menu.Item key="menu1">
                                <Link to={'/management/createevent'}>
                                    <Icon type="plus" />
                                    <span>New Event</span>
                                </Link>
                            </Menu.Item>

                            <SubMenu key="sub1" title={<span><Icon type="switcher" /><span>My Events</span></span>}>
                                {myEvents.map((myevent, index) =>
                                    <Menu.Item key={index} >
                                        <Link to={'/management/myevent'}>
                                            <span>{myevent.name}</span>
                                        </Link>
                                    </Menu.Item>
                                )}
                            </SubMenu>


                        </Menu>
                    </Sider>

                    <Layout>
                        <Header style={{ background: '#fff', padding: 0}} >
                        </Header>
                        <Content >
                            <div>
                                <Switch>
                                    <Route exact path={'/management/createevent'} component={CreateEvent}/>
                                    <Route exact path={'/management/myevent'} component={MyEvent}/>
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