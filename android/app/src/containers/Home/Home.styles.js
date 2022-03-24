import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 18,
    flex: 1,
    height:"auto"
  },

  duration: {
    alignContent: "center",
    fontSize: 18,
    color: "black",
    fontFamily: "times of new romen"
  },
  headerName: {
    fontSize: 28,
    color: "black",
  },
  cardContainer: {
    flexDirection: "column",
    paddingTop: 30,
    flex: 1,
    alignSelf: "stretch",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 18,
    marginBottom: 25,
    shadowColor: '#D3D3D3',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    borderWidth:0.3,
    elevation: 20,
    borderColor:"#6EC300"
  },

  sample : {
    backgroundColor: "#6EC300",
    color: "white"
  },

  cardHeaderSection: {
    flexDirection: "row",
    flex: 1,
    
  },
  cardHeaderIcon: {
    paddingTop: 5
  },
  cardHeaderTxt: {
    paddingLeft: 18,
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  cardDescription: {
    paddingTop: 4,
    fontSize: 16,
    color: "black",
  },
  unreadReports: {
    paddingTop: 6,
    fontSize: 12,
    color: "black"
  }
});