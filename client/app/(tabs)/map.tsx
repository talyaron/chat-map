import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect } from 'react'
import MapView, { Callout } from 'react-native-maps'
import {Marker} from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import ChatBubble from '../../components/ChatBubble';
import { mapThemes } from '../../constants/mapThemes';
import { useNavigation } from 'expo-router';
import { NavigationProp } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useChatBubbles from '../../store/useChatBubbles';
import useLocation from '../../store/useLocation';

export interface markerLocation {
  latitude: number,
  longitude: number,
}

export interface chatBubble {
  id: string,
  chatName: string,
  chatDesciption: string,
  chatMembers: number,
  chatLocation: markerLocation
}


const map = () => {
  // Map Theme
  const [ isLightTheme, setIsLightTheme ] = React.useState(true)

  // Map User Location
  const [location, setLocation] = React.useState({
    latitude: 37.42182298327982,
    longitude: -122.0831123739481,
    latitudeDelta: 0.0043,
    longitudeDelta: 0.0034
  })

  // React Native Navigator
  const navigation = useNavigation<NavigationProp<any>>()

  // Zustand states
  const { chatBubbles } = useChatBubbles()
  const { markerLocation } = useLocation()
  const { setMarkerLocation } = useLocation()

  // User Permissions
  const [ locationPermission, setLocationPermission ] = React.useState(false)

  const userLocation = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync()
    if(status !== "granted"){
      console.log("Permission to access location was denied")
      return
    }
    setLocationPermission(true)
    const location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.High})
    const {latitude, longitude} = location.coords
    setLocation({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.0043,
      longitudeDelta: 0.0034
    })
    setMarkerLocation({
      latitude: latitude,
      longitude: longitude,
    })

  }

  useEffect(()=>{
    userLocation()
  },[])

  return (
    <View style={styles.container}>
        <TouchableOpacity style={{zIndex:1,position:"absolute", top:72, left:20, backgroundColor:isLightTheme?"black":"white", borderRadius:10, padding:8}} onPress={()=>setIsLightTheme(!isLightTheme)}>
          <Ionicons name={isLightTheme?"moon":"ios-sunny"} size={24} color={isLightTheme?"white":"black"} />
        </TouchableOpacity>
        <TouchableOpacity style={{zIndex:1,position:"absolute", bottom:72, left:20, backgroundColor:isLightTheme?"black":"white", borderRadius:10, padding:8}} onPress={()=>{
          if(locationPermission){
            navigation.navigate("(modal)/newChat", {markerLocation:markerLocation})
          } else {
            Alert.alert("Location Permission", "Please allow location permission in your phone settings to create a new chat bubble", [{text:"Ok"}], {cancelable:true})
          }
        }}>
          <MaterialCommunityIcons name="chat-plus" size={24} color={isLightTheme?"white":"black"} />
        </TouchableOpacity>
      <MapView
      style={styles.map}
      showsUserLocation={true}
      initialRegion={location}
      showsMyLocationButton={true}
      provider='google'
      toolbarEnabled={false}
      maxZoomLevel={20}
      customMapStyle={isLightTheme?mapThemes.light:mapThemes.dark}
      onPress={(e)=>{
        setMarkerLocation(e.nativeEvent.coordinate)
      }}
      >
        <Marker
        coordinate={markerLocation}
        draggable={true}
        onDragEnd={(e)=>setMarkerLocation(e.nativeEvent.coordinate)}
        title='Your Chat Location'
        description='Your new chat bubble will be created here'
        >
            <Ionicons name="ios-location-sharp" size={42} color="red" />
        </Marker>

        {chatBubbles.map((chatBubble:chatBubble)=>{
          return(
            <Marker
            key={chatBubble.id}
            title={chatBubble.chatName}
            description={chatBubble.chatDesciption}
            coordinate={chatBubble.chatLocation}
            draggable={false}
            id={chatBubble.id}
            >
              <Image source={require("../../assets/bubbles/bubble_chat1_shadow2_110x110.png")} style={{width:110, height:110}}/>
              <Callout 
              tooltip
              style={styles.calloutBubble}
              onPress={() => {
                console.log(chatBubble.id)
                navigation.navigate("chats", {id:chatBubble.id})
              }}
              
              >
                <ChatBubble {...chatBubble}/>
              </Callout>
            </Marker>
          )
        }
        )}
      </MapView>
    </View>
  )
}

export default map

const styles = StyleSheet.create({
  container: {
      flex:1,
      paddingTop:StatusBar.currentHeight?StatusBar.currentHeight+20:0,
  },
  map: {
      flex:1,
  },
  calloutBubble:{
  }
})