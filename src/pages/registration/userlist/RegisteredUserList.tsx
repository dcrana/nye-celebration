import { FC } from "react";
import styles from "./registeredUserList.module.scss";
import { useAppSelector } from "../../../hook";
import { IRegistrant } from "../../../redux/feature/registerUserSlice";

const RegisteredUserList: FC = () => {
  const { userData } = useAppSelector((state) => state.registration);
  return (
    <div className={styles.registrantList}>
      {userData.length > 0 ? (
        userData.map((registrant: IRegistrant) => (
          <div key={registrant.id} className={styles.registrant}>
            <img
              src={registrant.profileImage.data_uri}
              alt={`${registrant.firstName} ${registrant.lastName}`}
            />
            <h3>
              {registrant.firstName} {registrant.lastName}
            </h3>
            <p>Email: {registrant.email}</p>
            <p>Phone: {registrant.phoneNumber}</p>
            <p>Attending: {registrant.attending ? "Yes" : "No"}</p>
            <p>Adults: {registrant.adultsCount}</p>
            <p>Kids: {registrant.kidsCount}</p>
            {registrant.kidAges &&
              registrant.kidAges.map((age: number, i: number) => (
                <p key={i}>
                  Kid {i + 1} Age: {age}
                </p>
              ))}
            {registrant.message && <p>Message: {registrant.message}</p>}
          </div>
        ))
      ) : (
        <div className={styles.noRecordsFound}>No Users Found</div>
      )}
    </div>
  );
};

export default RegisteredUserList;
