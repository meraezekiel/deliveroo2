import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {StarIcon} from "react-native-heroicons/solid";
import {LocationMarkerIcon} from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';

const AppFeaturedCategoriesCard = ({
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
      
    }) => {

    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            onPress={()=>{
                navigation.navigate('RestaurantScreens',{
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
                })
            }}
            style ={{marginRight:5, backgroundColor:'white',elevation:1}}>
            <Image
                source={{
                    uri:imgUrl
                }}
                style={{height:110,width:200}}
            />
            <View style = {{paddingBottom:4, marginLeft:6}}>
                 <Text style = {{fontWeight:'bold', paddingTop:5, color:'black', fontSize:15}}>{title}</Text>
                 <View style = {{flexDirection:'row',alignItems:'center', marginRight:1}}>
                 <StarIcon color ="green" opacity={0.5} size={20}/>
                 <Text style={{color:'gray',fontSize:11}}>
                     <Text style ={{color:"green",fontSize:11}}>{rating}</Text> . {genre}
                 </Text>
                 </View>

                 <View style = {{flexDirection:'row',marginRight:2,alignItems:'center'}}>
                    <LocationMarkerIcon color="gray" opacity={0.4} size={20} />
                    <Text style ={{color:'black',fontSize:11}}>Nearby . {address}</Text>
                 </View>
            </View> 
            

        </TouchableOpacity>
     )
    }

export default AppFeaturedCategoriesCard;