import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform(value: Hero): string {
    let url : string = "assets/heroes/"+ value.id +".jpg" 
    return url;
  }

}
