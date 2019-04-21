import React,{Component} from 'react';
import {Form, Input,Icon,Button} from 'antd';
import LocationMap from './LocationMap';

/**
 * This class shows event created by logged in user
 */
export default class MyEvent extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
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
            <Form {...formItemLayout}  style={{margin: 20}}  >

                <Form.Item style={{margin: 0}}>
                    <label><b>Event: </b></label>
                    <label>Birthday Party</label>
                </Form.Item>
                <Form.Item style={{margin: 0}} >
                    <label><b>Date: </b></label>
                    <label></label>
                </Form.Item>
                <Form.Item style={{margin: 0}} >
                    <label><b>Location: </b></label>
                    <label></label>
                </Form.Item>
                <Form.Item style={{margin: 0}} >
                    <label><b>Description: </b></label>
                    <TextArea  style={pickerStyle}    />
                </Form.Item>

                <Form.Item style={{marginTop: 10}}>
                    <LocationMap />
                </Form.Item>

                <Form.Item>
                    <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Invitation" />
                    <Button style={{float: 'right'}}
                            type="primary"
                            htmlType="submit">
                        Send
                    </Button>
                </Form.Item>

            </Form>
        );
    }

}
