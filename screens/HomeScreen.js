import { View, Text, Button } from "react-native";
import styles from "../styles/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Velkommen til Indkøbslisten 🛒</Text>
      <Button
        title="Gå til Indkøbsliste"
        onPress={() => navigation.navigate("List")}
      />
    </View>
  );
}
