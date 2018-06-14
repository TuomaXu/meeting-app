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

 const unRegisterURL = 'http://60.205.141.116:60001/api/unRegister'

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
                onClick={async()=>{
                    //请求API服务进行取消登记

                     try {
                        //请求API服务进行登记功能
                        const person = {
                            rid:this.state.rid
                        }

                        const res = await fetch(unRegisterURL,{
                            method:'POST',
                            headers:{
                                'Accept':'application/json',
                                'Content-Type':'application/json'
                            },
                            body:JSON.stringify(person)
                        })

                        const result = await res.json();

                        if (result.success === false) {
                            
                            Modal.alert('错误',result.errorMessage)

                            return;
                        }

                        Modal.alert('取消登记成功')


                    } catch (error) {
                        Modal.alert('错误',`${error}`);
                    }


                }}
            >
                取消登记
            </Button>
        </WingBlank>
      </div>
    )
  }
}
