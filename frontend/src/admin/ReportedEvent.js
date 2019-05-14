import React,{Component} from 'react';
import {Table} from 'antd'
import axios from "axios";
export default class ReportedEvent extends Component{
    constructor(props) {
        super(props);
        this.state={
            events:[]
        }
    }
    componentDidMount() {
        axios.get('/api/blocked/event').then(({data})=>{
            this.setState({events:data})
        }).catch((err)=>{
            console.log(err)
        })

    }

    blockEvent(uid){
        axios.put(`/api/block/user/${uid}`).then(()=>{


        }).catch((err)=>{
            console.log(err)
        })
    }
    render(){
        const columns=[
            {title:'Event ID',dataIndex:'id'},
            {title:'Event Title',dataIndex:'title'},
            {title:'Host',dataIndex:'host'},
            {title:'Reason',dataIndex:'reason'},
            {title:'Reported By',dataIndex:'reportedBy'},
            {title:'Action',dataIndex:'action',render:(value,record)=>{
                    return  <div>
                        <a href={"javascript:void(0)"} onClick={this.blockUser.bind(this,record.user_id)}>Black</a>
                        <a href={"javascript:void(0)"} >Cancel</a>
                    </div>
                }},
        ]
        return (
            <Table columns={columns} dataSource={this.state.events}/>
        )
    }

}