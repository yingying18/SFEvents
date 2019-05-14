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
            dataToUpdate: null
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



    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.poster = posterpath;

                if(this.state.eventAction == "Create"){
                    axios.post('/api/insert',values).then((data)=>{
                        //  this.props.form.resetFields();
                        var list = document.getElementsByClassName("ant-upload-list-item");
                        if( list[0])
                            list[0].parentNode.remove(list[0]);
                        message.success('Event created successfully.');
                    }).catch((err)=>{
                        console.log(err)
                    })
                }else{
                    values.eid = this.state.dataToUpdate.eid;
                    axios.post('/api/updateEvent',values).then((data)=>{
                        //  this.props.form.resetFields();
                        var list = document.getElementsByClassName("ant-upload-list-item");
                        if(list[0])
                             list[0].parentNode.remove(list[0]);
                        message.success('Event updated successfully.');

                    }).catch((err)=>{
                        console.log(err)
                    })

                }

            }
        });

    };

    handleEdit = (updateData) => {

    }

    componentDidMount(){
        let updateData = this.props.data;
        console.log(updateData);
        if(updateData && Object.keys(updateData).length > 0){
            this.handleEdit(updateData);
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

        let inputElement = document.getElementsByClassName("ant-calendar-picker-input");
        inputElement[0].style.backgroundColor = "#f0f2f5";
        inputElement[0].style.border = 'none';
        inputElement[0].style.textAlign = 'left'

        let dateInputs = document.getElementsByClassName("ant-calendar-range-picker-input");
        dateInputs[0].style.textAlign = 'left';
        dateInputs[1].style.textAlign = 'left';

        let icon = document.getElementsByClassName("ant-calendar-picker-icon");
        icon[0].style.display ='none';


        /*if(dateInputs){
            for(let i in dateInputs){
                dateInputs[i].style.textAlign = 'left';
            }

        }*/

       // var geocoder = new google.maps.Geocoder();
        //var address = document.getElementById("address").value;
        /*geocoder.geocode( { 'address': updateData.location}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK)
            {
                // do something with the geocoded result
                //
                alert(results[0].geometry.location.latitude,
                results[0].geometry.location.longitude);
            }
        })*/


    }


    render(){

        const { getFieldDecorator } = this.props.form;
        const { TextArea } = Input;
        const formItemLayout = {
            labelCol: {
                xs: { span: 6 },
                sm: { span:  6},
            },
            wrapperCol: {
                xs: { span: 18 },
                sm: { span: 18},
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
            'background-color' : '#f0f2f5 !important',
            border:'none',
            width: '100%'
        }

        return(


        <Form {...formItemLayout} layout="block" style={{margin: 5,'margin-left':'15%', 'margin-right':'-5%',float: 'center'}}   onSubmit={this.handleSubmit}>

                <Form.Item style={formItemStyle}>

                    <Col xs={4} sm={4}>
                        <label><b>Event: </b></label>
                    </Col>
                    <Col xs={20} sm={20}>
                        {getFieldDecorator('title', {
                        })(
                            <Input name="title" style={{ 'background-color' : '#f0f2f5', border:'none', width: '100%'}} readOnly/>
                        )}
                    </Col>
                </Form.Item>

                <Form.Item style={formItemStyle}>
                    <Col xs={4} sm={4}>
                        <label><b>Description: </b></label>
                    </Col>
                    <Col xs={20} sm={20}>
                        {getFieldDecorator('description')(
                            <TextArea name="description" style={{ 'background-color' : '#f0f2f5', border:'none', width: '100%', resize: 'none'}} readOnly/>
                        )}
                    </Col>
                </Form.Item>

                <Form.Item style={formItemStyle}>
                    <Col xs={4} sm={4}>
                        <label><b>Time: </b></label>
                    </Col>
                    <Col xs={20} sm={20}>
                        {getFieldDecorator('date_time', {
                            rules: [{ required: true, message: 'Enter event date time.' }],
                        })(
                            <RangePicker format={'MM/DD/YYYY hh:mm a'} showTime={{format:'hh:mm'}} style={{'background-color' : '#f0f2f5', border:'none', width: '100%'}} required/>
                        )}
                    </Col>
                </Form.Item>


                <Form.Item style={formItemStyle}>
                    <Col xs={4} sm={4}>
                        <label><b>Is Public: </b></label>
                    </Col>
                    <Col xs={20} sm={20}>
                        {getFieldDecorator('is_public', {

                        })(
                            <Input name="is_public" style={{ 'background-color' : '#f0f2f5', border:'none', width: '100%'}} value readOnly/>
                        )}
                    </Col>
                </Form.Item>

                <Form.Item style={formItemStyle} >
                    <Col xs={4} sm={4}>
                        <label><b>Maximum Attending: </b></label>
                    </Col>
                    <Col xs={20} sm={20}>
                        {getFieldDecorator('max_attending', {

                        })(
                            <InputNumber readOnly defaultValue={50} min={1} max={1000}  style={{margin: 10, width:'230px','background-color' :'#f0f2f5', border: 'none' }}/>
                        )}
                    </Col>
                </Form.Item>

                <Form.Item style={formItemStyle}>
                    <Col xs={4} sm={4}>
                        <label><b>Price: </b></label>
                    </Col>
                    <Col xs={20} sm={20}>
                        {getFieldDecorator('price', {

                        })(
                            <InputNumber readOnly  min={1} max={1000}  style={{margin: 10, width:'230px','background-color' :'#f0f2f5',border: 'none' }} />
                        )}
                    </Col>
                </Form.Item>

                <Form.Item style={{"margin-bottom" : "5px"}}>
                    <Col xs={4} sm={4}>
                        <label><b>Location: </b></label>
                    </Col>
                    <Col xs={20} sm={20}>
                       <LocationMap />
                    </Col>
                </Form.Item>


                <Form.Item style={formItemStyle}>
                    <Col xs={4} sm={4}>
                        <label><b>Invitation: </b></label>
                    </Col>
                    <Col xs={20} sm={20}>
                        {getFieldDecorator('invitations')(
                            <Input readOnly style={{'background-color' : '#f0f2f5', border: 'none'}}   />
                        )}
                    </Col>
                </Form.Item>

                <Form.Item >
                    <Button style={{float: 'right'}}
                        type="primary"
                        htmlType="submit" onClick={this.sendInvitations}>
                          {this.state.eventAction}
                    </Button>
                </Form.Item>
            </Form>
        );
    }

}


export default Form.create({ name: 'createEvent' })(CreateEvent)