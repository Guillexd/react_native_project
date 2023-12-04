import { StyleSheet, FlatList, View } from "react-native";
import ProductItem from "./ProductItem";

export default function ProductsList({ products, setIsVisible, setProductSelected }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem product={item} setIsVisible={setIsVisible} setProductSelected={setProductSelected}  />}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 20,
  }
});
