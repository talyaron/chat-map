import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name='(tabs)'
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="(modal)/menu" options={{
              presentation: 'modal',
              title: 'Menu',
            }}/>
            <Stack.Screen name="(modal)/newChat"
            options={{
              presentation: 'modal',
              title: '',
              
            }}/>
            <Stack.Screen
                name='login'
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='register'
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
}
