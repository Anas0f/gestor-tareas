import React from 'react';
import { View } from 'react-native';
import { Text, Card, Checkbox } from 'react-native-paper';
import styles from '../Styles/styles';

const DetallarTarea = ({ route, navigation }) => {
  const { tarea, setTareas } = route.params;

  const btnCompletado = () => {
    setTareas(prev =>
      prev.map(tareas =>
        tareas.id === tarea.id
          ? { ...tareas, completed: !tareas.completed }
          : tareas,
      ),
    );
    navigation.goBack();
  };

  return (
    <View>
      <Card style={styles.containerDetalleTarea}>
        <Card.Title title={tarea.titulo} />
        <Card.Content>
          <Text>{tarea.descripcion}</Text>
        </Card.Content>
        <Card.Actions>
          <Checkbox.Android
            status={tarea.completed ? 'checked' : 'unchecked'}
            onPress={btnCompletado}
          />
        </Card.Actions>
      </Card>
    </View>
  );
};

export default DetallarTarea;
