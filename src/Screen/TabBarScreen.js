import React, { Component } from 'react';

import { 
  TabBar 
} from 'antd-mobile';

import RegisterScreen from './RegisterScreen';
import CheckInScreen from './CheckInScreen';
import QuaryScreen from './QuaryScreen';

const tabDatas = [
  {
    key:'RegisterScreen',
    itemComponent:RegisterScreen,
    title:'登记',
    icon:{uri:'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg'},
    selectedIcon:{uri:'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg'}
  },
  {
    key:'CheckInScreen',
    itemComponent:CheckInScreen,
    title:'签到',
    icon:{uri:'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg'},
    selectedIcon:{uri:'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg'}
  },
  {
    key:'QuaryScreen',
    itemComponent:QuaryScreen,
    title:'查询',
    icon:{uri:'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg'},
    selectedIcon:{uri:'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg'}
  },
]

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

    const tabItems = tabDatas.map((item)=>{
      const Component = item.itemComponent;
      return(
        <TabBar.Item
          {...item}
          selected={item.key === this.state.selected }
          onPress={()=>{
            this.setState({selected:item.key})
            localStorage.selected = item.key;
          }}
        >
          <Component {...this.props} />
        </TabBar.Item>
      )
    })

    return (
        <div style={styles.container}>
          <TabBar>
            {tabItems}
          </TabBar>  
        </div>
    );
  }
}

const styles = {
  container:{
    position: 'fixed', 
    height: '100%', 
    width: '100%', 
    top: 0
  }
}


