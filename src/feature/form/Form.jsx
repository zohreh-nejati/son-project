import { useContext } from "react";
import "./Form.css";
import { FormContext } from "../contextAPI/FormContext";

export default function Form() {
  const { isFormOpen } = useContext(FormContext);
  if (!isFormOpen) return "";
  return (
    <>
      <div className="form_wrapper">
        <p>Form</p>
      </div>
      <div className="overlay"></div>
    </>
  );
}
