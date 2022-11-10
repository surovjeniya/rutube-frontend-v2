import { IAuth } from '@/types/auth.interface'
import { axiosClassic } from 'api/axios.api'

export const authService = {
	async login(email: string, password: string): Promise<IAuth> {
		const { data } = await axiosClassic.post<IAuth>('/auth/login', {
			email,
			password
		})
		return data
	},
	async register(email: string, password: string): Promise<IAuth> {
		const { data } = await axiosClassic.post<IAuth>('/auth/register', {
			email,
			password
		})
		return data
	}
}
