import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      gap: 4,
      backgroundColor: "#131016",
    },
    eventName: {
      fontSize: 22,
      fontWeight: "bold",
      marginTop: 48,
      color: "#fdfcfe"
    },
    eventDate: {
      color: "#6b6b6b",
      fontSize: 14,
    },
    form: {
      width: "100%",
      alignItems: "center",
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
    },
    input: {
      flex: 1,
      padding: 16,
      marginRight: 12,
      backgroundColor: "#1f1e25",
      borderRadius: 5,
      fontSize: 16,
      color: "#fdfcfe"
    },
    button: {
      width: 58,
      height: 58,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      backgroundColor: "#31cf67"
    },
    buttonDisabled: {
      width: 58,
      height: 58,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      backgroundColor: "#31cf67",
      opacity: 0.5
    },
    buttonText: {
      color: "#fff",
      fontSize: 24
    },
    listEmptyText: {
      color: "#6b6b6b",
      fontSize: 14,
      textAlign: "center"
    }
})