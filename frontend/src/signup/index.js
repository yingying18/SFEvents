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
                passport.use('local-signup', new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                    usernameField : 'email',
                    passwordField : 'password',
                    passReqToCallback : true // allows us to pass back the entire request to the callback
                },
                function(req, email, password, done) {

                    // find a user whose email is the same as the forms email
                    // we are checking to see if the user trying to login already exists
                    User.findOne({ 'local.email' :  email }, function(err, user) {
                        // if there are any errors, return the error
                        if (err) { return done(err); }

                        // check to see if theres already a user with that email
                        if (user) {
                            return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                        } else {

                            // if there is no user with that email
                            // create the user
                            var newUser = new User();

                            // set the user's local credentials
                            newUser.local.email = email;
                            newUser.local.password = newUser.generateHash(password);

                            // save the user
                            newUser.save(function(err) {
                                if (err)
                                    throw err;
                                return done(null, newUser);
                            });
                        }

                    });
                }
                ));
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row style={{marginTop:'5%'}}>
                <center><img src="http://www.freedomhouse.ca/wp-content/uploads/Register-Icon.png" id="icon" alt="" width="200" height="200" /></center>
                <h1 style={{textAlign: 'center'}}><font size="+10">Register</font></h1>
                <Col lg={8} offset={8}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Email can not be empty!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                            )}
                        </Form.Item>

                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Password can not be empty!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('confirmPassword', {
                                rules: [{ required: true, message: 'Password can not be empty!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('privacy', {
                                rules: [{ required: true, message: 'Checkbox can not be empty!' }],
                            })(
                                <div>
                                    <Input type="checkbox" name="policy" value="policy"/> By registering , you agree to teh SFEVENTS.com <a href={'/privacy'}>Privacy policies </a>
                                </div>
                            )}
                        </Form.Item>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                            <Button type="primary" htmlType="submit" style={{width:'100%'}}className="login-form-button">
                               Register
                            </Button>
                        </div>
                        <div style={{textAlign:'center',marginTop:15}}>
                            Already have an account ?  <a href="/login">login now!</a>
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