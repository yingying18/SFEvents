import React,{Component} from 'react';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;
export default class Event extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render(){
        const {data} = this.props;
        if(data){
            return (
                <Card
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                    <Meta
                        title={data.title}
                        description={data.description}
                    />
                    <div>
                        Date:{data.start_time +" ~ " +data.end_time}
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