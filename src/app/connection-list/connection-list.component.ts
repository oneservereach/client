import { Component, OnInit } from '@angular/core';
import { Connection } from '../connection'
import { ConnectionService } from '../connection.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-connection-list',
  templateUrl: './connection-list.component.html',
  styleUrls: ['./connection-list.component.css']
})
export class ConnectionListComponent implements OnInit {

  connections: Connection[] | undefined;

  constructor(private connectionService: ConnectionService,
    private router: Router) { }

  ngOnInit(): void {
    this.getConnections();
  }

  private getConnections(){
    this.connectionService.getConnectionsList().subscribe(data => {
      this.connections = data;
    });
  }

  connectionDetails(id: number){
    this.router.navigate(['connection-details', id]);
  }

  updateConnection(id: number){
    this.router.navigate(['update-connection', id]);
  }

  deleteConnection(id: number){
    this.connectionService.deleteConnection(id).subscribe( data => {
      console.log(data);
      this.getConnections();
    })
  }
}
