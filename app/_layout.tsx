import { UserProvider } from "@/src/context/UserContext";
import { Stack } from "expo-router";
import React from "react";

export type RootStackParamList = {
	index: undefined;
	"add-climb": undefined;
};

export default function Layout() {
	return (
		<UserProvider>
			<Stack>
				<Stack.Screen name="index" options={{ title: "BetaDiary" }} />
				<Stack.Screen name="add-climb" options={{ title: "Add climb" }} />
			</Stack>
		</UserProvider>
	);
}