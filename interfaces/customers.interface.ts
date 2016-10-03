
export interface ICustomers {
	_internal?: any;
    Id?: number;
	CreateDateTime?: Date;
    UpdateDateTime?: Date;
    Name: string;
    Address?: string;
    Cnpj?: string;
}

export class CustomersForm implements ICustomers {

	public _internal: any;
	public Id: number;
	public CreateDateTime: Date;
    public UpdateDateTime: Date;
	public Name: string;
	public Address: string;
	public Cnpj: string;
	
    constructor(item?: ICustomers) {
		this._internal = {};
		this.Id = item && item.Id || 0;
		this.CreateDateTime = item && item.CreateDateTime || new Date();
	    this.UpdateDateTime = item && item.UpdateDateTime || new Date();
		this.Name = item && item.Name || "";
		this.Address = item && item.Address || "";
		this.Cnpj = item && item.Cnpj || "";
	}
	
}
