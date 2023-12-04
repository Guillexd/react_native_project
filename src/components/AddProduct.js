import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";

export default function AddProduct({
  title,
  setTitle,
  price,
  setPrice,
  handleAddProduct,
}) {
  return (
    <View style={styles.containerInput}>
      <TextInput
        style={styles.input}
        value={title}
        placeholder="Producto..."
        placeholderTextColor="gray"
        onChangeText={(prod) => setTitle(prod)}
      />
      <TextInput
        style={styles.input}
        value={price.toString()}
        placeholder="$ 0"
        placeholderTextColor="gray"
        keyboardType="numeric"
        onChangeText={(price) => setPrice(price)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleAddProduct();
          Keyboard.dismiss();
        }}
      >
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerSearch: {
    width: "100%",
  },
  containerInput: {
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
    margin: 10,
    backgroundColor: "#252A32",
  },
  input: {
    flex: 1,
    padding: 10,
    color: "white",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#52555A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
  },
});
