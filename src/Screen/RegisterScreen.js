import React, { Component } from 'react'


import { 
    Button,
    WingBlank, 
    WhiteSpace,
    NavBar 
 } from 'antd-mobile';

 

export default class RegisterScreen extends Component {
  render() {
    return (
      <div>
        <NavBar
            mode="dark"
        >
            登记模块
        </NavBar>
        <WhiteSpace/>
        <WingBlank>
            <Button
                type='primary'
                onClick={()=>{
                    //跳转到参会登记Screen
                    this.props.history.push('/RegisterMeetingScreen');
                }}
            >
                参会登记
            </Button>
            <WhiteSpace/>
            <Button
                type='primary'
                onClick={()=>{
                    //跳转到取消登记登记Screen
                    this.props.history.push('/UnRegisterMeetingScreen');
                }}
            >
                取消登记
            </Button>
        </WingBlank>
      </div>
    )
  }
}
