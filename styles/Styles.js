import { StatusBar, StyleSheet } from "react-native"


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
    }
})