import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function EditarTarea({ route, navigation }) {
    const { tarea, setTareas } = route.params;
    const [titulo, setTitulo] = useState(tarea.titulo);
    const [tareaValida, setTareaValida] = useState(false);

    useEffect(() => {
        const esValido = titulo.trim() !== '';
        setTareaValida(esValido);
    }, [titulo]);

    const guardarTarea = () => {
        if (!tareaValida) {
            Alert.alert('Error', 'El título de la tarea no puede estar vacío.', [{ text: 'OK' }]);
            return;
        };

        setTareas(prev =>
            prev.map(tareas => (tareas.id === tarea.id ? { ...tareas, titulo } : tareas))
        );
        navigation.goBack();
    };

    return (
        <View>
            <TextInput
                label="Editar tarea"
                value={titulo}
                onChangeText={setTitulo}
            />
            <Button mode="contained" onPress={guardarTarea}>
                Guardar Cambios
            </Button>
        </View>
    );
}