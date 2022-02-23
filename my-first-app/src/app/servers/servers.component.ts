import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus ='No server created';
  serverName='default';
  username='';
  isUserNameEmpty=true;
  serverCreated=false;
  servers = ['Test server','Test server2'];
  numbers =[];
  num=1;
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus='Server was created';
    this.serverCreated=true;
    this.servers.push(this.serverName);
  }

  

  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

  resetUserName(){
    this.username='';
    this.isUserNameEmpty=true;
  }

  onKey(event: any){
    this.isUserNameEmpty=false;
  }

}
