import { useUser } from "@/src/context/UserContext";
import { ClimbState, ClimbType, createClimb } from "@/src/domain/climb";
import { Tag, TAGS_CATALOG } from "@/src/domain/tag";
import { STYLES } from "@/src/theme/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";

export default function AddClimbScreen() {

    const { onAddClimb } = useUser();
    const router = useRouter();

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
        onAddClimb(climb);

        setName("");
        setDifficulty("");
        setType("ROUTE");
        setState("WORKING");
        setSelectedTags([]);

        router.navigate("/");
    }

    return (
        <View style={STYLES.container}>
            <TextInput
                placeholder="Climb Name"
                value={name}
                onChangeText={setName}
                style={STYLES.input}
            />

            <View style={STYLES.buttonRow}>
                <Button title="ROUTE" onPress={() => setType("ROUTE")} color={type === "ROUTE" ? "#FF7F50" : "#999"} />
                <Button title="BOULDER" onPress={() => setType("BOULDER")} color={type === "BOULDER" ? "#FF7F50" : "#999"} />
            </View>

            <TextInput
                placeholder="Difficulty"
                value={difficulty}
                onChangeText={setDifficulty}
                style={STYLES.input}
            />

            <Text style={STYLES.sectionTitle}>Tags :</Text>
            <View style={STYLES.tagsContainer}>
                {TAGS_CATALOG.map((tag:Tag) => {
                    const selected = selected_tags.some(t => t.id === tag.id);
                    return (
                        <Pressable
                            key={tag.id}
                            onPress={() => toogleTag(tag)}
                            style={[STYLES.tagItem, selected && STYLES.tagSelected]}
                            >
                            <Text style={{ color: selected ? "#fff" : "#000" }}>
                                {tag.name}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>

            <View style={STYLES.buttonRow}>
                <Button title="WORKING" onPress={() => setState("WORKING")} color={state === "WORKING" ? "#FF7F50" : "#999"} />
                <Button title="DONE" onPress={() => setState("DONE")} color={state === "DONE" ? "#FF7F50" : "#999"} />
            </View>

            <Button title="Add" onPress={addClimb} />
        </View>
    );
}
