import { RootStackParamList } from "@/app/_layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { ClimbState, ClimbType, createClimb } from "../domain/climb";
import { Tag, TAGS_CATALOG } from "../domain/tag";
import { User } from "../domain/user";

type Props = NativeStackScreenProps<RootStackParamList, "AddClimb"> & {
  user: User;
};

export default function AddClimbScreen({ user, navigation }: Props) {
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [type, setType] = useState<ClimbType>("ROUTE");
    const [state, setState] = useState<ClimbState>("WORKING");
    const [selected_tags, setSelectedTags] = useState<Tag[]>([]);

    const toogleTag = (tag: Tag) => {
        setSelectedTags(prev =>
            prev.some(t => t.id === tag.id)?
                prev.filter(t => t.id !== tag.id)
                : [...prev, tag]
        );
    }

    const addClimb = () => {
        if(!name || !difficulty) return;

        const climb = createClimb(name, type, difficulty, state, selected_tags);
        user.addClimb(climb);

        navigation.popTo("Home");
    }

    return (
        <View style={styles.container}>
        <TextInput
            placeholder="Climb Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
        />

        <View style={styles.buttonRow}>
            <Button title="ROUTE" onPress={() => setType("ROUTE")} color={type === "ROUTE" ? "#FF7F50" : "#999"} />
            <Button title="BOULDER" onPress={() => setType("BOULDER")} color={type === "BOULDER" ? "#FF7F50" : "#999"} />
        </View>

        <TextInput
            placeholder="Difficulty"
            value={difficulty}
            onChangeText={setDifficulty}
            style={styles.input}
        />

        <Text style={styles.sectionTitle}>Tags :</Text>
        <View style={styles.tagsContainer}>
            {TAGS_CATALOG.map(tag => {
            const selected = selected_tags.some(t => t.id === tag.id);
            return (
                <Pressable
                key={tag.id}
                onPress={() => toogleTag(tag)}
                style={[styles.tagItem, selected && styles.tagSelected]}
                >
                <Text style={{ color: selected ? "#fff" : "#000" }}>{tag.name}</Text>
                </Pressable>
            );
            })}
        </View>

        <View style={styles.buttonRow}>
            <Button title="WORKING" onPress={() => setState("WORKING")} color={state === "WORKING" ? "#FF7F50" : "#999"} />
            <Button title="DONE" onPress={() => setState("DONE")} color={state === "DONE" ? "#FF7F50" : "#999"} />
        </View>

        <Button title="Add" onPress={addClimb} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  input: { borderWidth: 1, borderColor: "#ccc", marginVertical: 5, padding: 8, borderRadius: 4 },
  buttonRow: { flexDirection: "row", justifyContent: "space-between", marginVertical: 10 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  tagsContainer: { flexDirection: "row", flexWrap: "wrap", marginVertical: 10 },
  tagItem: { padding: 8, margin: 4, borderRadius: 8, backgroundColor: "#ddd" },
  tagSelected: { backgroundColor: "#4CAF50" },
});
