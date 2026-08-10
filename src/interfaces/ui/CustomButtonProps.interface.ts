export interface CustomButtonProps {
  title: string;
  onPress: () => void;

  loading?: boolean;
  disabled?: boolean;

  styles?: {
    button?: object;
    title?: object;
  };
  variant?: 'primary' | 'secondary' | 'white' | 'black';
}