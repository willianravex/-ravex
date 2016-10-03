import { INotificationMessage, NotificationMessageForm } from './notificationMessage.interface';

export interface INotificationMessageList {
	_internal?: any;
    Id?: number;
	CreateDateTime?: Date;
    UpdateDateTime?: Date;
    Title: string;
    LastNotificationDateTime: Date;
    Count: number;
    Solved: number;
    Unsolved: number;
    Notifications: Array<INotificationMessage>
}

export class NotificationMessageListForm implements INotificationMessageList {

	public _internal: any;
	public Id: number;
	public CreateDateTime: Date;
    public UpdateDateTime: Date;
	public Title: string;
	public LastNotificationDateTime: Date;
	public Count: number;
	public Solved: number;
	public Unsolved: number;
	public Notifications: Array<INotificationMessage>;
	
    constructor(item?: INotificationMessageList) {
		this._internal = {};
		this.Id = item && item.Id || 0;
		this.CreateDateTime = item && item.CreateDateTime || new Date();
	    this.UpdateDateTime = item && item.UpdateDateTime || new Date();
		this.Title = item && item.Title || "";
		this.LastNotificationDateTime = item && item.LastNotificationDateTime || new Date();
		this.Count = item && item.Count || 0;
		this.Solved = item && item.Solved || 0;
		this.Unsolved = item && item.Unsolved || 0;
		this.Notifications = item && item.Notifications || new Array<INotificationMessage>();
	}
	
}
