import { View, Text, TouchableOpacity } from 'react-native';
import React,{useState,useEffect} from 'react';
import styles from './styles'
import { StarIcon } from 'react-native-heroicons/solid';
import { LocationMarkerIcon } from 'react-native-heroicons/solid';
import { ScrollView } from 'react-native-gesture-handler';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AppDishesCard from './AppDishesCard';
import axios from 'axios';
import AppCounterIcon from '../AppCounterIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../../features/counter/restaurantSlice';


const AppRestaurant = ({
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
        dishesid

    }) => {
        const dispatch =useDispatch();
        const [dish, setDish] = useState([]);

            useEffect(()=>{
            axios.get('http://192.168.82.13:3000/api/v1/dishesgenre/'+title).then((response)=>{
            
                setDish(response.data)
            // console.log(response.data)  

            }).catch((error)=>{
                console.log("Error:",error)
            })
        },[]);

        useEffect(()=>{
             dispatch(setRestaurant({
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
             }))
        },[]);

    return (
        
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.hcontainer}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.iconContainer}>
                        <StarIcon color='green' opacity={0.5} size={20} style={{marginRight:4}} />
                        <Text style={styles.genre}>
                            <Text style={styles.rating}>{rating}</Text> . {genre}
                        </Text>
                        <LocationMarkerIcon color="gray" opacity={0.4} size={20}/>
                        <Text style={styles.genre}>Nearby . {address}</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={styles.genre}>{short_description}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.allergy}>
                        <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}/>
                        <Text style={styles.textAllergy}>Have a food allergy ?</Text>
                        <FontAwesome5Icon name='chevron-right' size ={20} color ='#00BBCC'/>
                </TouchableOpacity>
            </View>
            <View style={{paddingBottom:80}}>
                <Text style={{fontSize:22, fontWeight:'bold', color:'black', padding:10,paddingTop:20}}>
                    Menu
                </Text>
            
            {
                dish.map((item,index)=>(

                    <AppDishesCard
                        key={index}
                        id={item.id}
                        dishname={item.dishname}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        restaurant={item.restaurant}
                     />
                ))    
            }   
            </View>
        </ScrollView>

    )
}

export default AppRestaurant;