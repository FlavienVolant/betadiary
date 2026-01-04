import { Pressable, StyleSheet, Text, View } from "react-native";
import { Climb } from "../domain/climb";

type Props = {
	climb: Climb;
	onToogleState: () => void;
};

export default function ClimbComponent({ climb, onToogleState }: Props) {
    return (
        <View style={styles.container}>
        	<Text style={styles.name}>{climb.name}</Text>

			<Text style={styles.details}>
				{climb.type} - {climb.difficulty}
			</Text>

			{climb.tags.length > 0 && (<View style={styles.tagsContainer}>
				{climb.tags.map(tag => (
					<View key={tag.id} style={styles.tag}>
						<Text style={styles.tagText}>{tag.name}</Text>
					</View>
				))}
			</View>)}

			<Pressable
				onPress={onToogleState}
				style={[styles.stateButton,{ backgroundColor: climb.state === "WORKING" ? "#FFA500" : "#4CAF50" }]}
			>
				<Text style={styles.stateButtonText}>
					{climb.state === "WORKING" ? "Work in progress" : "Done"}
				</Text>
			</Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  name: { fontSize: 16, fontWeight: "bold" },
  details: { fontSize: 14, color: "#555", marginTop: 2 },
  tagsContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: 4 },
  tag: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginRight: 4,
    marginBottom: 4,
  },
  tagText: { color: "#fff", fontSize: 12 },
  stateButton: {
    padding: 8,
    marginTop: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  stateButtonText: { color: "#fff", fontWeight: "bold" },
});