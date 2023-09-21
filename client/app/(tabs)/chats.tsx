import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import React from 'react'

const chats = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>chats</Text>
    </SafeAreaView>
  )
}

export default chats

const styles = StyleSheet.create({
    safeArea: {
        flex:1,
        paddingTop:StatusBar.currentHeight?StatusBar.currentHeight+20:0,
    },
})