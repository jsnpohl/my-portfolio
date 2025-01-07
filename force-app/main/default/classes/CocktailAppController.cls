public without sharing class CocktailAppController {
    @auraEnabled
    public static String getRandomCocktail() {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200) {
            // Deserialize the JSON string into collections of primitive data types.
            CocktailResponseWrapper wrapper = (CocktailResponseWrapper)JSON.deserialize(response.getBody(), CocktailResponseWrapper.class);
            if(!wrapper.drinks.isEmpty()) {
                return JSON.serialize(wrapper.drinks[0]);
            }
            return '';
        } else {
            throw new AuraHandledException('Error occurred while fetching Cocktail data.');
        }
    }
}