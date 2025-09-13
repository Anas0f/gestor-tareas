import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { List, FAB, Button, IconButton } from 'react-native-paper';
import styles from '../Styles/styles';

export default function ListarTareas({ navigation }) {
  const [tareas, setTareas] = useState([]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {tareas.map(item => (
          <View style={styles.taskContainer}>
            <List.Item
              key={item.id}
              title={item.titulo}
              description={item.completed ? 'Completada' : 'Pendiente'}
            />

            <View style={styles.iconTareaListada}>
              <IconButton
                icon="eye"
                iconColor={'#bc8dffff'}
                size={30}
                onPress={() =>
                  navigation.navigate('DetallarTarea', {
                    tarea: item,
                    setTareas,
                  })
                }
              />

              <IconButton
                icon="pencil"
                iconColor={'#bc8dffff'}
                size={30}
                onPress={() =>
                  navigation.navigate('EditarTarea', { tarea: item, setTareas })
                }
              />
            </View>
          </View>
        ))}

        <FAB
          icon="plus"
          onPress={() => navigation.navigate('CrearTarea', { setTareas })}
        />
      </View>
    </ScrollView>
  );
}
