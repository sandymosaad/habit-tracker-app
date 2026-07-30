import { View, Text, StyleSheet } from "react-native";
import { COLORS, SPACING, TYPOGRAPHY } from "@/theme";
import Icon from "@/components/ui/Icon";
import {IconName} from "@/types/Icon";


type Props = {
  title: string;
  subtitle: string;
  iconName: IconName;
};

function TopHeaderAuthForm({ title, subtitle, iconName }: Props) {
  return (
    <View style={styles.container}>
      <Icon iconName={iconName} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

export default TopHeaderAuthForm;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    ...TYPOGRAPHY.h2,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
    textAlign: "center",
  },
  subtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginBottom: SPACING.md,
  },
});