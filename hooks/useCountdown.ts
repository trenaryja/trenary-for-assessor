import { differenceInMilliseconds } from 'date-fns'
import React from 'react'

const msInMinute = 1000 * 60
const msInHour = msInMinute * 60
const msInDay = msInHour * 24

export const useCountdown = (targetDate: Date) => {
	const getDiff = () => differenceInMilliseconds(targetDate, new Date())
	const [ms, setMs] = React.useState(getDiff())

	React.useEffect(() => {
		const interval = setInterval(() => setMs(getDiff()), 1000)
		return () => clearInterval(interval)
	})

	const days = Math.floor(ms / msInDay)
	const hours = Math.floor((ms % msInDay) / msInHour)
	const minutes = Math.floor((ms % msInHour) / msInMinute)
	const seconds = Math.floor((ms % msInMinute) / 1000)

	return [days, hours, minutes, seconds]
}
