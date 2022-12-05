import { Catalogue } from "./catelogue";

export interface Product {
    id : number;
    title : string;
    price : number;
    description : string;
    category : Catalogue[];
}
