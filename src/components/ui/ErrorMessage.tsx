import React from 'react'
import { Text , StyleSheet} from 'react-native'
import { COLORS, SPACING, TYPOGRAPHY } from '@/theme'
function ErrorMessage({message}: {message: string}) {
    if (!message) {
        return null;
    }
  return <Text style={styles.errorText}>
    {message}
  </Text>
}

export default ErrorMessage

const styles = StyleSheet.create({
  errorText: {
    color: COLORS.error,
    ...TYPOGRAPHY.caption,
    marginBottom: SPACING.xs,
  },
})