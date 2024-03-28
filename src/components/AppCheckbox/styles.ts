import { colors, textColors } from '@/constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  checkbox: {
    borderColor: colors.MAIN,
    height: 23,
    width: 23,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: { color: textColors.WHITE, fontSize: 20 },
});

export default styles;
