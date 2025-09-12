import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { TextInput, Button, Checkbox } from 'react-native-paper';

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
        Alert.alert('Error', 'El título de la tarea no puede estar vacío.', [{ text: 'OK' }]);
        return;
    };

    setTareas(prev => [...prev, { id: Date.now().toString(), titulo }]);
    navigation.goBack();
  };

  return (
    <View >
      <TextInput
        label="Título de la tarea"
        value={titulo}
        onChangeText={setTitulo}
      />
      <Button mode="contained" onPress={agregarTarea}>
        Guardar
      </Button>
    </View>
  );
}