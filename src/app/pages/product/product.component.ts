import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.findAll();
    this.FindById();
    this.deleteById();
    this.update();
    this.save();
  }

  public findAll() {
    this.productService.getAll('https://api.escuelajs.co/api/v1/products').subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  public FindById() {
    this.productService.getAll('https://api.escuelajs.co/api/v1/products/9').subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  public deleteById() {
    this.productService.deleteById('https://api.escuelajs.co/api/v1/products/9').subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  public update() {
    this.productService.putById('https://api.escuelajs.co/api/v1/products/10',
      {
        price: 10,
        description: 'Max',
        id: 0,
        title: 'Max',
        category: [{ id: 0, name: 'Max', image: 'max' }]
      }
    ).subscribe(
      (response) => {
        console.log("Se a Actualizado con exito");
      }
    )
  }

  public save (){
    this.productService.post('https://api.escuelajs.co/api/v1/products/',
    {
      price: 1,
      id: 201,
      title: 'hola',
      description: 'hola',
      category: [{
        id: 0,
        image: 'hola',
        name: 'hola'
      }]
    })
  }
}
