import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  table: {
    maxWidth: 650
  },
  root: {
    width: '100%',
    maxWidth: 'auto',
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }

}))
