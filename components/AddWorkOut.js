import { Pressable, View } from "react-native";
import { useContext, useState } from "react";
import { Button, Modal, Portal,Text, TextInput,SegmentedButtons } from "react-native-paper";
import { Calendar } from "react-native-calendars";
import Styles from "../styles/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { WorkoutContext } from "./Contexts";
import { useFonts } from 'expo-font';


export default function AddWorkOut() {

        // const [loaded] = useFonts({
    //     Roboto: require('../fonts/Roboto-Italic.ttf')
    // });

    // if (!loaded) {
    //     return (<Text>Loading</Text>)
    // }


    const buttons = [
        { label: 'Walk', icon: 'walk', value: 'walk' },
        { label: 'Cycle', icon: 'bike', value: 'bike' },
        { label: 'Swim', icon: 'swim', value: 'swim' },
    ]
    const [selection, setSelection] = useState(buttons[0].value);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState('');


    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const { setWorkout } = useContext(WorkoutContext);

    function dateSelected(day) {
        const selectedDate = new Date(day.dateString);
        setVisible(false);
        setDate(selectedDate.toLocaleDateString('fi-FI'));
    }


    function addWork() {
        setWorkout(prev => [...prev, { distance, duration, date , selection}]);



    }
    return (
        <SafeAreaView style={Styles.container}>
            <Text variant='headlineLarge' style={Styles.label}> Work Out</Text>
            <SegmentedButtons style={Styles.segbut}
                value={selection}
                onValueChange={setSelection}
                buttons={buttons}
               
            ></SegmentedButtons>
            <TextInput style={Styles.disDu}
                keyboardType="number-pad"
                mode='outlined'
                label='Distance (km)'
                value={distance}
                onChangeText={setDistance}
            ></TextInput>
            <TextInput style={Styles.disDu}
                keyboardType="number-pad"
                mode='outlined'
                label='Duration (min)'
                value={duration}
                onChangeText={setDuration}
            ></TextInput>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal}>
                    <Calendar onDayPress={dateSelected}></Calendar>
                    <Pressable onPress={() => setVisible(true)}>
                    </Pressable>
                </Modal>
            </Portal>
            <Button mode="contained-tonal" style={{ marginTop: 30 }} onPress={showModal} icon="calendar">
                {date ? date : ' '}
            </Button>
            <Button mode="contained tonal" style={{ marginTop: 30 }} onPress={addWork}>Add WorkOut</Button>



        </SafeAreaView>
    );
}