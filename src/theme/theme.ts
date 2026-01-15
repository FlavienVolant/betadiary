import { StyleSheet } from "react-native";

export const COLORS = {
	primary: "#00ac1d",
	secondary: "#c99a00",
	background: "#fff",
	text: "#000",
	textLight: "#666",
	border: "#ccc",
	disabled: "#999",
	tagDefault: "#eee",
  	tagSelected: "#db0493",
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
	},
	climbHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	climbDates: {
		marginTop: 8,
		gap: 6,
	},

	climbFooter: {
		marginTop: 12,
		alignItems: "flex-end",
	},

	climbTitleRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},

	climbStateBadge: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 14,
		backgroundColor: COLORS.secondary,
		minHeight: 32,
		justifyContent: "center",
	},

	climbStateDone: {
		backgroundColor: COLORS.primary,
	},

	climbStateText: {
		color: "#fff",
		fontSize: 13,
		fontWeight: "600",
	},
});
