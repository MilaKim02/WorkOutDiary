import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import Styles from "../styles/Styles";


const Setting = () => {
    const [checked, setChecked] = React.useState('first');

    return (
        <View style={Styles.radioButton}>
            <Text variant='headlineLarge'
                style={{ padding: 20 }}> Settings</Text>
            <Text variant='headlineSmall'
                style={{ padding: 20 }}> Units</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Kilometers</Text>
                <RadioButton
                    style={Styles.radioButton}
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                />
                
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Miles</Text>
            <RadioButton

                mode='enabled'
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
            />
              </View>
        </View>
    );
};

export default Setting;