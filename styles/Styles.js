import { StatusBar, StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";


export default Styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 5,
        flex: 1,
        alignItems: 'stretch',
    },

    label: {
        textAlign: "center",
        padding: 20,
        fontFamily: 'Comfortaa',
    },

    segbut: {
        padding: 15,
        height: 80,
    },

    disDu: {
        margin: 5,
        marginLeft: 30,
        marginRight: 30,
    },

    button: {
        marginTop: 30,
        marginLeft: 130,
        marginRight: 120,
        width: 150,
        height: 50,
        border: 2,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
    },

    button2: {
        border: 2,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 30,
        marginLeft: 130,
        marginRight: 120,
        width: 150,
        height: 50,
        textAlign: "center"

    },
    chipView: {
        flexDirection: "row",
        justifyContent: 'center',
        padding: 10,
    },
    chip: {
        margin: 5,
        padding: 10,
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
    },

    flatlist: {
        margin: 30,
    },

    card: {
        padding: 15,
        margin: 30,
    },

    radioButton: {
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
    },

    border: {
        padding: 5,
        marginBottom: 10,
    },
})

export const MyTheme = {
    ...MD3LightTheme,
    roundness: 5,
    colors: {
        ...MD3LightTheme.colors,
        primary: '#99D959',
        secondaryContainer: '#5A6273',
        onSecondaryContainer: '#99D959',
        backdrop: '#99D959',
    }
}

