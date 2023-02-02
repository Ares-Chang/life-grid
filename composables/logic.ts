export class InitGrid {
  age = ''

  constructor(age: string) {
    this.age = age
  }

  get formerly() {
    const _ = $computed(() => this.getTimeDiff(this.age))
    return _
  }

  get future() {
    const arr = this.age.split('-')
    arr[0] = String(+arr[0] + 80)
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
    const date = new Date(time)

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
