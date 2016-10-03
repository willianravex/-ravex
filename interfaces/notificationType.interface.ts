
export interface INotificationType {
	_internal?: any;
    Id?: number;
	CreateDateTime?: Date;
    UpdateDateTime?: Date;
    Name: string;
    Icon: string;
}

export class NotificationTypeForm implements INotificationType {

	public _internal: any;
	public Id: number;
	public CreateDateTime: Date;
    public UpdateDateTime: Date;
	public Name: string;
	public Icon: string;
	
    constructor(item?: INotificationType) {
		this._internal = {};
		this.Id = item && item.Id || 0;
		this.CreateDateTime = item && item.CreateDateTime || new Date();
	    this.UpdateDateTime = item && item.UpdateDateTime || new Date();
		this.Name = item && item.Name || "";
		this.Icon = item && item.Icon || "";
	}
	
}
