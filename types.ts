export interface GridProps {
  color: string
  tip: string
}
export interface Config {
  birthday: string
  lifetime: number
}

export interface TimeDiff {
  second: number
  minute: number
  hour: number
  day: number
  month: number
  year: number
  [key: string]: any
}
