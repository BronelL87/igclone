import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BronelProfile from '../assets/BronelProfile.jpeg'
import BronelPost from '../assets/BronelPost.jpeg'

export default function PostsComponent() {
  const [post, setPost] = useState([
    {
      profilePicture: BronelProfile,
      userName: "Mr.FootSaiah",
      postImage: BronelPost,
      numOfLikes: "9.5k",
      description: "Look at this cool cat! So Inspiring",
      comments: [
        {
          userWhoCommented: "Caterpop_89",
          userComment: "Das Me!"
        }
      ]
    },
    {
    profilePicture: BronelProfile,
    userName: "Caterpop_89",
    postImage: BronelPost,
    numOfLikes: "16.2k",
    description: "FOR FREE?? IS CRAZY FOLLOW MY BOY ON TWITCH",
    comments: [
      {
        userWhoCommented: "Mr. Footsaiah",
        userComment: "Thanks Cat I love it"
      }
    ]
    }
  ])
  return (
    <ScrollView>
      <StoriesComponment/>
      {
        post.map((post, idx) => {
          return ( 
            //This will be our Post View
            <View key={idx}>
              {/* This View will contain your Username, profile img, and 3 dots */}
              <View style={styles.profileNav}>
                <View style={{paddingTop: 10}}>
                  <Image source={post.profilePicture} style={styles.profileImg}/>
                </View>
                {/* Username Container */}
                <View style={styles.usernameContainer}>
                  <Text style={styles.usernameText}>{post.userName}</Text>
                </View>
                {/* Dots Container */}
                <View style={styles.dotsContainer}>
                  <Text style={styles.dotsText}>.</Text>
                  <Text style={styles.dotsText}>.</Text>
                  <Text style={styles.dotsText}>.</Text>
                </View>
              </View>

              {/* This will be our Image Container for real this time */}

              <View>
                <Image source={post.postImage} styles={styles.postImg}/>
              </View>

              {/* Parent Container for our Icons and Likes */}

              <View>

              </View>


              
            </View>
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  profileNav: {
    flexDirection: "row",
    paddingBottom: 10
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 50
  },
  usernameContainer: {
    paddingLeft: 15,
    justifyContent: 'center',
    paddingTop: 10
  },
  usernameText: {
    color: "White",
    fontSize: 15,
    fontWeight: "bold"
  },
  dotsContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: 'center',
    paddingRight: 10
  },
  dotsText: {
    color: "white",
    fontSize: 30,
    lineHeight: 10
  },
  postImg:{
    height: 400,
    width: "100%"
  }
})