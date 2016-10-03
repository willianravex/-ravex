
export interface IUsers {
	_internal?: any;
    Id?: number;
	CreateDateTime?: Date;
    UpdateDateTime?: Date;
    Name: string;
    Address?: string;
    Email?: string;
    Password?: string;
    IdUsersProfiler?: number;
}

export class UsersForm implements IUsers {

	public _internal: any;
	public Id: number;
	public CreateDateTime: Date;
    public UpdateDateTime: Date;
	public Name: string;
	public Address: string;
	public Email: string;
	public Password: string;
	public IdUsersProfiler: number;
	
    constructor(item?: IUsers) {
		this._internal = {};
		this.Id = item && item.Id || 0;
		this.CreateDateTime = item && item.CreateDateTime || new Date();
	    this.UpdateDateTime = item && item.UpdateDateTime || new Date();
		this.Name = item && item.Name || "";
		this.Address = item && item.Address || "";
		this.Email = item && item.Email || "";
		this.Password = item && item.Password || "";
		this.IdUsersProfiler = item && item.IdUsersProfiler || 0;
	}
	
}
