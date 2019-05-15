import './Event.css';
import React,{Component} from 'react';
import {Layout,Menu,Icon,Button, Card, message} from "antd";
import {Link,HashRouter,Route,Switch} from 'react-router-dom'
import LocationMap from '../management/LocationMap';
import axios from 'axios';
import Moment from "react-moment";

const {Header,Content,Sider,Footer} = Layout;

const { Meta } = Card;

export default class EventInfo extends Component {
  constructor(props) {
    super(props);
    this.state={
        eventData : {}
    }

  }

  populateEvent= () =>{
      const urlParams = new URLSearchParams(window.location.search);
      const eventID = urlParams.get('eventID');
      if(eventID){
          axios.get('/api/fetchEvent?eventID='+eventID).then((result)=>{
              this.setState({eventData: result.data[0]});
              alert(this.state.eventData.location);
          }).catch((err)=>{
              console.log(err)
          })
      }
  }

  reportEvent=() =>{
      //alert(this.state.eventData.eid);
      axios.put(`/api/report/event/${this.state.eventData.eid}`).then(()=>{
          message.success('Event reported successfully');
      }).catch((err)=>{
          console.log(err)
      })
  }

  componentWillMount() {
      this.populateEvent();
  }

    render() {

    return (
        <HashRouter>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}>
                <Menu.Item key="2" style={{float:'left', fontSize: 24}}><b><a href="/home" style={{color: 'inherit'}}>SF EVENTS</a></b></Menu.Item>
                <Menu.Item key="3" style={{float:'right'}}><a href="/login"><b>Login</b></a></Menu.Item>
                <Menu.Item key="4" style={{float:'right'}}><a href="/signup"><b>Register</b></a></Menu.Item>
                <Menu.Item key="5" style={{float:'right'}} onClick={this.reportEvent}><b>Report</b></Menu.Item>
                <Menu.Item key="6" style={{float:'right'}}><a href="/login"><b>Book</b></a></Menu.Item>

            </Menu>

          <Layout>
              <Layout>
                <Content >
                  <div>
                  <Card
                    hoverable
                    style={{ 
                      width: '80%',
                      marginTop: 40,
                      marginBottom: 40,
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                    cover={<img alt="example" src="/event2.jpg"  style={{ maxHeight: '200px'}}/>}
                  >
                  <Meta
                    title={this.state.eventData.title}
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
                      <LocationMap width={"45%"} height = {"360px"} location={this.state.eventData.location}/>
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
                      <b style={{marginLeft: 24}}>People attending:</b> {this.state.eventData.max_attending} people are attending this event<br/>
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
                        <div style={{marginLeft: 24, marginRight: 24}}><b>Description: </b>  {this.state.eventData.description}</div>
                        <div style={{marginLeft: 24, marginRight: 24}}><b>Date: </b> <Moment format="YYYY/MM/DD">  {this.state.eventData.start_time}</Moment></div>
                        <div style={{marginLeft: 24, marginRight: 24}}><b>Start Time: </b> <Moment format="HH : mm">  {this.state.eventData.start_time}</Moment> </div>
                        <div style={{marginLeft: 24, marginRight: 24}}><b>End Time: </b> <Moment format="HH : mm"> {this.state.eventData.end_time}</Moment>  </div>
                        <div style={{marginLeft: 24, marginRight: 24}}><b>Price: </b> {this.state.eventData.price} </div>
                        <div style={{marginLeft: 24, marginRight: 24}}><b>Is Reported: </b> {(this.state.eventData.isReported == null || this.state.eventData.isReported == false) ? 'No' : 'Yes'}  </div>

                  </div>
                </Content>
                  <Footer style={{textAlign: 'center'}}>
                      @2019 SFEvents.com <a href="/privacy">privacy Policy</a>
                  </Footer>
                </Layout>
          </Layout>
        </HashRouter>
      )
  }
}