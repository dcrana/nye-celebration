import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./registrationForm.module.scss";
import {
  ADULTS_COUNT,
  ATTENDING,
  ATTENDING_OPTIONS,
  COUNT_OPTIONS,
  EMAIL,
  FIRST_NAME,
  KID_AGE_OPTIONS,
  KID_AGES,
  KIDS_COUNT,
  LAST_NAME,
  MESSAGE,
  PHONE_NUMBER,
  PROFILE_IMAGE,
} from "../../constants/formConstant";
import {
  formValidations,
  kidAgeValidation,
} from "../../validators/registrationValidator";
import { dataURI } from "../../helper/utils";
import { useAppDispatch } from "../../hook";
import { setUserData } from "../../redux/feature/registerUserSlice";
import { useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from "react";

type FormInputs = {
  [PROFILE_IMAGE]: FileList;
  [FIRST_NAME]: string;
  [LAST_NAME]: string;
  [EMAIL]: string;
  [PHONE_NUMBER]: string;
  [ATTENDING]: "Yes" | "Maybe" | "No";
  [ADULTS_COUNT]: string;
  [KIDS_COUNT]: string;
  [KID_AGES]: string[];
  [MESSAGE]: string;
};

type fileType = {
  name: string;
  data_uri: any;
};
const Registration: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<fileType>({
    name: "",
    data_uri: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const kidsCount = watch(KIDS_COUNT);

  const userPhotoField = watch(PROFILE_IMAGE);
  const fileName = userPhotoField?.[0];

  // convert to data uri
  useEffect(() => {
    const fileList: fileType = { name: "", data_uri: "" };
    const getDataURI = async (fileName: File) => {
      try {
        const result = await dataURI(fileName);
        fileList.data_uri = result;
        fileList.name = fileName.name;
        setProfileImage(fileList);
      } catch (error) {
        console.log({ error });
      }
    };
    if (fileName) {
      getDataURI(fileName);
    } else {
      setProfileImage({ name: "", data_uri: "" });
    }
  }, [fileName]);

  // onsubmit
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const payload = {
      ...data,
      id: `${data[FIRST_NAME].toLowerCase()}-${Date.now()}`,
      profileImage: profileImage,
    };
    dispatch(setUserData(payload));
    navigate("/registrants");
  };

  return (
    <div className={styles.registration}>
      <h1>Register for NYE 2024 Celebration</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor={PROFILE_IMAGE}>Profile Image</label>
          <input
            id={PROFILE_IMAGE}
            type="file"
            accept="image/jpeg,image/jpg,image/png"
            {...register(PROFILE_IMAGE, formValidations[PROFILE_IMAGE])}
          />
          {errors[PROFILE_IMAGE] && (
            <span className={styles.error}>
              {errors[PROFILE_IMAGE].message}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor={FIRST_NAME}>First Name</label>
          <input
            id={FIRST_NAME}
            type=""
            {...register(FIRST_NAME, formValidations[FIRST_NAME])}
          />
          {errors[FIRST_NAME] && (
            <span className={styles.error}>{errors[FIRST_NAME].message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor={LAST_NAME}>Last Name</label>
          <input
            id={LAST_NAME}
            {...register(LAST_NAME, formValidations[LAST_NAME])}
          />
          {errors[LAST_NAME] && (
            <span className={styles.error}>{errors[LAST_NAME].message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor={EMAIL}>Email</label>
          <input
            id={EMAIL}
            type="email"
            {...register(EMAIL, formValidations[EMAIL])}
          />
          {errors[EMAIL] && (
            <span className={styles.error}>{errors[EMAIL].message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor={PHONE_NUMBER}>Phone Number</label>
          <input
            id={PHONE_NUMBER}
            {...register(PHONE_NUMBER, formValidations[PHONE_NUMBER])}
          />
          {errors[PHONE_NUMBER] && (
            <span className={styles.error}>{errors[PHONE_NUMBER].message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Will you be attending the event?</label>
          <div className={styles.radioGroup}>
            {Object.values(ATTENDING_OPTIONS).map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  value={option}
                  {...register(ATTENDING, formValidations[ATTENDING])}
                />
                {option}
              </label>
            ))}
          </div>
          {errors[ATTENDING] && (
            <span className={styles.error}>{errors[ATTENDING].message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor={ADULTS_COUNT}>
            Besides you, how many adults are accompanying you?
          </label>
          <select
            id={ADULTS_COUNT}
            {...register(ADULTS_COUNT, formValidations[ADULTS_COUNT])}
          >
            {COUNT_OPTIONS.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          {errors[ADULTS_COUNT] && (
            <span className={styles.error}>{errors[ADULTS_COUNT].message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor={KIDS_COUNT}>
            How many kids are accompanying you?
          </label>
          <select
            id={KIDS_COUNT}
            {...register(KIDS_COUNT, formValidations[KIDS_COUNT])}
          >
            {COUNT_OPTIONS.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          {errors[KIDS_COUNT] && (
            <span className={styles.error}>{errors[KIDS_COUNT].message}</span>
          )}
        </div>

        {kidsCount && parseInt(kidsCount) > 0 && (
          <div className={styles.formGroup}>
            <label>Ages of Kids</label>
            {[...Array(parseInt(kidsCount))].map((_, index) => (
              <div key={index}>
                <label htmlFor={`kidAge${index + 1}`}>
                  Age of Kid {index + 1}
                </label>
                <select
                  id={`kidAge${index + 1}`}
                  {...register(`${KID_AGES}.${index}`, kidAgeValidation)}
                >
                  {KID_AGE_OPTIONS.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}

        <div className={styles.formGroup}>
          <label htmlFor={MESSAGE}>Send a message to the host (Optional)</label>
          <textarea id={MESSAGE} {...register(MESSAGE)} />
        </div>

        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
