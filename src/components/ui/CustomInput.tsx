import { TextInput, View, Text, StyleSheet } from "react-native"
import { COLORS, RADIUS , SPACING, SHADOWS, TYPOGRAPHY } from "@/theme"
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { IconName } from "@/types/Icon";

interface CustomInputProps {
    title: string;
    placeholder: string;
    icon: IconName;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    autoCorrect?: boolean;
}
function CustomInput(
    {title,placeholder, icon, value, onChangeText, secureTextEntry, keyboardType, autoCapitalize, autoCorrect}: CustomInputProps) {
  return <View>
    <Text style={styles.label}>{title}</Text>
    <View>
        <MaterialCommunityIcons
            name={icon}
            size={24}
            color={COLORS.textSecondary}
            style={styles.icon}
        />
        <TextInput 
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            style={styles.input}
        />
    </View>

  </View>
}

export default CustomInput

const styles = StyleSheet.create({
    
    input: {
        borderWidth: 1,
        borderColor:COLORS.border,
        borderRadius: RADIUS.md,
        padding: SPACING.md,
        marginVertical: SPACING.sm,
        paddingLeft: SPACING.lg + 24, 
    },
    label: {
        ...TYPOGRAPHY.h4,
        marginBottom: SPACING.xs,
        color: COLORS.textSecondary,
    },
    icon: {
        position: 'absolute',
        left: SPACING.sm,
        top: '50%',
        transform: [{ translateY: -12 }],
    },

})