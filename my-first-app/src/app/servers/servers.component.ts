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


  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus='Server was created';
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
