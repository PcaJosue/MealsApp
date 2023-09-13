import { Button, Image, StyleSheet, Text, View } from "react-native"
import {MEALS} from '../data/dummy-data'
import MealDetails from "../components/MealDetails"
import Subtitle from "../components/MealDetail/Subtitle"
import List from "../components/MealDetail/List"
import { ScrollView } from "react-native"
import { useLayoutEffect } from "react"
import IconButton from "../components/IconButton"

function MealDetailScreen({route, navigation}){
    const mealId= route.params.mealId

    const selectdMeal = MEALS.find(meal => meal.id === mealId)

    function headerButtonPressHandler(){
        console.log('pressed!');
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (<IconButton icon="star" color='white' onPress={headerButtonPressHandler}/>)
        })
    },[navigation, headerButtonPressHandler]);

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