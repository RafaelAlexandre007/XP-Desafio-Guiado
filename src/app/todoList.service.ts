import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TodoListService{
    items: string[] = ['Item1'];

    add(newItem: string){
        this.items.push(newItem);
    }
}