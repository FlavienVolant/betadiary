import { UserProvider } from "@/src/context/UserContext";
import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<UserProvider>
			<Stack>
				<Stack.Screen name="(tabs)" options={{headerShown: false}} />
			</Stack>
		</UserProvider>
	);
}