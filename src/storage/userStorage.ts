import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../domain/user";

const USER_KEY = "betaDiary_user";

export async function saveUser(user: User) {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user.toJSON()));
}

export async function loadUser(): Promise<User | null> {
    const json = await AsyncStorage.getItem(USER_KEY);
    return json ? User.fromJSON(JSON.parse(json)) : null;
}

export async function clearUser() {
    await AsyncStorage.removeItem(USER_KEY);
}
