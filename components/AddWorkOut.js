import { Pressable, View } from "react-native";
import { useState } from "react";
import { Button, Modal, Portal, SegmentedButtons, Text, TextInput } from "react-native-paper";
import { Calendar } from "react-native-calendars";

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

    function dateSelected(day) {
        setVisible(false);
        setDate(day.dateString);
    }

    return (
        <View>
            <Text variant='headlineLarge'> Work Out</Text>
            <SegmentedButtons value={selection}
                onValueChange={setSelection}
                buttons={buttons}></SegmentedButtons>
            <TextInput
                keyboardType="number-pad"
                mode='outlined'
                label='Distance (km)'
                value={distance}
                onChangeText={setDistance}
            ></TextInput>
            <TextInput
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
            <Button mode="contained-tonal" style={{marginTop:30}} onPress={showModal} icon="calendar">
                {date ? date : ' '}
            </Button>
            <Button mode="contained tonal" style={{marginTop:30}}>Add WorkOut</Button>



        </View>
    );
}