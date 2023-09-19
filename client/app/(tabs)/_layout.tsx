import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import CustomHeader from '../../components/CustomHeader';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            }}
        >
            <Tabs.Screen
                name='chats'
                options={{
                    title: 'Chats',
                    header: () => <CustomHeader />,
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name='chatbubble-ellipses-outline'
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='notifications'
                options={{
                    title: 'Notifications',
                    header: () => <CustomHeader />,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name='bell-outline'
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='map'
                options={{
                    title: 'Map',
                    header: () => <CustomHeader />,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name='google-maps'
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
