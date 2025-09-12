import React, { useEffect, useState } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { List, FAB } from 'react-native-paper';

export default function ListarTareas({ navigation }) {
    const [tareas, setTareas] = useState([]);

    return (
        <View>
            <ScrollView>

                {tareas.map(item => (
                    <List.Item
                        key={item.id}
                        title={item.titulo}
                        onPress={() => navigation.navigate('EditarTarea', { tarea: item, setTareas })}
                    />
                ))}

                <FAB
                    icon="plus"
                    onPress={() => navigation.navigate('CrearTarea', { setTareas })}
                />
            </ScrollView>

        </View>
    );
}