import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { Climb, ClimbState, ClimbType, createClimb } from "../domain/climb";
import { createUser } from "../domain/user";


export default function HomeScreen() {
    
    const user = createUser();
    const [climbs, setClimbs] = useState<Climb[]>(user.climbs);

    const [climb_name, setClimbName] = useState("");
    const [climb_type, setClimbType] = useState<ClimbType>("ROUTE");
    const [climb_difficulty, setClimbDifficulty] = useState("");
    const [climb_state, setClimbState] = useState<ClimbState>("WORKING");

    const addClimb = () => {
        if(!user || !climb_name || !climb_difficulty || !climb_state) return;

        const newClimb: Climb = createClimb(climb_name, climb_type, climb_difficulty, climb_state);
        user.addClimb(newClimb);

        setClimbs([...user.climbs]);

        setClimbName("");
        setClimbType("ROUTE");
        setClimbDifficulty("");
        setClimbState("WORKING");
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>BetaDiary 🧗</Text>

        {/* Formulaire minimal */}
        <TextInput
            placeholder="Climb Name"
            value={climb_name}
            onChangeText={setClimbName}
            style={styles.input}
        />
        <TextInput
            placeholder="Difficulty"
            value={climb_difficulty}
            onChangeText={setClimbDifficulty}
            style={styles.input}
        />
        
        <View style={styles.buttonRow}>
            <Button title="WORKING" onPress={() => setClimbState("WORKING")} color={climb_state === "WORKING" ? "#FF7F50" : "#999"} />
            <Button title="DONE" onPress={() => setClimbState("DONE")} color={climb_state === "DONE" ? "#FF7F50" : "#999"} />
        </View>

        <View style={styles.buttonRow}>
            <Button title="ROUTE" onPress={() => setClimbType("ROUTE")} color={climb_type === "ROUTE" ? "#FF7F50" : "#999"} />
            <Button title="BOULDER" onPress={() => setClimbType("BOULDER")} color={climb_type === "BOULDER" ? "#FF7F50" : "#999"} />
        </View>
        <Button title="Ajouter" onPress={addClimb} />

        {/* Liste des climbs */}
        <FlatList
            data={climbs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <View style={styles.climbItem}>
                <Text>{item.name} ({item.type}) - {item.difficulty} [{item.state}]</Text>
            </View>
            )}
        />
        </View>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", marginVertical: 5, padding: 8, borderRadius: 4 },
  buttonRow: { flexDirection: "row", justifyContent: "space-between", marginVertical: 10 },
  climbItem: { padding: 10, marginVertical: 5, borderRadius: 6, borderWidth: 1, borderColor: "#ccc" }
});