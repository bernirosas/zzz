import getConfig from "next/config"
import graphqlRequestClient from "~/lib/clients/graphqlRequestClient"

const timeMap = {
  months: { singular: "mes", plural: "meses" },
  days: { singular: "día", plural: "días" },
  hours: { singular: "hora", plural: "horas" },
  minutes: { singular: "minuto", plural: "minutos" },
  seconds: { singular: "segundo", plural: "segundos" },
}
const shortTimeMap = {
  months: { singular: "mes", plural: "meses" },
  days: { singular: "día", plural: "días" },
  hours: { singular: "hr", plural: "hrs" },
  minutes: { singular: "min", plural: "mins" },
  seconds: { singular: "sec", plural: "secs" },
}

// Transform number of seconds to a string
const secondsToTime = (seconds: number, format: "long" | "short") => {
  const map = format === "long" ? timeMap : shortTimeMap
  const timeArray = []
  let remainingSeconds = seconds
  const months = Math.floor(remainingSeconds / (60 * 60 * 24 * 30))
  if (months) {
    timeArray.push(`${months} ${map.months[months === 1 ? "singular" : "plural"]}`)
    remainingSeconds -= months * 60 * 60 * 24 * 30
  }
  const days = Math.floor(remainingSeconds / (60 * 60 * 24))
  if (days) {
    timeArray.push(`${days} ${map.days[days === 1 ? "singular" : "plural"]}`)
    remainingSeconds -= days * 60 * 60 * 24
  }
  const hours = Math.floor(remainingSeconds / (60 * 60))
  if (hours) {
    timeArray.push(`${hours} ${map.hours[hours === 1 ? "singular" : "plural"]}`)
    remainingSeconds -= hours * 60 * 60
  }
  const minutes = Math.floor(remainingSeconds / 60)
  if (minutes) {
    timeArray.push(`${minutes} ${map.minutes[minutes === 1 ? "singular" : "plural"]}`)
    remainingSeconds -= minutes * 60
  }
  const finalSeconds = Math.floor(remainingSeconds)
  if (finalSeconds) {
    timeArray.push(`${finalSeconds} ${map.seconds[finalSeconds === 1 ? "singular" : "plural"]}`)
  }
  return timeArray.join(", ")
}

// Get estimated server time in seconds
const getEstimatedServerTime = () => {
  const { publicRuntimeConfig } = getConfig()
  const estimatedServerTime = Date.now() - publicRuntimeConfig.SERVER_TIME_OFFSET
  return estimatedServerTime / 1000
}

const timeZoneOptions = {
  timeZone: "America/Santiago",
  timeZoneName: "short",
} as Intl.DateTimeFormatOptions

const defaultDateOptions = {
  weekday: "long",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  ...timeZoneOptions,
} as Intl.DateTimeFormatOptions

const formatDate = (date: Date) => {
  // Use Intl.DateTimeFormat to get the date in the correct format
  const formatter = new Intl.DateTimeFormat("es-CL", {
    // day number, month name, year number, time and AM/PM
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    ...timeZoneOptions,
  })

  return formatter.format(date).replace("a. m.", "AM").replace("p. m.", "PM")
}

const getAndSetServerOffset = async () => {
  const STATUS_QUERY = `
  query Status {
    currentTime
  }`

  const { publicRuntimeConfig } = getConfig()
  const start = Date.now()
  const res = await graphqlRequestClient.request(STATUS_QUERY)
  const end = Date.now()
  const timeDifference = Date.now() - Date.parse(res.currentTime) - (end - start)
  publicRuntimeConfig.SERVER_TIME_OFFSET = timeDifference
}

export { secondsToTime, getEstimatedServerTime, formatDate, timeZoneOptions, getAndSetServerOffset, defaultDateOptions }
