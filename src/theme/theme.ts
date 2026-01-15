import { StyleSheet } from "react-native";

export const COLORS = {
	primary: "#FF7F50",
	secondary: "#4CAF50",
	background: "#fff",
	text: "#000",
	textLight: "#666",
	border: "#ccc",
	disabled: "#999",
	tagDefault: "#eee",
  	tagSelected: "#4CAF50",
};

export const SIZES = {
	padding: 20,
	inputHeight: 40,
	borderRadius: 8,
	buttonHeight: 40,
	tagPadding: 8,
	tagMargin: 4,
	fontTitle: 20,
	fontSection: 16,
};

export const STYLES = StyleSheet.create({
	container: {
		flex: 1,
		padding: SIZES.padding,
		backgroundColor: COLORS.background,
	},
	input: {
		borderWidth: 1,
		borderColor: COLORS.border,
		padding: 8,
		borderRadius: SIZES.borderRadius,
		height: SIZES.inputHeight,
		marginVertical: 5,
	},
	buttonRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 10,
	},
	sectionTitle: {
		fontSize: SIZES.fontSection,
		fontWeight: "bold",
		marginTop: 10,
	},
	tagsContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginVertical: 10,
	},
	tagItem: {
		padding: SIZES.tagPadding,
		margin: SIZES.tagMargin,
		borderRadius: SIZES.borderRadius,
		backgroundColor: COLORS.tagDefault,
	},
	tagSelected: {
		backgroundColor: COLORS.secondary,
	},
	climbCard: {
		padding: 15,
		marginVertical: 5,
		borderRadius: SIZES.borderRadius,
		borderWidth: 1,
		borderColor: COLORS.border,
		backgroundColor: "#fafafa",
	},
	climbName: {
		fontSize: SIZES.fontSection,
		fontWeight: "bold",
		color: COLORS.text,
	},
	climbInfo: {
		fontSize: 14,
		color: COLORS.textLight,
	},
	dateText: {
		fontSize: SIZES.fontSection,
		color: COLORS.textLight,
	}
});
