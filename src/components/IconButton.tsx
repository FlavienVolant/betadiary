import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    onPress: () => void;
    color?: string;
    size?: number;
};

export default function IconButton({
    icon,
    onPress,
    color = "#d32f2f",
    size = 22,
}: Props) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.pressed,
            ]}
            >
            <MaterialIcons name={icon} size={size} color={color} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 6,
        borderRadius: 6,
    },
    pressed: {
        opacity: 0.5,
    },
});
