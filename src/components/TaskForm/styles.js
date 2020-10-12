

const styles = (theme) => ({
    modal:{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: 'absolute',
        width: '500px',
        border: '2px solid #fff',
        backgroundColor: '#ffffff',
        // padding: theme.spacing(2),
    },
    TextField:{
        width:'100%',
    },
    header:{
        backgroundColor: theme.color.primary,
        color: theme.color.textColor,
        padding:theme.spacing(2),

    }

});

export default styles;