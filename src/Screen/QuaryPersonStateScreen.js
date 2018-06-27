import React, { Component } from 'react'

import { 
    Button,
    WingBlank, 
    WhiteSpace,
    NavBar,
    List,
    InputItem ,
    Icon,
    Modal
 } from 'antd-mobile';

import meetingManager from '../DataServe/MeetingManager';

export default class QuaryPersonStateScreen extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         rid:''
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
            个人签到状态
        </NavBar>
        <WhiteSpace/>
        <List>
            <InputItem 
                value={this.state.rid}
                onChange={(rid)=>{ this.setState({rid})}}
            >
                登记号：
            </InputItem >
        </List>
        <WhiteSpace/>
        <WingBlank>
            <Button
                type='primary'
                onClick={this.findState}
            >
                查询
            </Button>
        </WingBlank>
      </div>
    )
  }

  findState = async ()=>{
    try {
        const result = await meetingManager.checkPerson(this.state.rid);
        if(result.success === false){
            Modal.alert('错误',result.errorMessage)
            return;
        }
        if(result.data.isCheck === 0){
            Modal.alert('该用户未签到');
        } else {
            Modal.alert('该用户已签到');
        }
    } catch (error) {
        Modal.alert('错误',`${error}`);
    }
  }
}
