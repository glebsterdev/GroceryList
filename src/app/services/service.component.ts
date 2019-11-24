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
        constructor(private http: HttpClient, private snackBar: MatSnackBar) {

    }

}