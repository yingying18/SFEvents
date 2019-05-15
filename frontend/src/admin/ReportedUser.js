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
        axios.get('/api/reported/user').then(({data})=>{
            console.log(data)
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
            {title:'User ID',dataIndex:'user_id',align:'center'},
            {title:'Username',dataIndex:'username',align:'center'},
            {title:'Reason',dataIndex:'reason'},
            {title:'Reported By',dataIndex:'reportedBy',align:'center'},
            {title:'Action',dataIndex:'action',align:'center',render:(value,record)=>{
                    return  <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                        <a href={"javascript:void(0)"} onClick={this.blockUser.bind(this,record.eid)}>Black</a>
                        <a href={"javascript:void(0)"} >Cancel</a>
                    </div>
                }},
        ]
        return (
            <Table columns={columns} rowKey={'user_id'} dataSource={this.state.users}/>
        )
    }

}