import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

function FavoritesScreen(){

    const favoriteMealCtx = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter( meal => favoriteMealCtx.ids.includes(meal.id))

    if(favoriteMealCtx.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        )
    }

    return <MealsList items={favoriteMeals}/>
}
export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight: 'bold',
        color: 'white'
    }
})