import _ from "lodash"

export const processPaginationArgs = (page: number, pageSize: number, pageCount: number, validPageSizes: number[]) => {
  const validPage = _.clamp(page, 1, pageCount) as number
  const validPageSize = _.minBy(validPageSizes, (value: number) => Math.abs(value - pageSize)) as number
  return { page: validPage, pageSize: validPageSize }
}
