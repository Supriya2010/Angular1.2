import { Injectable } from '@angular/core';
import {Category} from '../models/Category';

@Injectable()
export class CategoryService {
  catlist = [
    new Category( 'dac course', true),
    new Category('CDAC', false),
    new Category('CDAC', false),
    new Category('CDAC', false)
    
    
  ];

  constructor() { }
}
