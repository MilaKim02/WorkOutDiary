import * as React from 'react';
import { Alert, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import Styles from "../styles/Styles";
import { WorkoutContext, UnitsContext } from './Contexts';


export default function Settings() {
    
    const [value, setValue] = React.useState('kilometers');
    Alert.alert('Units changed to ' + value);


    return (
        <View >
            <Text variant='headlineSmall'
                style={{ padding: 20 }}> Change: </Text>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>Kilometers</Text>
                    <RadioButton value="kilometers" />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>Miles</Text>
                    <RadioButton value="miles" />
                </View>
            </RadioButton.Group>
        </View>
    )


}