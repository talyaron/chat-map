import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export interface ChatBubbleProps {
    id: string;
    chatName: string;
    chatDesciption: string;
    chatMembers: number;
}

const ChatBubble = ({
    id,
    chatName,
    chatDesciption,
    chatMembers,
}: ChatBubbleProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{chatName}</Text>
            <Text>Description: {chatDesciption}</Text>
            <View style={styles.members}>
                <Ionicons name="people" size={18} color="black" />
                <Text>{chatMembers}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => console.log(id)}>
                <Text>Enter</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChatBubble;

const styles = StyleSheet.create({
    container: {
        minWidth: 100,
        width: 300,
        // height:80,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        borderColor: "lightblue",
        borderWidth: 1,
        gap: 8,
    },
    members: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    header: {
        textAlign: "center",
        textDecorationLine: "underline"
    },
    button: {
        alignSelf: "center",
        backgroundColor: "lightblue",
        padding: 8,
        borderRadius: 8,
        alignItems: "center",
        width:100

    },
});
