import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import "./MainContentHeader.css";
import { useContext } from "react";
import { FormContext } from "./contextAPI/FormContext";

export default function MainContentHeader() {
  const { isFormOpen, setIsFormOpen } = useContext(FormContext);

  function handleToggleForm() {
    setIsFormOpen(!isFormOpen);
  }

  return (
    <div className="main_content--Header">
      <div className="text_wrapper">
        <h1 className="active">کاربران و دسترسی ها</h1>
        <h1>نقش ها</h1>
      </div>
      <hr className="divider" />
      <div>
        <h1 className="main_content--title">کاربران و دسترسی ها</h1>
        <div className="sereach_add--wrapper">
          <div className="serach-wrapper">
            <input className="search-input" placeholder="جستجو" />
            <img
              className="search-icon"
              alt="search icon"
              src="icons/header/Search-Disable.svg"
            ></img>
          </div>

          <ButtonComponent cssClass="e-custom" onClick={handleToggleForm}>
            <img
              className="search-icon"
              alt="search icon"
              src="icons/header/Add-Plus-White.svg"
            ></img>
            کاربر جدید
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
}
