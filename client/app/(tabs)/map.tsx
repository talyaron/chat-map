import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect } from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import ChatBubble from '../../components/ChatBubble';
import { mapThemes } from '../../constants/mapThemes';
import { useNavigation } from 'expo-router';
import { NavigationProp } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useChatBubbles from '../../store/useChatBubbles';
import useLocation from '../../store/useLocation';
import { getPreciseDistance } from 'geolib';

export interface markerLocation {
  latitude: number,
  longitude: number,
}

export interface chatBubble {
  id: string,
  chatName: string,
  chatDesciption: string,
  chatMembers: number,
  chatLocation: markerLocation,
  customBubbleImage: any,
}

const MAX_BUBBLE_DISTANCE = 1000
const MIN_BUBBLE_DISTANCE = 200
const MAX_BUBBLES_IN_RADIUS = 10


const map = () => {
  // Map
  const [ isLightTheme, setIsLightTheme ] = React.useState(false)
  const mapRef = React.useRef<MapView>(null)
  const markerRef = React.useRef<any>(null)

  // Map User Location
  const [userLocation, setUserLocation] = React.useState({
    latitude: 37.42182298327982,
    longitude: -122.0831123739481,
    latitudeDelta: 0.0043,
    longitudeDelta: 0.0034
  })

  const [ camera, setCamera ] = React.useState({
    center: {
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
    },
    pitch: 0,
    heading: 0,
  })

  // React Native Navigator
  const navigation = useNavigation<NavigationProp<any>>()

  // Zustand states
  const { chatBubbles } = useChatBubbles()
  const { setChatBubbles } = useChatBubbles()
  const { markerLocation } = useLocation()
  const { setMarkerLocation } = useLocation()

  // User Permissions
  const [ locationPermission, setLocationPermission ] = React.useState(false)

  const handleUserLocation = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync()
    if(status !== "granted"){
      console.log("Permission to access location was denied")
      return
    }
    setLocationPermission(true)
    const location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.High})
    const {latitude, longitude} = location.coords
    setUserLocation({
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

  const handleShowNearbyChatBubbles = () => {
    // Get all chat bubbles near the user location
    const chatBubblesNearByUser = 
      chatBubbles.filter((chatBubble:chatBubble)=>{
        const userRadius = getPreciseDistance({ latitude:userLocation.latitude, longitude:userLocation.longitude }, {latitude:chatBubble.chatLocation.latitude, longitude:chatBubble.chatLocation.longitude})
        return userRadius <= MAX_BUBBLE_DISTANCE
      })
    
    setChatBubbles(chatBubblesNearByUser)

  }

  useEffect(()=>{
    handleUserLocation()
  },[])

  useEffect(()=>{
    handleShowNearbyChatBubbles()

  },[userLocation])

  const handleAddChatBubble = async () => {
    const {latitude, longitude} = userLocation
    let chatBubblesNearByUser = 0

    // Distance between user and marker
    const distanceUserToMarker = getPreciseDistance({ latitude, longitude }, {latitude:markerLocation.latitude, longitude:markerLocation.longitude})

    for (let i = 0; i < chatBubbles.length; i++) {
      // Distance between marker and chat bubble
      const markerRadius = getPreciseDistance({ latitude:markerLocation.latitude, longitude:markerLocation.longitude }, {latitude:chatBubbles[i].chatLocation.latitude, longitude:chatBubbles[i].chatLocation.longitude})
      
      // Distance between user and chat bubble
      const userRadius = getPreciseDistance({ latitude, longitude }, {latitude:chatBubbles[i].chatLocation.latitude, longitude:chatBubbles[i].chatLocation.longitude})
      
      if (userRadius <= MAX_BUBBLE_DISTANCE){
        chatBubblesNearByUser++
      }
      if (markerRadius <= MIN_BUBBLE_DISTANCE){
        Alert.alert("Chat Bubble Nearby", "There is a chat bubble nearby in 200m distance, please move your marker away from it and try again!", [{text:"Ok"}], {cancelable:true})
        return
      } 
      if (distanceUserToMarker > MAX_BUBBLE_DISTANCE){
        Alert.alert( "Chat Bubble Too Far", "You'r trying to creat a new chat bubble too far away from your location.", [{text:"Ok"}], {cancelable:true})
        return
      } 

      if (chatBubblesNearByUser >= MAX_BUBBLES_IN_RADIUS){
        Alert.alert("Max chat bubbles", `There are already ${MAX_BUBBLES_IN_RADIUS} chat bubbles in your radius, Join existing chat bubble!`, [{text:"Ok"}], {cancelable:true})
        return
      }
    }

    navigation.navigate("(modal)/newChat")
  }

  return (
      <View style={styles.container}>
          <TouchableOpacity style={{zIndex:1,position:"absolute", top:80, left:20, backgroundColor:isLightTheme?"black":"white", borderRadius:40, padding:14}} onPress={()=>setIsLightTheme(!isLightTheme)}>
            <Ionicons name={isLightTheme?"moon":"ios-sunny"} size={30} color={isLightTheme?"white":"gray"} />
          </TouchableOpacity>
          <TouchableOpacity style={{zIndex:1,position:"absolute", bottom:40, left:20, backgroundColor:isLightTheme?"black":"white", borderRadius:40, padding:14}} onPress={()=>{
            if(locationPermission){
              handleAddChatBubble()
            } else {
              Alert.alert("Location Permission", "Please allow location permission in your phone settings to create a new chat bubble", [{text:"Ok"}], {cancelable:true})
            }
          }}>
            <MaterialCommunityIcons name="chat-plus" size={30} color={isLightTheme?"white":"gray"} />
          </TouchableOpacity>
          <TouchableOpacity style={{zIndex:1,position:"absolute", bottom:40, right:20, backgroundColor:isLightTheme?"black":"white", borderRadius:40, padding:14}}
          onPress={()=>{
            mapRef.current?.animateCamera({
              center: {
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
              },
              pitch: 0,
              heading: 0,
              zoom: 18,
            }, {duration:500})

           }}
          >
            <MaterialIcons name="my-location" size={30} color={isLightTheme?"white":"gray"} />
          </TouchableOpacity>
        <MapView
        ref={mapRef}
        style={styles.map}
        showsMyLocationButton={false}
        toolbarEnabled={false}
        showsUserLocation={true}
        region={userLocation}
        provider='google'
        maxZoomLevel={20}
        customMapStyle={isLightTheme?mapThemes.light:mapThemes.dark}
        onPress={(e)=>{
          setMarkerLocation(e.nativeEvent.coordinate)
        }}
        >
          <Marker
          ref={markerRef}
          coordinate={markerLocation}
          draggable={true}
          tracksViewChanges={false}
          onDragEnd={(e)=>{setMarkerLocation(e.nativeEvent.coordinate)}}
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
              style={{zIndex:1}}
              >
                <Image source={chatBubble.customBubbleImage} style={{width:110, height:110}}/>
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