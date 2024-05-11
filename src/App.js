// routes
import Router from "./routes";
// theme
import ThemeProvider from './theme';
// components
import ThemeSettings from './components/settings';
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "./Redux/slices/app";

const vertical = "bottom";
const horizontal = "center";

function App() {

  const dispatch = useDispatch();
  const {open, message, severity}  = useSelector((state) => state.app.snackbar);
  return (

    <>

    <ThemeProvider>
      <ThemeSettings>
        {" "}
        <Router />{" "}
      </ThemeSettings>
    </ThemeProvider>
    
    {message ? (
    <Snackbar anchorOrigin={{vertical, horizontal}} 
    open={true} autoHideDuration={400} key={vertical + horizontal}
    onClose={()=>{
      dispatch(closeSnackbar());
    }}
    >

       <Alert
          onClose={()=>{
            dispatch(closeSnackbar());
          }
          }
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>

     </Snackbar> 
    )
      :
      <></>
    } 
    
    </>
  );
}

export default App;
