const styles = (theme) => ({
    modal:{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: 'absolute',
        width: '500px',
        backgroundColor: '#ffffff',
        outline:"none"
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
        fontSize :30,
    }

});

export default styles;