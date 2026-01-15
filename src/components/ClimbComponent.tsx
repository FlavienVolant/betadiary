import { Pressable, Text, View } from "react-native";
import { Climb } from "../domain/climb";
import { COLORS, STYLES } from "../theme/theme";
import DateComponent from "./DateComponent";
import IconButton from "./IconButton";

type Props = {
	climb: Climb;
	onToogleState: () => void;
	onRemoveClimb: () => void;
};

export default function ClimbComponent({
	climb,
	onToogleState,
	onRemoveClimb,
}: Props) {
	return (
		<View style={STYLES.climbCard}>

		<View style={STYLES.climbHeader}>
			<View style={STYLES.climbTitleRow}>
			<Text style={STYLES.climbName}>{climb.name}</Text>

			<Pressable
				onPress={onToogleState}
				style={[
					STYLES.climbStateBadge,
					climb.state === "DONE" && STYLES.climbStateDone,
				]}
			>
				<Text style={STYLES.climbStateText}>
				{climb.state}
				</Text>
			</Pressable>
			</View>

			<IconButton icon="delete" onPress={onRemoveClimb} />
		</View>

		<Text style={STYLES.climbInfo}>
			{climb.type} • {climb.difficulty}
		</Text>

		{climb.state === "WORKING" && climb.start_working && (
			<Text style={STYLES.climbInfo}>
			Started working{" "}
			<DateComponent date={climb.start_working} />
			</Text>
		)}

		{climb.state === "DONE" && climb.start_working && climb.send_date && (
			<Text style={STYLES.climbInfo}>
			Started working{" "}
			<DateComponent date={climb.start_working} /> • Sent{" "}
			<DateComponent date={climb.send_date} />
			</Text>
		)}

		{climb.tags?.length > 0 && (
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

		</View>
	);
}
