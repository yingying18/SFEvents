import React,{Component} from 'react';
import {Form, Input, InputNumber, message, Upload, Icon, Row, Col, Checkbox, Button,DatePicker} from 'antd';
import axios from 'axios';
const { RangePicker } = DatePicker;
import moment from 'moment';
import LocationMap from './LocationMap';

const google = window.google;

class CreateEvent extends Component{
    constructor(props) {
        super(props);
        this.state= {
            eventAction: "Send Invitation",
            data: {},
            isPublic : false,
            dataToUpdate: {}
        }

    }

    sendInvitations =(e) =>{
        e.preventDefault();
        axios.post('/api/sendMail',this.state.dataToUpdate).then((data)=>{
            message.success('Event invitation has been sent successfully.');
        }).catch((err)=>{
            message.success('Fail to send invitation');
            console.log(err)
        })
    }

    componentDidMount(){
        let updateData = this.props.data;
        console.log(updateData);
        if(updateData && Object.keys(updateData).length > 0){
            this.props.form.setFieldsValue(
                updateData);

            this.setState({isPublic: updateData.is_public.data[0] == 1 ? true : false});
            this.setState({dataToUpdate: updateData});

            this.props.form.setFieldsValue({date_time: [
                    moment(updateData.start_time),
                    moment (updateData.end_time)
                ]});
        }
        this.props.form.setFieldsValue({is_public: this.state.isPublic});
        this.setStyle();
       // alert()

    }

    setStyle(){

        let inputElement = document.getElementsByClassName("ant-calendar-picker-input");
        inputElement[0].style.backgroundColor = "aliceblue";
        inputElement[0].style.border = 'none';
        inputElement[0].style.textAlign = 'left';


        let dateInputs = document.getElementsByClassName("ant-calendar-range-picker-input");
        dateInputs[0].style.textAlign = 'left';
        dateInputs[1].style.textAlign = 'left';
        dateInputs[0].style.fontWeight = 'bold';
        dateInputs[1].style.fontWeight = 'bold';
        dateInputs[0].style.width = '160px';

        let icon = document.getElementsByClassName("ant-calendar-picker-icon");
        icon[0].style.display ='none';

    }

    render(){

        const { getFieldDecorator } = this.props.form;
        const { TextArea } = Input;
        const formItemLayout = {
            labelCol: {
                xs: { span: 0 },
                sm: { span:  0}
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 24},
            },
        };

        const pickerStyle={
            width: '100%',
        }
        const formItemStyle ={
            "margin-bottom" : "5px",
            "pointer-events" : "none"
        }

        const textInput ={
            'background-color' : 'aliceblue',
            border:'none',
            width: '80%'
        }

        return(


            <Form {...formItemLayout} layout="block" style={{margin: 5,'margin-left':'10%', 'margin-right':'-5%',float: 'center', width: '80%', 'background-color': 'aliceblue', color: 'blue !important', fontSize : 24,  boxShadow: '10px 10px 8px #888888'}}>


                <Form.Item style={formItemStyle}>

                    <Col xs={24} sm={24} style={{'text-align': 'center'}}>
                        <label style={{fontSize : 36,'font-family': 'cursive'}} >Invitation</label>
                    </Col>
                </Form.Item>


                <Form.Item style={formItemStyle}>

                    <Col xs={12} sm={12} style={{'text-align': 'right'}}>
                        <label  style={{fontSize : 16}}><b>Event: </b></label>
                    </Col>
                    <Col xs={12} sm={12}>
                        {getFieldDecorator('title', {
                        })(
                            <Input name="title" style={{ 'background-color' : 'aliceblue', border:'none', width: '90%', fontSize : 16, fontWeight: "bold",  marginLeft : 20, marginRight : 20}} readOnly/>
                        )}
                    </Col>
                </Form.Item>

                <Form.Item style={formItemStyle}>
                    <Col xs={12} sm={12} style={{'text-align': 'right'}}>
                        <label style={{fontSize : 16}}><b>Description: </b></label>
                    </Col>
                    <Col xs={12} sm={12}>
                        {getFieldDecorator('description')(
                            <TextArea name="description" style={{ 'background-color' : 'aliceblue', border:'none', width: '90%', fontSize : 16, fontWeight: "bold", marginLeft : 20,marginRight : 20}} readOnly/>
                        )}
                    </Col>
                </Form.Item>

                <Form.Item style={formItemStyle}>
                    <Col xs={12} sm={12} style={{'text-align': 'right' }}>
                        <label style={{fontSize : 16}}><b>Time: </b></label>
                    </Col>
                    <Col xs={12} sm={12}>
                        {getFieldDecorator('date_time', {
                            rules: [{ required: true, message: 'Enter event date time.' }],
                        })(
                            <RangePicker format={'MM/DD/YYYY hh:mm a'} showTime={{format:'hh:mm'}} style={{'background-color' : 'aliceblue', border:'none', width: '90%',  fontSize : 16, fontWeight: "bold", marginLeft : 20, marginRight : 20}} required/>
                        )}
                    </Col>
                </Form.Item>


                <Form.Item style={formItemStyle}>
                    <Col xs={12} sm={12} style={{'text-align': 'right'}}>
                        <label style={{fontSize : 16}}><b>Is Public: </b></label>
                    </Col>
                    <Col xs={12} sm={12}>
                        {getFieldDecorator('is_public', {

                        })(
                            <Input name="is_public" style={{ 'background-color' : 'aliceblue', border:'none', width: '90%',  fontSize : 16, fontWeight: "bold", marginLeft : 20, marginRight : 20}} value readOnly/>
                        )}
                    </Col>
                </Form.Item>

                <Form.Item style={formItemStyle} >
                    <Col xs={12} sm={12} style={{'text-align': 'right'}}>
                        <label style={{fontSize : 16}}><b>Maximum Attending: </b></label>
                    </Col>
                    <Col xs={12} sm={12}>
                        {getFieldDecorator('max_attending', {

                        })(
                            <InputNumber readOnly defaultValue={50} min={1} max={1000}  style={{margin: 10, width:'230px','background-color' :'aliceblue', border: 'none',  fontSize : 16, fontWeight: "bold",marginLeft : 20 }}/>
                        )}
                    </Col>
                </Form.Item>

                <Form.Item style={formItemStyle}>
                    <Col xs={12} sm={12} style={{'text-align': 'right'}}>
                        <label style={{fontSize : 16}}><b>Price: </b></label>
                    </Col>
                    <Col xs={12} sm={12}>
                        {getFieldDecorator('price', {

                        })(
                            <InputNumber readOnly  min={1} max={1000}  style={{margin: 10, width:'230px','background-color' :'aliceblue',border: 'none', fontSize : 16,fontWeight: "bold",marginLeft : 20 }} />
                        )}
                    </Col>
                </Form.Item>

                <Form.Item style={formItemStyle}>
                    <Col xs={12} sm={12} style={{'text-align': 'right'}}>
                        <label style={{fontSize : 16}} ><b>Invitation: </b></label>
                    </Col>
                    <Col xs={12} sm={12} style={{display : 'block'}}>
                        {getFieldDecorator('invitations')(
                            <TextArea rows={2} readOnly style={{'background-color' : 'aliceblue',width: '90%', border: 'none',  fontSize : 16, fontWeight: "bold", marginLeft : 20,  marginRight : 20, textOverflow: 'ellipsis', display: 'block', overflow: 'hidden' }}   />
                        )}
                    </Col>
                </Form.Item>

                <Form.Item style={{"margin-bottom" : "5px", 'margin-left': '20%'}}>

                   <Col xs={24} sm={24} style={{'text-align': 'center', height: '250px'}}>
                       <LocationMap style={{'margin-left': '20%'}} location={this.state.dataToUpdate.location}/>
                    </Col>


                </Form.Item>

                <Form.Item style={{"margin-top" : "10px"}}>

                    <Col xs={24} sm={24}>
                        <Button style={{ width: '200px', marginLeft : '45%' }}
                                type="primary"
                                htmlType="submit" onClick={this.sendInvitations}>
                            {this.state.eventAction}
                        </Button>
                    </Col>


                </Form.Item>
            </Form>
        );
    }

}


export default Form.create({ name: 'createEvent' })(CreateEvent)