import { IVideo } from '@/types/video.interface'
import { axiosClassic } from 'api/axios.api'

export const videoService = {
	async getAll(): Promise<IVideo[]> {
		const { data: videos } = await axiosClassic.get<IVideo[]>(`/video`)
		return videos
	},
	async getVideoById(id: number): Promise<IVideo> {
		const { data: video } = await axiosClassic.get(`/get-by-id/${id}`)
		return video
	},
	async getMostPopular(): Promise<IVideo[]> {
		const { data: videos } = await axiosClassic.get<IVideo[]>('/most-popular')
		return videos
	}
}
