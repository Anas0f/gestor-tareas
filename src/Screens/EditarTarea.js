import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from '../Styles/styles';

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
            Alert.alert('Error', 'El contenido de la tarea no puede estar vacío.', [{ text: 'OK' }]);
            return;
        };

        setTareas(prev =>
            prev.map(tareas => (tareas.id === tarea.id ? { ...tareas, titulo } : tareas))
        );
        navigation.goBack();
    };

    return (
        <View style={styles.containerCrearTarea}>
            <TextInput
                label="Editar tarea"
                value={titulo}
                style={styles.inputCrearTarea}
                onChangeText={setTitulo}
            />
            <Button mode="contained" onPress={guardarTarea}>
                Guardar Cambios
            </Button>
        </View>
    );
}