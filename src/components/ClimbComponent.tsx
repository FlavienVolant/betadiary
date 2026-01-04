import { StyleSheet, Text, View } from "react-native";
import { Climb } from "../domain/climb";

type Props = {
  climb: Climb;
};

export default function ClimbComponent({ climb }: Props) {
    return (
        <View style={styles.container}>
        <Text style={styles.name}>{climb.name}</Text>
        <Text style={styles.details}>
            {climb.type} - {climb.difficulty} [{climb.state}]
        </Text>
        {climb.tags.length > 0 && (
            <View style={styles.tagsContainer}>
            {climb.tags.map(tag => (
                <View key={tag.id} style={styles.tag}>
                <Text style={styles.tagText}>{tag.name}</Text>
                </View>
            ))}
            </View>
        )}
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
});