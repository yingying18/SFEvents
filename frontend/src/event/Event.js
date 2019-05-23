import './Event.css';
import React,{Component} from 'react';
import {Layout,Menu,Icon,Button, Card, message, Input,Modal,Form} from "antd";
import {Link,HashRouter,Route,Switch} from 'react-router-dom'
import LocationMap from '../management/LocationMap';
import axios from 'axios';
import Moment from "react-moment";

const {Header,Content,Sider,Footer} = Layout;
const { Meta } = Card;
const Search = Input.Search;

 class EventInfo extends Component {
  constructor(props) {
    super(props);
    this.state={
      eventData : {},
      visible:false
    }
  }

  onTextChange(e){
    this.setState({
      event:e.target.value
    })
  }
  search(){
    window.location.replace('/api/loadSearch?filter='+this.state.event)
  }

  populateEvent= () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const eventID = urlParams.get('eventID');
    if(eventID){
      axios.get('/api/fetchEvent?eventID='+eventID).then((result)=>{
        this.setState({eventData: result.data[0]});
      }).catch((err)=>{
        console.log(err)
      })
    }
  }

  reportEvent=() =>{

    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.put(`/api/report/event/${this.state.eventData.eid}`,values).then(()=>{
          message.success('Event reported successfully');
          this.setState({visible:false})
        }).catch((err)=>{
          console.log(err)
        })
      }
    });

    }
    showModal(){
      this.setState({visible:true})
    }
    componentWillMount() {
      this.populateEvent();
    }

    render() {
    const {getFieldDecorator} = this.props.form;
      console.log('event',this.state.eventData)
      return (
        <HashRouter>
        <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}>
        <Menu.Item key="2" style={{float:'left', fontSize: 24}}><b><a href="/" style={{color: 'inherit'}}>SF EVENTS</a></b></Menu.Item>
      {/*  <Menu.Item key="3" style={{float:'left', width:'70%'}}>
          <Search value={this.state.event} placeholder="Type to Search Event by Name, Description or Location" onSearch={this.search.bind(this)} onChange={this.onTextChange.bind(this)}/>
        </Menu.Item>*/}
        <Menu.Item key="4" style={{float:'right'}}><a href="/login"><b>Login</b></a></Menu.Item>
        <Menu.Item key="5" style={{float:'right'}}><a href="/signup"><b>Register</b></a></Menu.Item>
        <Menu.Item key="6" style={{float:'right'}} onClick={this.showModal.bind(this)}><b>Report</b></Menu.Item>
        <Menu.Item key="7" style={{float:'right'}}><a href="/login"><b>Book</b></a></Menu.Item>

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
        cover={<img alt="example" src={this.state.eventData.poster}  style={{ maxHeight: '200px'}}/>}
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
        <div style={{marginLeft: 24, marginRight: 24}}><b>Start Time:</b> <Moment format="HH:mm">  {this.state.eventData.start_time}</Moment> </div>
        <div style={{marginLeft: 24, marginRight: 24}}><b>End Time: </b> <Moment format="HH : mm"> {this.state.eventData.end_time}</Moment>  </div>
        <div style={{marginLeft: 24, marginRight: 24}}><b>Price: </b> {this.state.eventData.price} </div>
        <div style={{marginLeft: 24, marginRight: 24}}><b>Is Reported: </b> {(this.state.eventData.isReported == null || this.state.eventData.isReported == false) ? 'No' : 'Yes'}  </div>

        </div>


          <Modal
              title="Report Event"
              visible={this.state.visible}
              okText={"Report"}
              onOk={this.reportEvent.bind(this)}
              onCancel={()=>{this.setState({visible:false})}}
          >
            <Form>
              <Form.Item label={"Reason"}>
                {getFieldDecorator('reason', {
                  rules: [{ required: true, message: 'Please tell us why are want to report this event' }],
                })(
                    <Input.TextArea rows={5} placeholder={"please tell us why you want to report this event"} style={{width:'100%'}}/>,
                )}
              </Form.Item>
            </Form>

          </Modal>


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

export default Form.create()(EventInfo);