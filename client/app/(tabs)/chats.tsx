import React from 'react';

// react native
import { View, StyleSheet, StatusBar, Text } from 'react-native';

// expo
import { Link } from 'expo-router';

// zustand store
import useChats from '@/store/useChats';

export default function chats() {
    const { chats } = useChats();

    const orderedChats = chats.sort((a, b) => {
        return a.createdAt.getTime() - b.createdAt.getTime();
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ChatList</Text>
            {orderedChats.map((chat, index) => {
                return (
                    <Link
                        style={styles.link}
                        key={index}
                        href={{
                            pathname: '/chat',
                            // /* 1. Navigate to the details route with query params */
                            params: {
                                id: chat.id,
                                title: chat.title,
                            },
                        }}
                    >
                        {chat.title}
                    </Link>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        alignItems: 'center',
        padding: 16,
        marginTop: StatusBar.currentHeight ? StatusBar.currentHeight + 36 : 0,
    },
    title: {
        fontSize: 50,
        fontFamily: 'Roboto',
    },
    link: {
        backgroundColor: '#5d36fc',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 20,
        width: '60%',
        textAlign: 'center',
    },
});
