import { CONTACT_SUBMIT, GET_ALL_CONTACT } from "../Constants/actionTypes";
import * as Api from '../../Network/Api';
import toast from "react-hot-toast";

export const getContactListData = () => async (dispatch) => {
    try {
        const { data } = await Api.getContactList();
        dispatch({ type: GET_ALL_CONTACT, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const submitContact = (contact) => async (dispatch) => {
    try {
        const { data } = await Api.addContact(contact);
        dispatch({ type: CONTACT_SUBMIT, payload: data });
        toast.success(data?.message, {
            duration: 3000,
            position: 'top-right'
        });
    } catch (error) {
        console.log(error);
    }
};