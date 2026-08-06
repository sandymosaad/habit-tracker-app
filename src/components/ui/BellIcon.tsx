import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { View , StyleSheet} from 'react-native'
import { COLORS, SPACING } from '@/theme'
function BellIcon() {
  return <View style={styles.iconContainer}>
    <MaterialCommunityIcons
        name="bell-outline"
        size={24}
        color="black"
      />
  </View>
}

export default BellIcon

const styles = StyleSheet.create({
    iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.lightBadge,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
    },
})