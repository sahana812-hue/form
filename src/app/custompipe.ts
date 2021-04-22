import{Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'surname'
})



export class surName implements PipeTransform{
transform(str:string,name:string):string{
    //console.log(str+'csd');
    return (str==='male')?'Mr. '+name:'Miss. '+name;

}

}