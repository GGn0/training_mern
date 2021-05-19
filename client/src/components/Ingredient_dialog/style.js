import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        paddingBottom:  theme.spacing(3),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
    }
}))