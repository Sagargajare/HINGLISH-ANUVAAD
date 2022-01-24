import axios from 'axios';
axios.withCredentials = true;

export const sentiText = async (text) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/sentiment/${text}`, {});

    return JSON.parse(res.data)["output"];
  } catch (err) {
    console.log(err);
    return 'neu';
  }
};


export const getTranslation = async (text) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/predict/${text}`,
      {}
    );

    return JSON.parse(res.data)["output"];
  } catch (err) {
    console.log(err);
    return "";
  }
};

export const reportForm = async (text) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/report`, {
      ...text
    });

    return JSON.parse(res.data)["output"];
  } catch (err) {
    console.log(err);
    return "";
  }
};