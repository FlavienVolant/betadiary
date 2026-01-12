import ClimbComponent from "@/src/components/ClimbComponent";
import { useUser } from "@/src/context/UserContext";
import { Climb } from "@/src/domain/climb";
import { useRouter } from "expo-router";
import { Button, FlatList, StyleSheet, View } from "react-native";

export default function HomeScreen() {

    const {user, toggleClimbState} = useUser();
    const router = useRouter();

  	return (
		<View style={styles.container}>
			<Button title="Add a Climb" onPress={() => router.push("/add-climb")} />

			<FlatList
				data={user.climbs}
				keyExtractor={(item: Climb) => item.id}
				renderItem={({ item }) => (
					<ClimbComponent climb = {item} onToogleState={() => toggleClimbState(item.id)} />
				)}
			/>
		</View>
  	);
}

const styles = StyleSheet.create({
  	container: { flex: 1, padding: 20, backgroundColor: "#fff" },
});