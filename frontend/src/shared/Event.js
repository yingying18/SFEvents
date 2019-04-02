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
                        title={data.TITLE}
                        description={data.DESCRIPTION}
                    />
                    <div>
                        Date:{data.EVENT_DATETIME}
                    </div>
                    <div>
                        Location: {data.LOCATION}
                    </div>
                    <div>
                        Public: {data.IS_PUBLIC ? 'YES':'NO'}
                    </div>
                    <div>
                        Price: {data.PRICE}
                    </div>
                    <div>
                        Max Attendees: {data.MAX_ATTENDING}
                    </div>
                </Card>
            )
        }else {
            return null
        }
        }


}