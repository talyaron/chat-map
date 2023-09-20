import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from 'expo-router';
import { NavigationProp, useRoute } from '@react-navigation/native';
import useChatBubbles from '../../store/useChatBubbles';
import useLocation from '../../store/useLocation';

export interface markerLocation {
    latitude: number,
    longitude: number,
  }


const newChat = ({route}:any) => {
    const { markerLocation } = useLocation()
    const [ charCount, setCharCount ] = React.useState(0)
    const [ chatDetails , setChatDetails ] = React.useState({
        chatName: "New Chat",
        chatDesciption: "",
        chatMembers: 1,
        chatLocation: markerLocation
    })
    const navigation = useNavigation<NavigationProp<any>>()


    // Zustand useChatBubbles state
    const {chatBubbles} = useChatBubbles()
    const {addChatBubble} = useChatBubbles()

    const createChat = () => {
        addChatBubble([...chatBubbles, {...chatDetails, id: Math.random().toString()}])
        navigation.navigate("map")
    }
  return (
    <View style={styles.container}
    onTouchEnd={() => {
        // Hide the keyboard
        Keyboard.dismiss();
    }
    }
    >
        <Text style={{fontSize:20}}>New Chat</Text>
        <TextInput
        style={styles.textInput}
        maxLength={24}
        placeholder="Chat Name"
        onChangeText={(text) => {
            setChatDetails({...chatDetails, chatName: text})
        }
        }
        />
        <View>
            <TextInput
            style={[styles.textInput,{height:100,textAlignVertical: 'top', flexWrap:"wrap"} ]}
            multiline
            maxLength={100}
            placeholder="Chat Description"
            onChangeText={(text) => {
                setCharCount(text.length);
                setChatDetails({...chatDetails, chatDesciption: text})
            }
            }
            />
            <Text style={{position:"absolute", right:10, bottom:10, color:"lightgray"}}>{charCount}/100</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={createChat}>
            <Text style={{fontSize:20, color:"#000"}}>Create Chat</Text>
        </TouchableOpacity>
    </View>
  )
}

export default newChat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
        gap:20
    },
    textInput: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 8,
        width: 300,
        margin: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
    button: {
        backgroundColor: "lightblue",
        padding: 8,
        borderRadius: 8,
        alignItems: "center",

    }
})