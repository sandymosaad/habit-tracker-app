import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from '@/navigation/AppNavigator';
import AuthNavigator from '@/navigation/AuthNavigator';

import {useAppSelector} from '@/redux/hooks'

const RootNavigator = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  
  return (
    <NavigationContainer>
              <AppNavigator />

      {/* {isAuthenticated ? (
        <AppNavigator />
      ) : (
        <AuthNavigator />
      )} */}
    </NavigationContainer>
  );
};

export default RootNavigator;