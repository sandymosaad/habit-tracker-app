import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, TYPOGRAPHY, SPACING } from '@/theme';

type Props = {
  text: string;
  leftIconName: keyof typeof MaterialCommunityIcons.glyphMap;
  rightIconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  rightText?: string;
  color?: string;
  onPress?: () => void;
  //rightIconSwitchName?: keyof typeof MaterialCommunityIcons.glyphMap;
  borderBottom?: boolean;
  showNotification?:boolean;
};

function CardItem({
  text,
  leftIconName,
  rightIconName,
  rightText,
  color = COLORS.primary,
  onPress,
  borderBottom ,
  showNotification,
}: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Pressable 
        {...text==='Log Out' ? {onPress: onPress} : {}}
       >
        <MaterialCommunityIcons
          name={leftIconName}
          size={24}
          color={COLORS.primary}
        />
        </Pressable>
      </View>

      <View style={[styles.infoRow, borderBottom ? styles.borderBottom : null]}>
        <Text style={styles.text}>{text}</Text>

        <View style={styles.rightContainer}>
          {rightText && (
            <Text style={styles.baseText}>{rightText}</Text>
          )}

          {rightIconName && (
            <Pressable onPress={onPress}>
              <MaterialCommunityIcons
                name={rightIconName}
                size={48}
                color={color}
              />
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
}

export default CardItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: SPACING.sm,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.lightBadge,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },

  infoRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    //paddingBottom: SPACING.md,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  text: {
    ...TYPOGRAPHY.h4,
    color: COLORS.textPrimary,
  },

  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  baseText: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    marginRight: SPACING.sm,
  },
});