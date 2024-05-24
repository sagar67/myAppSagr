/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import IconSelector, {ICON_TYPE} from './Components/IconSelect';
import {styles} from './Components/Style';

const tabData = [
  {id: 1, name: 'CUSTOMER'},
  {id: 2, name: 'PARTNER'},
];

const productData = [
  {name: 'Driver', logo: 'person', iconType: ICON_TYPE.Fontisto},
  {name: 'RO', logo: 'water-pump', iconType: ICON_TYPE.MaterialCommunityIcons},
  {name: 'Taxi', logo: 'taxi', iconType: ICON_TYPE.FontAwesome5},
  {
    name: 'Courier',
    logo: 'motorbike',
    iconType: ICON_TYPE.MaterialCommunityIcons,
  },
  {
    name: 'Maid',
    logo: 'face-woman',
    iconType: ICON_TYPE.MaterialCommunityIcons,
  },
  {
    name: 'AC',
    logo: 'air-conditioner',
    iconType: ICON_TYPE.MaterialCommunityIcons,
  },
  {name: 'Plumber', logo: 'wrench', iconType: ICON_TYPE.MaterialCommunityIcons},
  {
    name: 'Electrician',
    logo: 'flash',
    iconType: ICON_TYPE.MaterialCommunityIcons,
  },
  {name: 'Carpenter', logo: 'handyman', iconType: ICON_TYPE.MaterialIcons},
  {name: 'Painter', logo: 'brush', iconType: ICON_TYPE.MaterialCommunityIcons},
  {name: 'Cook', logo: 'chef-hat', iconType: ICON_TYPE.MaterialCommunityIcons},
];

const safetyData = [
  {name: 'Safe', logo: 'face-mask', iconType: ICON_TYPE.MaterialCommunityIcons},
  {
    name: 'Trained',
    logo: 'security',
    iconType: ICON_TYPE.MaterialCommunityIcons,
  },
  {
    name: 'Experienced',
    logo: 'precision-manufacturing',
    iconType: ICON_TYPE.MaterialIcons,
  },
  {
    name: 'Punctual',
    logo: 'calendar-clock',
    iconType: ICON_TYPE.MaterialCommunityIcons,
  },
  {
    name: '24*7 Services',
    logo: 'phone',
    iconType: ICON_TYPE.MaterialCommunityIcons,
  },
  {name: 'Presence', logo: 'location-on', iconType: ICON_TYPE.MaterialIcons},
  {name: 'Convenient', logo: 'hand-point-up', iconType: ICON_TYPE.FontAwesome5},
  {
    name: 'How It Works',
    logo: 'settings-suggest',
    iconType: ICON_TYPE.MaterialIcons,
  },
];

const mainColor = '#16588E';
const secondaryColor = '#ff8b00';
const black = 'black';
const white = 'white';

export default function App() {
  const [activeTab, setActiveTab] = useState(tabData[0]);

  const renderList = ({item}) => (
    <TouchableOpacity style={styles.productItem}>
      <IconSelector
        type={item.iconType}
        name={item.logo}
        size={30}
        color={mainColor}
      />
      <Text style={{color: black}}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSafetyList = ({item}) => (
    <View style={[styles.productItem, {width: '20%'}]}>
      <TouchableOpacity style={styles.iconContainer}>
        <IconSelector
          type={item.iconType}
          name={item.logo}
          size={30}
          color={mainColor}
        />
      </TouchableOpacity>
      <Text style={{color: white, marginTop: 2}}>{item.name}</Text>
    </View>
  );

  const renderSafety = () => {
    return (
      <View style={styles.containersafety}>
        <View style={styles.infoBox}>
          <Text style={styles.mainText}>
            Our drivers are briefed about the importance of time, Also we track
            their performance & provide them feedback as & when required.
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.subText}>Your Safety Matters</Text>
            <Text style={styles.phoneNumber}>9999160322</Text>
          </View>
          <View style={{backgroundColor: mainColor, flex: 1}}>
            {safetyData.length !== 0 && (
              <FlatList
                data={safetyData}
                numColumns={4}
                columnWrapperStyle={styles.columnWrapper}
                keyExtractor={item => item.name}
                renderItem={renderSafetyList}
              />
            )}
          </View>
        </View>
      </View>
    );
  };

  const renderRatings = () => {
    const StarRating = ({rating}) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <Text
            key={i}
            style={i <= rating ? styles.filledStar : styles.emptyStar}>
            ★
          </Text>,
        );
      }
      return <View style={styles.starsWrapper}>{stars}</View>;
    };

    const overallRating = 4.8;
    const overallRatingNo = 399749;
    const reviewDate = '24 May, 2024';
    const reviewText =
      'It would be better to disclose terms and conditions of the driver before adding to the driver pool.';

    return (
      <View style={styles.containerRating}>
        <Text style={styles.header}>Rating and Review</Text>
        <Text style={styles.rating}>{overallRating}</Text>
        <StarRating rating={overallRating} />
        <Text style={{color: black}}>{overallRatingNo}</Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <View
            style={[
              styles.iconContainer,
              {backgroundColor: mainColor, marginRight: 10},
            ]}>
            <Text>A</Text>
          </View>
          <Text style={{color: black}}>Anil Kumar Khanna</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <StarRating rating={5} />
            <Text style={[styles.reviewDate, {marginLeft: 10}]}>
              {reviewDate}
            </Text>
          </View>
          <View>
            <Text style={[styles.reviewDate, {color: black}]}>
              {'East Delhi'}
            </Text>
          </View>
        </View>
        <Text style={styles.reviewText}>{reviewText}</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See more reviews</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderComingSoon = () => {
    return (
      <View style={styles.content}>
        <View style={styles.separator} />
        <Text style={{color: black, padding: 10}}>{'Coming Soon'}</Text>
        <View style={styles.productItem}>
          <IconSelector
            type={ICON_TYPE.MaterialCommunityIcons}
            name={'car-wrench'}
            size={30}
            color={mainColor}
          />
          <Text style={{color: black}}>{'Mechanic'}</Text>
        </View>
      </View>
    );
  };

  const renderReviews = () => {
    return (
      <View
        style={{
          borderRadius: 10,
          borderWidth: 10,
          borderColor: white,
          margin: 16.5,
          backgroundColor: white,
        }}>
        <View style={styles.card}>
          <Text style={styles.quoteMark}></Text>
          <Text style={styles.contentcard}>
            "I just want to share my first experience of driver on demand, it
            was unexpectedly very good. Team was punctual, sensible,
            understanding the requirment and very cooperative. Driver sent to me
            was also very nice, and classy, following all COVID norms. I will
            definitely like to recommend your services for those who require
            trained and trusted driver on occasional and hourly basis. Good job
            and keep on doing good work "
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('./Components/assets/doc.png')}
              style={styles.avatar}
            />
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.author}>- Dr. Saurabh Vashistha</Text>
              <Text style={styles.institution}>Manipal Hospitals</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.navBar}>
            <Text style={styles.logo}>tatd</Text>
            <View style={styles.segmentControl}>
              {tabData.map(item => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => setActiveTab(item)}
                  style={[
                    styles.segmentButton,
                    {
                      marginRight: 10,
                      backgroundColor:
                        activeTab.id === item.id ? mainColor : 'white',
                    },
                  ]}>
                  <Text
                    style={{
                      color: activeTab.id === item.id ? 'white' : 'black',
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.sectionTitle}>I Require ?</Text>
            <View style={styles.separator} />
            {productData.length !== 0 && (
              <FlatList
                data={productData}
                numColumns={3}
                columnWrapperStyle={styles.columnWrapper}
                // keyExtractor={(item) => item.name}
                renderItem={renderList}
              />
            )}
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: white,
              padding: 10,
              margin: 16.5,
              borderRadius: 10,
            }}>
            <View style={styles.promoBanner}>
              <View style={styles.row}>
                <View style={{width: '45%'}}>
                  <Text style={styles.cashbackText}>5%</Text>
                  <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Refer & Earn</Text>
                    <IconSelector
                      type={ICON_TYPE.FontAwesome}
                      name={'arrow-right'}
                      size={20}
                      color={white}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.descriptionContainer}>
                  <Image
                    style={styles.imageContainer}
                    source={require('./Components/assets/refer.jpg')}
                  />
                  <Text numberOfLines={3} style={styles.promoText}>
                    <Text style={styles.boldText}>Get 5% back</Text> Each time
                    your friend initiate an booking with us
                  </Text>
                  <Text
                    numberOfLines={3}
                    style={{
                      color: '#999999',
                      textDecorationLine: 'underline',
                      marginTop: 10,
                    }}>
                    How it works?
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {renderSafety()}
          {renderRatings()}
          {renderComingSoon()}
          {renderReviews()}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
