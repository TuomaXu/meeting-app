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

 const checkURL = 'http://60.205.141.116:60001/api/check';

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
                onClick={async()=>{
                    //请求API服务进行签到功能
                    try {
                        //请求API服务进行登记功能
                        const person = {
                            rid:this.state.rid
                        }

                        const res = await fetch(checkURL,{
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

                        Modal.alert('签到成功');


                    } catch (error) {
                        Modal.alert('错误',`${error}`);
                    }

                    console.log(this.state.rid)
                }}
            >
                签到
            </Button>
        </WingBlank>
      </div>
    )
  }
}
