import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import { COLORS } from '@/theme'
import { StyleProp, ViewStyle } from 'react-native'

interface EyeIconProps {
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
}

const EyeIcon = ({
  showPassword,
  setShowPassword,
  style,
}: EyeIconProps) => {
  return (
    <Pressable onPress={() => setShowPassword(!showPassword)} style={style}>
      <MaterialCommunityIcons
        name={showPassword ? 'eye-outline' : 'eye-off-outline'}
        size={24}
        color={COLORS.textSecondary}
      />
    </Pressable>
  );
};
export default EyeIcon
