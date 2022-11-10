import { IBase } from './base.interface'
import { IComment } from './comment.interface'
import { ISubscription } from './subscription.interface'
import { IVideo } from './video.interface'

export interface IUser extends IBase {
	email: string
	password: string
	name: string
	isVerified: boolean
	subscribersCount?: number
	description: string
	avatarPath?: string
	videos: IVideo[]
	comments: IComment[]
	subscriptions: ISubscription[]
	subscribers: ISubscription[]
}
