import { StyleSheet } from "react-native";

export default StyleSheet.create({ 
    container : {
        width:"100%",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignContent:"center",
        textAlign:"center",
    },
    getStarted : {
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        color:"black",
        paddingBottom: 10
    },
    getStartedUnderTxt: {
        fontSize:18,
        color:"black",
        paddingBottom: 20,
        textAlign:"center",
    },

    textInput: {
        width: "82%"
    }
})