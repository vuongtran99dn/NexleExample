import { colors, textColors } from '@/constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  title: { color: textColors.WHITE, fontSize: 12, opacity: 0.5 },
  textInput: { borderBottomWidth: 1, borderBottomColor: colors.MAIN, color: textColors.WHITE },
  eye: {
    fontSize: 20,
    position: 'absolute',
    right: 10,
    bottom: 15,
    color: textColors.WHITE,
  },
  lineStrength: {
    height: 1,
    position: 'absolute',
    bottom: 0,
  },
  error: {
    color: textColors.ERROR,
    fontSize: 12,
  },
  textCheckStrongValue: {
    color: textColors.WHITE,
    fontSize: 12,
  },
});

export default styles;
