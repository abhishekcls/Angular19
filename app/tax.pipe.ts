import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'tax',
    standalone:false
})
export class TaxPipe implements PipeTransform{
    transform(s:number,r:number=0.1):number {
        return s*r
    }

}