import { FullscreenExit } from "@material-ui/icons";


const styles = (theme) => ({
    modal:{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: 'absolute',
        width: '500px',
        backgroundColor: '#ffffff',
    },
    TextField:{
        width:'100%',
    },
    header:{
        backgroundColor: theme.color.primary,
        color: theme.color.textColor,
        padding:theme.spacing(2),
        display:"flex",
        alignItem:"center",
        justifyContent:"space-between"

    },
    title:{
        backgroundColor:theme.color.primary,
        color: theme.color.textColor,
        textTransform:'capitalize',
    },
    icon:{
        cursor:"pointer",
        fontSize :15,
    },
    select:{
        display: "flex",
        flexWap:"wrap"
    }

});

export default styles;