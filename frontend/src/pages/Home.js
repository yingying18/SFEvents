import React,{Component} from 'react';
import {Input,Layout,Button,Modal,Form,Row,Col,DatePicker,Checkbox} from 'antd';
import axios  from 'axios';
import Event from '../shared/Event'
const Search = Input.Search;
const {Header,Content,Footer} = Layout;

 class Home extends Component{
    constructor(props) {
        super(props);
        this.state={
            visible:false,
            events:[]
        }
    }
    handleOk(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post('/api/insert',values).then((data)=>{
                    this.setState({visible:false})
                }).catch((err)=>{
                     console.log(err)
                })
            }
        });
    }
    handleCancel(){
        this.setState({visible:false})
    }
    showModal(){
        this.setState({visible:true})
    }
    onSearch(text){
        axios.get('/api/search',{params:{search:text}}).then(({data})=>{
                this.setState({events:data})

        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const {events} = this.state;
        return (

            <div style={{margin:20}}>
                <Layout >
                <Header style={{background: '#fff', padding: 0}}>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Search
                        placeholder="Input search text"
                        onSearch={this.onSearch.bind(this)}
                    />
                    <Button onClick={this.showModal.bind(this)}>
                        New
                    </Button>
                    </div>
                </Header>
                    <Content>
                        <Row gutter={16}>
                            {events.map((item,i)=>{

                                return  <Col style={{marginTop:20}} lg={6} md={8} xs={12}>  <Event data={item} key={i}/></Col>
                            })}
                            <Event/>
                        </Row>
                    </Content>
                </Layout>

                <Modal
                    maskClosable={false}
                    title="New Event"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <Form>
                        <Form.Item>
                            {getFieldDecorator('eventTitle', {
                                rules: [{ required: true, message: 'Please enter event title!' }],
                            })(
                                <Input  placeholder="Title" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('description', {
                                rules: [{ required: true, message: 'Please enter event description!' }],
                            })(
                                <Input.TextArea  placeholder="Description"/>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('dateTime', {
                                rules: [{ required: true, message: 'Please enter event date time!' }],
                            })(
                                <DatePicker style={{width:'100%'}} format={'MM/DD/YYYY hh:mm a'} showTime={{format:'hh:mm'}}/>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('location', {
                                rules: [{ required: true, message: 'Please enter location' }],
                            })(
                                <Input  placeholder="location" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('duration', {
                                rules: [{ required: true, message: 'Please enter duration' }],
                            })(
                                <Input  placeholder="Duration" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('price', {
                                rules: [{ required: true, message: 'Please enter event price' }],
                            })(
                                <Input  placeholder="price"  type={'number'}/>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('maxAttending', {
                                rules: [{ required: true, message: 'Please enter the max attendees number' }],
                            })(
                                <Input  placeholder="Max number of attendees" type={'number'} />
                            )}
                        </Form.Item>
                        <Form.Item
                            label={'Is public event? '}
                        >
                            {getFieldDecorator('isPublic', {

                            })(
                                <Checkbox />
                            )}

                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }

}

export default  Form.create({ name: 'newEvent' })(Home)