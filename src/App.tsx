import PatientForm from "./components/PatientForm";
import PatientsList from "./components/PatientsList";

function App() {
  return (
    <div className="bg-slate-200">
      <div className="container mx-auto py-20 ">
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
          <span className="text-indigo-700">Veterinary</span> patient monitoring
        </h1>
        <div className="mt-12 md:flex">
          <PatientForm />
          <PatientsList />
        </div>
      </div>
    </div>
  );
}

export default App;
