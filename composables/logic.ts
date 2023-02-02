// @unocss-include
import type { GridProps } from '~/types'
export class InitGrid {
  birthday = '' // 出生日期
  tipList = [
    {
      color: 'bg-green',
      tip: '你已经走过的生命',
    },
    {
      color: 'bg-blue',
      tip: '如果你平均每天休息 8 小时，这是你余下生命里睡眠占用的时间',
    },
    {
      color: 'bg-yellow-900',
      tip: '如果你 65 岁退休，退休前平均每天工作 8 小时，这是你余下生命里工作占用的时间',
    },
    {
      color: 'bg-yellow',
      tip: '65 岁，你退休了',
    },
    {
      color: 'bg-pink-300',
      tip: '如果你 28 岁生孩子，孩子 18 岁出门上大学，这 18 年里你平均每天能花 5 小时陪伴孩子，这是你余下生命里所用去的时间',
    },
    {
      color: 'bg-blue-600/80',
      tip: '如果你每个月能看望父母一天，在他们 77 岁前，这是你的余生里还能陪伴他们的时光',
    },
    {
      color: 'bg-gray',
      tip: '除了以上之外，你剩下的所有日子',
    },
  ] as GridProps[]

  constructor(birthday: string) {
    this.birthday = birthday
  }

  /**
   * 距离现在已经过去的时间
   */
  get formerly() {
    const _ = $computed(() => this.getTimeDiff(this.birthday))
    return _
  }

  /**
   * 现在距离未来还剩时间
   */
  get future() {
    const arr = this.birthday.split('-')
    arr[0] = String(+arr[0] + 77)
    const _ = $computed(() => this.getTimeDiff(arr.join('-')))
    return _
  }

  /**
   * 获取距当前时间相差时间
   * @param time 对比时间
   * @returns 相差时间
   */
  getTimeDiff(time: string) {
    const now = $(useNow())
    const date = new Date(`${time} 00:00:00`)

    const diff = now.getTime() - date.getTime()

    return {
      second: Math.trunc(Math.abs(diff / 1000)),
      minute: Math.trunc(Math.abs(diff / 1000 / 60)),
      hour: Math.trunc(Math.abs(diff / 1000 / 60 / 60)),
      day: Math.trunc(Math.abs(diff / 1000 / 60 / 60 / 24)),
      month: Math.trunc(
        Math.abs(
          (now.getFullYear() * 12 + now.getMonth())
          - (date.getFullYear() * 12 + date.getMonth()),
        ),
      ),
      year: Math.trunc(Math.abs(now.getFullYear() - date.getFullYear())),
    }
  }
}
