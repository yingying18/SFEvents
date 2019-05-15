import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Layout, Input, Row, Col, Menu} from 'antd';
import axios from 'axios';
import Event from './Event'
const {Header,Content} = Layout
const Search = Input.Search;
import 'antd/dist/antd.css';

 class EventList extends Component{
    constructor(props) {
        super(props);
        this.state={
                events:[]
        }
    }
    componentDidMount(){

        const urlParams = new URLSearchParams(window.location.search);
        const event = urlParams.get('filter');
        console.log(event)
        axios.get('/api/search?filter='+event).then(({data})=>{
            this.setState({events:data})

        }).catch((err)=>{
            console.log(err)
        })

    }
    onSearch(){

    }
    render(){
        const {events} = this.state
        return (

            <div style={{margin:20}}>
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{ lineHeight: '64px' }}>
                        <Menu.Item key="2" style={{float:'left', fontSize: 24}}><b><a href="/home" style={{color: 'inherit'}}>SF EVENTS</a></b></Menu.Item>
                        <Menu.Item key="5" style={{float:'right'}}><a href="/login"><b>Login</b></a></Menu.Item>
                        <Menu.Item key="6" style={{float:'right'}}><a href="/signup"><b>Register</b></a></Menu.Item>
                    </Menu>
                </Header>
                <Layout >
                    {/*<Header style={{background: '#fff', padding: 0}}>*/}
                    {/*    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>*/}
                    {/*        <Search*/}
                    {/*            placeholder="Input search text"*/}
                    {/*            onSearch={this.onSearch.bind(this)}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</Header>*/}
                    <Content>
                        <Row gutter={16}>
                            {events.map((item,i)=>{

                                return  <Col style={{marginTop:20}} lg={6} md={8} xs={12} key={i}>  <Event data={item} key={i}/></Col>
                            })}
                            <Event/>
                        </Row>
                    </Content>
                </Layout>
            </div>
        )
    }

}

ReactDOM.render(
  <EventList/>,
  document.getElementById('app')
);

module.hot.accept();