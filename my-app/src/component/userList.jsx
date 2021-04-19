import React, { Component } from 'react'
import {Table,message,Button,Row,Col,Form,Input,DatePicker,Typography} from 'antd';
import {get} from '../utils/request';
const { RangePicker } = DatePicker;
const { Text, Link } = Typography;


export default class userList extends Component {
    state={
        dataSource:[]
    }

    fetch = async (searchParams = {})=>{
        const {data} =await get('/api/student/findAll',{
            appkey:'shan_1546508603194'
        });
            message.success('成功获取学生信息');
            this.setState({
                dataSource:data
            })
    }
    componentDidMount(){
        document.title = '加功单位列表'
        this.fetch();
    }

    render() {
        const columns = [
            {
                title:'序号',
                width:80,
                align:'center',
                render:(text,record,index)=>index+1
            },
            {
                title:'加工单位',
                dataIndex: 'name',
                align:'center',
                width:100
            },
            {
                title:'联系人',
                dataIndex: '123',
                align:'center',
                width:100
            },
            {
                title:'电话',
                dataIndex: 'phone',
                align:'center',
                width:200
            },
            {
                title:'日期',
                dataIndex: 'birth',
                align:'center',
                width:100
            },
            {
                title:'地址',
                dataIndex: 'address',
                align:'center',
                width:200
            },
            {
                title:'经手人',
                dataIndex: '345',
                align:'center',
                width:100,
            },
            {
                title:'备注',
                dataIndex: 'email',
                align:'center',
            },
            {
                title:'操作',
                align:'center',
                render:()=>[
                    <Button key={1} type={'primary'}>修改</Button>,
                    <Button key={2} type={'primary'}>删除</Button>
                ]
            },
            {
                title:'详情操作',
                align:'center',
                render:()=><Button key={3} type={'primary'}>点击详情</Button>
            }
        ];
        console.log(this.state.dataSource);
        return (
            <div>
                <Row justify="space-between">
                    <Col span={8}>
                        <Form  onFinish={this.onFinish} ref={ref=>this.formRef=ref} labelCol={{span:4}}>
                                <Form.Item label={<Text strong mark>收货单编号</Text>} name='a'>
                                    <Input placeholder={'请输入收货单编号'} />
                                </Form.Item>
                            <Form.Item label={<Text strong mark>下单时间</Text>} name='time'>
                                <RangePicker />
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={8}>
                        <Button key={1} type={'primary'}>搜索</Button>
                        <Button key={2} >重置</Button>
                    </Col>
                </Row>
                <Table
                    bordered
                    dataSource={this.state.dataSource}
                    columns={columns}
                    rowKey={'id'}
                    pagination={{
                        showQuickJumper:true,
                        defaultCurrent:1,
                        total:this.state.dataSource.length,

                    }}
                />
            </div>
        )
    }
}
