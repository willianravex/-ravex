import { Injectable, EventEmitter } from '@angular/core';

declare var $;

@Injectable()
export class SignalRService {
    public connection;
    public proxy: any;
    public methodsReturn = [];
    public connectionEstablished: EventEmitter<Boolean>;
    public connectionRestablished: EventEmitter<Boolean>;

    public constructor(){
        this.connectionEstablished = new EventEmitter<Boolean>();
        this.connectionRestablished = new EventEmitter<Boolean>();
    };

    public prepare(hubName:string, methoReturn:Array<any>){ 
        this.connection = $.hubConnection('/signalr/');          // Url do SignalR
        this.connection.logging = true;                         // Registro de Log
        this.proxy = this.connection.createHubProxy(hubName);    // Nome do Hub

        this.methodsReturn = methoReturn;                        // Registra metodos de retorno no servico
    }
    public start(){
        for(let index:number = 0; index < this.methodsReturn.length; ++index){
            let name = this.methodsReturn[index].name;
            let callback = this.methodsReturn[index].callback;
            this.proxy.on(name, eval(callback));
        }
        this.startConnection(); // Conecta ao Hub
    }

    public invoke(name:string, ...args:any[]) {
        if(args.length>0){
            this.proxy.invoke(name, ...args);
        }else{
            this.proxy.invoke(name);
        }
    }

    public startConnection(): void {
        this.connection.start().done((data) => {
            console.log('Conectado agora com ' + data.transport.name + ', connection ID= ' + data.id);
            this.connectionEstablished.emit(true);
        }).fail((error) => {
            console.log('Não consegui conectar' + error);
        });
        this.connection.disconnected((data)=> {
            setTimeout((data)=>{
                console.log('Está desconectado agora...');
                this.connection.start().done((data)=>{
                    console.log('Re-Conectado agora com ' + data.transport.name + ', connection ID= ' + data.id);
                    console.log('SignalRService Reconected');
                    this.connectionRestablished.emit(true);
                });
            },5000);
        });
    }
}