import {createRoot} from 'react-dom/client'
import RecipeCard from './Recipe.jsx'
const root = createRoot(document.getElementById('root'));

function Cards() {
        return (
            <>
            <header className='mainhead'>RECIPE MENU CARD</header>  
            <div className="main">
           
            <RecipeCard RecipeName ="MASALA CHAI"
            Time ="Prep Time: 5 minutes | Cook Time: 10 minutes"
            serving ="Serves:"
            people ="2 people"
            diff ="Difficulty:"
            method ="Easy"
            type ="Type:"
            isequal ="Beverage"
            chef ="Prepared by Gaja"
            img ="https://tse4.mm.bing.net/th/id/OIP.NG0ydYccNxzCRqaAPLBARgHaE8?pid=Api&P=0&h=180"/>

            <RecipeCard RecipeName ="DOSA"
            Time ="Prep Time: 100 minutes | Cook Time: 5 minutes"
            serving ="Serves:"
            people ="10 people"
            diff ="Difficulty:"
            method ="Moderate"
            type ="Type:"
            isequal ="Breakfast"
            chef ="Prepared by Jay"
            img ="https://tse4.mm.bing.net/th/id/OIP.LyTjUEEB-pNag0zH0BlLwQHaHa?pid=Api&P=0&h=180"/>
            <RecipeCard RecipeName ="FILTER COFFEE"
            Time ="Prep Time: 10 minutes | Cook Time: 5 minutes"
            serving ="Serves:"
            people ="4 people"
            diff ="Difficulty:"
            method ="Moderate"
            type ="Type:"
            isequal ="Beverage"
            chef ="Prepared by Suja"
            img ="https://tse2.mm.bing.net/th/id/OIP.7nQprSVLjbvuCWqL3r1sAQHaEK?pid=Api&P=0&h=180"/>
            
            <RecipeCard RecipeName ="UPMA"
            Time ="Prep Time: 20 minutes | Cook Time: 15 minutes"
            serving ="Serves:"
            people ="40 people"
            diff ="Difficulty:"
            method ="Moderate"
            type ="Type:"
            isequal ="Breakfast"
            chef ="Prepared by Goms"
            img ="https://tse1.mm.bing.net/th/id/OIP.PHZVMsMqvyPWMxFa1wNr_gHaHa?pid=Api&P=0&h=180"/>
            
            <RecipeCard RecipeName ="BIRYANI"
            Time ="Prep Time: 120 minutes | Cook Time: 45 minutes"
            serving ="Serves:"
            people ="50 people"
            diff ="Difficulty:"
            method ="Tough"
            type ="Type:"
            isequal ="Lunch/Dinner"
            chef ="Prepared by Devi"
            img ="https://tse1.mm.bing.net/th/id/OIP.K2oMu6V-1j3ZGIPcX2pbhQHaFj?pid=Api&P=0&h=180" />
            
            <RecipeCard RecipeName ="GULAB JAMUN"
            Time ="Prep Time: 25 minutes | Cook Time: 25 minutes"
            serving ="Serves:"
            people ="10 people"
            diff ="Difficulty:"
            method ="Moderate"
            type ="Type:"
            isequal ="Dessert"
            chef ="Prepared by Anbu"
            img ="https://tse1.mm.bing.net/th/id/OIP.oisuZQlogp0eDIo4gkT39AHaGC?pid=Api&P=0&h=180" />
            
            <RecipeCard RecipeName ="PULAO"
            Time ="Prep Time: 20 minutes | Cook Time: 25 Minutes"
            serving ="Serves:"
            people ="50 people"
            diff ="Difficulty:"
            method ="Moderate"
            type ="Type:"
            isequal ="Lunch/Dinner"
            chef ="Prepared by Kelly"
            img ="https://tse2.mm.bing.net/th/id/OIP.snroFMjfUEtqlVekYALwwwHaHa?pid=Api&P=0&h=180" />
             
            <RecipeCard RecipeName ="PAKORA"
            Time ="Prep Time: 15 minutes | Cook Time: 20 Minutes"
            serving ="Serves:"
            people ="7 people"
            diff ="Difficulty:"
            method ="Easy"
            type ="Type:"
            isequal ="Snack"
            chef ="Prepared by Adam"
            img ="https://tse4.mm.bing.net/th/id/OIP.PQE00w4wBrv6CbcG5rF57wAAAA?pid=Api&P=0&h=180"/>
           
            <RecipeCard RecipeName ="ROTI CURRY"
            Time ="Prep Time: 40 minutes | Cook Time: 60 minutes"
            serving ="Serves:"
            people ="35 people"
            diff ="Difficulty:"
            method ="Moderate"
            type ="Type:"
            isequal ="Dinner"
            chef ="Prepared by Subi"
            img ="https://tse3.mm.bing.net/th/id/OIP.ITJa899uS7H-gaFiMJMtIAHaE7?pid=Api&P=0&h=180"/>
            
            <RecipeCard RecipeName ="ICE CREAM"
            Time ="Prep Time: 20 minutes | Cook Time: 6 Hours"
            serving ="Serves:"
            people ="5 people"
            diff ="Difficulty:"
            method ="Easy"
            type ="Type:"
            isequal ="Dessert"
            chef ="Prepared by Akalya"
            img ="https://tse3.mm.bing.net/th/id/OIP.rbKvKj9y8DJOUkhXl0wLAgHaHa?pid=Api&P=0&h=180"/>
            
            <RecipeCard RecipeName ="PANEER BUTTER MASALA"
            Time ="Prep Time: 30 minutes | Cook Time: 25 Minutes"
            serving ="Serves:"
            people ="18 people"
            diff ="Difficulty:"
            method ="Moderate"
            type ="Type:"
            isequal ="Lunch/Dinner"
            chef ="Prepared by Alex"
            img ="https://tse4.mm.bing.net/th/id/OIP.XlUApAhMY1fc273pa_N5wwHaE7?pid=Api&P=0&h=180"/>
            
            <RecipeCard RecipeName ="RASMALAI"
            Time ="Prep Time: 30 minutes | Cook Time: 25 Minutes"
            serving ="Serves:"
            people ="20 people"
            diff ="Difficulty:"
            method ="Tough"
            type ="Type:"
            isequal ="Dessert"
            chef ="Prepared by Caroline"
             img ="https://tse3.mm.bing.net/th/id/OIP.9fhCy5FZcUbfl6QPli-mmQHaE8?pid=Api&P=0&h=180" />
           </div>

            
            </>
);
    }

root.render( <Cards/>);
  