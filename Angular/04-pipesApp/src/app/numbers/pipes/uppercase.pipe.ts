import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'toMayus'
})
export class MayusPipe implements PipeTransform{

    transform(value:string, convert:boolean = true): string{
        // if(convert)
        // {
        //     return value.toUpperCase();
        // }
        // else
        // {
        //     return value.toLocaleLowerCase();
        // }

        return(convert)?value.toUpperCase():value.toLocaleLowerCase();

    }

}