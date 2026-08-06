import {Text, View, StyleSheet, SafeAreaView } from 'react-native'
import {useAppSelector} from '@/redux/hooks'
import { getCurrentDate } from '@/utils/helpers'
import BellIcon from '@/components/ui/BellIcon'
import { COLORS, SPACING,TYPOGRAPHY } from '@/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function HomeScreen() {
  const {displayName} = useAppSelector((state: any) => state.auth)
  console.log('Auth State:', displayName)
  const completed = 1;
  const total = 7;

  const progress = Math.round((completed / total) * 100);
  return <SafeAreaView >
    <View style={styles.header}>
        <View >
            <Text style={styles.headerTitle}>
              Welcome back, {displayName}!
            </Text>
            <Text style={styles.headerSubtitle}>
              {getCurrentDate()}
            </Text>
        </View>
        <BellIcon />
    </View>

    <View style={styles.progressCard}>
        <View style={styles.progressInfo}>
          <Text style={styles.progressTitle}>
            Today's Progress
          </Text>

          <Text style={styles.progressPercentage}>
            {progress}%
          </Text>

          <Text style={styles.progressSubtitle}>
            {completed} of {total} habits completed
          </Text>
        </View>

      <AnimatedCircularProgress
        size={70}
        width={7}
        fill={progress}
        duration={1200}
        tintColor={COLORS.white}
        backgroundColor={COLORS.textDisabled}
        rotation={0}
      >
        {() => (
          <MaterialCommunityIcons
            name="fire"
            size={30}
            color={COLORS.white}
          />
        )}
      </AnimatedCircularProgress>
    </View>
  </SafeAreaView>
}

export default HomeScreen

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    marginTop:SPACING.md,
  },
  headerTitle: {
    ...TYPOGRAPHY.h2,
    color: COLORS.primary,
  },
  headerSubtitle: {
    ...TYPOGRAPHY.caption,
    color: 'gray',
  },
  //-----------------------------
  progressCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
    marginHorizontal: SPACING.md,
    marginVertical: SPACING.sm,
    borderRadius: SPACING.md,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },

  progressInfo: {
    flex: 1,
    marginRight: SPACING.md,
  },

  progressTitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.white,
    opacity: 0.9,
  },

  progressPercentage: {
    ...TYPOGRAPHY.h1,
    color: COLORS.white,
    marginVertical: SPACING.xs,
    fontWeight: '700',
  },

  progressSubtitle: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.85,
  },
})