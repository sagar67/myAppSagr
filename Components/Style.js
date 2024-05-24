import {StyleSheet} from 'react-native';

const mainColor = '#16588E';
const secondaryColor = '#ff8b00';
const black = 'black';
const white = 'white';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginBottom: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    margin: 8,
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
    paddingBottom: 60,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    color: black,
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
    backgroundColor: 'white',
    padding: 20,
    // marginHorizontal:16.5,
    //  marginTop:10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cashbackText: {
    fontSize: 100,
    color: secondaryColor,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: secondaryColor,
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  descriptionContainer: {
    marginHorizontal: 20,
    width: '50%',
  },
  promoText: {
    fontSize: 16,
    color: '#333',
    // Other styling properties
  },
  containersafety: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16.5,
  },
  infoBox: {
    backgroundColor: white,
    padding: 16,
    borderRadius: 8,
  },
  mainText: {
    fontSize: 16,
    color: black,
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    color: black,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  phoneNumber: {
    fontSize: 14,
    color: 'blue',
    marginBottom: 16,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerRating: {
    padding: 10,
    backgroundColor: '#d9d7d8',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    margin: 16.5,
    borderColor: white,
    borderWidth: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: black,
  },
  starsWrapper: {
    flexDirection: 'row',
  },
  filledStar: {
    color: mainColor,
    fontSize: 20,
  },
  emptyStar: {
    color: '#CCCCCC',
    fontSize: 20,
  },
  rating: {
    fontSize: 20,
    marginVertical: 5,
    color: black,
    fontWeight: 'bold',
  },
  reviewDate: {
    fontSize: 14,
    color: 'grey',
  },
  reviewText: {
    fontSize: 14,
    marginVertical: 5,
    color: black,
  },
  seeMore: {
    fontSize: 14,
    color: '#0645AD',
    marginTop: 10,
    textAlign: 'right',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#949494',
    padding: 16,
  },
  quoteMark: {
    fontSize: 24,
    color: '#999',
    marginBottom: 10,
  },
  contentcard: {
    fontSize: 16,
    color: '#8f8f8f',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8f8f8f',
    marginBottom: 5,
    fontStyle: 'italic',
  },
  institution: {
    fontSize: 14,
    color: '#8f8f8f',
    fontStyle: 'italic',
  },
});
