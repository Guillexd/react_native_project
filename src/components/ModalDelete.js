
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function ModalDelete({ isVisible, setIsVisible, handleDeleteProduct }) {
  return (
    <Modal transparent={true} animationType="slide" visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>¿Eliminar producto?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleDeleteProduct} style={styles.deleteButton}>
              <Text style={styles.buttonText}>Eliminar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsVisible(false)} style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(12, 15, 20, 0.5)',
  },
  modalContent: {
    backgroundColor: '#0C0F14',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  deleteButton: {
    backgroundColor: '#FF4040', // Rojo oscuro
    padding: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: '#808080', // Gris oscuro
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
