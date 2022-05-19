import React from 'react'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CCard,
  CContainer,
  CPagination,
  CPaginationItem,
  CRow,
  CCol,
  CButton,
} from '@coreui/react'

import { Button as ButtonUI } from '@nextui-org/react'
import Button from '@material-ui/core/Button'
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { green, purple } from '@material-ui/core/colors'

import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';


const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button)

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button)

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

const theme = createTheme({
  palette: {
    primary: green,
  },
})

const Buttonpage = () => {
  const classes = useStyles()

  return (
    <CContainer>
      <CCard className="d-grid gap-2 d-md-flex justify-content-md-end">
        <CRow className="mt-3 text-center">
          <h4>NEXT-UI Button</h4>
        </CRow>
        {/* Row1 */}
        <CRow>
          <CCol className="p-4">
            <ButtonUI auto color="primary">
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="secondary">
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="success">
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="warning">
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="error">
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="gradient">
              Primary
            </ButtonUI>
          </CCol>
        </CRow>
        {/* Row2 */}
        <CRow>
          <CCol className="p-4">
            <ButtonUI auto shadow color="primary">
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto shadow color="secondary">
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto shadow color="success">
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto shadow color="warning">
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto shadow color="error">
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto shadow color="gradient">
              Primary
            </ButtonUI>
          </CCol>
        </CRow>
        {/* Row3 */}
        <CRow>
          <CCol className="p-4">
            <ButtonUI auto bordered color="primary">
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto bordered color="secondary">
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto bordered color="success">
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto bordered color="warning">
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto bordered color="error">
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto bordered color="gradient">
              Primary
            </ButtonUI>
          </CCol>
        </CRow>
        {/* Row4 */}
        <CRow>
          <CCol className="p-4">
            <ButtonUI auto color="primary" rounded>
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="secondary" rounded flat>
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="success" rounded bordered>
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="warning" rounded>
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="error" rounded>
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="gradient" rounded>
              Primary
            </ButtonUI>
          </CCol>
        </CRow>
        {/* Row5 */}
        <CRow>
          <CCol className="p-4">
            <ButtonUI auto color="primary" ghost>
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="secondary" ghost>
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="success" ghost>
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="warning" ghost>
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="error" ghost>
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="gradient" ghost>
              Primary
            </ButtonUI>
          </CCol>
        </CRow>
        {/* Row1 */}
        <CRow>
          <CCol className="p-4">
            <ButtonUI auto color="primary" flat>
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="secondary" flat>
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="success" flat>
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="warning" flat>
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="error" flat>
              Primary
            </ButtonUI>
          </CCol>
          <CCol className="p-4">
            <ButtonUI auto color="gradient" flat>
              Primary
            </ButtonUI>
          </CCol>
        </CRow>
        <CRow className="mt-3 text-center">
          <h4>Mat-UI Button</h4>
        </CRow>
        {/* Mat Row1 */}
        <CRow>
          <CCol className="p-4">
            <BootstrapButton
              variant="contained"
              color="primary"
              disableRipple
              className={classes.margin}
            >
              Bootstrap
            </BootstrapButton>
          </CCol>
          <CCol className="p-4">
            <ColorButton variant="contained" color="primary" className={classes.margin}>
              Custom CSS
            </ColorButton>
          </CCol>
          <CCol className="p-4">
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="primary" className={classes.margin}>
                Theme Provider
              </Button>
            </ThemeProvider>
          </CCol>
          <CCol className="p-4"></CCol>
          <CCol className="p-4"></CCol>
          <CCol className="p-4"></CCol>
        </CRow>
        {/* Mat Row2 */}
        <CRow>
          <CCol className="p-4">
            <Button variant="contained">Default</Button>
          </CCol>
          <CCol className="p-4">
            <Button variant="contained" color="primary">
              Primary
            </Button>
          </CCol>
          <CCol className="p-4">
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
          </CCol>
          <CCol className="p-4">
            <Button variant="contained" disabled>
              Disabled
            </Button>
          </CCol>
          <CCol className="p-4">
            <Button variant="contained" color="primary" href="#contained-buttons">
              Link
            </Button>
          </CCol>
          <CCol className="p-4"></CCol>
        </CRow>
        {/* Mat Row3 */}
        <CRow>
          <CCol className="p-4">
            <Button>Default</Button>
          </CCol>
          <CCol className="p-4">
            <Button color="primary">Primary</Button>
          </CCol>
          <CCol className="p-4">
            <Button color="secondary">Secondary</Button>
          </CCol>
          <CCol className="p-4">
            <Button disabled>Disabled</Button>
          </CCol>
          <CCol className="p-4">
            <Button href="#text-buttons" color="primary">
              Link
            </Button>
          </CCol>
          <CCol className="p-4"></CCol>
        </CRow>
        {/* Mat Row4 */}
        <CRow>
          <CCol className="p-4">
          <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>

          </CCol>
          <CCol className="p-4">
          <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>

          </CCol>
          <CCol className="p-4">
          <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>

          </CCol>
          <CCol className="p-4">
          <Button
        variant="contained"
        disabled
        color="secondary"
        className={classes.button}
        startIcon={<KeyboardVoiceIcon />}
      >
        Talk
      </Button>

          </CCol>
          <CCol className="p-4">
          <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>

          </CCol>
          <CCol className="p-4">
          <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>

          </CCol>
        </CRow>
      </CCard>
    </CContainer>
  )
}

export default Buttonpage
