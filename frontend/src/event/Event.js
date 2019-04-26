import './Event.css';
import React,{Component} from 'react';
import {Layout,Menu,Icon,Button, Card} from "antd";
import {Link,HashRouter,Route,Switch} from 'react-router-dom'
import LocationMap from './LocationMap';

const {Header,Content,Sider,Footer} = Layout;

const { Meta } = Card;

export default class EventInfo extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  render() {
    return (
        <HashRouter>
          <Layout style={{ minHeight: '100vh' }}>
              <Layout>
                <Header style={{ height: 32, background: '#fff', padding: 0}} >
                  <Button href="../signup/signup" style={{float: 'right',  marginRight: 48}}>Register</Button>
                  <Button href="" style={{float: 'right',  marginRight: 16}}>Report</Button>
                </Header>
                <Content >
                  <div>
                  <Card
                    hoverable
                    style={{ 
                      width: '80%',
                      marginTop: 48,
                      marginBottom: 48,
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                    cover={<img alt="example" src="https://idp.sfsu.edu/idp/images/SFState_Logo.png" />}
                  >
                  <Meta
                    title="SFSU Event title"
                  />
                  </Card>
                  </div>
                  <div>
                    <div style={{
                        width:'45%',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        marginBottom: 48,
                        marginLeft: 48,
                        backgroundColor:'#FFFFFF',
                        minHeight: 360,
                        borderColor: '#a6a7a8',
                        float: 'left'
                      }}>
                      <b style={{marginLeft: 24}}>Date: </b> 04 Sept. 2021 - 3:30 p.m.<br/>
                      <b style={{marginLeft: 24}}>Location: </b> 1600 Holloway Ave, San Francisco, CA 94132<br/>
                      <div style={{marginLeft: 24, marginRight: 24}}><b>Event policy: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div> <br/><br/> 
                      <LocationMap/>
                    </div>
                    <div style={{
                        width:'45%',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        marginBottom: 16,
                        marginRight: 48,
                        backgroundColor:'#FFFFFF',
                        minHeight: 32,
                        borderColor: '#a6a7a8',
                        float: 'right'
                      }}>
                      <b style={{marginLeft: 24}}>People attending:</b> +200 people are attending this event<br/>
                    </div>
                  </div>
                    <div style={{
                        width:'45%',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        marginBottom: 48,
                        marginRight: 48,
                        backgroundColor:'#FFFFFF',
                        minHeight: 312,
                        borderColor: '#a6a7a8',
                        float: 'right'
                      }}>
                      <div style={{marginLeft: 24, marginRight: 24}}><b>Event policy: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div> <br/><br/> 
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