import {createSlice, isFulfilled, isPending, isRejected} from '@reduxjs/toolkit'
import type {RequestStatus} from '@/common/types';


export const appSlice = createSlice({
  name: "app",
  initialState: {
    status: "idle" as RequestStatus,
    error: null as string | null,
  },
  extraReducers: (builder) => {
    builder.addMatcher(isPending, (state) => {
      state.status = "loading"
    })
    builder.addMatcher(isFulfilled, (state) => {
      state.status = "succeeded"
    })
    builder.addMatcher(isRejected, (state) => {
      state.status = "failed"
    })
  },
  reducers: (create) => ({
    changeAppStatusAC: create.reducer<{ status: RequestStatus }>((state, action) => {
      state.status = action.payload.status
    }),
    setAppErrorAC: create.reducer<{ error: string | null }>((state, action) => {
      state.error = action.payload.error
    })
  }),
  selectors: {
    selectStatus: (state) => state.status,
    selectAppError: (state) => state.error,
  },
})

export const { changeAppStatusAC, setAppErrorAC } = appSlice.actions
export const { selectStatus, selectAppError } = appSlice.selectors
export const appReducer = appSlice.reducer

export type ThemeMode = "dark" | "light"

