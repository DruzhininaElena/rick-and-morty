import {createTheme} from '@mui/material/styles'

export const getTheme = () => {
  return createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#88e23b',
      },
      secondary: {
        main: '#60a85f',
      },
    },
  })
}
