import { Button, Text, View } from "react-native";
import { Climb } from "../domain/climb";
import { COLORS, STYLES } from "../theme/theme";

type Props = {
	climb: Climb;
	onToogleState: () => void;
};

export default function ClimbComponent({ climb, onToogleState }: Props) {
    return (
        <View style={STYLES.climbCard}>
		<Text style={STYLES.climbName}>{climb.name}</Text>
		<Text style={STYLES.climbInfo}>
			{climb.type} - {climb.difficulty} - {climb.state}
		</Text>

		{climb.tags && climb.tags.length > 0 && (
			<View style={STYLES.tagsContainer}>
				{climb.tags.map(tag => (
					<View
					key={tag.id}
					style={[STYLES.tagItem, { backgroundColor: COLORS.tagSelected }]}
					>
					<Text style={{ color: "#fff" }}>{tag.name}</Text>
					</View>
				))}
			</View>
      	)}

		<Button
			title={climb.state}
			onPress={onToogleState}
			color={COLORS.primary}
		/>
		</View>
    );
}