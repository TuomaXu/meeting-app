import React, { Component } from 'react';

import { 
  TabBar 
} from 'antd-mobile';



import RegisterScreen from './RegisterScreen';
import CheckInScreen from './CheckInScreen';
import QuaryScreen from './QuaryScreen';

export default class TabbarScreen extends Component {

  componentDidMount(){
    if(localStorage.selected){
      this.setState({selected:localStorage.selected})
    }
  }

  constructor(props) {
    super(props)
  
    this.state = {
      selected:'RegisterScreen'
    }
  }
  

  render() {
    return (
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
          <TabBar>
            <TabBar.Item
              key='RegisterScreen'
              title='登记'
              selected={'RegisterScreen' === this.state.selected }
              onPress={()=>{
                this.setState({selected:'RegisterScreen'})
                localStorage.selected = 'RegisterScreen';
              }}
              icon={{uri:'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg'}}
              selectedIcon={{uri:'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg'}}
            >
              <RegisterScreen {...this.props}/>
            </TabBar.Item>
            <TabBar.Item
              key='CheckInScreen'
              title='签到'
              selected={'CheckInScreen' === this.state.selected }
              onPress={()=>{
                this.setState({selected:'CheckInScreen'})
                localStorage.selected = 'CheckInScreen';
              }}
              icon={{uri:'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg'}}
              selectedIcon={{uri:'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg'}}
            >
              <CheckInScreen {...this.props} />
            </TabBar.Item>
            <TabBar.Item
              key='QuaryScreen'
              title='查询'
              selected={'QuaryScreen' === this.state.selected }
              onPress={()=>{
                this.setState({selected:'QuaryScreen'})
                localStorage.selected = 'QuaryScreen';
              }}
              icon={{uri:'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg'}}
              selectedIcon={{uri:'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg'}}
            >
              <QuaryScreen {...this.props}/>
            </TabBar.Item>
          </TabBar>  
        </div>
    );
  }
}


