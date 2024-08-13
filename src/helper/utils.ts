//Funtion for Create Base64
const getBase64 = (file: File) => {
  return new Promise((resolve) => {
    let baseURL: any = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      baseURL = reader.result;
      resolve(baseURL);
    };
  });
};

//Funtion for Create DataURI

export const dataURI = async (file: File) => {
  try {
    const result = await getBase64(file);
    return result;
  } catch (error) {
    console.log(error);
  }
};
