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
    },
    productName: {
        fontWeight: 600,
        fontSize: "1.5rem",
        lineHeight: 1.33,
    },
    productDetails: {
        fontSize: "0.875rem",
        lineHeight: 1.57,
        fontWeight: 400,
        color: "rgb(140, 140, 140)",
        marginTop: '30px'
    },
    productDetailName: {
        fontSize: "0.875rem",
        lineHeight: 1.57,
        fontWeight: 700,
        color: "black"
    },
    varients: {
        display: 'flex',
        flexDirection: 'column',
    },
    colorQuality: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    colorName: {
        fontSize: "0.875rem",
        lineHeight: 1.57,
        fontFamily: '"Public Sans", sans-serif',
        fontWeight: 400,
        color: "rgb(140, 140, 140)"
    }
}))