import React, { Component } from 'react'

import { 
    NavBar,
    List,
    Icon,
    ListView,
    Modal
 } from 'antd-mobile';

const url = 'http://60.205.141.116:60001/api/yiqiandao';

export default class CheckPersonListScreen extends Component {

    constructor(props) {
      super(props)

      //使用ListView显示数据时，首先需要构造ListView的数据源服务对象dataSource
      //构建方式如下
      const dataSource  = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      //将DataSource对象放入state中
      this.state = {
        dataSource,
      };


    }

    async componentDidMount(){
        //在次处理需要显示数据

        try {
            //请求API服务进行登记功能


            const res = await fetch(url)

            const result = await res.json();

            if (result.success === false) {
                
                Modal.alert('错误',result.errorMessage)

                return;
            }


            //1,通过state获取DataSource对象
            const dataSource = this.state.dataSource;
            //2,调用dataSource的clone方法，对数据信息写入，并更新state
            this.setState({
                dataSource:dataSource.cloneWithRows(result.data),
            })


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
            已签到名单
        </NavBar>
        <ListView
            useBodyScroll
            dataSource={this.state.dataSource}
            renderRow={(person)=>{
                console.log(person)
                return(
                    <List.Item
                        extra={'ID:'+person.id}
                    >
                        {'姓名：'+person.name}
                        <List.Item.Brief> 
                            {'电话：'+person.tel} 
                        </List.Item.Brief>   
                    </List.Item>
                )
            }}
        />
      </div>
    )
  }
}
