import { StyleSheet } from "react-native"

export default StyleSheet.create({
    verticalDivider: {
        marginTop: 5,
        margin: 30,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        alignSelf: "center",
        justifyContent: "space-evenly",
        width: "100%"
    },

    reportsCount: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",

    },
    reportTxt: {
        textAlign: "center",
        fontSize: 22,
        color: "black",
        fontWeight: "bold"
    },
    report: {
        fontSize: 16,
        color: "gray",
        marginTop: 5,
        opacity: 0.7
    }

})