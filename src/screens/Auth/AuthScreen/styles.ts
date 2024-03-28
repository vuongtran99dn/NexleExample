import { colors, textColors } from '@/constants/colors';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    padding: 10,
  },
  content: {
    flex: 1,
  },
  linearBackground: { width: width, height: height, position: 'absolute' },
  startText: { fontSize: 22, color: textColors.WHITE },
  textCheckOverAge: { color: textColors.WHITE, marginLeft: 10 },
  term: {
    fontSize: 12,
    color: textColors.WHITE,
    opacity: 0.5,
  },
  termLink: {
    color: colors.MAIN,
    opacity: 50,
  },
  signUpWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },
  textSignUp: {
    color: textColors.WHITE,
  },
  buttonSignUp: {
    width: 54,
    height: 54,
    borderRadius: 54,
    borderWidth: 1,
    borderColor: colors.MAIN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    color: colors.WHITE,
    fontSize: 30,
  },
});

export default styles;
