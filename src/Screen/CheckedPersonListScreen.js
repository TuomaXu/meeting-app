import React, { Component } from 'react'

import { 
    NavBar,
    List,
    Icon,
    ListView,
    Modal
 } from 'antd-mobile';

import meetingManager from '../DataServe/MeetingManager';

export default class CheckPersonListScreen extends Component {

    constructor(props) {
      super(props)

      //使用ListView显示数据时，首先需要构造ListView的数据源服务对象dataSource
      //构建方式如下
      const dataSource  = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      //将DataSource对象放入state中
      this.state = {
        dataSource,
      };


    }

    async componentDidMount(){
        try {
            const result = await meetingManager.yiqiandao();
            if (result.success === false) {  
                Modal.alert('错误',result.errorMessage)
                return;
            }
            this.setState((preState)=>{
                return{
                    dataSource:preState.dataSource.cloneWithRows(result.data),
                }
            })
        } catch (error) {
            Modal.alert('错误',`${error}`);
        }    
    }
    

  render() {
    return (
      <div>
        <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() =>{
                this.props.history.goBack();
            }}
        >
            已签到名单
        </NavBar>
        <ListView
            useBodyScroll
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
        />
      </div>
    )
  }

  renderRow = (person)=>{
    return(
        <List.Item
            extra={'ID:'+person.id}
        >
            {'姓名：'+person.name}
            <List.Item.Brief> 
                {'电话：'+person.tel} 
            </List.Item.Brief>   
        </List.Item>
    )
  }
}
