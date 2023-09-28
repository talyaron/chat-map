import React, { useEffect, useState } from 'react';

// react native
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native';

// expo
import { useLocalSearchParams } from 'expo-router';

// zustand store
import useChats from '@/store/useChats';

interface MessageType {
    text: string;
    user: string;
}

export default function Chat() {
    const params = useLocalSearchParams();
    const { id, title } = params;

    const { chats } = useChats();

    const [messages, setMessages] = useState<MessageType[]>([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const updatedMessages = [
                ...messages,
                { text: newMessage, user: 'You' },
            ];
            setMessages(updatedMessages);
            setNewMessage('');
        }
    };

    useEffect(() => {
        const chat = chats.find((chat) => chat.id === id);

        if (!chat) return;

        setMessages(chat.conversation);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.messageContainer}>
                        <Text style={styles.user}>{item.user}:</Text>
                        <Text style={styles.messageText}>{item.text}</Text>
                    </View>
                )}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Type a message...'
                    value={newMessage}
                    onChangeText={(text) => setNewMessage(text)}
                />
                <TouchableOpacity
                    style={styles.sendButton}
                    onPress={handleSendMessage}
                >
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 50,
        fontFamily: 'Roboto',
        textAlign: 'center',
        paddingBottom: 16,
    },
    messageContainer: {
        marginBottom: 8,
        flexDirection: 'row',
        gap: 8,
    },
    messageText: {
        fontSize: 16,
    },
    user: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 8,
    },
    input: {
        flex: 1,
        paddingHorizontal: 8,
        fontSize: 16,
    },
    sendButton: {
        backgroundColor: 'blue',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        marginLeft: 8,
    },
    sendButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
