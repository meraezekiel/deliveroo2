import { View, Text } from 'react-native';
import React,{useState,useEffect} from 'react';
import styles from '../styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import AppFeaturedCategoriesCard from '../AppFeaturedCategoriesCard';

const AppOfferCategories = ({id,title,description}) => {
  // console.log(id)
  const [offer, setOffer] = useState([]);

  useEffect(()=>{
      axios.get('http://192.168.82.13:3000/api/v1/offer/').then((response)=>{
      
        setOffer(response.data)
      // console.log(response.data)  

      }).catch((error)=>{
          console.log("Error:",error)
      })
  },[]);


return (
 
      <View>
          <View style={styles.container}>
              <Text style= {styles.textTitle}>{title}</Text>
              <FontAwesome5Icon name="arrow-right" size={20} color ="#00CCBB"/>
          </View> 
          <Text style={styles.textDesc}>{description}</Text>
    
          <ScrollView 
              contentContainerStyle={{
                  paddingHorizontal:2, 
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{padding:4}}
          >
                {
              offer.map((item, index) => (
                  <AppFeaturedCategoriesCard 
                      key = {index}
                      id ={item.id}
                      title={item.title}
                      short_description={item.short_description}
                      imgUrl ={item.imgurl}
                      genre={item.genre}
                      address={item.address}
                      rating={item.rating}
                      
                  />
              ))}
              
          </ScrollView>
      </View>
 
)
}


export default AppOfferCategories;