import { Stack, useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function NotFoundScreen() {

    const router = useRouter();

    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Not Found' }} />
            <View>
                <Button title="Go back to Home Page" onPress={() => {router.dismissAll(); router.replace("/")}} />
            </View>
        </>
    )
}