export interface CustomButtonProps {
  title: string;
  onPress: () => void;

  loading?: boolean;
  disabled?: boolean;

  variant?: 'primary' | 'secondary' | 'white' | 'black';
}