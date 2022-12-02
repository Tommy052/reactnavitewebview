import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import {WebView} from 'react-native-webview';

const MyWeb: React.FC = ({}) => {
      return (
        <View >
        <WebView
          source={{ uri: 'http://172.30.1.181:3000' }}
          style={   {flex: 1,
            minHeight: 400,
           }}
        />
        </View>
      );
}
export default MyWeb;