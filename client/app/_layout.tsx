import { Stack } from "expo-router";
import CustomHeader from "@/components/CustomHeader";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(modal)/menu"
        options={{
          presentation: "modal",
          title: "Menu",
        }}
      />
      <Stack.Screen
        name="(modal)/newChat"
        options={{
          presentation: "modal",
          title: "",
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "about",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
