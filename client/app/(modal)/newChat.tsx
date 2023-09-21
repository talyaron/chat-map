import { Keyboard, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";
import { NavigationProp, useRoute } from "@react-navigation/native";
import useChatBubbles from "../../store/useChatBubbles";
import useLocation from "../../store/useLocation";
import { customBubbleImages, customBubblesChat } from "../../constants/customChatBubbles";

export interface markerLocation {
    latitude: number;
    longitude: number;
}

const newChat = () => {
    const { markerLocation } = useLocation();
    const [ charCount, setCharCount ] = React.useState(0);
    const [ customBubbleImage, setCustomBubbleImage ] = React.useState(customBubbleImages[0].id)
    const [ chatDetails, setChatDetails ] = React.useState({
        chatName: "New Chat",
        chatDesciption: "",
        chatMembers: 1,
        chatLocation: markerLocation,
        customBubbleImage: "",
    });
    const navigation = useNavigation<NavigationProp<any>>();

    // Zustand useChatBubbles state
    const { chatBubbles } = useChatBubbles();
    const { addChatBubble } = useChatBubbles();

    const createChat = () => {
        addChatBubble([...chatBubbles, { ...chatDetails, id: Math.random().toString() }]);
        navigation.navigate("map");
    };

    return (
        <View
            style={styles.container}
            onTouchEnd={() => {
                // Hide the keyboard
                Keyboard.dismiss();
            }}
        >
            <Text style={styles.header}>New Chat</Text>
            <TextInput
                style={styles.textInput}
                maxLength={24}
                placeholder="Chat Name"
                onChangeText={(text) => {
                    setChatDetails({ ...chatDetails, chatName: text });
                }}
            />
            <View>
                <TextInput
                    style={[
                        styles.textInput,
                        {
                            height: 100,
                            textAlignVertical: "top",
                            flexWrap: "wrap",
                        },
                    ]}
                    multiline
                    maxLength={100}
                    placeholder="Chat Description"
                    onChangeText={(text) => {
                        setCharCount(text.length);
                        setChatDetails({
                            ...chatDetails,
                            chatDesciption: text,
                        });
                    }}
                />
                <Text style={styles.charsCount}>
                    {charCount}/100
                </Text>
            </View>
            <View style={styles.customBubblesContainer}>
                <Text style={styles.customBubbleHeader}>Custom Bubbles</Text>
                <ScrollView horizontal contentContainerStyle={styles.customBubbleScrollview}  showsHorizontalScrollIndicator={false}>
                    {customBubbleImages.map((customBubble) => {
                        return (
                            <TouchableOpacity
                                key={customBubble.id}
                                style={styles.customBubbleBtn}
                                onPress={() => {
                                    setChatDetails({
                                        ...chatDetails,
                                        customBubbleImage: customBubble.uri,
                                    });
                                    setCustomBubbleImage(customBubble.id)
                                }}
                            >
                                    <Image source={customBubble.uri} style={[styles.bubbleImage ,{borderColor: customBubble.id === customBubbleImage ? "lightblue" : "rgba(0,0,0,0)" }]} />
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.createChatBtn} onPress={createChat}>
                <Text style={styles.createChatText}>Create Chat</Text>
            </TouchableOpacity>
        </View>
    );
};

export default newChat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
        gap: 20,
    },
    header: {
        fontSize: 20,
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
    charsCount: {
        position: "absolute",
        right: 10,
        bottom: 10,
        color: "lightgray",
    },
    customBubblesContainer: {
        height:120,
        alignItems:"center"
    },
    customBubbleHeader: {
        fontSize: 20
    },
    customBubbleScrollview: {
        height:120,
        gap:10,
        paddingHorizontal:14
    },
    customBubbleBtn: {
        borderRadius: 20
    },
    bubbleImage: {
        width: 80,
        height: 80,
        borderRadius:20,
        borderWidth:2,
    },
    createChatBtn: {
        backgroundColor: "lightblue",
        padding: 8,
        borderRadius: 8,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    createChatText: {
        fontSize: 20,
        color: "#000"
    },
});
