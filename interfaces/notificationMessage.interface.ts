
export interface INotificationMessage {
	_internal?: any;
    Id?: number;
	CreateDateTime?: Date;
    UpdateDateTime?: Date;
    Title: string;
    Message: string;
    IdNotificationType: string;
    View: boolean;
    Solved: boolean;
}

export class NotificationMessageForm implements INotificationMessage {

	public _internal: any;
	public Id: number;
	public CreateDateTime: Date;
    public UpdateDateTime: Date;
	public Title: string;
	public Message: string;
	public IdNotificationType: string;
	public View: boolean;
	public Solved: boolean;
	
    constructor(item?: INotificationMessage) {
		this._internal = {};
		this.Id = item && item.Id || 0;
		this.CreateDateTime = item && item.CreateDateTime || new Date();
	    this.UpdateDateTime = item && item.UpdateDateTime || new Date();
		this.Title = item && item.Title || "";
		this.Message = item && item.Message || "";
		this.IdNotificationType = item && item.IdNotificationType || "";
		this.View = item && item.View || false;
		this.Solved = item && item.Solved || false;
	}
	
}
