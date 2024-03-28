import Toast from 'react-native-simple-toast';

export const showToastMessage = (message: string) => {
  Toast.showWithGravity(message, Toast.SHORT, Toast.BOTTOM);
};
