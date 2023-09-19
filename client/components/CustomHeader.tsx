import {
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const CustomHeader = () => {
    return (
        <>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Link href='/profile' style={{ marginRight: 'auto' }}>
                        <AntDesign name='user' size={24} color='black' />
                    </Link>
                    <TouchableOpacity style={styles.menu}>
                        <Link href='/(modal)/menu' style={{}}>
                            <Ionicons
                                name='menu-outline'
                                size={42}
                                color='black'
                            />
                        </Link>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight,
    },
    container: {
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
    },
    menu: {},
});

export default CustomHeader;
