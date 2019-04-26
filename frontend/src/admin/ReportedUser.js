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
            {title:'Action',dataIndex:'action',render:()=>{
                    return  <div>
                        <a href={"javascript:void(0)"}>Black</a>
                        <a href={"javascript:void(0)"}>Cancel</a>
                    </div>
                }},
        ]
        return (
            <Table columns={columns} dataSource={[]}/>
        )
    }

}