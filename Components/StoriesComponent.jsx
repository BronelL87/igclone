import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import BronelProfile from '../assets/BronelProfile.jpeg'

export default function StoriesComponent() {
  return (
    // We are creating a Carousel by adding horizontal to your view Component
    <ScrollView horizontal>

      {/* Container that holds our Stories */}
      <View style={styles.container}>
        {/* Gradient Border Around our Image */}
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

          {/* This will be our Image Wrapper */}
        
          <View style={styles.imageWrapper}>
            {/* Profile Image */}
            <Image source={BronelProfile} style={styles.image}/>
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>bronel_l98</Text>
      </View>
      {/* Container that holds our Stories */}
      <View style={styles.container}>
        {/* Gradient Border Around our Image */}
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

          {/* This will be our Image Wrapper */}
        
          <View style={styles.imageWrapper}>
            {/* Profile Image */}
            <Image source={BronelProfile} style={styles.image}/>
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>bronel_l98</Text>
      </View>
      {/* Container that holds our Stories */}
      <View style={styles.container}>
        {/* Gradient Border Around our Image */}
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

          {/* This will be our Image Wrapper */}
        
          <View style={styles.imageWrapper}>
            {/* Profile Image */}
            <Image source={BronelProfile} style={styles.image}/>
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>bronel_l98</Text>
      </View>
      {/* Container that holds our Stories */}
      <View style={styles.container}>
        {/* Gradient Border Around our Image */}
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

          {/* This will be our Image Wrapper */}
        
          <View style={styles.imageWrapper}>
            {/* Profile Image */}
            <Image source={BronelProfile} style={styles.image}/>
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>bronel_l98</Text>
      </View>
      {/* Container that holds our Stories */}
      <View style={styles.container}>
        {/* Gradient Border Around our Image */}
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

          {/* This will be our Image Wrapper */}
        
          <View style={styles.imageWrapper}>
            {/* Profile Image */}
            <Image source={BronelProfile} style={styles.image}/>
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>bronel_l98</Text>
      </View>
      {/* Container that holds our Stories */}
      <View style={styles.container}>
        {/* Gradient Border Around our Image */}
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

          {/* This will be our Image Wrapper */}
        
          <View style={styles.imageWrapper}>
            {/* Profile Image */}
            <Image source={BronelProfile} style={styles.image}/>
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>bronel_l98</Text>
      </View>
      {/* Container that holds our Stories */}
      <View style={styles.container}>
        {/* Gradient Border Around our Image */}
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

          {/* This will be our Image Wrapper */}
        
          <View style={styles.imageWrapper}>
            {/* Profile Image */}
            <Image source={BronelProfile} style={styles.image}/>
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>bronel_l98</Text>
      </View>



    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50
  },
  imageWrapper: {
    width: 87,
    height: 87,
    borderRadius: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  linearGradient: {
    width: 94,
    height: 94,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  labelText: {
    color: "white",
    fontSize: 15,
    marginTop: 5
  }
})