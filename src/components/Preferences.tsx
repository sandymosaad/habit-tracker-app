import { MaterialCommunityIcons } from "@expo/vector-icons"
import { View , Text, StyleSheet} from "react-native"
import Card from "./ui/Card"
import { COLORS, TYPOGRAPHY } from "@/theme"
import CardItem from "./CardItem"

type PreferencesProps = {
  showNotification: boolean;
  onToggleNotification: () => void;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
};

function Preferences(
    {showNotification,onToggleNotification , darkMode, onToggleDarkMode}: PreferencesProps) {
  
  return <Card >
        <CardItem 
            leftIconName="bell-outline"
            text="Notifications"
            rightIconName={showNotification ? "toggle-switch" : "toggle-switch-off"}
            color={showNotification ? COLORS.primaryBadge : COLORS.lightBadge}
            borderBottom={true}
            onPress={onToggleNotification}
            showNotification={showNotification}
        />
        <CardItem
            text="Dark Mode"
            leftIconName="theme-light-dark"
            rightIconName={darkMode ? "toggle-switch" : "toggle-switch-off"}
            color={darkMode ? COLORS.primaryBadge :  COLORS.lightBadge}
            borderBottom={true}
            onPress={onToggleDarkMode}
        />
        <CardItem
            text="Language"
            leftIconName="translate"
            color={COLORS.lightBadge}
            rightText="English"
            borderBottom={false}
        />
  </Card>
}

export default Preferences
const styles = StyleSheet.create({
    card:{
       width: '100%',}
    }
)

