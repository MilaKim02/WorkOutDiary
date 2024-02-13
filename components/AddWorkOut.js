import { Pressable, View } from "react-native";
import { useContext, useState } from "react";
import { Button, Modal, Portal, SegmentedButtons, Text, TextInput } from "react-native-paper";
import { Calendar } from "react-native-calendars";
import Styles from "../styles/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { WorkoutContext } from "./Contexts";

export default function AddWorkOut() {

    const buttons = [
        { label: 'Walk', icon: 'walk', value: 0 },
        { label: 'Cycle', icon: 'bike', value: 1 },
        { label: 'Swim', icon: 'swim', value: 2 },
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
        // const userexercise = {distance, duration, date};
        // const modifiedWorkout = [...workout, userexercise];
        // setWorkout(modifiedWorkout);
        setWorkout(prev => [...prev, { distance, duration, date }]);

    }
    return (
        <SafeAreaView style={Styles.container}>
            <Text variant='headlineLarge' > Work Out</Text>
            <SegmentedButtons style={Styles.segbut}
                value={selection}
                onValueChange={setSelection}
                buttons={buttons}></SegmentedButtons>
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