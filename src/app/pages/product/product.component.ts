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
    //this.findAll();
    //this.FindById();
    //this.deleteById();
    //this.update();
    this.save();
  }

  public update() {
    this.productService.putById('https://api.escuelajs.co/api/v1/products/70',
      {
        id: 70,
        title: "maximiliano",
        price: 10,
        description: "maximiliano",
        images: [
          'Maximilian01',
          'Maximilian02',
          'Maximilian03'
        ],
        categoryId: [
          {
            id: 0,
            image: '',
            name: '',
          }
        ]
      }
    ).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  public deleteById() {
    this.productService.deleteById('https://api.escuelajs.co/api/v1/products/60').subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  public FindById() {
    this.productService.getAll('https://api.escuelajs.co/api/v1/products/39').subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  public findAll() {
    this.productService.getAll('https://api.escuelajs.co/api/v1/products').subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  public save() {
    this.productService.post('https://api.escuelajs.co/api/v1/products/',
      {
        id: 2,
        title: "Maximiliano Guardar",
        price: 100,
        description: "Maximiliano Guardar",
        images: [
          'Maximiliano Guardar',
          'Maximiliano Guardar',
          'Maximiliano Guardar'
        ],
        categoryId: []
      }
    ).subscribe(
      (response) => {
        console.log('Se guardo con exito')
      }
    )
  }
}
