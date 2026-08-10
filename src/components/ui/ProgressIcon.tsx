import Svg, { Circle } from 'react-native-svg';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/theme';

const size = 60;
const strokeWidth = 6;
const radius = (size - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

export const ProgressIcon = ({progress}:{progress:number}) => {
const strokeDashoffset =
  circumference - (progress / 100) * circumference;

    return (
        <View style={{ width: size, height: size }}>
        <Svg width={size} height={size}>
            <Circle
                stroke={COLORS.textDisabled}
                fill="none"
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={strokeWidth}
            />

            <Circle
            stroke={COLORS.white}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            rotation="-90"
            origin={`${size / 2}, ${size / 2}`}
            />
        </Svg>

        <View
        style={{
            position: 'absolute',
            width: size,
            height: size,
            justifyContent: 'center',
            alignItems: 'center',
            }}
        >
            <MaterialCommunityIcons
            name="fire"
            size={28}
            color={COLORS.white}
            />
        </View>
        </View>
)}