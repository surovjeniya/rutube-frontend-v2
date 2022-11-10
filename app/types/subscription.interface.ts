import { IBase } from './base.interface'
import { IUser } from './user.interface'

export interface ISubscription extends IBase {
	from: IUser
	to: IUser
}
