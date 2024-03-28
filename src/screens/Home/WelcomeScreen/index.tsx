import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@/components';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logout, setSelectedCategories } from '@/redux/slices/authSlice';
import { getCategories } from '@/redux/thunks/authThunk';
import { ItemCatogory } from './components';
import { category } from '@/services/api/authApi/types';

const WelcomeScreen = ({ navigation }) => {
  const dispach = useAppDispatch();

  const categories = useAppSelector(state => state.authReducer.categories);
  const selectedCategories = useAppSelector(state => state.authReducer.selectedCategories);
  useEffect(() => {
    dispach(getCategories());
  }, []);
  const listItemSelected = useRef<category[]>(selectedCategories);
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#1D223821', '#000000']} style={styles.linearBackground} />
      <Header
        onPress={() => {
          dispach(logout());
        }}
        rightComponent={
          <TouchableOpacity
            onPress={() => {
              dispach(setSelectedCategories(listItemSelected.current));
              navigation.navigate('HomeScreen');
            }}
          >
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        }
      />
      <Text style={styles.textWellcome}>Wellcome to Nexle Entrance Test</Text>
      <Text style={styles.desc}>
        Please select categories what you would like to see on your feed. You can set this later on Filter.
      </Text>
      <FlatList
        style={styles.flatList}
        keyExtractor={(item, index) => item.id + index}
        data={categories}
        numColumns={3}
        renderItem={({ item }) => {
          const isItemSelected = listItemSelected.current.some(itemSelected => item.id === itemSelected.id);
          return (
            <ItemCatogory
              data={item}
              isItemSelected={isItemSelected}
              onChange={value => {
                const cloneList = [...listItemSelected.current];
                if (value) {
                  cloneList.push(item);
                } else {
                  const itemIndex = cloneList.findIndex(itemSelected => itemSelected.id === item.id);
                  cloneList.splice(itemIndex, 1);
                }
                listItemSelected.current = cloneList;
              }}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
