import { StyleSheet } from "react-native"

export default StyleSheet.create({
    accountHistorySection:{
       color:"white"
    },
    grayBackground: {
        backgroundColor:"#F5F5F5",
        height:70
    },

    listEditAccount: {
        padding: 18,
        flex: 1,
    },
    accountTxt: {
        fontSize: 16,
        marginBottom:5,
        color:"black"
    },
    underline: {
        borderWidth: 1,
        borderColor: "#F5F5F5"
    },
    grayBackgroundText : {
        color: "black",
        fontSize:18,
        padding: 18,
        flex: 1,
    },
    notificationTxt: {
        fontSize:14,
        color:"gray",
        opacity: 0.7, 
    },
    signoutTxt: {
        color:"red",
        fontWeight:"bold",
        textAlign:"center"
    }
    
})