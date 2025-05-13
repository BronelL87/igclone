import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BronelProfile from '../assets/BronelProfile.jpeg'
import BronelPost from '../assets/BronelPost.jpeg'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBookmark, faHeart, faPaperPlane} from '@fortawesome/free-regular-svg-icons'

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

              <View style={{flexDirection: "row"}}>

                <View style={{flexDirection: "row", flex: 1, alignItems: "center", paddingLeft: 14, paddingTop: 10}}>
                  <FontAwesomeIcon icon={faHeart} style={{color: "white", marginRight: 5}} size={25}/>
                  <Text style={{color: "white", fontWeight: "bold", marginRight: 10}}>{post.numOfLikes}</Text>
                  <FontAwesomeIcon icon={faComment} style={{color:"white", transform: [{ rotateY: '180deg'}]}}/>
                  <FontAwesomeIcon icon={faPaperPlane} style={{color:"white"}} size={25}/>

                </View>

                <View style={{justifyContent: "center", paddingTop: 10, marginRight: 10}}>
                  <FontAwesomeIcon icon={faBookmark} size={25} style={{color: "white"}}/>
                </View>
              </View>

              {/* Description Container */}
              <View style={{flex: 1, flexDirection: "row" , paddingTop: 5}}>
                <Text style={{color: "white", fontWeight: "bold", paddingLeft: 14, paddingRight: 5}}>{post.userName}</Text>
                <Text style={{color: "white"}}>{post.description}</Text>
              </View>

              {
                post.comments.map((comment, idx) => {
                  return (
                    <View key={idx} style={{flex: 1, flexDirection: "row"}}>
                      <Text style={{color:"white", fontWeight: "bold", paddingLeft: 14, paddingRight: 5, paddingTop: 5}}>{comment.userWhoCommented}</Text>
                      <Text style={{color: "white", paddingTop: 5}}>{comment.userComment}</Text>

                    </View>
                  )
                })
              }
              {/* Add Comment Section for our User */}

              <View style={{flex: 1, flexDirection:"row"}}>
                <Image source={post.profilePicture} style={{height: 30, width: 30, borderRadius: 50, marginLeft: 14, marginTop: 10}}/>
                <Text style={{color: "gainsboro", paddingLeft: 13, paddingTOp: 8, alignSelf: "center"}}>Add a Comment...</Text>
              </View>

              {/* Date of Post */}
              <View>
                <Text style={{color: "gainsboro", paddingLeft: 14, paddingTop: 6}}>12 hours Ago</Text>
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