import React,{Component} from 'react';
import {Table} from 'antd'
export default class ReportedEvent extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render(){
        const columns=[
            {title:'Event ID',dataIndex:'id'},
            {title:'Event Title',dataIndex:'title'},
            {title:'Host',dataIndex:'host'},
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