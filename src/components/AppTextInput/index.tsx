import { View, Animated, Text } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import { Control, Controller, RegisterOptions, useWatch } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Entypo';
import { checkPasswordStrength } from './functions';

interface appTextInputProps {
  title: string;
  control: Control<any>;
  name: string;
  isSecure?: boolean;
  errors?: any;
  rules?: RegisterOptions<any>;
  required?: boolean;
  maxLength?: number;
}
const AppTextInput: React.FC<appTextInputProps> = ({
  control,
  name,
  title,
  isSecure,
  errors,
  rules,
  required,
  maxLength,
}) => {
  const watch = useWatch({ control, name });

  const titleLocation = useRef(new Animated.Value(40)).current;
  const textInputRef = React.createRef<TextInput>();

  const [isShow, setisShow] = useState(isSecure);

  const changeTitleSize = (number: number) => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(titleLocation, {
      toValue: number,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (watch !== '') {
      changeTitleSize(0);
    }
  }, [watch]);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: required ? { value: true, message: 'This field is required' } : false,
          ...rules,
        }}
        render={({ field: { onChange, value } }) => {
          const { level, strengthLevel, color } = checkPasswordStrength(value);
          const widthStrengthLine = 25 * level;
          return (
            <>
              <Animated.Text style={[styles.title, { transform: [{ translateY: titleLocation }] }]}>
                {title}
              </Animated.Text>
              <View>
                <TextInput
                  ref={textInputRef}
                  style={styles.textInput}
                  value={value}
                  maxLength={maxLength}
                  onChangeText={onChange}
                  onFocus={() => {
                    if (value === '') {
                      changeTitleSize(0);
                    }
                  }}
                  onEndEditing={() => {
                    if (value === '') {
                      changeTitleSize(40);
                    }
                  }}
                  secureTextEntry={isShow}
                />
                {isSecure && (
                  <Icon
                    name="eye"
                    style={styles.eye}
                    onPress={() => {
                      setisShow(!isShow);
                    }}
                  />
                )}
                {isSecure && (
                  <View style={[styles.lineStrength, { backgroundColor: color, width: `${widthStrengthLine}%` }]} />
                )}
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.error}>{errors[name] ? errors[name].message : ''}</Text>
                {isSecure && <Text style={[styles.textCheckStrongValue, { color: color }]}>{strengthLevel}</Text>}
              </View>
            </>
          );
        }}
        name={name}
      />
    </View>
  );
};

export default AppTextInput;
