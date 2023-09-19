import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import MapView, { Callout } from 'react-native-maps'
import {Marker} from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import ChatBubble from '../../components/ChatBubble';
import { mapThemes } from '../../constants/mapThemes';

export interface markerLocation {
  latitude: number,
  longitude: number,
}

export const chatBubbles = [
  {
    id:"d23nd23-32f23f-gf2g334gh34",
    chatName: "Chat 1",
    chatDesciption: "Some short description",
    chatMembers: 1,
    chatLocation: {
      latitude: 37.42242102482837,
      longitude: -122.08366960287096,
    }
  },
  {
    id:"d23nd23-32f23f-gf2g334gh342",
    chatName: "Chat 2",
    chatDesciption: "Some long description that is very long and will be cut off at some point bsdkjfs djfb skdjbfk jsdbnfi nbsodifn osdinf osndfo insdofi nsdoifn oisdnf oisdnf oisdnf oisnoif jnwefh  0wenfow ifbnowie bn",
    chatMembers: 2,
    chatLocation: {
      latitude: 37.42148721520545,
      longitude: -122.0847438275814,
    }
  },
  {
    id:"d23nd23-32f23f-gf2g334gh3423",
    chatName: "Chat 3",
    chatDesciption: "",
    chatMembers: 2,
    chatLocation: {
      latitude: 37.42426704192054,
      longitude: -122.08431534469126,
    }
  },
  {
    id:"d23nd23-32f23f-gf2g334gh34234",
    chatName: "Chat 4",
    chatDesciption: "Medium length description for this chat bubble",
    chatMembers: 2,
    chatLocation: {
      latitude: 37.423136751266604,
      longitude: -122.08569433540106,
    }
  },
]

const map = () => {
  const [selectedChat, setSelectedChat] = React.useState("")
  const [ isLightTheme, setIsLightTheme ] = React.useState(true)
  const [location, setLocation] = React.useState({
    latitude: 37.42182298327982,
    longitude: -122.0831123739481,
    latitudeDelta: 0.0043,
    longitudeDelta: 0.0034
  })

  const userLocation = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync()
    if(status !== "granted"){
      console.log("Permission to access location was denied")
      return
    }
    const location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.High})
    const {latitude, longitude} = location.coords
    setLocation({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.0043,
      longitudeDelta: 0.0034
    })
  }

  useEffect(()=>{
    userLocation()
  },[])

  const [markerLocation, setMarkerLocation] = React.useState<markerLocation>({
    latitude: 32.290966028093486,
    longitude: 34.84692592173815,
  })


  return (
    <View style={styles.container}>
      <View>
          <TouchableOpacity style={{zIndex:1,position:"absolute", top:14, left:20, backgroundColor:isLightTheme?"black":"white", borderRadius:10, padding:8}} onPress={()=>setIsLightTheme(!isLightTheme)}>
            <Ionicons name={isLightTheme?"moon":"ios-sunny"} size={24} color={isLightTheme?"white":"black"} />
          </TouchableOpacity>
        </View>
      <MapView
      style={styles.map}
      showsUserLocation={true}
      region={location}
      showsMyLocationButton={true}
      maxZoomLevel={20}
      onPress={(e)=>{
        console.log(e.nativeEvent.coordinate)
        setMarkerLocation(e.nativeEvent.coordinate)
        }
      }
      customMapStyle={isLightTheme?mapThemes.light:mapThemes.dark}
      >
        <Marker
        coordinate={markerLocation}
        draggable={true}
        tracksViewChanges={false}
        >
          <View >
            <Ionicons name="ios-location-sharp" size={42} color="red" />
          </View>
        </Marker>

        {chatBubbles.map((chatBubble)=>{
          return(
            <Marker
            key={chatBubble.id}
            title={chatBubble.chatName}
            description={chatBubble.chatDesciption}
            coordinate={chatBubble.chatLocation}
            draggable={false}
            onSelect={(e)=>{
              setSelectedChat(chatBubble.id)
              }
            }
            onDeselect={(e)=>{
              setSelectedChat("")
              }
            }
            >
              <Image source={require("../../assets/bubbles/bubble_chat1_shadow2_110x110.png")} style={{width:selectedChat === chatBubble.id?86:110, height:selectedChat === chatBubble.id?86:110}}/>
              <Callout 
              tooltip
              style={styles.calloutBubble}
              
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
    shadowColor:"#000",
    shadowOffset:{
        width:0,
        height:6,
    },
    shadowOpacity:0.5,
    shadowRadius:4,
  }
})