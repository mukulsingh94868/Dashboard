import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    cardPointer: {
        width: 320, 
        maxWidth: '100%', 
        boxShadow: 'lg', 
        cursor: 'pointer'
    },
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
        width: 'auto',
        fontSize: '20px',
    },
    priceTag: {
        fontWeight: 500,
        fontSize: '22px',
    }
}))