import { createMuiTheme } from '@material-ui/core/styles'

export const Colors = {
    blue: '#3682c1',
    green: '#8ebf55',
    orange: '#e7873c',
    grey: '#7a7d7f',
    darkGrey: '#3e4143',
    white: '#fff',
}

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: Colors.blue,
            contrastText: Colors.white
        },
        secondary: {
            main: '#f44336',
            contrastText: Colors.white
        },
        background: {
            default: Colors.white
        },
    },
    typography: {
        fontSize: 12,
        title: {
            marginTop: 10,
            color: Colors.darkGrey,
        },
    },
    overrides: {
        MuiListItemIcon: {
            root: {
                marginRight: '0px'
            }
        }
    }
});
