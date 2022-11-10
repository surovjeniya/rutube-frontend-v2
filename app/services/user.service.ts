import { IUser } from '@/types/user.interface'
import { axiosClassic } from 'api/axios.api'

export const userService = {
	async getAll(): Promise<IUser[]> {
		const { data } = await axiosClassic.get<IUser[]>('/user/get-all')
		return data
	},
	async getUserById(id: number): Promise<IUser> {
		const { data } = await axiosClassic.get<IUser>(`/by-id/${id}`)
		return data
	}
}
