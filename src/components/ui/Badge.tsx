import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '@/theme';

type BadgeColor =
  | 'primary'
  | 'lightGreen'
  | 'lightBlue'
  | 'lightPurple'
  | 'lightYellow'
  | 'lightPink'
  | 'lightTeal'
  | 'lightViolet'
  | 'lightOrange';

type BadgeTextColor =
  | 'white'
  | 'darkGreen'
  | 'darkBlue'
  | 'darkPurple'
  | 'darkYellow'
  | 'darkPink'
  | 'darkTeal'
  | 'darkViolet'
  | 'darkOrange';

type BadgeProps = {
  text: string;
  backgroundColor?: BadgeColor;
  textColor?: BadgeTextColor;
};

function Badge({
  text,
  backgroundColor = 'primary',
  textColor = 'white',
}: BadgeProps) {
  return (
    <View style={[styles.badgeContainer, styles[backgroundColor]]}>
      <Text style={[styles.badgeText, styles[`text_${textColor}`]]}>
        {text}
      </Text>
    </View>
  );
}

export default Badge;

const styles = StyleSheet.create({
  badgeContainer: {
    borderRadius: SPACING.sm,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },

  // Background colors
  primary: {
    backgroundColor: COLORS.primary,
  },

  lightGreen: {
    backgroundColor: COLORS.lightGreen,
  },

  lightBlue: {
    backgroundColor: COLORS.lightBlue,
  },

  lightPurple: {
    backgroundColor: COLORS.lightPurple,
  },

  lightYellow: {
    backgroundColor: COLORS.lightYellow,
  },

  lightPink: {
    backgroundColor: COLORS.lightPink,
  },

  lightTeal: {
    backgroundColor: COLORS.lightTeal,
  },

  lightViolet: {
    backgroundColor: COLORS.lightViolet,
  },

  lightOrange: {
    backgroundColor: COLORS.lightOrange,
  },

  // Text colors
  text_white: {
    color: COLORS.white,
  },

  text_darkGreen: {
    color: COLORS.darkGreen,
  },

  text_darkBlue: {
    color: COLORS.darkBlue,
  },

  text_darkPurple: {
    color: COLORS.darkPurple,
  },

  text_darkYellow: {
    color: COLORS.darkYellow,
  },

  text_darkPink: {
    color: COLORS.darkPink,
  },

  text_darkTeal: {
    color: COLORS.darkTeal,
  },

  text_darkViolet: {
    color: COLORS.darkViolet,
  },

  text_darkOrange: {
    color: COLORS.darkOrange,
  },
});