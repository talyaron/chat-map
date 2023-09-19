import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import React from 'react'

const map = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>Map</Text>
    </SafeAreaView>
  )
}

export default map

const styles = StyleSheet.create({
    safeArea: {
        flex:1,
        paddingTop:StatusBar.currentHeight?StatusBar.currentHeight+20:0,
    },
})