import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    selectPart: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px'
    },
    selectTypo: {
        fontWeight: 700,
        fontSize: '15px',
    },
    selectControl: {
        padding: '8px 15px',
        borderRadius: '4px',
        width: '185px',
        fontSize: '20px',
    }
}))