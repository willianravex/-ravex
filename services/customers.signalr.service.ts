import { Injectable, EventEmitter, Output } from '@angular/core';
import { SignalRService } from '../services/signalr.service';
import { ICustomers } from '../interfaces/customers.interface';

declare var $;

@Injectable()
export class CustomersSignalRService extends SignalRService{
    public itens: Array<ICustomers>;
	public item: ICustomers;
	public isValid: boolean;
   
    //Methods of Return with EventEmitter
    public onCreate: EventEmitter<any> = new EventEmitter();
    public onRead: EventEmitter<any> = new EventEmitter();
    public onUpdate: EventEmitter<any> = new EventEmitter();
    public onDelete: EventEmitter<any> = new EventEmitter();
    public onGet: EventEmitter<any> = new EventEmitter();
    public onValidate: EventEmitter<any> = new EventEmitter();
    public onByCNPJ: EventEmitter<any> = new EventEmitter();
    public onByName: EventEmitter<any> = new EventEmitter();
    public onByAddress: EventEmitter<any> = new EventEmitter();
    
    public methodsReturn = [
        {
            name: 'create',
            callback: (data: ICustomers) => {
                this.itens.push(data);
                this.onCreate.emit(data);
            } 
        }, 
        {
            name: 'createrange',
            callback: (data: Array<ICustomers>) => {
                for (let index: number = 0; index < data.length; ++index) {
                    this.itens.push(data[index]);
                    this.onCreate.emit(data[index]);
                }
            }
        },
        {
            name: 'read',
            callback: (data: Array<ICustomers>) => {
                this.itens = data;
                this.onRead.emit(data);
            }
        },
        {
            name: 'update',
            callback: (data: ICustomers) => {
                for(let index:number = 0; index < this.itens.length; ++index){
                    if( this.itens[index].Id == data.Id ){
                        this.itens[index] = data;
                        this.onUpdate.emit(this.itens[index]);
                        break;
                    }
                }
            }
        },
        {
            name: 'updaterange',
            callback: (data: Array<ICustomers>) => {
                for (let index1: number = 0; index1 < data.length; ++index1) {
                    for (let index2: number = 0; index2 < this.itens.length; ++index2) {
                        if (data[index1].Id == this.itens[index2].Id) {
                            this.itens[index2] = data[index1];
                            this.onUpdate.emit(this.itens[index2]);
                            break;
                        }
                    }
                }
            }
        },
        {
            name: 'delete',
            callback: (data: ICustomers) => {
                for(let index:number = 0; index < this.itens.length; ++index){
                    if( this.itens[index].Id == data.Id ){
                        this.itens.splice(index, 1);
                        this.onDelete.emit(data);
                        break;
                    }
                }
            }
        },
        {
            name: 'get',
            callback: (data: ICustomers) => {
                this.item = data;
                this.onGet.emit(data);
            }
        },
        {
            name: 'validate',
            callback: (data: boolean) => {
                this.isValid = (data === true ? true : false);
                this.onValidate.emit(data);
            }
        },
        {
            name: 'validaterange',
            callback: (data: boolean) => {
                this.isValid = (data === true ? true : false);
                this.onValidate.emit(data);
            }
        }
        ,{
            name: 'byCNPJ',
            callback: (data: ICustomers) => {
                this.onByCNPJ.emit(data);
            }
        }
        ,{
            name: 'byName',
            callback: (data: Array<ICustomers>) => {
                this.onByName.emit(data);
            }
        }
        ,{
            name: 'byAddress',
            callback: (data: Array<ICustomers>) => {
                this.onByAddress.emit(data);
            }
        }
    ];    

    constructor() {
        super();
        this.prepare('CustomersHub', this.methodsReturn);
        this.start();
    }

    ingress(){
        this.invoke('ingress');
    }

    create(item: ICustomers) {
        this.invoke('create', item, true);
    }

    createrange(items: Array<ICustomers>) {
        this.invoke('createrange', items, true);
    }

    read() {
        this.invoke('read');
    }

    update(item: ICustomers) {
        this.invoke('update', item, true);
    }

    updaterange(items: Array<ICustomers>) {
        this.invoke('updaterange', items, true);
    }

    delete(item: ICustomers) {
        this.invoke('delete', item.Id, true);
    }
	
    get(item: ICustomers) {
        this.invoke('get', item.Id);
    }

    validate(item: ICustomers) {
        this.invoke('validate', item);
    }

    validaterange(items: Array<ICustomers>) {
        this.invoke('validaterange', items);
    }

    byCNPJ(
           cnpjIgual: string
    ) {
        this.invoke('byCNPJ', 
                    cnpjIgual
        );
    }
       
    byName(
           nameIgual: string
    ) {
        this.invoke('byName', 
                    nameIgual
        );
    }
      
    byAddress(
           addressContem: string
    ) {
        this.invoke('byAddress', 
                    addressContem
        );
    }
      
}
