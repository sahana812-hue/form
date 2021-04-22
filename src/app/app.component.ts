import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'form';
  api_data:any;
  li:any;
header=["NAME","POSITION","SALARY"]
constructor(private http: HttpClient){
}

ngOnInit():void{
  this.http.get("http://www.mocky.io/v2/5ea172973100002d001eeada")
  .subscribe((res)=>{
  this.li=res;
  this.api_data = this.li.list;
    console.log(this.api_data);
  });
}

}
