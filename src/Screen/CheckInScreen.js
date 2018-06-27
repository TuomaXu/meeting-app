import React, { Component } from 'react'

import { 
    Button,
    WingBlank, 
    WhiteSpace,
    NavBar,
    List,
    InputItem ,
    Modal
 } from 'antd-mobile';


 import meetingManager from '../DataServe/MeetingManager';

export default class CheckInScreen extends Component {

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
        >
            签到模块
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
                onClick={this.checkButton}
            >
                签到
            </Button>
        </WingBlank>
      </div>
    )
  }

    checkButton = async()=>{
        try { 
            const result = await meetingManager.check(this.state.rid);        
            if (result.success === false) {
                Modal.alert('错误',result.errorMessage)
                return;
            }
            Modal.alert('签到成功');
        } catch (error) {
            Modal.alert('错误',`${error}`);
        }        
    }
}
