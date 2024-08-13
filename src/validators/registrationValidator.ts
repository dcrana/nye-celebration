import {
  ADULTS_COUNT,
  ATTENDING,
  EMAIL,
  FIRST_NAME,
  KIDS_COUNT,
  LAST_NAME,
  PHONE_NUMBER,
  PROFILE_IMAGE,
} from "../constants/formConstant";

export const formValidations = {
  [PROFILE_IMAGE]: {
    required: "Profile image is required",
    validate: {
      fileFormat: (files: FileList) => {
        const acceptedFormats = ["image/jpeg", "image/jpg", "image/png"];
        return (
          (files[0] && acceptedFormats.includes(files[0].type)) ||
          "Only JPG, JPEG and PNG files are allowed"
        );
      },
      fileSize: (file: FileList) => {
        return (
          file[0].size <= 2 * 1024 * 1024 || "File size should less than 2 MB"
        );
      },
    },
  },
  [FIRST_NAME]: {
    required: "First name is required",
  },
  [LAST_NAME]: {
    required: "Last name is required",
  },
  [EMAIL]: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  [PHONE_NUMBER]: {
    required: "Phone number is required",
    pattern: {
      value: /^\+?[1-9]\d{1,14}$/,
      message: "Invalid phone number",
    },
  },
  [ATTENDING]: {
    required: "Please select an option",
  },
  [ADULTS_COUNT]: {
    required: "Please select a number",
  },
  [KIDS_COUNT]: {
    required: "Please select a number",
  },
};

export const kidAgeValidation = {
  required: "Please select an age",
};
