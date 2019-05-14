import React,{Component} from 'react';
import {Table} from 'antd'
import axios from 'axios'
export default class ReportedUser extends Component{
    constructor(props) {
        super(props);
        this.state={
                users:[]
        }
    }
    componentDidMount() {
        axios.get('/api/blocked/user').then(({data})=>{
            this.setState({users:data})
        }).catch((err)=>{
            console.log(err)
        })

    }
    blockUser(eid){
        axios.put(`/api/block/event/${eid}`).then(()=>{

        }).catch((err)=>{
            console.log(err)
        })
    }
    render(){
        const columns=[
            {title:'User ID',dataIndex:'id'},
            {title:'Username',dataIndex:'userName'},
            {title:'Reason',dataIndex:'reason'},
            {title:'Reported By',dataIndex:'reportedBy'},
            {title:'Action',dataIndex:'action',render:(value,record)=>{
                    return  <div>
                        <a href={"javascript:void(0)"} onClick={this.blockUser.bind(this,record.eid)}>Black</a>
                        <a href={"javascript:void(0)"} >Cancel</a>
                    </div>
                }},
        ]
        return (
            <Table columns={columns} dataSource={this.state.users}/>
        )
    }

}