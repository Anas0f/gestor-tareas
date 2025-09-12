import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { List, FAB, Button } from 'react-native-paper';

export default function ListarTareas({ navigation }) {
  const [tareas, setTareas] = useState([]);

  return (
    <View>
      <ScrollView>
        {tareas.map(item => (
          <View style={styles.taskContainer}>
            <List.Item
              title={item.titulo}
              description={item.completed ? 'Completada' : 'Pendiente'}
              style={{ flex: 1 }}
            />

            <Button
              mode="contained"
              onPress={() => navigation.navigate('DetallarTarea', { tarea: item, setTareas })}
              style={styles.button}
            >
              Ver Detalle
            </Button>

            <Button
              mode="outlined"
              onPress={() => navigation.navigate('EditarTarea', { tarea: item, setTareas })}
              style={styles.button}
            >
              Editar
            </Button>
          </View>
        ))}

        <FAB
          icon="plus"
          onPress={() => navigation.navigate('CrearTarea', { setTareas })}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  button: {
    marginLeft: 8,
  },
});