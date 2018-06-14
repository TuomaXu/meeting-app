import React, { Component } from 'react'

import { 
    NavBar,
    List,
    Icon,
    Modal
 } from 'antd-mobile';

 const chaxuTongjiURL = 'http://60.205.141.116:60001/api/tongji';

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
        //通过fetch向API请求数据
        try {
            //请求API服务进行登记功能


            const res = await fetch(chaxuTongjiURL)

            const result = await res.json();

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
