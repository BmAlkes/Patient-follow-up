import { useForm } from "react-hook-form";
import Erros from "./Erros";
import { DraftPatient } from "../@types";
import { usePatientStore } from "../store/store";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function PatientForm() {
  const { addPatient, activeId, patients, updatedPatient } = usePatientStore();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    setValue,
  } = useForm<DraftPatient>();

  const registerPatient = (data: DraftPatient) => {
    if (activeId) {
      updatedPatient(data);
      toast.success("Patient Updated");
    } else {
      addPatient(data);
      toast.success("Register Patient");
    }
    reset();
  };
  useEffect(() => {
    if (activeId) {
      const activePatient = patients.filter(
        (patient) => patient.id === activeId
      )[0];
      setValue("name", activePatient.name);
      setValue("caretaker", activePatient.caretaker);
      setValue("date", activePatient.date);
      setValue("email", activePatient.email);
      setValue("symptoms", activePatient.symptoms);
    }
  }, [activeId]);
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patient follow-up</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and{" "}
        <span className="text-indigo-600 font-bold">Manage them</span>
      </p>

      <form
        className="bg-white shadow-2xl shadow-slate-700 rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Patients
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Name of the patient"
            {...register("name", {
              required: " Patient Name is required",
            })}
          />
          {errors.name && <Erros>{errors.name?.message?.toString()}</Erros>}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Owner
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Name of the owner"
            {...register("caretaker", {
              required: "The owner name is required",
            })}
          />
          {errors.caretaker && <Erros>{errors.caretaker?.message}</Erros>}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email of Register"
            {...register("email", {
              required: "The email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email not Valid",
              },
            })}
          />
          {errors.email && <Erros>{errors.email?.message}</Erros>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            High Date
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("date", {
              required: "date is required",
            })}
          />
          {errors.date && <Erros>{errors.date?.message}</Erros>}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Síntomas del paciente"
            {...register("symptoms", {
              required: "symptoms is required",
            })}
          ></textarea>
          {errors.symptoms && <Erros>{errors.symptoms?.message}</Erros>}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Guardar Paciente"
        />
      </form>
    </div>
  );
}
