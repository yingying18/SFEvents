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
      event
    }
  }

    componentDidMount(){
        const urlParams = new URLSearchParams(window.location.search);
        const event = urlParams.get('event');
        axios.get('/api/search',{params:{search:event}})
        .then(({data})=>{
            this.setState({event:data})
        })
    }

  render() {
    const {data} = this.props;
    if (data) {
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
                      cover={<img alt="example" src={data.POSTER} />}
                    >
                    <Meta
                      title={data.title}
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
                        <b style={{marginLeft: 24}}>Date: </b> {data.date}<br/>
                        <b style={{marginLeft: 24}}>Location: </b> {data.location}<br/>
                        <div style={{marginLeft: 24, marginRight: 24}}><b>Event description: </b>{data.description}</div> <br/><br/> 
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
                        <b style={{marginLeft: 24}}>People attending:</b> {data.attending} people are attending this event<br/>
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
                        <div style={{marginLeft: 24, marginRight: 24}}><b>Event policy: </b>{data.policy}}</div> <br/><br/> 
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
}
