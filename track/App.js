import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Alert,
  FlatList,
  TouchableHighlightBase
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({arrData}): Node => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {arrData}
      </Text>
  
    </View>
  );
};

const App: () => Node = () => {
 
   const [text, setText] = useState("")
   const [arrData, setArr] = useState([
    'This is first One'
   ])

    const addTask = (text) => {
      setArr(prevState => [...prevState, text ])
    }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.sectionTitle}> This is your Tracker! </Text>
        </View>
        <Text
          style={
            (styles.sectionDescription,
            {paddingTop: 28, textAlign: 'center', color: 'black'})
          }>
          Enter your task:
        </Text>
        <TextInput style={styles.input} onChangeText={setText} value={text} />
        <Button title="Click Me!" color="#841584" style={styles.btncolor} onPress={() => addTask(text)} />
        <FlatList data={arrData} 
        renderItem={({item}) => (
             <Text> {item}</Text>
        )} 
        keyExtractor={item => item} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 30,
    paddingTop: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 30,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
  btncolor: {
    paddingLeft: 20,
    marginHorizontal:10,
  }
});

export default App;
