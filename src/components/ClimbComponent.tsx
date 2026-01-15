import { Button, Text, View } from "react-native";
import { Climb } from "../domain/climb";
import { COLORS, STYLES } from "../theme/theme";
import DateComponent from "./DateComponent";
import IconButton from "./IconButton";

type Props = {
	climb: Climb;
	onToogleState: () => void;
	onRemoveClimb: () => void;
};

export default function ClimbComponent({ climb, onToogleState, onRemoveClimb }: Props) {
    return (
        <View style={STYLES.climbCard}>
			<Text style={STYLES.climbName}>{climb.name}</Text>
			<Text style={STYLES.climbInfo}>
				{climb.type} - {climb.difficulty} - {climb.state}
			</Text>

			{climb.state === "WORKING" && climb.date_working && (
				<Text style={STYLES.climbInfo}>
				Started Working : <DateComponent date={climb.date_working} />
				</Text>
			)}

			{climb.state === "DONE" && climb.date_working && climb.date_done && (
				<>
				<Text style={STYLES.climbInfo}>
					Started Working : <DateComponent date={climb.date_working} />
				</Text>
				<Text style={STYLES.climbInfo}>
					Send : <DateComponent date={climb.date_done} />
				</Text>
				</>
			)}

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

			<IconButton 
				icon="delete" 
				onPress={onRemoveClimb}
			/>

		</View>
    );
}