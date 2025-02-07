import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'gen',
    standalone:false
})
export class GenderPipe implements PipeTransform{
    transform(g:string):string{
        let v='Male';
        if(g=='F')
            v='Female';
        return v;
    }
}