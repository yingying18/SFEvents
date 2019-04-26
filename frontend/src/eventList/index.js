import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Layout,Input,Row,Col} from 'antd';
import axios from 'axios';
import Event from './Event'
const {Header,Content} = Layout
const Search = Input.Search;
import 'antd/dist/antd.css';

 class EventList extends Component{
    constructor(props) {
        super(props);
        this.state={
                events:[]
        }
    }
    componentDidMount(){

        const urlParams = new URLSearchParams(window.location.search);
        const event = urlParams.get('event');
        console.log(event)
        axios.get('/api/search',{params:{search:event}}).then(({data})=>{
            this.setState({events:data})

        }).catch((err)=>{
            console.log(err)
        })

    }
    onSearch(){

    }
    render(){
        const {events} = this.state
        return (

            <div style={{margin:20}}>
                <Layout >
                    {/*<Header style={{background: '#fff', padding: 0}}>*/}
                    {/*    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>*/}
                    {/*        <Search*/}
                    {/*            placeholder="Input search text"*/}
                    {/*            onSearch={this.onSearch.bind(this)}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</Header>*/}
                    <Content>
                        <Row gutter={16}>
                            {events.map((item,i)=>{

                                return  <Col style={{marginTop:20}} lg={6} md={8} xs={12} key={i}>  <Event data={item} key={i}/></Col>
                            })}
                            <Event/>
                        </Row>
                    </Content>
                </Layout>
            </div>
        )
    }

}

ReactDOM.render(
  <EventList/>,
  document.getElementById('app')
);

module.hot.accept();