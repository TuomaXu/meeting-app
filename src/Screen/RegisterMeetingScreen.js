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

 const registerURL = 'http://60.205.141.116:60001/api/register';

export default class RegisterMeetingScreen extends Component {
t
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
                onClick={async()=>{
                    try {
                        //请求API服务进行登记功能
                        const person = {
                            name:this.state.name,
                            tel:this.state.tel
                        }

                        const res = await fetch(registerURL,{
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
                        Modal.alert('登记成功','登记号为：'+result.data.id)


                    } catch (error) {
                        Modal.alert('错误',`${error}`);
                    }
                    

                }}
            >
                提交登记
            </Button>
        </WingBlank>
      </div>
    )
  }
}
