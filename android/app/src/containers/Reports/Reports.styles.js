import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        height: "auto"
    },
    headerTxtAlign: {
        flexDirection: "row",
        alignSelf: 'stretch',
        textAlign: 'center',
        justifyContent:'space-between',
        alignItems:"center",
    },
    reportHeaderTxt: {
        fontSize: 32,
        color: "black",
        padding: 18,
    },
    headerIcon:{
        borderColor: "black",
        padding: 18,
    },
    description: {
        color: "black",
        paddingTop:10,
        fontSize:18,
        width:"90%",
        padding: 18,
    },
    reportsLists: {
        flexDirection : "row",
        paddingTop:10
    },
    listSection: {
        backgroundColor: "#F5F5F5",
        padding: 18,
        color:"black",
        width:"100%"
    },
    reportTxt: {
        fontSize:16,
        fontWeight:'bold',
        paddingBottom:5,
    },
    reportDate: {
        fontSize:16,
        color: "gray",
        opacity:0.8
    },
    reportName: {
        padding: 18,
        color:"black",
        fontSize:16,
        paddingTop:25
    }
})