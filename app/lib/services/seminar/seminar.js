import { api } from "@/app/lib/middleware/apiInceptor";
import { SEMINAR } from "..";
import { toast } from "react-toastify";
import { handleError } from "@/app/lib/helpers/handleErrors";
import { isEmpty } from "lodash";

export const addSeminar = async (payload) => {
  const res = await api.post(SEMINAR, payload);
  if (res) {
    return res;
  }
};

export const getAllSeminar = async () => {
    try {
      const res = await api.get(SEMINAR);
      return res.data.payload.data;
    } catch (error) {
      handleError(error);
    }
  };
  

export const updateSeminar = async (payload) => {
  try {
    delete payload.Roles;
    const res = await api.put(`${SEMINAR}/${payload.uuid}`, payload);
    toast.success(res.data.message);
    return res.data.payload;
  } catch (err) {
    console.log("error");
  }
};

export const deleteSeminar = async (uuid) => {
  try {
    const res = await api.delete(`${SEMINAR}/${uuid}`);
    toast.success(res.data.message);
  } catch (err) {
    // handleError(error);
    console.log("error");
  }
};

export const getSeminarDetails = async (uuid) => {
  try {
    const res = await api.get(`${SEMINAR}/${uuid}`);
    return res.data.payload;
  } catch (error) {
    handleError(error);
  }
};
