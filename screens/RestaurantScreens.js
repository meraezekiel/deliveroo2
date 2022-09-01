import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AppRestaurant from '../components/AppRestaurant';
import AppCounterIcon from '../components/AppCounterIcon';


const RestaurantScreens = ({route,navigation}) => {
  const {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
          dishname,
          description,
          price,
          image,
        
  } = route.params
  return (
    <>
      <ScrollView>
        <View>
          <Image 
              source ={{ uri: imgUrl }}
              style ={{height:220, width:'100%'}}
          />
            <TouchableOpacity
              onPress={navigation.goBack}
              style={{position:'absolute', top:14, left:15}}>
                <View style={{backgroundColor:'#EBEBEB', height:30, width:30, borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                  <FontAwesome5Icon name="arrow-left" size={20} color="#00CCBB"/>
                </View>
            </TouchableOpacity>
            <AppRestaurant 
              title={title}
              rating={rating}
              genre={genre}
              address={address}
              short_description={short_description}
              dishes={dishes}
              dishname={dishname}
              description={description}
              price={price}
              image={image}
            />
        </View>
      </ScrollView>
      <AppCounterIcon/>
    </>
  )
}

export default RestaurantScreens; 