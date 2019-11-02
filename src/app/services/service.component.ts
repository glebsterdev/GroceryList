import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar'

export class Type {
    id: number
    title: string
}

export class Grocery {
    id: number
    type: string
    title: string
}

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class ServiceComponent {
    types = [
        {id: 0, title: 'Vegetable'},
        {id: 1, title: 'Herb'},
        {id: 2, title: 'Meat'},
        {id: 3, title: 'Canned'}
    ]

    groceries = [
        {id: 0, type: 0, title: 'Leak', pakage: ''},
        {id: 1, type: 0, title: 'Tomato', pakage: ''},

        {id: 10, type: 2, title: 'Ground Beef', pakage: 'g'},
    ]

    constructor(private http: HttpClient, private snackBar: MatSnackBar) {

    }

}