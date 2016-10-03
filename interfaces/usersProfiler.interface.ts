
export interface IUsersProfiler {
	_internal?: any;
    Id?: number;
	CreateDateTime?: Date;
    UpdateDateTime?: Date;
    Name: string;
}

export class UsersProfilerForm implements IUsersProfiler {

	public _internal: any;
	public Id: number;
	public CreateDateTime: Date;
    public UpdateDateTime: Date;
	public Name: string;
	
    constructor(item?: IUsersProfiler) {
		this._internal = {};
		this.Id = item && item.Id || 0;
		this.CreateDateTime = item && item.CreateDateTime || new Date();
	    this.UpdateDateTime = item && item.UpdateDateTime || new Date();
		this.Name = item && item.Name || "";
	}
	
}
