import ClimbComponent from "@/src/components/ClimbComponent";
import { useUser } from "@/src/context/UserContext";
import { Climb } from "@/src/domain/climb";
import { STYLES } from "@/src/theme/theme";
import { FlatList, View } from "react-native";

export default function HomeScreen() {

    const {user, toggleClimbState, onRemoveClimb} = useUser();

  	return (
		<View style={STYLES.container}>

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