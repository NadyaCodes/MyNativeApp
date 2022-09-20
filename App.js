// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <Router />
  );
}

function Router() {
  const isUserSignedIn = () => false;

  return (
    isUserSignedIn() ?
      <Text>Congrats! You're signed in.</Text>
      :
      <Account />
  )
}

function Account() {
  const [userVal, setUserVal] = useState("");
  const [passVal, setPassVal] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React-flix!</Text>
      <TextInput value={userVal} onChangeText={e => setUserVal(e)} style={styles.accountInput} placeholder="Username" />
      <TextInput value={passVal} onChangeText={e => setPassVal(e)} style={styles.accountInput} placeholder="Password"/>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
        <Button title="Sign In" />
        <Button title="Sign Up" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: "75%",
    margin: 10,
    fontSize: 22,
    textAlign: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    fontStyle: "italic",
    marginBottom: 30
  }
});