import { StyleSheet } from "react-native";

export default StyleSheet.create({ 
    container : {
        width:"100%",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignContent:"center",
        textAlign:"center",
        alignItems:"center"
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
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignContent:"center",
        margin:"auto"
    },
    button : {
        padding: 10,
        marginTop: 20,
        borderRadius: 12,
    },

    processedBtn: {
        paddingTop : 10
    }
})