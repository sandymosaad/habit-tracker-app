import { TextInput, View, Text, StyleSheet } from "react-native"
import { COLORS, RADIUS , SPACING, SHADOWS, TYPOGRAPHY } from "@/theme"
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { IconName } from "@/types/Icon";
import ErrorMessage from "@/components/ui/ErrorMessage";
import EyeIcon from "./EyeIcon";
interface CustomInputProps {
    title: string;
    placeholder: string;
    icon?: IconName;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    autoCorrect?: boolean;
    error?: string | null;
    multiline?: boolean;
    numberOfLines?: number;
    setShowPassword?: (value: boolean) => void;
}
function CustomInput(
    {title,placeholder, icon, value, onChangeText,numberOfLines,multiline =false, secureTextEntry, keyboardType, autoCapitalize, autoCorrect , error,setShowPassword}: CustomInputProps) {
  return <View>
    <Text style={styles.label}>{title}</Text>
    <View>
        {/* {icon && */}
        <MaterialCommunityIcons
            name={icon}
            size={24}
            color={COLORS.textSecondary}
            style={styles.icon}
        />
        {/* } */}
        <TextInput 
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            numberOfLines={numberOfLines}
            multiline={multiline}
            style={[styles.input, multiline && styles.multilineInput]}
        />
        {title.toLowerCase().includes('password') && setShowPassword &&(
        <EyeIcon 
            showPassword={!secureTextEntry} 
            style={styles.eyeIcon}
            setShowPassword={setShowPassword}
        />)}
    </View>
    {error && <ErrorMessage message={error} />}

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
        backgroundColor: COLORS.white,
        ...SHADOWS.sm,
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
        zIndex: 1,
        transform: [{ translateY: -12 }],
    },
    multilineInput: {
        minHeight: 100,
        textAlignVertical: 'top',
        paddingLeft: SPACING.md,
    },
    eyeIcon: {
        position: 'absolute',
        right: SPACING.sm,
        top: '30%',
        transform: [{ translateX: -12 }],
    },
})