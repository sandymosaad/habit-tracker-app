import { COLORS, RADIUS, SPACING,SHADOWS } from '@/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconName } from '@/types/Icon';

type IconProps = {
  iconName: IconName;
  backgroundColor?: string;
  textColor?: string;
  size?: number;
};

function Icon({
  iconName,
  backgroundColor = COLORS.primary,
  textColor = COLORS.white,
  size = 28,
}: IconProps) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor },
      ]}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={size}
        color={textColor}
      />
    </View>
  );
}

export default Icon;

const styles = StyleSheet.create({
  container: {
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    marginBottom: SPACING.md,
    ...SHADOWS.sm,
  },
});