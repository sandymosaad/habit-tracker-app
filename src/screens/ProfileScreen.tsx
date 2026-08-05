import { View, Text, Image, ScrollView, StyleSheet,TouchableOpacity } from 'react-native'
import {useAppSelector} from '../redux/hooks'
import { SPACING,COLORS, SHADOWS, RADIUS,TYPOGRAPHY  } from '@/theme'
import InfoCard from '@/components/ui/InfoCard'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Preferences from '@/components/Preferences';
import CardItem from '@/components/CardItem';
import {logout} from '../redux/slices/authSlice'
import {useAppDispatch} from '../redux/hooks'
import * as ImagePicker from 'expo-image-picker';
import {setProfileImage} from '../redux/slices/authSlice'
import { uploadImageToCloudinary } from '@/utils/cloudinary';
import {updateUserProfile} from '@/services/userService'
function ProfileScreen() {
  const {displayName, email, userId, profileImage, token} = useAppSelector(state => state.auth)
   // console.log(displayName, email, userId, profileImage, token)
  
  const dispatch = useAppDispatch()

  async function handleProfileImage() {
      const permation = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (!permation.granted){
        alert('Permission to access media library is required!');
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'], 
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
    if (!result.canceled) {
      const cloudinaryUrl =await uploadImageToCloudinary(result.assets[0].uri);
      await updateUserProfile(userId!, token!, 
        {profileImage: cloudinaryUrl});
      dispatch(setProfileImage(cloudinaryUrl));

    }
  }

  function handleLogout() {
    dispatch(logout());
  }
  return <ScrollView
    style={styles.container}
    contentContainerStyle={styles.content}
  >
    <View>
    {profileImage ? (
      <Image
        source={{ uri: profileImage }}
        style={styles.profileImage}
      />
    ) : (
      <View style={styles.profilePlaceholder}>
        <Text style={styles.textPlaceHolder}>
          {(displayName || email || 'U').charAt(0).toUpperCase()}
        </Text>
      </View>
    )}
    <TouchableOpacity
        onPress={handleProfileImage}
        style={styles.editIcon}
        >
        <MaterialCommunityIcons
            name="pencil-outline"
            size={24}
            color={COLORS.primary}
        />
    </TouchableOpacity>
    </View>

    <Text style={styles.name}>{displayName}</Text>
    <Text style={styles.email}>{email}</Text>

    <View style={styles.membershipBadge}>
      <Text style={styles.membershipText}>Free Member</Text>
    </View>

    <View style={styles.infoCardsContainer}>
      <InfoCard 
        num={2}
        text="Habits"
      />
      <InfoCard 
        num={5}
        text="Completed "
      />
      <InfoCard 
        num={1}
        text="Best Streak"
      />
    </View>

    <View>
      <Text style={styles.sectionTitle}>
        Preferences
      </Text>
      <Preferences />
    </View>

    <View>
      <Text style={styles.sectionTitle}>
        Danger Zone
      </Text>
      <View style={styles.logoutContainer}>
          <CardItem
            leftIconName="logout"
            text="Log Out"
            rightIconName="chevron-right"
            color={COLORS.primaryBadge}
            onPress={handleLogout}
          />
      </View>
    </View>
  </ScrollView>

}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.xl,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: SPACING.md,
  },

  profilePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
    ...SHADOWS.light,
  },

  textPlaceHolder: {
    color: COLORS.white,
    fontSize: 42,
    fontWeight: '700',
  },

  name: {
    ...TYPOGRAPHY.h2,
    color: COLORS.textPrimary,
    marginTop: SPACING.sm,
  },

  email: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
    marginBottom: SPACING.sm,
  },

  membershipBadge: {
    backgroundColor: COLORS.mutedBadge,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.full ?? 20,
  },

  membershipText: {
    color: COLORS.black,
    fontWeight: '600',
    fontSize: 14,
  },
  infoCardsContainer: {
    flexDirection: 'row',
    marginTop: SPACING.lg,
   gap: SPACING.sm,
  },
  editIcon: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, 
  },
  sectionTitle: {
    color: COLORS.textSecondary,
    marginTop: SPACING.md,
    paddingLeft: SPACING.sm,
    textTransform: 'uppercase', 
   },
   logoutContainer: {
    marginTop: SPACING.sm,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    borderRadius: RADIUS.xl,
    backgroundColor: COLORS.white,
    ...SHADOWS.sm,
  },
});

// function handleImageSelected(imageUri: string) {
//   throw new Error('Function not implemented.');
// }
