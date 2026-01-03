import { RootStackParamList } from "@/app/_layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { Climb } from "../domain/climb";
import { User } from "../domain/user";

type Props = NativeStackScreenProps<RootStackParamList, "Home"> & {
	user: User;
}

export default function HomeScreen({ user, navigation }: Props) {
  return (
    <View style={styles.container}>
      <Button title="Ajouter une voie" onPress={() => navigation.navigate("AddClimb")} />

      <FlatList
        data={user.climbs}
        keyExtractor={(item: Climb) => item.id}
        renderItem={({ item }) => (
          <View style={styles.climbItem}>
            <Text>
              {item.name} ({item.type}) - {item.difficulty} [{item.state}]
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  climbItem: { padding: 10, marginVertical: 5, borderWidth: 1, borderColor: "#ccc", borderRadius: 6 }
});