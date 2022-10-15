import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
 const languages = [
  { name: 'Founders of modern Bengali poetry' , key: '1' },
  { name: 'Rabindranath Tagore' , key: '2' },
  { name: 'Jibanananda Das' , key: '3' },
  { name: 'Jasimuddin' , key: '4' },
  { name: 'Kaykobad' , key: '5' },
  { name: 'Michael Madhusudan Dutta' , key: '6' },
  { name: 'Kazi Nazrul Islam' , key: '7' },

]
return (
  <View style={styles.container}>
   {languages.map((lang) => (
     <View key={lang.key}>
      <Text style={styles.item}>{lang.name}</Text>
     </View>
   ))}
  </View>
 );
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  paddingTop: 40,
  paddingHorizontal: 20
},
item: {
  marginTop: 20,
  padding: 30,
  backgroundColor: '#55b5db',
  fontSize: 24
}
});