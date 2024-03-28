import { colors, textColors } from '@/constants/colors';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    padding: 10,
  },
  linearBackground: { width: width, height: height, position: 'absolute' },
  textWellcome: { fontSize: 22, color: textColors.WHITE, marginTop: 80, marginBottom: 10 },
  desc: { fontSize: 14, color: textColors.WHITE },
});

export default styles;
