import { toast } from "react-toastify";
import { Patient } from "../@types";
import { usePatientStore } from "../store/store";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailProps = {
  patient: Patient;
};

const PatientDetails = ({ patient }: PatientDetailProps) => {
  const { deletePatient, getPatientById } = usePatientStore();
  const handleClick = () => {
    deletePatient(patient.id);
    toast.error("Deleted Patient");
  };
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Name" data={patient.name} />
      <PatientDetailItem label="CareTaker" data={patient.caretaker} />
      <PatientDetailItem label="email" data={patient.email} />
      <PatientDetailItem label="date" data={patient.date.toString()} />
      <PatientDetailItem label="Symptoms" data={patient.symptoms} />
      <div className="flex justify-between">
        <button
          className="py-2 px-10 bg-indigo-700 text-white rounded-lg font-bold "
          type="button"
          onClick={() => getPatientById(patient.id)}
        >
          Edit
        </button>
        <button
          className="py-2 px-10 bg-red-600 text-white rounded-lg font-bold "
          type="button"
          onClick={handleClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
