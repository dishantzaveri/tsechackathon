import {StyleSheet} from 'react-native';
import {colors} from '../config/colors';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 10,
    backgroundColor:colors.blue
  },
  headingWrapper: {
    marginTop: 60,
  },
  
  title: {
    fontFamily: 'HelveticaNeue',
    fontSize: 20,
    fontWeight: '300',
    marginTop: 10,
    color: colors.gray,
  },
  bgImage: {
    position: 'absolute',
    top: '15%',
  },
  scrollViewWrapper: {
    justifyContent: 'space-between',
    marginTop: 30,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {},
  label: {
    fontFamily: 'HelveticaNeue',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
  },
  topicImage: {
    alignSelf: 'center',
  },
  card: {
    padding: 25,
    flex: 1,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  incomingMsgBox: {
    backgroundColor: 'white',
    maxWidth: '70%',
    borderRadius: 10,
    padding: 5,
    alignSelf: 'flex-start',
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  incomingMsgText: {color: 'black', fontSize: 16},

  sentMsgBox: {
    backgroundColor: 'green',
    maxWidth: '70%',
    borderRadius: 10,
    padding: 5,
    alignSelf: 'flex-end',
    marginVertical: 5,
    marginHorizontal: 5,
  },

  sentMsgText: {color: '#fff', fontSize: 16},

  typeMsgContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    
  },

  typeMsgBox: {
    borderWidth: 0.8,
    borderColor: 'grey',
    padding: 10,
    width: '80%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  sendBtn: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sendTxt: {color: 'white'},
});

