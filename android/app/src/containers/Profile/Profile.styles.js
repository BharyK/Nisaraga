import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },

    userPhoto: {
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "center",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        width: "100%",
        padding: 18,
        flex: 1,
    },

    userName: {
        marginLeft: 25,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        alignSelf: "center",
        //marginBottom:30,
        paddingBottom: 10
    },
    progressBar: {
        marginTop: 20,
        width: "100%"
    },
    userNameTxt: {
        color: "black",
        fontSize: 32
    },
    
})