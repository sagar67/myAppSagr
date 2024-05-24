/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import IconSelector, { ICON_TYPE } from './Components/IconSelect';

const tabData = [
  { id: 1, name: 'CUSTOMER' },
  { id: 2, name: 'PARTNER' },
];

const productData = [
  { name: 'Driver', logo: 'person' , iconType:ICON_TYPE.Fontisto },
  { name: 'RO', logo: 'water-pump' ,  iconType:ICON_TYPE.MaterialCommunityIcons },
  { name: 'Taxi', logo: 'taxi', iconType:ICON_TYPE.FontAwesome5},
  { name: 'Courier', logo: 'motorbike', iconType:ICON_TYPE.MaterialCommunityIcons },
  { name: 'Maid', logo: 'face-woman', iconType:ICON_TYPE.MaterialCommunityIcons },
  { name: 'AC', logo: 'air-conditioner', iconType:ICON_TYPE.MaterialCommunityIcons },
  { name: 'Plumber', logo: 'wrench', iconType:ICON_TYPE.MaterialCommunityIcons },
  { name: 'Electrician', logo: 'flash', iconType:ICON_TYPE.MaterialCommunityIcons },
  { name: 'Carpenter', logo: 'handyman', iconType:ICON_TYPE.MaterialIcons },
  { name: 'Painter', logo: 'brush', iconType:ICON_TYPE.MaterialCommunityIcons },
  { name: 'Cook', logo: 'chef-hat', iconType:ICON_TYPE.MaterialCommunityIcons },
];

const mainColor = '#16588E';
const secondaryColor = '#ff8b00';
const black = 'black';
const white = 'white'

export default function App() {
  const [activeTab, setActiveTab] = useState(tabData[0]);

  const renderList = ({item}) => (
    <View style={styles.productItem}>
      <IconSelector type={item.iconType} name={item.logo} size={15} color={mainColor} />
        <Text style={{color:'black'}}>{item.name}</Text>
      </View>
  )
  

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={styles.logo}>tatd</Text>
        <View style={styles.segmentControl}>
          {tabData.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => setActiveTab(item)}
              style={[
                styles.segmentButton,
                {
                  marginRight: 10,
                  backgroundColor: activeTab.id === item.id ? mainColor : 'white',
                },
              ]}
            >
              <Text style={{ color: activeTab.id === item.id ? 'white' : 'black' }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>I Require ?</Text>
        <View style={styles.separator} />
        {productData.length !== 0 && <FlatList
          data={productData}
          numColumns={3}
          columnWrapperStyle={styles.columnWrapper}
          // keyExtractor={(item) => item.name}
          renderItem={renderList}
        />}
      </View>
      <View style={{borderWidth:1, borderColor:white ,padding:10, margin:16.5, borderRadius:10,}}>
      <View style={styles.promoBanner}>
      <View style={styles.row}>
        <View style={{width:'45%'}}>
          <Text style={styles.cashbackText}>5%</Text>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Refer & Earn</Text>
            <IconSelector type={ICON_TYPE.FontAwesome} name={'arrow-right'} size={20} color={white} />
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text numberOfLines={3} style={styles.promoText}>
          Get 5% back Each time
          your friend initiate an
          booking with us
          </Text>
          <Text numberOfLines={3} style={{color:'#999999',textDecorationLine: 'underline',}}>How it works?</Text>
        </View>
      </View>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  segmentControl: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
  },
  segmentButton: {
    padding: 10,
    borderRadius: 10,
  },
  content: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    paddingBottom: 60, // Adjust this value based on the height of your promo banner
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    color:black
  },
  separator: {
    borderWidth: 0.4,
    borderColor: 'gray',
    width: '90%',
    height: 0.1,
    alignSelf: 'center',
    marginVertical: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  productItem: {
    justifyContent: 'space-between',
    padding: 10,
    // borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  promoBanner: {
    backgroundColor: 'white',// Set your desired background color
    padding: 20,
    // marginHorizontal:16.5,
    //  marginTop:10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cashbackText: {
    fontSize: 50,
    color: secondaryColor,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: secondaryColor,
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    flexDirection:'row',
    alignItems:'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight:5,
  },
  descriptionContainer: {
    marginHorizontal: 20, // Adjust spacing as needed
    width:'50%'
  },
  promoText: {
    fontSize: 16,
    color: '#333',
    // Other styling properties
  },
});
