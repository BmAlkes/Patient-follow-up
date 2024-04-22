import { usePatientStore } from "../store/store";
import PatientDetails from "./PatientDetails";

const PatientsList = () => {
  const { patients } = usePatientStore();

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
      {patients.length ? (
        <>
          <p className="font-black text-3xl text-center">List of patients</p>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your{" "}
            <span className="text-indigo-600 font-bold">
              Patients and Appointments
            </span>
          </p>
          {patients.map((patient) => (
            <PatientDetails key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            Dont have any patients
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            {" "}
            Start adding patients
            <span className="text-indigo-600 font-bold">
              and they will appear in this place
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientsList;
