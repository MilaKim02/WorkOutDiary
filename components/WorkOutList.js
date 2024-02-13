import { useContext } from "react";
import { Text, Divider } from "react-native-paper";
import { WorkoutContext } from "./Contexts";
import { FlatList, View } from "react-native";
import Styles from "../styles/Styles";

//<Text>{item.distance + ':' + item.duration + ':' + item.date}</Text>
export default function WorkOutList() {

    const { workout } = useContext(WorkoutContext);

    return (
        <View style={Styles.list}>
            <FlatList
                data={workout}
                renderItem={({ item }) => <Item workout={item} />} />
        </View>
    );
}

function Item({ workout }) {
    return (
      <View style={Styles.border}>
        <Text>{workout.date}</Text>
        <Text>{('Distance: ') + workout.distance + (' km') }</Text>
        <Text>{('Duration: ') + workout.duration + (' min.')}</Text>
        
      </View>  
    );
}