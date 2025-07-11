import { setAppErrorAC } from "@/app/app-slice.ts"
import {isErrorWithMessage} from '@/common/utils/isErrorWithMessage.ts';
import type {BaseQueryApi, FetchBaseQueryError, FetchBaseQueryMeta, QueryReturnValue} from '@reduxjs/toolkit/query';


export const handleError = (
  api: BaseQueryApi,
  result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>,
) => {
  let error = "Some error occurred"

  // 1. Global query errors
  if (result.error) {
    switch (result.error.status) {
      case "FETCH_ERROR":
      case "CUSTOM_ERROR":
        error = result.error.error
        break
      case "PARSING_ERROR":
        error = "Parsing error"
        break
      case 403:
        error = "403 Forbidden Error. Check API-KEY"
        break
      case 400:
      case 500:
        if (isErrorWithMessage(result.error.data)) {
          error = result.error.data.message
        } else {
          error = JSON.stringify(result.error.data)
        }
        break
      default:
        error = JSON.stringify(result.error)
        break
    }
    api.dispatch(setAppErrorAC({ error }))
  }
}