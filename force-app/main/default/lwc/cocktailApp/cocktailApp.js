import { LightningElement } from 'lwc';
import getRandomCocktail from '@salesforce/apex/CocktailAppController.getRandomCocktail';

export default class CocktailApp extends LightningElement {
    strDrink = null;
    strGlass = null;
    // strInstructions = null;
    strDrinkThumb = null;
    strIngredient1 = null;
    strIngredient2 = null;
    strIngredient3 = null;
    strIngredient4 = null;
    strIngredient5 = null;
    strIngredient6 = null;
    strIngredient7 = null;
    strIngredient8 = null;
    strIngredient9 = null;
    strIngredient10 = null;
    strIngredient11 = null;
    strIngredient12 = null;
    strIngredient13 = null;
    strIngredient14 = null;
    strIngredient15 = null;
    strMeasure1 = null;
    strMeasure2 = null;
    strMeasure3 = null;
    strMeasure4 = null;
    strMeasure5 = null;
    strMeasure6 = null;
    strMeasure7 = null;
    strMeasure8 = null;
    strMeasure9 = null;
    strMeasure10 = null;
    strMeasure11 = null;
    strMeasure12 = null;
    strMeasure13 = null;
    strMeasure14 = null;
    strMeasure15 = null;
    
    connectedCallback() {
        this.handleGetRandomCocktail();
    }
    
    handleGetRandomCocktail() {
        getRandomCocktail()
        .then((result) => {
            console.log(result);
            const parsedResult = JSON.parse(result);
            this.strDrink = parsedResult.strDrink == null ? null : parsedResult.strDrink;
            this.strGlass = parsedResult.strGlass == null ? null : parsedResult.strGlass;
            // this.strInstructions = parsedResult.strInstructions == null ? null : parsedResult.strInstructions;
            this.strDrinkThumb = parsedResult.strDrinkThumb == null ? null : parsedResult.strDrinkThumb;
            this.strIngredient1 = parsedResult.strIngredient1 == null ? null : parsedResult.strIngredient1;
            this.strIngredient2 = parsedResult.strIngredient2 == null ? null : parsedResult.strIngredient2;
            this.strIngredient3 = parsedResult.strIngredient3 == null ? null : parsedResult.strIngredient3;
            this.strIngredient4 = parsedResult.strIngredient4 == null ? null : parsedResult.strIngredient4;
            this.strIngredient5 = parsedResult.strIngredient5 == null ? null : parsedResult.strIngredient5;
            this.strIngredient6 = parsedResult.strIngredient6 == null ? null : parsedResult.strIngredient6;
            this.strIngredient7 = parsedResult.strIngredient7 == null ? null : parsedResult.strIngredient7;
            this.strIngredient8 = parsedResult.strIngredient8 == null ? null : parsedResult.strIngredient8;
            this.strIngredient9 = parsedResult.strIngredient9 == null ? null : parsedResult.strIngredient9;
            this.strIngredient10 = parsedResult.strIngredient10 == null ? null : parsedResult.strIngredient10;
            this.strIngredient11 = parsedResult.strIngredient11 == null ? null : parsedResult.strIngredient11;
            this.strIngredient12 = parsedResult.strIngredient12 == null ? null : parsedResult.strIngredient12;
            this.strIngredient13 = parsedResult.strIngredient13 == null ? null : parsedResult.strIngredient13;
            this.strIngredient14 = parsedResult.strIngredient14 == null ? null : parsedResult.strIngredient14;
            this.strIngredient15 = parsedResult.strIngredient15 == null ? null : parsedResult.strIngredient15;
            this.strMeasure1 = parsedResult.strMeasure1 == null ? null : parsedResult.strMeasure1;
            this.strMeasure2 = parsedResult.strMeasure2 == null ? null : parsedResult.strMeasure2;
            this.strMeasure3 = parsedResult.strMeasure3 == null ? null : parsedResult.strMeasure3;
            this.strMeasure4 = parsedResult.strMeasure4 == null ? null : parsedResult.strMeasure4;
            this.strMeasure5 = parsedResult.strMeasure5 == null ? null : parsedResult.strMeasure5;
            this.strMeasure6 = parsedResult.strMeasure6 == null ? null : parsedResult.strMeasure6;
            this.strMeasure7 = parsedResult.strMeasure7 == null ? null : parsedResult.strMeasure7;
            this.strMeasure8 = parsedResult.strMeasure8 == null ? null : parsedResult.strMeasure8;
            this.strMeasure9 = parsedResult.strMeasure9 == null ? null : parsedResult.strMeasure9;
            this.strMeasure10 = parsedResult.strMeasure10 == null ? null : parsedResult.strMeasure10;
            this.strMeasure11 = parsedResult.strMeasure11 == null ? null : parsedResult.strMeasure11;
            this.strMeasure12 = parsedResult.strMeasure12 == null ? null : parsedResult.strMeasure12;
            this.strMeasure13 = parsedResult.strMeasure13 == null ? null : parsedResult.strMeasure13;
            this.strMeasure14 = parsedResult.strMeasure14 == null ? null : parsedResult.strMeasure14;
            this.strMeasure15 = parsedResult.strMeasure15 == null ? null : parsedResult.strMeasure15;
        })
        .catch((error) => {
            // handle errors
        });
    }
}