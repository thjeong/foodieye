import * as React from 'react';
import { WebView } from 'react-native-webview';

const LocalWebURL = require('./index.html');
//import WebViewFile from "./index.html";

export default class App extends React.Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{
          html: require("./index.html")
        }}
        style={{ marginTop: 20 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    );
  }
}