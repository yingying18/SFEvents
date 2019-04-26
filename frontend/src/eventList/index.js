import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Layout,Input,Row,Col} from 'antd';
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
    onSearch(){

    }
    render(){
        const {events} = this.state
        return (

            <div style={{margin:20}}>
                <Layout >
                    <Header style={{background: '#fff', padding: 0}}>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <Search
                                placeholder="Input search text"
                                onSearch={this.onSearch.bind(this)}
                            />
                        </div>
                    </Header>
                    <Content>
                        <Row gutter={16}>
                            {events.map((item,i)=>{

                                return  <Col style={{marginTop:20}} lg={6} md={8} xs={12}>  <Event data={item} key={i}/></Col>
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
  EventList,
  document.getElementById('app')
);

module.hot.accept();