import { ThemeProvider } from "@material-ui/core";

const styles = (theme) => ({
    cardActions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    card:{
      marginBottom:theme.spacing(2),
    }
  });
  
  export default styles;