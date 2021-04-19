import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {login as toLogin,register} from '../utils/request';
export default class login extends Component {
    state={
        isRegister:false //是否正在注册
    }
    onFinish =async (values) => {
        console.log(values);
        delete values.remember;
        const data = await toLogin(values);
        console.log(data);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    handleRegister = async ()=>{
        console.log(this.loginForm.getFieldsValue());
        const values = this.loginForm.getFieldsValue();
        if(this.state.isRegister){
            const data = await register(values);
            console.log(data);
        }
        this.loginForm.resetFields();
        this.setState({
            isRegister:!this.state.isRegister
        })
    }


    render() {
        return (
            <div className={'login'}>
                <Form
                    ref={ref=>this.loginForm = ref}
                    size={'large'}
                    labelCol={{span:4}}
                    wrapperCol={{span: 16}}
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    {
                        this.state.isRegister ? <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{ required: true, message: '请输入用户名！' }]}
                        >
                            <Input />
                        </Form.Item> : null
                    }
                    <Form.Item
                        label="账号"
                        name="account"
                        rules={[{ required: true, message: '请输入账号！' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码！' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    {
                        this.state.isRegister ? <Form.Item
                            label="确认密码"
                            name="rePassword"
                            rules={[{ required: true, message: '请输入密码！' }]}
                        >
                            <Input.Password />
                        </Form.Item> : null
                    }
                    {
                        !this.state.isRegister ? <Form.Item wrapperCol={{offset:3,span:16}} name="remember" valuePropName="checked">
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item> : null
                    }

                    <Form.Item wrapperCol={{span:8,offset:7}}>
                        <Button
                            block
                            shape={'round'}
                            type="primary"
                            htmlType="submit"
                            style={{
                            display:'inline-block',
                            fontSize:'20px',
                            height:'40px',
                            padding:'0',
                            marginRight:'10px'
                            }}
                            disabled = {this.state.isRegister}
                        >
                            登录
                        </Button>
                        <Button
                            block
                            shape={'round'}
                            style={{
                            display:'inline-block',
                            fontSize:'20px',
                            height:'40px',
                            padding:'0',
                            marginTop:'10px'
                            }}
                            onClick={this.handleRegister}
                        >注册</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
