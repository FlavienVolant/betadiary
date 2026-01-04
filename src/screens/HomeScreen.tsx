import { RootStackParamList } from "@/app/_layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, FlatList, StyleSheet, View } from "react-native";
import ClimbComponent from "../components/ClimbComponent";
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
          <ClimbComponent climb = {item} onToogleState={() => user.toogleClimbState(item.id)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
});