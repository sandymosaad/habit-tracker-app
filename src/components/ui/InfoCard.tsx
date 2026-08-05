import { View, Text, StyleSheet } from 'react-native'
import { COLORS, RADIUS, SHADOWS, SPACING } from '@/theme'

function InfoCard({num, text}: {num?: number, text?: string}) {
  return <View style={styles.card}>
    <Text style={styles.num}>{num} </Text>
    <Text style={styles.text}>{text}</Text>
  </View>
}

export default InfoCard
const styles = StyleSheet.create({
    card:{
        flex: 1,
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.xl,
        paddingHorizontal: SPACING.sm,
        paddingVertical: SPACING.md,
        borderWidth: 1,
        borderColor: COLORS.border,
        ...SHADOWS.sm,
    },
    num:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: SPACING.sm,
        textAlign: 'center',
    },
    text:{
        fontSize: 16,
        color: COLORS.textSecondary,
        textAlign: 'center',
    }
})