import { Linking, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppTextInput, Header } from '@/components';
import { useForm } from 'react-hook-form';
import AppCheckBox from '@/components/AppCheckbox';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { useAppDispatch } from '@/redux/hooks';
import { signIn, signUp } from '@/redux/thunks/authThunk';
import { showToastMessage } from '@/functions';

type formData = {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
};

const AuthScreen = ({}) => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      lastName: '',
      firstName: '',
    },
  });

  const [isSignIn, setIsSignIn] = useState(true);
  const onSubmit = (data: formData) => {
    if (isSignIn) {
      dispatch(
        signIn({
          email: data.email,
          password: data.password,
        }),
      );
      return;
    }
    dispatch(signUp(data));
  };
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#1D223821', '#000000']} style={styles.linearBackground} />
      <Header />
      <View style={styles.content} />
      <Text style={styles.startText}>Let's get you started!</Text>
      <AppTextInput
        control={control}
        name="email"
        title="Your email"
        errors={errors}
        required
        rules={{
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Entered value does not match email format',
          },
        }}
      />
      <AppTextInput
        control={control}
        name="password"
        title="Your password"
        isSecure
        errors={errors}
        required
        rules={{ minLength: { value: 8, message: 'This field must be at least 8 characters' } }}
      />
      {!isSignIn && (
        <>
          <AppTextInput control={control} name="firstName" title="First name" errors={errors} required />
          <AppTextInput control={control} name="lastName" title="Last name" errors={errors} required />
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 30 }}>
            <AppCheckBox />
            <Text style={styles.textCheckOverAge}>I am over 16 years of age</Text>
          </View>
          <Text style={styles.term}>
            By clicking Sign Up, you are indicating that you have read and agree to the{' '}
            <Text
              style={styles.termLink}
              onPress={() => {
                Linking.canOpenURL('http://google.com');
              }}
            >
              Terms of Service
            </Text>
            {' and '}
            <Text
              style={styles.termLink}
              onPress={() => {
                Linking.canOpenURL('http://google.com');
              }}
            >
              Privacy Policy
            </Text>
          </Text>
        </>
      )}

      <View style={styles.signUpWrap}>
        <TouchableOpacity
          onPress={() => {
            setIsSignIn(!isSignIn);
          }}
        >
          <Text style={styles.textSignUp}>{isSignIn ? 'Sign In' : 'Sign Up'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSignUp} disabled={!isValid} onPress={handleSubmit(onSubmit)}>
          <Icon name="arrow-right" style={styles.arrow} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
