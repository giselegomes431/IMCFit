import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex:1,
        backgroundColor:"#FFFFFF",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:30,
        marginTop:30,
    },

    form: {
        width:"100%",
    },

    formLabel: {
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },

    input: {
        width:"90%",
        borderRadius: 15,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },

    buttonCalculator: {
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"80%",
        backgroundColor:"#20B2AA",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:30,
        margin:30,
    },

    textButtonCalculator: {
        fontSize:20,
        color:"#FFFFFF",
    },

    errorMessage: {
        fontSize:10,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
    }
});

export default styles 