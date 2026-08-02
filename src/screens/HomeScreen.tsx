import {Text } from 'react-native'
import {useSelector} from 'react-redux'
import {useAppSelector} from '@/redux/hooks'

function HomeScreen() {
  const authState = useAppSelector((state: any) => state.auth)
  console.log('Auth State:', authState)
  return <Text> HomeScreen</Text>
}

export default HomeScreen