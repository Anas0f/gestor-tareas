import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from '../Styles/styles'

export default function CrearTarea({ route, navigation }) {
  const { setTareas } = route.params;
  const [titulo, setTitulo] = useState('');
  const [tareaValida, setTareaValida] = useState(false);

  useEffect(() => {
    const esValido = titulo.trim() !== '';
    setTareaValida(esValido);
  }, [titulo]);

  const agregarTarea = () => {
    if (!tareaValida){
        Alert.alert('Error', 'El contenido de la tarea no puede estar vacío.', [{ text: 'OK' }]);
        return;
    };

    setTareas(prev => [...prev, { id: Date.now().toString(), titulo }]);
    navigation.goBack();
  };

  return (
    <View style={styles.containerCrearTarea}>
      <TextInput
        label="Contenido de la tarea"
        value={titulo}
        style={styles.inputCrearTarea}
        onChangeText={setTitulo}
      />
      <Button mode="contained" onPress={agregarTarea}>
        Guardar
      </Button>
    </View>
  );
}