import React, { Component } from 'react'

import { 
    Button,
    WingBlank, 
    WhiteSpace,
    NavBar 
 } from 'antd-mobile';

export default class QuaryScreen extends Component {
  render() {
    return (
      <div>
        <NavBar
            mode="dark"
        >
            查询模块
        </NavBar>
        <WhiteSpace/>
        <WingBlank>
            <Button
                type='primary'
                onClick={()=>{
                    //跳转到查询统计信息Screen
                    this.props.history.push('/QuaryTotalScreen');
                }}
            >
                查询统计信息
            </Button>
            <WhiteSpace/>
            <Button
                type='primary'
                onClick={()=>{
                    //跳转到已签到名单Screen  
                    this.props.history.push('/CheckPersonListScreen');
                }}
            >
                查询已签到名单
            </Button>
            <WhiteSpace/>
            <Button
                type='primary'
                onClick={()=>{
                    //跳转到未签到名单Screen  
                    this.props.history.push('/UnCheckPersonListScreen');
                }}
            >
                查询未签到名单
            </Button>
            <WhiteSpace/>
            <Button
                type='primary'
                onClick={()=>{
                    //跳转到个人签到状态Screen  QuaryPersonStateScreen
                    this.props.history.push('/QuaryPersonStateScreen');
                }}
            >
                查询个人签到状态
            </Button>
        </WingBlank>
      </div>
    )
  }
}
