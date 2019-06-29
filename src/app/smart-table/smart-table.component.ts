import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})
export class SmartTableComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      first_name: {
        title: 'First Name'
      },
      last_name: {
        title: 'Last Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  data: any;

  constructor(private service: DataserviceService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(res => {
      this.data = res['data'];
    }
  );
  }

}
