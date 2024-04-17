import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItems';
import {HeaderTitle} from '../components/HeaderTitle';

export const HomeScreen = () => {
  const itemSeparator = () => {
    return (
      <View
        style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8}}></View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'red',
        ...styles.globalMargin,
      }}>
      <FlatList
        data={menuItems}
        renderItem={({item, index}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú" />}
        ItemSeparatorComponent={() => itemSeparator()}
      />
    </View>
  );
};
