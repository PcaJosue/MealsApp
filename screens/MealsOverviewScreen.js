import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({route, navigation}){

    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem)=> mealItem.categoryIds.some(c => c === catId))
    
    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find(c => c.id === catId).title;
        navigation.setOptions({title: categoryTitle})
    },[catId,navigation])

    return <MealsList  items={displayedMeals}/>
    
}
export default MealsOverviewScreen;
