import { View, Text, Image } from 'react-native';
import React,{useState,useEffect} from 'react';
import styles from './styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import AppFeaturedCategoriesCard from './AppFeaturedCategoriesCard';
import axios from 'axios';

const AppFeaturedCategories = ({id,title,description}) => {
    // console.log(id)
    const [featured, setFeatured] = useState([]);

    useEffect(()=>{
        axios.get('http://192.168.82.13:3000/api/v1/featured/').then((response)=>{
        
        setFeatured(response.data)
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
                featured.map((item, index) => (
                    //console.log(item.dishname,item.price)
                    <AppFeaturedCategoriesCard 
                        key = {index}
                        id ={item.id}
                        title={item.title}
                        short_description={item.short_description}
                        imgUrl ={item.imgurl}
                        genre={item.genre}
                        address={item.address}
                        rating={item.rating}
                        dishes={item.dishes}
                        dishname={item.dishname}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                    />
                ))}
                
            </ScrollView>
        </View>
   
  )
}


export default AppFeaturedCategories;