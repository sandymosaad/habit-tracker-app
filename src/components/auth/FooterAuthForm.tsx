import { View, Text, Pressable,StyleSheet } from 'react-native'

import { COLORS, SPACING, TYPOGRAPHY } from '@/theme'   

function FooterAuthForm({text, actionText, onPress}: {text: string, actionText: string, onPress: () => void}) {
  return  <View style={styles.footer}>
            <Text style={styles.footerText}>
                {text}
            </Text>
  
            <Pressable onPress={onPress}>
              <Text style={styles.authAction}>{actionText}</Text>
            </Pressable>
          </View>
}

export default FooterAuthForm

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.xl,
  },

  footerText: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.body,
  },

  authAction: {
    marginLeft: SPACING.xs,
    color: COLORS.primary,
    ...TYPOGRAPHY.body,
    fontWeight: `700`,
  },

})