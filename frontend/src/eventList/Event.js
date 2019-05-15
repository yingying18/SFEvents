import React,{Component} from 'react';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;
import Moment from 'react-moment';
import {Link,HashRouter,Route,Switch} from "react-router-dom";
import EventComp from "../event/Event";
export default class Event extends Component{
    constructor(props) {
        super(props);
        this.state={
           eid : 0
        }
    }

    viewEvent = () =>{
        window.location.replace('/event?eventID='+this.state.eid);
    }
    render(){
        const {data} = this.props;
        if(data){
            this.state.eid = data.eid;
            return (
                <Card
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]} onClick={this.viewEvent}>
                        <Meta
                            title={data.title}
                            description={data.description}
                        />
                        <div>
                            Date: <Moment format="YYYY/MM/DD">
                            {data.start_time}
                             </Moment>
                        </div>
                        <div>
                            Start Time: <Moment format="HH:mm">
                            {data.start_time}
                        </Moment>
                        </div>
                        <div>
                            End Time: <Moment format="HH:mm">
                            {data.end_time}
                        </Moment>
                        </div>

                        <div>
                            Location: {data.location}
                        </div>
                        <div>
                            Public: {data.is_public ? 'YES':'NO'}
                        </div>
                        <div>
                            Price: {data.price}
                        </div>
                        <div>
                            Max Attendees: {data.maxAttending}
                        </div>

                    </Card>

            )
        }else {
            return null
        }
        }


}