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

export default class UnRegisterMeetingScreen extends Component {

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
            取消参会登记
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
                onClick={this.removeUser}
            >
                取消登记
            </Button>
        </WingBlank>
      </div>
    )
  }

  removeUser = async ()=>{
    try {
        const result = await meetingManager.unRegister(this.state.rid);
        if (result.success === false) {  
            Modal.alert('错误',result.errorMessage)
            return;
        }
        Modal.alert('取消登记成功')
    } catch (error) {
        Modal.alert('错误',`${error}`);
    }
  }
}
