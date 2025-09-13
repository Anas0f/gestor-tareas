import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // ListarTareas
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: '95%',
    borderColor: '#ccc',
    marginBottom: 12
  },
  button: {
    marginLeft: 8
  },
  iconTareaListada: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  // CrearTarea
  containerCrearTarea: {
    padding: 16
  },
  inputCrearTarea: {
    marginBottom: 16
  },

  // DetallarTarea
  containerDetalleTarea: {
    margin: 16
  }
});

export default styles;
