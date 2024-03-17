import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc: {
        flex:1,
        marginTop:20,
        paddingTop:60,
        borderRadius:50,
        alignItems:"center",
        width:"100%",
    },

    numberImc: {
        fontSize:48,
        color:"#20B2AA",
        fontWeight:"bold",
    },

    imformation: {
        fontSize:18,
        color:"#000000",
        fontWeight:"bold",
    },

    boxShareButton: {
        width:"100%",
        alignItems:"center",
        marginBottom:10,
        paddingTop:20,
    },

    shared: {
        backgroundColor: "#1877F2",
        borderRadius:50,
        paddingBottom:5,
        paddingTop:5,
    },

    sharedText: {
        color:"#FFFFFF",
        fontWeight:"bold",
        paddingHorizontal:30,
    }
});

export default styles 