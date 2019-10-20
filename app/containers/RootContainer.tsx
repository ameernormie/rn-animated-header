import React, {Fragment} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import AppNavigator from 'navigation/AppNavigation';

function RootContainer() {
  return (
    <Fragment>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={{flex: 1}}>
        <AppNavigator />
      </SafeAreaView>
    </Fragment>
  );
}

export default RootContainer;
