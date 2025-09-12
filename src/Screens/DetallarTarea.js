import React from 'react';
import { View } from 'react-native';
import { Text, Card, Checkbox } from 'react-native-paper';

const DetallarTarea = ({ route, navigation }) => {
  const { tarea, setTareas } = route.params;

  const btnCompletado = () => {
    setTareas(prev =>
      prev.map(tareaLista =>
        tareaLista.id === tarea.id ? { ...tareaLista, completed: !tareaLista.completed } : tareaLista
      )
    );
    navigation.goBack();
  };

  return (
    <View>
      <Card>
        <Card.Title title={tarea.titulo} />
        <Card.Content>
          <Text>{tarea.descripcion}</Text>
        </Card.Content>
        <Card.Actions>
          <Checkbox.Android status={tarea.completed ? 'checked' : 'unchecked'} onPress={btnCompletado} />
        </Card.Actions>
      </Card>
    </View>
  );
}

export default DetallarTarea;
