import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import {map} from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService,
        private authService: AuthService){}

    storeRecipe(){
        const token = this.authService.getToken()
        return this.http.put('https://recipe-book-4ae71.firebaseio.com/recipes.json?auth=', this.recipeService.getRecipes());
    }

    getRecipies(){
        const token = this.authService.getToken()
        this.http.get('https://recipe-book-4ae71.firebaseio.com/recipes.json?auth=' + token)
        .pipe(map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        ))
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}