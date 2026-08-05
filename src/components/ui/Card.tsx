import { View,StyleSheet } from 'react-native'
import {COLORS, RADIUS, SHADOWS, SPACING} from '@/theme'
function Card({children}: {children: React.ReactNode}) {
  return <View style={style.container}>
    {children}
  </View>
}

export default Card

const style = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.lg,
        paddingVertical: SPACING.md,
        width: '95%',
        marginTop: SPACING.sm,
        marginLeft: SPACING.sm,
        paddingHorizontal: SPACING.md,
        ...SHADOWS.sm,
    },

})