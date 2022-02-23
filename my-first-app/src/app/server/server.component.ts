import { Component } from "@angular/core";
import { withLatestFrom } from "rxjs";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles: [
        '.online{color:white;}']
})
export class ServerComponent{
    //assignment2
    username='';
    //variable with a type infered
    serverId=10;
    //variable with a type explicitly declared
    serverStatus : string ="offline";
    // methods being called from the template need to return strings
    constructor(){
        this.serverStatus=Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus()
    {
        return this.serverStatus;
    }
    getColor()
    {
        //tirnary statement
       // return this.serverStatus === 'online'? 'green': 'red';
       return 'green';
    }
}