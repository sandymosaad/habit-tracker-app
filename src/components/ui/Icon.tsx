import { COLORS, RADIUS, SPACING, } from '@/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
import { IconName } from "@/types/Icon";

function Icon({iconName}: {iconName: IconName}) {
  return (
    <View style={Styles.container}>
        <MaterialCommunityIcons name={iconName} size={28} color={COLORS.white} />
    </View>
  )
}

export default Icon

const Styles = {
    container: {
        backgroundColor: COLORS.primary,
        borderRadius: RADIUS.md,
        padding: SPACING.sm,
        marginBottom: SPACING.md,
    }
}   