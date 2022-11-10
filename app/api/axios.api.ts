import { getContentType } from '@/utils/api.utils'
import axios from 'axios'

export const API_RUL = `${process.env.API_URL}/api`

export const axiosClassic = axios.create({
	baseURL: API_RUL,
	headers: getContentType()
})
