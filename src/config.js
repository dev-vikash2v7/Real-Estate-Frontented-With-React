const isProudction = process.env.NODE_ENV === 'production'

export const  BASE_URL =  !isProudction ? 'http://localhost:3000' : 'https://eazyhome-backend.vercel.app'
