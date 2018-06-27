import React, { Component } from 'react'

import { 
    NavBar,
    List,
    Icon,
    Modal
 } from 'antd-mobile';

 import meetingManager from '../DataServe/MeetingManager';

export default class QuaryTotalScreen extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         total:'',
         unChecked:'',
         checked:''
      }
    }

    async componentDidMount(){
        try {
            const result = await meetingManager.chaxuTongji();
            if (result.success === false) {   
                Modal.alert('错误',result.errorMessage)
                return;
            }
            this.setState(result.data)
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
            登记统计信息
        </NavBar>
        <List>
            <List.Item>
                {`总登记人数为：${this.state.total}`}
            </List.Item>
            <List.Item>
                {`已签到人数为：${this.state.checked}`}
            </List.Item>
            <List.Item>
                {`未签到人数为：${this.state.unChecked}`}
            </List.Item>
        </List>
      </div>
    )
  }
}
