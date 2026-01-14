import ClimbComponent from "@/src/components/ClimbComponent";
import { useUser } from "@/src/context/UserContext";
import { Climb } from "@/src/domain/climb";
import { STYLES } from "@/src/theme/theme";
import { useRouter } from "expo-router";
import { Button, FlatList, View } from "react-native";

export default function HomeScreen() {

    const {user, toggleClimbState, onRemoveClimb} = useUser();
    const router = useRouter();

  	return (
		<View style={STYLES.container}>
			<Button title="Add a Climb" onPress={() => router.push("/add-climb")} />

			<FlatList
				data={user.climbs}
				keyExtractor={(item: Climb) => item.id}
				renderItem={({ item }) => (
					<ClimbComponent 
						climb = {item} 
						onToogleState={() => toggleClimbState(item.id)} 
						onRemoveClimb={() => onRemoveClimb(item.id)}
					/>
				)}
			/>
		</View>
  	);
}