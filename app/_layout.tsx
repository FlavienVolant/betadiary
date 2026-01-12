import { Climb } from "@/src/domain/climb";
import AddClimbScreen from "@/src/screens/AddClimbScreen";
import HomeScreen from "@/src/screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { User, createUser } from "../src/domain/user";

export type RootStackParamList = {
	Home: undefined;
	AddClimb: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Layout() {
	const [user, setUser] = useState<User>(createUser());

	const addClimb = (climb: Climb) => {
		setUser((prev: User) => {
			prev.addClimb(climb);
			return User.fromUser(prev);
		});
	};

	const toogleClimbState = (climbId: string)  => {
		setUser((prev: User) => {
			prev.toggleClimbState(climbId);
			return User.fromUser(prev);
		});
	};

	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" options={{ title: "BetaDiary" }}>
				{props => 
					<HomeScreen {...props} user={user} toggleClimbState={toogleClimbState}/>
				}
			</Stack.Screen>
			<Stack.Screen name="AddClimb" options={{ title: "Add climb" }}>
				{props => 
					<AddClimbScreen {...props} onAddClimb={addClimb} />
				}
			</Stack.Screen>
		</Stack.Navigator>
	);
}