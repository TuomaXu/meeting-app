import React, { Component } from 'react'

import { 
    Button,
    WingBlank, 
    WhiteSpace,
    NavBar,
    List,
    InputItem ,
    Icon,
    Modal,
 } from 'antd-mobile';


 import meetingManager from '../DataServe/MeetingManager';

export default class RegisterMeetingScreen extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         tel:''
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
            参会登记
        </NavBar>
        <WhiteSpace/>
        <List>
            <InputItem 
                value={this.state.name}
                onChange={(name)=>{ this.setState({name})}}
            >
                参会者姓名：
            </InputItem >
            <WhiteSpace/>
            <InputItem 
                value={this.state.tel}
                onChange={(tel)=>{ this.setState({tel})}}
            >
                参会者电话：
            </InputItem >
        </List>
        <WhiteSpace/>
        <WingBlank>
            <Button
                type='primary'
                onClick={this.registerUser}
            >
                提交登记
            </Button>
        </WingBlank>
      </div>
    )
  }

  registerUser = async()=>{
    try {
        const result = await meetingManager.register(this.state.name,this.state.tel);
        if (result.success === false) {
            Modal.alert('错误',result.errorMessage)
            return;
        }
        Modal.alert('登记成功','登记号为：'+result.data.id)
    } catch (error) {
        Modal.alert('错误',`${error}`);
    }
  }
}
