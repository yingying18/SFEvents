import React,{Component} from 'react';
import {Form, Input, InputNumber, message, Upload, Icon, Row, Col, Checkbox, Button,DatePicker} from 'antd';
import axios from 'axios';
const { RangePicker } = DatePicker;

let posterpath = null;
const props = {
    name: 'file',
    action: '/api/poster',
    headers: {
        authorization: 'authorization-text',
    },
    multiple: false,
    onChange(info) {

        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
           posterpath = info.file.name;
           message.success('Poster uploaded successfully');
        } else if (info.status === 'error') {
            message.error(`${info.name} file upload failed.`);
        }
    },
};


class CreateEvent extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.poster = posterpath;
                axios.post('/api/insert',values).then((data)=>{
                    this.props.form.resetFields();
                    var list = document.getElementsByClassName("ant-upload-list-item");
                    list[0].parentNode.remove(list[0]);
                }).catch((err)=>{
                    console.log(err)
                })
            }
        });

    };


    render(){
        const { getFieldDecorator } = this.props.form;
        const { TextArea } = Input;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span:  6},
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18},
            },
        };

        const pickerStyle={
            width: '100%',
        }

        return(
            <Form {...formItemLayout} layout="block" style={{margin: 20,'margin-left':'15%', 'margin-right':'-5%',float: 'center'}}  onSubmit={this.handleSubmit}>

                <Form.Item>
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Enter an event title.' }],
                    })(
                    <Input name="title" prefix={<Icon type="read" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="Title" />
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('description', {
                        rules: [{ required: true, message: 'Enter a description of an event.' }],
                    })(
                        <TextArea name="description" rows="8" placeholder="Description" style={pickerStyle}/>
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('location', {
                        rules: [{ required: true, message: 'Enter location.' }],
                    })(
                        <Input name="location" placeholder="Location" style={pickerStyle}/>
                    )}
                </Form.Item>

                <Form.Item >
                    {getFieldDecorator('date_time', {
                        rules: [{ required: true, message: 'Enter event date time.' }],
                    })(
                      <RangePicker format={'MM/DD/YYYY hh:mm a'} showTime={{format:'hh:mm'}} style={pickerStyle} required/>
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('invitation', {
                        rules: [{ required: true, message: 'Enter email address(s) of attendees.' }],
                    })(
                        <Input prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Invitation" />
                    )}
                </Form.Item>

                <Row>

                    <Col sm={4}>
                        <Form.Item
                            label={'Is public'}
                        >
                            {getFieldDecorator('is_public', {

                            })(
                                <Checkbox style={{"margin-left": 10}}/>
                            )}

                        </Form.Item>
                    </Col>

                    <Col sm={10}>
                <Form.Item
                    label={'Maximum Attending: '}>
                    {getFieldDecorator('max_attending', {
                        initialValue: [50]

                    })(
                        <InputNumber  defaultValue={50} min={1} max={1000}  style={{margin: 10, width:'230px'}} placeholder="Attendees"/>
                    )}

                </Form.Item>
                    </Col>

                    <Col sm={10}>
                <Form.Item
                    label={'Price: '}  style={{float: "left", "margin-left": '-100px'}}>
                    {getFieldDecorator('price', {
                        initialValue: [50]

                    })(
                        <InputNumber  min={1} max={1000}  style={{margin: 10, width:'230px'}} placeholder="Price"/>
                    )}

                </Form.Item>
                    </Col>
                </Row>


                <Form.Item>
                    <Upload {...props}>
                        <Button>
                            <Icon type="upload" /> Click to Upload Event Poster
                        </Button>
                    </Upload>
                </Form.Item>

                <Form.Item>
                    <Button style={{float: 'right'}}
                        type="primary"
                        htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
        );
    }

}

export default Form.create({ name: 'createEvent' })(CreateEvent)