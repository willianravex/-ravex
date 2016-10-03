import { IUsersMessage, UsersMessageForm } from './usersMessage.interface';

export interface IUsersMessageList {
	_internal?: any;
    Id?: number;
	CreateDateTime?: Date;
    UpdateDateTime?: Date;
    IdUsers: number;
    UserName: string;
    LastMessageDateTime: Date;
    LastMessageText: string;
    View: number;
    Typen: boolean;
    Messages: Array<IUsersMessage>
}

export class UsersMessageListForm implements IUsersMessageList {

	public _internal: any;
	public Id: number;
	public CreateDateTime: Date;
    public UpdateDateTime: Date;
	public IdUsers: number;
	public UserName: string;
	public LastMessageDateTime: Date;
	public LastMessageText: string;
	public View: number;
	public Typen: boolean;
	public Messages: Array<IUsersMessage>;
	
    constructor(item?: IUsersMessageList) {
		this._internal = {};
		this.Id = item && item.Id || 0;
		this.CreateDateTime = item && item.CreateDateTime || new Date();
	    this.UpdateDateTime = item && item.UpdateDateTime || new Date();
		this.IdUsers = item && item.IdUsers || 0;
		this.UserName = item && item.UserName || "";
		this.LastMessageDateTime = item && item.LastMessageDateTime || new Date();
		this.LastMessageText = item && item.LastMessageText || "";
		this.View = item && item.View || 0;
		this.Typen = item && item.Typen || false;
		this.Messages = item && item.Messages || new Array<IUsersMessage>();
	}
	
}
