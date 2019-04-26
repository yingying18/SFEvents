import React,{Component} from 'react';
import {Layout, Menu, Row,Col, Card, Form, Input, Icon, DatePicker, Dropdown,Button} from 'antd';
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
            const formItemLayout = {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 8 },
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 16 },
                },
            };

;

            return (

    <HashRouter>
        <Layout className="layout" style={{height:'100vh'}}>
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="2" style={{float:'left'}}><a href="/">SFEVENTS</a></Menu.Item>

                    <Menu.Item key="3" style={{float:'right'}}><a href="/login">Login</a></Menu.Item>

                </Menu>
            </Header>
            <Layout>
                    <Row>
                    <Col>
                        <Card
                            hoverable
                            cover={<img alt="example" src="/events.jpg"  style={{height:'60vh',width:'auto',margin:'auto'}}/>}
                        >
                        </Card>
                    </Col>
                        <Col>
                            <Form {...formItemLayout}  style={{margin: 20}} >
                            <Row gutter={6}>
                                <Col lg={5} md={12}>
                                <Form.Item style={{width:'100%'}}>
                                    <DatePicker style={{width:'100%'}}showTime placeholder="From" required/>
                                </Form.Item>
                                </Col>
                                <Col lg={5} md={12}>
                                <Form.Item style={{width:'100%'}}>
                                    <DatePicker style={{width:'100%'}} showTime placeholder="To"required/>
                                </Form.Item>
                                </Col>

                                <Col lg={5} md={12}>
                                <Form.Item style={{width:'100%'}}>
                                    <Input  style={{width:'100%'}} placeholder="City" />
                                </Form.Item>
                                </Col>
                                <Col lg={5} md={12}>
                                <Form.Item style={{width:'100%'}}>
                                    <Input style={{width:'100%'}}  placeholder="Type to Search Event" />
                                </Form.Item>
                                </Col>
                                <Col lg={4} md={12}>
                                <Form.Item>
                                    <Button style={{float: 'right'}}
                                            type="primary"
                                            htmlType="submit">
                                        Search
                                    </Button>
                                </Form.Item>
                                </Col>
                            </Row>

                            </Form>
                        </Col>
                    </Row>
                <Footer>
                    <div style={{"text-align": "center"}}>
                    @2019 SFEvents.com <a href="/privacy">privacy Policy</a>
                    </div>
                </Footer>



            </Layout>

        </Layout>
    </HashRouter>

    )

    }
}



