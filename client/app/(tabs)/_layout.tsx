import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from "../../components/CustomHeader";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="chats"
        options={{
          title: 'Chats',
          header: () => <CustomHeader />,
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused?"chatbubble-ellipses":"chatbubble-ellipses-outline"} size={24} color={color} style={{color:focused?"lightblue":color}}/>,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          header: () => <CustomHeader />,
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name={focused?"bell":"bell-outline"} size={24} color={color} style={{color:focused?"lightblue":color}}/>,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          header: () => <CustomHeader />,
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name="google-maps" size={24} color={color} style={{color:focused?"lightblue":color}}/>,
        }}
      />
    </Tabs>
  );
}
