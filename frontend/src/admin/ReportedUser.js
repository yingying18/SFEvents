import React,{Component} from 'react';
import {Table} from 'antd'
export default class ReportedUser extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render(){
        const columns=[
            {title:'User ID',dataIndex:'id'},
            {title:'Username',dataIndex:'userName'},
            {title:'Reason',dataIndex:'reason'},
            {title:'Reported By',dataIndex:'reportedBy'},
        ]
        return (
            <Table columns={columns} dataSource={[]}/>
        )
    }

}