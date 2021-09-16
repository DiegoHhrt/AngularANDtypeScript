import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroImage',
  pure:false
})
export class HeroImagePipe implements PipeTransform {

  transform(value: Hero): string {
    
    let url : string = '';
    if((!value.id && !value.alt_img)||value.alt_img==='')
    {
      url = "assets/no-image.png";
    }
    else if (value.alt_img)
    {
      url= value.alt_img;
    }
    else
    {
      url = "assets/heroes/"+ value.id +".jpg" 
    }
    
    return url;
  }

}
