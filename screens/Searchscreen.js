// import React, { useEffect, useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Text,
//   Image
// } from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native'





// export default function Search() {
//   const [search, setSearch] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   const [masterData, setMasterData] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const value = await AsyncStorage.getItem('@save_token');
//     var config = {
//       method: 'get',
//       url: 'https://findmyplug.herokuapp.com/station/',
//       headers: {
//         'Authorization': `Token  ${value}`
//       }
//     };

//     axios(config)
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//         setFilteredData(response.data);
//         setMasterData(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });


//   };

//   const searchFilter = (text) => {
//     if (text) {
//       const newData = masterData.filter((item) => {
//         const itemData = item.station_name
//           ? item.station_name.toUpperCase()
//           : ''.toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       setFilteredData(newData);
//       setSearch(text);
//     } else {
//       setFilteredData(masterData);
//       setSearch(text);
//     }
//   };

//   const renderItem = ({ item }) => {
//     return (
//       <TouchableOpacity onPress={() => {

//         navigation.navigate('Booking', {
//           station_name: item.station_name,
//           location:  item.location,
//           phone_no: item.phone_no


//         });
//       }}>
//         <View style={styles.card}>
//           <View style={{
//             flex: 1, flexDirection: 'row', backgroundColor: '#768991', borderWidth: 1, borderColor: '#768991',
//             borderStyle: 'solid', borderRadius: 15
//           }}>
//             <Image source={require('../assets/carstation.png')} style={{ width: 80, height: 80, margin: 5, marginTop: 8, marginLeft: 1 }}>
//             </Image>
//             <View style={{
//               flex: 1, flexDirection: 'column', borderWidth: 1, backgroundColor: '#768991', borderColor: '#768991',
//               borderStyle: 'solid', borderRadius: 15
//             }}>
//               <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 5, fontSize: 12 }}>STATION NAME:
//                 <Text style={{ color: 'black', fontSize: 11, fontWeight: 'normal', marginRight: 1 }}>{item.station_name}</Text>
//               </Text>

//               <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>ADDRESS:
//                 <Text style={{ color: 'black', fontSize: 11, fontWeight: 'normal' }}> {item.location}</Text>
//               </Text>

//               <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>WORKING HOURS :
//                 <Text style={{ color: 'black', fontSize: 11, fontWeight: 'normal' }}>{item.working_hours}</Text>
//               </Text>
//               <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>PHONE NUMBER :
//                 <Text style={{ color: 'black', fontSize: 11, fontWeight: 'normal' }}>{item.phone_no}</Text>
//               </Text>



//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>

//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         <View style={styles.inputCard}>
//           <TextInput
//             style={styles.input}
//             placeholder={'SEARCH'}
//             placeholderTextColor="white"
//             clearButtonMode="always"
//             value={search}
//             onChangeText={(text) => searchFilter(text)}
//           />
//           <TouchableOpacity
//             onPress={() => {
//             }}>
//             <FontAwesome5
//               name={"search" ? 'search' : 'refresh'}
//               size={20}
//               color={'white'}
//             />
//           </TouchableOpacity>
//         </View>
//         <FlatList
//           data={filteredData}
//           keyExtractor={({ id }) => id}
//           contentContainerStyle={{}}
//           renderItem={renderItem}

//         />

//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1f2128',
//   },
//   input: {
//     padding: 7,
//     flex: 1,
//     borderBottomColor: "white",
//     color: "white",
//   },
//   inputCard: {
//     margin: 20,
//     flexDirection: 'row',
//     backgroundColor: '#1f2128',
//     alignItems: 'center',
//     borderRadius: 5,
//     zIndex: 100,
//     borderColor: "white",
//     borderWidth: 0.5
//   },


//   title: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   card: {
//     height: 100,
//     width: 370,
//     paddingLeft: 10,
//     margin: 15,
//     marginLeft: 15,

//     marginTop: 5,
//     borderWidth: 1,
//     backgroundColor: '#768991',
//     borderColor: '#768991',
//     borderStyle: 'solid',
//     borderRadius: 15,
//   },

// });