import { StatusBar, StyleSheet } from "react-native";


export default Styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 5,
        flex: 1,
       // justifyContent: 'flex-start',

    },
    segbut: {

        padding: 5,
    },
    disDu: {
        margin: 5,
    },
    radioButton: {
     backgroundColor: 'pink',
     flex:1,
     alignItems: 'center',
     marginTop: 60,


    },
    set:{
        justifyContent: 'space-between'
    },
    list:{
        flex:1,
        margin: 20,
        marginTop:50,

    },
    
     border:{
        borderWidth: 1, 
        borderColor: 'black', 
        borderRadius: 15, 
        padding: 20, 
        marginBottom: 20,

     }
})

