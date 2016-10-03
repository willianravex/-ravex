
export interface IMessageAlert {
	_internal?: any;
    Id?: number;
	CreateDateTime?: Date;
    UpdateDateTime?: Date;
    Type: string;
    Message: string;
    DelayRemove: number;
}

export class MessageAlertForm implements IMessageAlert {

	public _internal: any;
	public Id: number;
	public CreateDateTime: Date;
    public UpdateDateTime: Date;
	public Type: string;
	public Message: string;
	public DelayRemove: number;
	
    constructor(item?: IMessageAlert) {
		this._internal = {};
		this.Id = item && item.Id || 0;
		this.CreateDateTime = item && item.CreateDateTime || new Date();
	    this.UpdateDateTime = item && item.UpdateDateTime || new Date();
		this.Type = item && item.Type || "";
		this.Message = item && item.Message || "";
		this.DelayRemove = item && item.DelayRemove || 0;
	}
	
}
