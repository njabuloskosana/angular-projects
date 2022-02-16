import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    //assignment2
    username='';
    //variable with a type infered
    serverId=10;
    //variable with a type explicitly declared
    serverStatus : string ="offline";
    // methods being called from the template need to return strings
    getServerStatus()
    {
        return this.serverStatus;
    }
}