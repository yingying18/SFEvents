import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import {
    Form, Icon, Input, Button, Checkbox,Row,Col
} from 'antd';

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
           <Row style={{marginTop:'20%'}}>
               <Col lg={8} offset={8}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Username can not be empty!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Password can not be empty!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </Form.Item>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <a className="login-form-forgot" href="/password/recovery">Forgot password</a>
                        <Button type="primary" htmlType="submit" style={{width:'50%'}}className="login-form-button">
                            Log in
                        </Button>
                    </div>
                    <div style={{textAlign:'center',marginTop:10}}>
                        Don't have an account ?  <a href="/signup">register now!</a>
                    </div>
                </Form>
               </Col>
           </Row>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

ReactDOM.render(
  <WrappedNormalLoginForm/>,
  document.getElementById('app')
);

module.hot.accept();