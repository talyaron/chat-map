import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const notifications = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>Notifications</Text>
    </SafeAreaView>
  )
}

export default notifications

const styles = StyleSheet.create({
    safeArea: {
        flex:1,
        paddingTop:StatusBar.currentHeight?StatusBar.currentHeight+20:0,
    },
})