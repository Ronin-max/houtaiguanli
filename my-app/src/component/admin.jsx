import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import logo from '../img/logo.png';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import UserList from './userList';
const { Header, Sider, Content } = Layout;

export default class admin extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        console.log(1);
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ height: '100vh' }}>
                    <div className='logo'><img src={logo} alt="DarkH" /></div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />} onClick={() => this.props.history.push('/userlist')}>
                            加工单位列表
                        </Menu.Item>
                        {/*<Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={() => this.props.history.push('/test2')}>*/}
                        {/*    */}
                        {/*</Menu.Item>*/}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {
                            this.state.collapsed ?
                                <MenuUnfoldOutlined className = 'trigger' onClick={this.toggle}/> :
                                <MenuFoldOutlined className = 'trigger' onClick={this.toggle}/>
                        }
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24
                        }}
                    >
                        <Route path={'/userlist'} exact component={UserList} />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
