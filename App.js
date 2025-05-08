import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from './Components/HeaderComponent';
import PostsComponent from './Components/PostsComponent';
import FooterComponent from './Components/FooterComponent';


//div = view
//h1, p. etc = Text


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent/>
      <PostsComponent/>
      <FooterComponent/>
      <StatusBar style='light'/>
    </SafeAreaView>
  );
}


//This "styles" is created using a built in component Called StyleSheet That allows us to Style or Components

//flex 1 takes all of the available space of the parent container
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
