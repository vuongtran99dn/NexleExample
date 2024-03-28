import { colors, textColors } from '@/constants/colors';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const ITEM_WIDTH = (width - 40) / 3;
const ITEM_HEIGHT = (ITEM_WIDTH * 2) / 3;
const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: `${colors.WHITE}12`,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: colors.MAIN,
  },
  name: {
    fontSize: 14,
    color: textColors.WHITE,
  },
});

export default styles;
