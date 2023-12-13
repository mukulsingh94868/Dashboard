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
        marginTop: '30px'
    },
    colorQuality: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: '20px'
    },
    colorName: {
        fontSize: "0.875rem",
        lineHeight: 1.57,
        fontFamily: '"Public Sans", sans-serif',
        fontWeight: 400,
        color: "rgb(140, 140, 140)"
    },
    cartButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "32px"
    },
    buyNow: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        outline: "0px",
        border: "0px",
        margin: "0px",
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        appearance: "none",
        textDecoration: "none",
        textTransform: "capitalize",
        fontFamily: '"Public Sans", sans-serif',
        fontSize: "0.9375rem",
        lineHeight: 1.75,
        minWidth: "64px",
        padding: "8px 22px",
        borderRadius: "4px",
        transition:
            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        color: "rgb(255, 255, 255)",
        backgroundColor: "rgb(22, 119, 255)",
        width: "100%",
        boxShadow: "none",
        fontWeight: 400
    },
    addToCart: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: "0px",
        margin: "0px",
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        appearance: "none",
        textDecoration: "none",
        textTransform: "capitalize",
        fontFamily: '"Public Sans", sans-serif',
        fontSize: "0.9375rem",
        lineHeight: 1.75,
        minWidth: "64px",
        padding: "7px 21px",
        borderRadius: "4px",
        transition:
            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        border: "1px solid rgb(140, 140, 140)",
        color: "rgb(140, 140, 140)",
        width: "100%",
        boxShadow: "none",
        fontWeight: 400,
        marginLeft: '16px'
    },
    colorName2: {
        fontWeight: 600,
        fontSize: "18px",
        marginLeft: "10px"
    },
    varientQuantity: {
        fontWeight: 400,
        fontSize: "18px",
    },
    minusPlus: {
        border: "1px solid black",
        padding: "4px 12px",
        marginLeft: "20px",
        borderRadius: "8px",
        display: "flex",
        background: "#d0cfcf4a"
    },
    addIcon: {
        fontSize: '26px'
    },
    productQuantity: {
        fontWeight: 700,
        fontSize: '20px'
    },
    removeIcon: {
        fontSize: '26px'
    },
    price: {
        fontWeight: 500,
        fontSize: '18px'
    },
    salePrice: {
        fontWeight: 600,
        fontSize: '26px',
        marginLeft: '20px'
    },
    features: {
        fontWeight: 700,
        fontSize: '18px'
    },
    featuresData: {
        fontWeight: 500,
        fontSize: '18px',
        marginLeft: '10px'
    },
    feature: {
        fontWeight: 700,
        fontSize: '24px',
        marginBottom: '10px'
    },
    specification: {
        fontWeight: 700,
        fontSize: '24px'
    },
    featDiv: {
        marginTop: '20px'
    },
    dividerScale: {
        marginTop: '20px',
        marginBottom: '20px'
    },
    deleteIcon: {
        color: 'red',
        margin: '5px',
        cursor: 'pointer',
        marginTop: '20px'
    },
    cartContainer: {
        
    },
    myCart: {
        fontSize: '40px',
        fontWeight: 700,
        marginBottom: '50px',
        textAlign: 'center'
    }
}))