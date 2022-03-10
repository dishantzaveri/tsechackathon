import {
    Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import base64 from 'react-native-base64';
import Feather from 'react-native-vector-icons/Feather';
import TouchableScale from 'react-native-touchable-scale';
import {data, popular} from '../constants/BlogData';
const MentalHeath = props => {
    const {width, height} = Dimensions.get('window');
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          base64.encode(
            '85acc1ba7c3a4349b1abca61d53e2b26' +
              ':' +
              'ae1de5a2ad0c4ab4983f3d0a3b22ae68',
          ),
      },
      data: 'grant_type=client_credentials',
      method: 'POST',
    }).then(tokenResponse => {
      axios(
        `https://api.spotify.com/v1/browse/categories/${'wellness'}/playlists?limit=10`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + tokenResponse.data.access_token,
          },
        },
      ).then(playlistResponse => {
        console.log('playlist', playlistResponse.data.playlists.items);
        setPlaylist(playlistResponse.data.playlists.items);
      });
    });
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('TrackList', {
            id: item.id,
            title: item.name,
          });
        }}>
        <View style={styles.track}>
          <View style={styles.trackImage}>
            <Image
              source={{uri: item.images[0].url}}
              style={{
                width: 150,
                height: 150,
                borderRadius: 10,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView >
        <View >
          <View style={styles.tracksContainer}>
            <Text style={styles.trackTitle}>Tracks to refresh your mood!</Text>
            <FlatList
              renderItem={renderItem}
              data={playlist}
              horizontal={true}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        {/* <View>
          <TouchableOpacity style={styles.rough}
            onPress={() => {
              props.navigation.navigate('CreateJoke');
            }}>
            <View style={styles.createMemeContainer}>
              <Text style={styles.createMemeText}>Create a JOKE</Text>
            </View>
          </TouchableOpacity>
        </View> */}
        <View style={styles.container1}>
          <View style={styles.YourDailyRead}>
            <View>
              <Text style={styles.YourDailyReadText}>
                Your Daily Read <Text style={styles.verticalLine}>|</Text>
              </Text>
            </View>
          </View>

          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={data}
              keyExtractor={item => item.id.toString()}
              style={{paddingHorizontal: 20}}
              renderItem={({item}) => {
                return (
                  <View>
                    <View>
                      <TouchableScale
                        activeScale={0.9}
                        tension={50}
                        friction={7}
                        useNativeDriver
                        >
                        <View>
                          <Image
                            source={{uri: item.image}}
                            style={{
                              width: width - 100,
                              height: height - 500,
                              borderRadius: 14,
                              marginRight: 30,
                              marginBottom:20
                            }}
                            resizeMode="cover"
                          />
                        </View>

                        <View
                          style={{
                            width: width - 90,
                            position: 'absolute',
                            bottom: 90,
                            left: 10,
                            paddingHorizontal: 10,
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 24,
                              fontWeight: 'bold',
                              lineHeight: 28,
                            }}>
                            {item.title}
                          </Text>
                        </View>

                        <View style={styles.profilePic2}>
                          <View>
                            <Image
                              source={{uri: item.profilePic}}
                              style={styles.profilePicStyle}
                              resizeMode="cover"
                            />
                          </View>

                          <View>
                            <View>
                              <Text
                                style={{
                                  color: 'white',
                                  fontSize: 16,
                                  fontWeight: 'bold',
                                }}>
                                {item.author}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </TouchableScale>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View style={styles.rough}>
          <View style={styles.rough1}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Jokes');
            }}>
            <View style={styles.createMemeContainer}>
              <Text style={styles.createMemeText}>JOKES</Text>
            </View>
            
          </TouchableOpacity>
          </View>
          <View style={styles.rough2}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Reminders');
            }}>
            <View style={styles.createMemeContainer}>
              <Text style={styles.createMemeText}>REMINDERS</Text>
            </View>
            
          </TouchableOpacity>
          </View>
          
          
        </View>
      </ScrollView>
    </View>
  );
};

export default MentalHeath;

const styles = StyleSheet.create({
  tracksContainer: {
    marginVertical: 10,
    padding: 10,
    paddingTop: 0,
    paddingLeft: 20,
    position: 'relative',
    backgroundColor:"#FFFFFF",
  },
   container:{
    backgroundColor:"#3BCBFF",
    flex:1
  },
  container1:{
    backgroundColor:"#FFFFFF",
    flex:1,
    marginVertical:10
  },
  trackTitle: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color:"#000000"
  },
  createMemeContainer: {
    width: 100,
    height: 40,
    backgroundColor: '#FF4848',
    borderRadius: 10,
   

    alignItems: 'center',
    justifyContent: 'center',
  },
  createMemeText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    alignItems: 'center',
    justifyContent: 'center',
  },
  track: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 10,
    position: 'relative',
    
  },
  trackContent: {
    width: 150,
    height: 150,
    backgroundColor: 'black',
    borderRadius: 10,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: 10,
    paddingBottom: 10,
    marginBottom:10
  },
  trackImage: {
    opacity: 1,
    marginBottom:10
  },
  YourDailyRead: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  YourDailyReadText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
  },
  profilePicStyle: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 14,
  },
  profilePic2: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  popularStories: {
    flexDirection: 'row',
    paddingBottom: 30,
    paddingLeft: 30,
    alignItems: 'center',
    marginTop: 0,
  },
  rough:{
    flexDirection:'row',

  },
  rough1:{
    margin:45
  },
  rough2:{
    margin:45
  },

  verticalLine: {
    fontWeight: 'bold',
    color: "#face1b",
    fontSize: 30,
    textShadowRadius: 4,
    textShadowColor: 'grey',
  },
});
