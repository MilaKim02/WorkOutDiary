import { useContext } from "react";
import { Text, Icon, Divider, Card, Avatar, Chip } from "react-native-paper";
import { UnitsContext, WorkoutContext } from "./Contexts";
import { FlatList, View } from "react-native";
import Styles from "../styles/Styles";


export default function WorkOutList() {

  

  const { workout } = useContext(WorkoutContext);
   const {units} = useContext(UnitsContext);

  

  function sum(sport) {
    let summa = 0;
    for (let i = 0; i < workout.length; i++) {
      if (workout[i].selection === sport) {
        summa += +workout[i].distance;

      }
    }
return summa;
  }
  const sumWalk = units === 'miles' ? (sum('walk') / 1.60934).toFixed(2) : sum('walk');
  const sumBike = units === 'miles' ? (sum('bike') / 1.60934).toFixed(2) : sum('bike');
  const sumSwim = units === 'miles' ? (sum('swim') / 1.60934).toFixed(2) : sum('swim');
 return (

    <View style={Styles.list}>
      <Chip icon='walk'> {sumWalk} {units}</Chip>
      <Chip icon='bike'>{sumBike} {units}</Chip>
      <Chip icon='swim'> {sumSwim} {units}</Chip>
      <FlatList
        data={workout}
        renderItem={({ item }) => <Item workout={item} units={units}/>} />
    </View>

  );
}
//Distance: {units === 'km' ? workout.dist.toFixed(2)ance : (workout.distance/ 1.60934)}
function Item({ workout, units }) {

  const distance = units === 'miles' ? (workout.distance / 1.60934).toFixed(2) : workout.distance;

  return (
    <View style={Styles.border}>
      <Card>
        <Card.Title
          title={workout.date}
          left={(props) => <Avatar.Icon {...props} icon={workout.selection} />}
        />
        <Card.Content>
          <Text>{('Distance: ') + distance + (' ') + units} </Text>
          <Text>{('Duration: ') + workout.duration + (' min')}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}