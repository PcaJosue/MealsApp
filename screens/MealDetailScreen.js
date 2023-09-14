import { Button, Image, StyleSheet, Text, View } from "react-native"
import {MEALS} from '../data/dummy-data'
import MealDetails from "../components/MealDetails"
import Subtitle from "../components/MealDetail/Subtitle"
import List from "../components/MealDetail/List"
import { ScrollView } from "react-native"
import { useContext, useLayoutEffect } from "react"
import IconButton from "../components/IconButton"
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, removeFavorite } from "../store/redux/favorites"
// import { FavoritesContext } from "../store/context/favorites-context"

function MealDetailScreen({route, navigation}){

    // const favoriteMealCtx = useContext(FavoritesContext)

    const favoriteMealIds = useSelector((state)=> state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId= route.params.mealId
    const selectdMeal = MEALS.find(meal => meal.id === mealId)
    // const mealIsFavorite = favoriteMealCtx.ids.includes(mealId)
    const mealIsFavorite = favoriteMealIds.includes(mealId)

    function changeFavoriteStatusHandler(){
    //    if(mealIsFavorite) favoriteMealCtx.removeFavorite(mealId)
    //    else favoriteMealCtx.addFavorite(mealId)
       
       if(mealIsFavorite) dispatch(removeFavorite({id:mealId})) 
       else dispatch(addFavorite({id:mealId}))
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (<IconButton 
                icon={mealIsFavorite ? 'star' : 'star-outline'} 
                color='white' 
                onPress={changeFavoriteStatusHandler}/>)
        })
    },[navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectdMeal.imageUrl}}/>
            <Text style={styles.title}>{selectdMeal.title}</Text>
            <MealDetails 
                duration={selectdMeal.duration} 
                complexity={selectdMeal.complexity} 
                affordability={selectdMeal.affordability}
                textStyle={styles.detailText}/>
            <View style={styles.listOuterContainer}>
                <View  style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectdMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectdMeal.steps}/>

                </View>
            </View>
        </ScrollView>
    )
}
export default MealDetailScreen

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 350
    },
    title:{
        fontWeight:'bold',
        fontSize: 24,
        margin:8,
        textAlign: 'center',
        color: 'white'
    },
    detailText:{
        color:'white'
    },
    listOuterContainer:{
        alignItems:'center'
    },
    listContainer:{
        width: '80%'
    },
    rootContainer:{
        marginBottom: 32
    }
    
})