import { View, Text, SafeAreaView, ScrollViewBase } from 'react-native'
import React, {useState,useEffect} from 'react'
import AppHeader from '../components/AppHeader';
import { ScrollView } from 'react-native-gesture-handler';
import AppSearch from '../components/AppSearch';
import AppCategories from '../components/AppCategories';
import AppFeaturedCategories from '../components/AppFeaturedCategories';
import axios from 'axios';
import AppTastyCategories from '../components/AppFeaturedCategories/AppTastyCategories';
import AppOfferCategories from '../components/AppFeaturedCategories/AppOfferCategories';


const HomeScreens = ({navigation}) => {

    const [featuredCategories, setFeaturedCategories] = useState([]);
    const [tastyCategories, setTastyCategories] = useState([]);
    const [offerCategories, setOfferCategories] = useState([]);

    useEffect(()=>{
        axios.get('http://192.168.82.13:3000/api/v1/featuredheader/').then((response)=>{  
        setFeaturedCategories(response.data)
        // console.log(response.data)  
        }).catch((error)=>{
            console.log("Error:",error)
        })

    },[]);

    useEffect(()=>{
      axios.get('http://192.168.82.13:3000/api/v1/tastydiscountsheader').then((response)=>{  
        setTastyCategories(response.data)
      // console.log(response.data)  
      }).catch((error)=>{
          console.log("Error:",error)
      })

     },[]);

      useEffect(()=>{
        axios.get('http://192.168.82.13:3000/api/v1/offerheader').then((response)=>{  
          setOfferCategories(response.data)
        // console.log(response.data)  
        }).catch((error)=>{
            console.log("Error:",error)
        })

      },[]);
      
  return (
    <SafeAreaView style ={{flex:1}}>

      {/* AppHeader */}
      <View style={{padding:4,backgroundColor:'white'}}>
        <AppHeader/>
      </View>

      {/* AppSearch */}
      <View style={{padding:4,backgroundColor:'white'}}>
        <AppSearch/>
      </View>

      {/* AppCategories */}
      <View style={{padding:4}}>
        <AppCategories/>
      </View>
      
      {/* AppCategories */}
       <ScrollView
       contentContainerStyle={{
          paddingBottom:100
       }}
       style ={{padding:4}}
       >

        {
          featuredCategories.map((item, index) => (
            <AppFeaturedCategories 
              key = {index}
              id ={item.id}
              title={item.title}
              description={item.short_description}
            />
           
         ))}

        {
          tastyCategories.map((item, index) => (
            <AppTastyCategories
              key = {item.id}
              id ={item.id}
              title={item.title}
              description={item.short_description}
            />
           
        ))}

        {
          offerCategories.map((item, index) => (
            <AppOfferCategories
              key = {item.id}
              id ={item.id}
              title={item.title}
              description={item.short_description}
            />
           
        ))}
        </ScrollView>   
     
    </SafeAreaView>
  )
}

export default HomeScreens;