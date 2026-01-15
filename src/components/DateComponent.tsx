import { Text } from "react-native";
import { STYLES } from "../theme/theme";

type Props = {
    date: Date
};

export default function DateComponent({date}: Props) {

    const formattedDate = new Intl.DateTimeFormat("en-EN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(date);

    return (
        <Text style={STYLES.dateText}>
            {formattedDate}
        </Text>
    );
}