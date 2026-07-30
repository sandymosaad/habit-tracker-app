import { Pressable,Text, StyleSheet } from 'react-native'
import { CustomButtonProps } from '@/interfaces/ui/CustomButtonProps.interface'
import {COLORS, RADIUS,SPACING,TYPOGRAPHY} from '@/theme'

function CustomButton({title, onPress, loading, disabled, variant}: CustomButtonProps) {
  return <Pressable
    onPress={onPress}
    disabled={disabled || loading}
    style={[
        styles.button,
        variant === "primary"
                ? styles.primaryButton
                : variant === "secondary"
                ? styles.secondaryButton
                : variant === "white"
                ? styles.whiteButton
                : variant === "black"
                ? styles.blackButton
                : styles.primaryButton,
            (disabled || loading) && styles.disabledButton,
    ]}
  >
    {loading 
        ? <Text style={styles.title}>Loading...</Text> 
        :<Text style={[styles.title, variant==='white'&&styles.whiteButton]}>{title}</Text> 
    }

  </Pressable>
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        borderRadius: RADIUS.lg,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: SPACING.sm,
    },
    disabledButton: {
        opacity: 0.5,
    },
    primaryButton: {
        backgroundColor: COLORS.primary,
    },
    secondaryButton: {
        backgroundColor: COLORS.secondary,
    },
    whiteButton: {
        backgroundColor: COLORS.white,
        color: COLORS.black,
    },
    blackButton: {
        backgroundColor: COLORS.black,
    },
    title:{
          ...TYPOGRAPHY.h4,
        color: COLORS.white,
    },
    
})