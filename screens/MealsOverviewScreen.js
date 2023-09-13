// import { useRoute } from "@react-navigation/native";
import { StyleSheet, FlatList, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({route, navigation}){

    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem)=> mealItem.categoryIds.some(c => c === catId))
    
    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find(c => c.id === catId).title;
        navigation.setOptions({title: categoryTitle})
    },[catId,navigation])

    function renderMealItem(itemData){
        const item = itemData.item;
        const mealItemProps= {
            id: item.id,
            title: item.title,
            imageUrl : item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return <MealItem {...mealItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item)=> item.id}
                renderItem={renderMealItem}/>
        </View>
    )
}
export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})