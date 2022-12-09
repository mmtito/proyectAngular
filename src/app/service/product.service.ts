import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/protuct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( 
    private http : HttpClient 
  ) { }

  public getAll(url : string){
    return this.http.get(url);
  }

  public deleteById(url : string){
    return this.http.delete(url);
  }

  public putById(url : string , body: Product){
    return this.http.put(url, body)
  }

  public post(url : string , body: Product){
    return this.http.post(url, body);
  }
}
