import { RootStackParamList } from "@/app/_layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { ClimbState, ClimbType, createClimb } from "../domain/climb";
import { User } from "../domain/user";

type Props = NativeStackScreenProps<RootStackParamList, "AddClimb"> & {
  user: User;
};

export default function AddClimbScreen({ user, navigation }: Props) {
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [type, setType] = useState<ClimbType>("ROUTE");
    const [state, setState] = useState<ClimbState>("WORKING");

    const addClimb = () => {
        if(!name || !difficulty) return;

        const climb = createClimb(name, type, difficulty, state);
        user.addClimb(climb);

        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>
        <TextInput
            placeholder="Nom de la voie"
            value={name}
            onChangeText={setName}
            style={styles.input}
        />
        <TextInput
            placeholder="Difficulté"
            value={difficulty}
            onChangeText={setDifficulty}
            style={styles.input}
        />

        <View style={styles.buttonRow}>
            <Button title="WORKING" onPress={() => setState("WORKING")} color={state === "WORKING" ? "#FF7F50" : "#999"} />
            <Button title="DONE" onPress={() => setState("DONE")} color={state === "DONE" ? "#FF7F50" : "#999"} />
        </View>

        <View style={styles.buttonRow}>
            <Button title="ROUTE" onPress={() => setType("ROUTE")} color={type === "ROUTE" ? "#FF7F50" : "#999"} />
            <Button title="BOULDER" onPress={() => setType("BOULDER")} color={type === "BOULDER" ? "#FF7F50" : "#999"} />
        </View>

        <Button title="Ajouter" onPress={addClimb} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  input: { borderWidth: 1, borderColor: "#ccc", marginVertical: 5, padding: 8, borderRadius: 4 },
  buttonRow: { flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }
});