import { LightningElement } from 'lwc';
import getRandomCocktail from '@salesforce/apex/CocktailAppController.getRandomCocktail';

export default class CocktailApp extends LightningElement {
    strDrink = null;
    strDrinkThumb = null;
    strIngredient1 = null;
    strIngredient2 = null;
    strIngredient3 = null;
    strIngredient4 = null;
    strIngredient5 = null;
    strIngredient6 = null;
    strIngredient7 = null;
    strIngredient8 = null;
    strMeasure1 = null;
    strMeasure2 = null;
    strMeasure3 = null;
    strMeasure4 = null;
    strMeasure5 = null;
    strMeasure6 = null;
    strMeasure7 = null;
    strMeasure8 = null;
    
    connectedCallback() {
        this.handleGetRandomCocktail();
    }
    
    handleGetRandomCocktail() {
        getRandomCocktail()
        .then((result) => {
            console.log(result);
            const parsedResult = JSON.parse(result);
            if(parsedResult.strIngredient9 != null) {
                this.handleGetRandomCocktail();
            } else {
                this.strDrink = parsedResult.strDrink == null ? null : parsedResult.strDrink;
                this.strDrinkThumb = parsedResult.strDrinkThumb == null ? null : parsedResult.strDrinkThumb;
                this.strIngredient1 = parsedResult.strIngredient1 == null ? null : parsedResult.strIngredient1;
                this.strIngredient2 = parsedResult.strIngredient2 == null ? null : parsedResult.strIngredient2;
                this.strIngredient3 = parsedResult.strIngredient3 == null ? null : parsedResult.strIngredient3;
                this.strIngredient4 = parsedResult.strIngredient4 == null ? null : parsedResult.strIngredient4;
                this.strIngredient5 = parsedResult.strIngredient5 == null ? null : parsedResult.strIngredient5;
                this.strIngredient6 = parsedResult.strIngredient6 == null ? null : parsedResult.strIngredient6;
                this.strIngredient7 = parsedResult.strIngredient7 == null ? null : parsedResult.strIngredient7;
                this.strIngredient8 = parsedResult.strIngredient8 == null ? null : parsedResult.strIngredient8;
                this.strMeasure1 = parsedResult.strMeasure1 == null ? null : parsedResult.strMeasure1;
                this.strMeasure2 = parsedResult.strMeasure2 == null ? null : parsedResult.strMeasure2;
                this.strMeasure3 = parsedResult.strMeasure3 == null ? null : parsedResult.strMeasure3;
                this.strMeasure4 = parsedResult.strMeasure4 == null ? null : parsedResult.strMeasure4;
                this.strMeasure5 = parsedResult.strMeasure5 == null ? null : parsedResult.strMeasure5;
                this.strMeasure6 = parsedResult.strMeasure6 == null ? null : parsedResult.strMeasure6;
                this.strMeasure7 = parsedResult.strMeasure7 == null ? null : parsedResult.strMeasure7;
                this.strMeasure8 = parsedResult.strMeasure8 == null ? null : parsedResult.strMeasure8;
            }
        })
        .catch((error) => {
            // handle errors
        });
    }
}