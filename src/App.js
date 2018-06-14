import React, { Component } from 'react';

import DocumentTitle from 'react-document-title';

import {
  Route
} from 'react-router-dom'


import TabbarScreen from './Screen/TabBarScreen';
import RegisterMeetingScreen from './Screen/RegisterMeetingScreen';
import UnRegisterMeetingScreen from './Screen/UnRegisterMeetingScreen';
import QuaryTotalScreen from './Screen/QuaryTotalScreen';
import CheckPersonListScreen from './Screen/CheckedPersonListScreen';
import UnCheckPersonListScreen from './Screen/UnCheckPersonListScreen';
import QuaryPersonStateScreen from './Screen/QuaryPersonStateScreen'

class App extends Component {
  render() {
    return (
      <DocumentTitle title='会场登记管理系统'>
        <div>
          <Route exact path={'/'} component={TabbarScreen} />
          <Route path={'/RegisterMeetingScreen'} component={RegisterMeetingScreen} />
          <Route path={'/UnRegisterMeetingScreen'} component={UnRegisterMeetingScreen} />
          <Route path={'/QuaryTotalScreen'} component={QuaryTotalScreen} />
          <Route path={'/CheckPersonListScreen'} component={CheckPersonListScreen} />
          <Route path={'/UnCheckPersonListScreen'} component={UnCheckPersonListScreen} />
          <Route path={'/QuaryPersonStateScreen'} component={QuaryPersonStateScreen} />
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
