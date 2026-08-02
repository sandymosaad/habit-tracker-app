import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { COLORS } from '@/theme';

interface LoadingProps {
  fullScreen?: boolean;
}

const Loading = ({ fullScreen = true }: LoadingProps) => {
  return (
    <View style={fullScreen ? styles.fullScreen : styles.inline}>
      <ActivityIndicator
        size="large"
        color={COLORS.primary}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inline: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});