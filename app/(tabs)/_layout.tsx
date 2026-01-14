import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "BetaDiary" }} />
            <Tabs.Screen name="add-climb" options={{ title: "Add climb" }} />
        </Tabs>
    );
}