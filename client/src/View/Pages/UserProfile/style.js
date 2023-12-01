import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    mainBox: {
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(38, 38, 38)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        overflow: "hidden",
        position: "relative",
        border: "1px solid rgb(230, 235, 241)",
        borderRadius: "4px",
        boxShadow: "inherit",
        padding: '20px'
    },
    cardHeader: {
        display: "flex",
        alignItems: "center",
        padding: "5px"
    },
    cardContent: {
        margin: "0px",
        fontSize: "0.875rem",
        fontWeight: 600,
        lineHeight: 1.57,
        display: "block"
    },
    formLabel: {
        fontSize: "0.875rem",
        lineHeight: "1.4375em",
        fontWeight: 400,
        padding: "0px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: "rgb(89, 89, 89)"
    },
    formControl: {
        paddingTop: '12px',
        paddingBottom: '12px',
    },
    instructionDiv: {
        marginTop: '35px',
    },
    instructions: {
        display: 'flex',
        gap: '15px'
    },
    dataTypo: {
        margin: "0px",
        fontSize: "0.875rem",
        lineHeight: 1.57,
        fontFamily: '"Public Sans", sans-serif',
        fontWeight: 400,
        display: "block"
    },
    dividerInstructions: {
        marginTop: '10px',
        marginBottom: '10px',
    },
    newPass: {
        marginBottom: "20px",
        fontWeight: 600,
        fontSize: "1rem",
        lineHeight: 1.5,
        marginLeft: '-15px'
    },
    stackMatter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start'
    },
    cancelButton: {
        background: '#cc5b5bdb',
        fontSize: '12px',
    },
    changeButton: {
        background: '#0b6bcb',
        fontSize: '12px',
    },
    input: {
        width: '100%',
        padding: '8.5px 14px 10.5px 12px',
        background: 'none',
        '& .MuiInput-input': {
            fontSize: '14px',
        }
    },
    profileSide: {
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(38, 38, 38)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        overflow: "hidden",
        position: "relative",
        border: "1px solid rgb(230, 235, 241)",
        borderRadius: "4px",
        boxShadow: "inherit"
    },
    card: {
        padding: '20px'
    },
    profileDivider: {
        margin: "0px",
        borderWidth: "0px 0px thin",
        borderStyle: "solid",
        borderColor: "rgb(240, 240, 240)"
    },
    firstGrid: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    underFirstGrid: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        overflow: "hidden",
        userSelect: "none",
        fontSize: "1.5rem",
        width: "64px",
        height: "64px",
        color: "rgb(22, 119, 255)",
        backgroundColor: "rgb(230, 244, 255)"
    },
    underSecondGrid: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatarImage: {
        width: "100%",
        height: "100%",
        textAlign: "center",
        objectFit: "cover",
        textIndent: "10000px"
    },
    name: {
        fontWeight: 600,
        fontSize: "1rem",
        lineHeight: 1.5,
        textTransform: 'capitalize',
    },
    deignation: {
        fontSize: "0.875rem",
        lineHeight: 1.57,
        fontFamily: '"Public Sans", sans-serif',
        fontWeight: 400,
        color: "rgb(140, 140, 140)"
    },
    dividerVertical: {
        margin: "0px",
        flexShrink: 0,
        borderWidth: "0px thin 0px 0px",
        borderStyle: "solid",
        borderColor: "rgb(240, 240, 240)",
        height: "auto",
        alignSelf: "stretch"
    },
    secondGrid: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    underGrid: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    typo1: {
        fontWeight: 600,
        fontSize: "1rem",
        lineHeight: 1.5,
        fontFamily: '"Public Sans", sans-serif'
    },
    typo2: {
        fontSize: "0.875rem",
        lineHeight: 1.57,
        fontFamily: '"Public Sans", sans-serif',
        fontWeight: 400,
        color: "rgb(140, 140, 140)"
    },
    nav: {
        listStyle: "none",
        margin: "0px",
        padding: "0px",
        position: "relative"
    },
    list: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px'
    },
    listText: {
        margin: "0px",
        fontSize: "0.875rem",
        lineHeight: 1.57,
        fontFamily: '"Public Sans", sans-serif',
        fontWeight: 400,
        textAlign: "right"
    },
    listIcon: {
        margin: "0px",
        textAlign: "right",
    },
    aboutSection: {
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(38, 38, 38)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        overflow: "hidden",
        position: "relative",
        border: "1px solid rgb(230, 235, 241)",
        borderRadius: "4px",
        boxShadow: "inherit"
    },
    cardTop: {
        display: "flex",
        alignItems: "center",
        padding: "20px"
    },
    cardBottom: {
        padding: "20px"
    },
    aboutMe: {
        margin: "0px",
        fontSize: "0.875rem",
        fontWeight: 600,
        lineHeight: 1.57,
        fontFamily: '"Public Sans", sans-serif',
        display: "block"
    },
    aboutData: {
        margin: "0px",
        fontSize: "0.875rem",
        lineHeight: 1.57,
        fontFamily: '"Public Sans", sans-serif',
        fontWeight: 400,
        color: "rgb(140, 140, 140)"
    },
    formData: {
        width: "100%",
        display: "flex",
        padding: "8px 16px",
        boxSizing: "border-box",
        marginBottom: "20px",
        marginTop: "28px",
        marginLeft: "10px"
    },
    gridClass: {
        boxSizing: "border-box",
        display: "flex",
        flexFlow: "wrap",
        marginTop: "-24px",
        width: "calc(100% + 24px)",
        marginLeft: "-24px"
    },
    gridWidth: {
        width: '50%'
    },
    label: {
        fontSize: "0.875rem",
        lineHeight: 1.57,
        fontFamily: '"Public Sans", sans-serif',
        fontWeight: 400,
        color: "rgb(140, 140, 140)"
    },
    labelName: {
        fontSize: "0.875rem",
        lineHeight: 1.57,
        fontFamily: '"Public Sans", sans-serif',
        fontWeight: 400
    },
    techItem: {
        fontSize: "14px",
        lineHeight: 1.57,
        fontWeight: 400
    },
    linearProgress: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '50%'
    },
    progress: {
        width: '50%',
        marginTop: '10px'
    },
    skills: {
        fontWeight: 600,
        fontSize: '20px',
        marginBottom: '10px',
    },
    mainName: {
        fontSize: '16px',
        fontWeight: 700,
        color: 'black',
        textTransform: 'capitalize'
    }
}))