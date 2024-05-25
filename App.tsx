/* eslint-disable prettier/prettier */
import React, {memo, useState} from 'react';
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
  {
    name: 'Safe',
    logo: 'face-mask',
    iconType: ICON_TYPE.MaterialCommunityIcons,
    message:
      'Our service partners are verified through at least three trusted references, including Aadhaar and license verification, and have a minimum of 5 years of experience, ensuring utrnost safety',
  },
  {
    name: 'Trained',
    logo: 'security',
    iconType: ICON_TYPE.MaterialCommunityIcons,
    message: 'We ensure briefing of partner before onboarding-',
  },
  {
    name: 'Experienced',
    logo: 'precision-manufacturing',
    iconType: ICON_TYPE.MaterialIcons,
    message:
      'Our partners are 5+ Years of experience. We assign a partner who is having relevant service experience as per the Customer requirement.',
  },
  {
    name: 'Punctual',
    logo: 'calendar-clock',
    iconType: ICON_TYPE.MaterialCommunityIcons,
    message:
      'Our partners are briefed about the importance of time, Also we track thär performance & provide them feedback as & when required.',
  },
  {
    name: '24*7 Services',
    logo: 'phone',
    iconType: ICON_TYPE.MaterialCommunityIcons,
    message:
      'Services available 24*7, Book your service for any time. Our customer care number is available in between 06:00 AM to 06:00 PM -9999160322 PM (Monday To Saturday)',
  },
  {
    name: 'Presence',
    logo: 'location-on',
    iconType: ICON_TYPE.MaterialIcons,
    message:
      'We are presently available in Dehi, Uttar Pradesh, Haryana, Punjab, Kamataka, Maharashtra, Gl#at, Rajasthan, Telangana, Tamil Nadu,West Bengal. Our Head office is at Offce No G-39, Varcfirnan Grand Market, Sector 3, Dwarka, New Dehi- 110078',
  },
  {
    name: 'Convenient',
    logo: 'hand-point-up',
    iconType: ICON_TYPE.FontAwesome5,
    message: `Cancellation, Reschedule, Instant Refunds, Download Invoice, Multiple Payment Mode's, Customer Support`,
  },
  {
    name: 'How It Works',
    logo: 'settings-suggest',
    iconType: ICON_TYPE.MaterialIcons,
    message:
      'Book > Confirmation > Partner Assignment > Partner Accept > Partner On the Way > Partner Reach > TrW Start through OTP > Trip End >Biling > Payment > Rate Your Experience > Download Invoice',
  },
];

const bottomTabs = [
  {
    name: 'Refer',
    logo: 'account-multiple-outline',
    iconType: ICON_TYPE.MaterialCommunityIcons,
  },
  {
    name: 'Reviews',
    logo: 'reviews',
    iconType: ICON_TYPE.MaterialIcons,
  },
  {
    name: 'Track',
    logo: 'package-variant',
    iconType: ICON_TYPE.MaterialCommunityIcons,
  },
];

const mainColor = '#16588E';
const secondaryColor = '#ff8b00';
const black = 'black';
const white = 'white';

export default function App() {
  const [activeTab, setActiveTab] = useState(tabData[0]);
  const [message, setMessage] = useState(safetyData[0]?.message);

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
    <View style={[styles.productItem, {width: '25%', marginVertical: 10}]}>
      <TouchableOpacity
        onPress={() => setMessage(item.message)}
        style={styles.iconContainer}>
        <IconSelector
          type={item.iconType}
          name={item.logo}
          size={30}
          color={mainColor}
        />
      </TouchableOpacity>
      <Text style={{color: white, marginTop: 2, fontSize: 12}}>
        {item.name}
      </Text>
    </View>
  );

  const bottomTabsRender = ({item}) => (
    <TouchableOpacity style={[styles.productItem, {padding: 0}]}>
      <IconSelector
        type={item.iconType}
        name={item.logo}
        size={30}
        color={black}
      />
      <Text style={{color: black}}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSafety = () => {
    return (
      <View style={styles.containersafety}>
        <View style={styles.infoBox}>
          <Text style={styles.mainText}>{message}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.subText}>Your Safety Matters</Text>
            <Text style={styles.phoneNumber}>9999160322</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: mainColor,
            flex: 1,
            borderWidth: 1,
            borderColor: white,
            top: -10,
          }}>
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

  const renderBottomTabs = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0.1,
          flex: 1,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: white,
            padding: 20,
            justifyContent: 'space-between',
          }}>
          {bottomTabs.length !== 0 && (
            <FlatList
              // keyExtractor={(item) => item.name}
              data={bottomTabs}
              numColumns={3}
              columnWrapperStyle={styles.columnWrapper}
              // keyExtractor={item => item.name}
              renderItem={bottomTabsRender}
            />
          )}
        </View>
      </View>
    );
  };

  const renderTabs = (name) => {
    return (
      <TouchableOpacity style={styles.contactInfoContainer}>
        <Text style={{color: mainColor, fontSize: 11}}>{name}</Text>
        <IconSelector
          type={ICON_TYPE.MaterialIcons}
          name={'double-arrow'}
          color={mainColor}
          size={15}
        />
      </TouchableOpacity>
    );
  }
  

  const renderContacts = () => {
    return (
      <View style={{marginBottom: '30%'}}>
        <View style={styles.containerbottom}>
          {/* Buttons */}
          <View style={styles.buttonsContainer}>
            <View>
              <Text style={[styles.buttonText1, {fontWeight: 'bold'}]}>
                Contact Us
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <IconSelector
                  type={ICON_TYPE.MaterialCommunityIcons}
                  name={'email'}
                  color={white}
                  size={15}
                />
                <Text style={styles.buttonText1}>Support@tatd.in</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <IconSelector
                  type={ICON_TYPE.MaterialCommunityIcons}
                  name={'phone'}
                  color={white}
                  size={15}
                />
                <Text style={styles.buttonText1}>+91 9999160322</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <IconSelector
                  type={ICON_TYPE.MaterialCommunityIcons}
                  name={'office-building-outline'}
                  color={white}
                  size={15}
                />
                <Text style={styles.buttonText1}>
                  Office No G-39, Vardhman Grand Market, Sector 3, Dwarka, New
                  Delhi- 110078 Execution Force Private Limited
                </Text>
              </View>
            </View>

            <View style={styles.socialIconsContainer}>
              <Text style={styles.buttonText1}>Follow Us</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  margin: 10,
                }}>
                <IconSelector
                  type={ICON_TYPE.MaterialCommunityIcons}
                  name={'facebook'}
                  color={white}
                  size={30}
                />
                <IconSelector
                  type={ICON_TYPE.MaterialCommunityIcons}
                  name={'instagram'}
                  color={'#d52d7b'}
                  size={30}
                />
                <IconSelector
                  type={ICON_TYPE.MaterialCommunityIcons}
                  name={'linkedin'}
                  color={'#0a73a2'}
                  size={30}
                />
              </View>
            </View>
          </View>
          <View style={{flex: 0.5}}>
            {renderTabs('Make an Enquiry')}
            {renderTabs('Cancel My Booking')}
            {renderTabs('My Weekly Schedule')}
            {renderTabs('Download Invoice')}
            {renderTabs('My Feedback')}
            {renderTabs('About Us')}
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply for Driver Job</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.navBar}>
            <Image
              source={require('./Components/assets/logo.jpg')}
              style={{
                height: 80,
                width: 150,
              }}
            />
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
          {renderContacts()}
        </ScrollView>
        {renderBottomTabs()}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
