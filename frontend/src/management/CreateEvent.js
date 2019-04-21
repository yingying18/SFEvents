import React,{Component} from 'react';
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,DatePicker} from 'antd'
export default class CreateEvent extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    handleSubmit(){

    };

    render(){
        const { TextArea } = Input;
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

        const pickerStyle={
            width: '100%',
            minWidth: '600px'
        }

        return(
            <Form {...formItemLayout}  style={{margin: 20}} layout="block" onSubmit={this.handleSubmit}>

                <Form.Item>
                    <Input prefix={<Icon type="read" style={{ color: 'rgba(0,0,0,.25)' }} />} required placeholder="Title" />
                </Form.Item>

                <Form.Item >
                    <DatePicker showTime placeholder="From" style={pickerStyle} required/>
                </Form.Item>

                <Form.Item>
                    <DatePicker showTime placeholder="To" style={pickerStyle} required/>
                </Form.Item>
                <Form.Item>
                    <Input  placeholder="Location" style={pickerStyle}/>
                </Form.Item>
                <Form.Item>
                    <TextArea  placeholder="Description" style={pickerStyle}/>
                </Form.Item>

                <Form.Item>
                    <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Invitation" />
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