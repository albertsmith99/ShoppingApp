import { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import styles from "../styles/styles";

export default function AddItemScreen() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tilføj en vare</Text>
      <TextInput
        style={styles.input}
        placeholder="Skriv en vare..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Tilføj vare" onPress={addItem} />

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.listItem}>🛒 {item}</Text>}
      />
    </View>
  );
}

