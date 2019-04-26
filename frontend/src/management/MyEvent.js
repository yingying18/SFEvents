import React,{Component} from 'react';
import {Form, Input,Icon,Button, Row, Col, DatePicker} from 'antd';
import LocationMap from './LocationMap';
import moment from 'moment';

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
            <Form {...formItemLayout}  style={{margin: 10}}  >
                <Form.Item style={{margin: 0}}>
                    <Button style={{float: 'right'}}
                            type="primary"
                            htmlType="submit">
                        Update
                    </Button>
                </Form.Item>

                <Form.Item style={{margin: 0}}>
                    <Row>
                        <Col xs={2} sm={2}>
                            <label><b>Event: </b></label>
                        </Col>
                        <Col xs={22} sm={22}>
                            <Input id="eventName" prefix={<Icon type="read" style={{ color: 'rgba(0,0,0,.25)' }} />} required defaultValue={"Birthday Party"}/>
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item style={{margin: 0}} >
                    <Row>
                        <Col xs={2}>
                            <label><b>Date: </b></label>
                        </Col>
                        <Col xs={22}>
                            <Row>
                                <DatePicker showTime placeholder="From" style={pickerStyle}  style={{width : '353px'}} defaultValue={moment('2019-06-06 18-00', 'YYYY-MM-DD HH-mm')}required/>
                                <label style={{margin : 10}}>To</label>
                                <DatePicker showTime placeholder="To" style={pickerStyle}defaultValue={moment('2019-06-06 21-00', 'YYYY-MM-DD HH-mm')}  style={{width : '353px'}} required/>

                            </Row>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item style={{margin: 0}} >
                    <Row>
                        <Col xs={2}>
                            <label><b>Location: </b></label>
                        </Col>
                        <Col xs={22}>
                            <Input id="location" defaultValue={"1000 Westlake, SF"}/>
                        </Col>
                    </Row>
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
