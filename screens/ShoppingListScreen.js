import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../styles/styles";

export default function ShoppingListScreen() {
  const [items, setItems] = useState(["Mælk", "Brød", "Æg"]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Indkøbsliste</Text>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>✅ {item}</Text>
        )}
      />
    </View>
  );
}

