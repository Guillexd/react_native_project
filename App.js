import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ModalDelete from "./src/components/ModalDelete";
import { useState } from "react";
import uuid from "react-native-uuid";
import AddProduct from "./src/components/AddProduct";
import ProductsList from "./src/components/Products/ProductsList";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: uuid.v4(),
      title: "Teclado",
      price: 157.5,
    },
    {
      id: uuid.v4(),
      title: "Mouse",
      price: 49.99,
    },
  ]);
  const [productSelected, setProductSelected] = useState({});
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleAddProduct = () => {
    if (title.trim().length > 0 && price > 0) {
      const newProduct = {
        id: uuid.v4(),
        title: title.trim(),
        price,
      };
      setProducts((products) => [newProduct, ...products]);
      setTitle("");
      setPrice("");
    }
  };

  const handleDeleteProduct = () => {
    setProducts((products) =>
      products.filter((prod) => prod.id !== productSelected.id)
    );
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={true} />
      <Text style={styles.text}>Agrega tu producto</Text>
      <View style={styles.containerSearch}>
        <AddProduct
          title={title}
          setTitle={setTitle}
          price={price}
          setPrice={setPrice}
          handleAddProduct={handleAddProduct}
        />
      </View>
      <ProductsList
        products={products}
        setIsVisible={setIsVisible}
        setProductSelected={setProductSelected}
      />
      <ModalDelete
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        handleDeleteProduct={handleDeleteProduct}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F14",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 100,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: Platform.OS === "ios" ? "Arial" : "Roboto",
    fontWeight: "bold",
  },
  containerSearch: {
    width: "100%",
  },
});
