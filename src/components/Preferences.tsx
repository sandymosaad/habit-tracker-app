import { MaterialCommunityIcons } from "@expo/vector-icons"
import { View , Text, StyleSheet} from "react-native"
import Card from "./ui/Card"
import { COLORS, TYPOGRAPHY } from "@/theme"
import CardItem from "./CardItem"
function Preferences() {
  return <Card >
        <CardItem 
            leftIconName="bell-outline"
            text="Notifications"
            rightIconName="toggle-switch"
            rightIconSwitchName="toggle-switch-off"
            color={COLORS.primaryBadge}
            borderBottom={true}

        />
        <CardItem
            text="Dark Mode"
            leftIconName="theme-light-dark"
            rightIconName="toggle-switch-off"
            color={COLORS.lightBadge}
            borderBottom={true}

        />
        <CardItem
            text="Language"
            leftIconName="translate"
            color={COLORS.lightBadge}
            //rightIconName="chevron-right"
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

