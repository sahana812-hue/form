import { Component, OnInit } from '@angular/core';
import{ListDataService} from '..//list-data.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  arr_user_list=[];
  
  constructor(public dataservice: ListDataService) { }

  ngOnInit() {
  }
 

}
