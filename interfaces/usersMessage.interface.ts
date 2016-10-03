
export interface IUsersMessage {
	_internal?: any;
    Id?: number;
	CreateDateTime?: Date;
    UpdateDateTime?: Date;
    IdUsersFrom: number;
    IdUsersTo: number;
    View?: boolean;
    Message: string;
}

export class UsersMessageForm implements IUsersMessage {

	public _internal: any;
	public Id: number;
	public CreateDateTime: Date;
    public UpdateDateTime: Date;
	public IdUsersFrom: number;
	public IdUsersTo: number;
	public View: boolean;
	public Message: string;
	
    constructor(item?: IUsersMessage) {
		this._internal = {};
		this.Id = item && item.Id || 0;
		this.CreateDateTime = item && item.CreateDateTime || new Date();
	    this.UpdateDateTime = item && item.UpdateDateTime || new Date();
		this.IdUsersFrom = item && item.IdUsersFrom || 0;
		this.IdUsersTo = item && item.IdUsersTo || 0;
		this.View = item && item.View || false;
		this.Message = item && item.Message || "";
	}
	
}
