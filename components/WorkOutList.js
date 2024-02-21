import { useContext } from "react";
import { Text, Icon, Divider, Card, Avatar, Chip } from "react-native-paper";
import { UnitsContext, WorkoutContext } from "./Contexts";
import { FlatList, View } from "react-native";
import Styles from "../styles/Styles";


export default function WorkOutList() {

  const { workout } = useContext(WorkoutContext);
  // const {units} = useContext(UnitsContext);


  function sum(sport) {
    let summa = 0;
    for (let i = 0; i < workout.length; i++) {
      if (workout[i].selection === sport) {
        summa += +workout[i].distance;
      }
    }
return summa;
  }



  return (

    <View style={Styles.list}>
      <Chip icon='walk'> {sum('walk')}Km</Chip>
      <Chip icon='bike'>{sum('bike')}Km</Chip>
      <Chip icon='swim'> {sum('swim')}Km</Chip>
      <FlatList
        data={workout}
        renderItem={({ item }) => <Item workout={item} />} />
    </View>

  );
}

function Item({ workout }) {

  return (
    <View style={Styles.border}>
      <Card>
        <Card.Title
          title={workout.date}
          left={(props) => <Avatar.Icon {...props} icon={workout.selection} />}
        />
        <Card.Content>
          <Text>{('Distance: ') + workout.distance + (' km')}</Text>
          <Text>{('Duration: ') + workout.duration + (' min.')}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}