import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'flight'
})
export class FlightPipe implements PipeTransform{

    transform(value:boolean): string{
        return (value)?'flights':'doesn\'t flight';
    }

}