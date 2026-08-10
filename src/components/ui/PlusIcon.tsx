import { Pressable, StyleSheet } from "react-native";
import { COLORS, RADIUS, SPACING } from "@/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function PlusIcon({onPress}: {onPress: () => void}) {
  return <Pressable
    onPress={onPress}
    style={styles.plusIconContainer}>
    <MaterialCommunityIcons 
        name="plus" 
        size={42} 
        color={COLORS.white} 
    />
  </Pressable>
}

export default PlusIcon

const styles = StyleSheet.create({
  plusIconContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    marginBottom: SPACING.md,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 20,
  }
})
