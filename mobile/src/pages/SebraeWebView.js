import React from 'react'
import { WebView } from 'react-native-webview';

export default function SebraeWebView({ navigation }) {
    return <WebView style={{ flex: 1 }} source={{ uri: navigation.getParam('uri') }}></WebView>
}