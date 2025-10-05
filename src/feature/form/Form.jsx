import { useContext, useState } from "react";
import "./Form.css";
import { FormContext } from "../contextAPI/FormContext";
import {
  TextAreaComponent,
  TextBoxComponent,
} from "@syncfusion/ej2-react-inputs";
import { DropDownTreeComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  ButtonComponent,
  CheckBoxComponent,
  RadioButtonComponent,
} from "@syncfusion/ej2-react-buttons";

const position = [
  {
    id: 1,
    name: "شستا",
    expanded: true,
    child: [
      { id: 2, pid: 1, name: "بیمه" },
      { id: 3, pid: 1, name: "تست" },
      { id: 4, pid: 1, name: "Japan" },
    ],
  },
  {
    id: 5,
    name: "گاز",
    expanded: false,
  },
];
const fields = {
  dataSource: position,
  value: "id",
  text: "name",
  child: "child",
  parentValue: "pid",
};

export default function Form() {
  const { isFormOpen } = useContext(FormContext);
  const [selectedStatus, setSelectedStatus] = useState("active");

  return (
    <>
      <div className={`form_wrapper ${isFormOpen ? "form-active" : ""} `}>
        <h1>کاربر جدید</h1>
        <form className="input_wrapper">
          <TextBoxComponent
            placeholder="شناسه کاربری "
            floatLabelType="Auto"
            cssClass="e-outline"
          />
          <TextBoxComponent
            className="password"
            cssClass="e-outline"
            placeholder="پسورد اولیه تصادفی"
            floatLabelType="Auto"
          />
          <span className="icon-wrapper">
            <img
              src="icons/form/Eye-Disable.svg"
              alt="Calendar"
              className="custom-icon"
              floatLabelType="Auto"
              cssClass="e-outline"
            />
          </span>
          <TextBoxComponent
            placeholder="نام *"
            floatLabelType="Auto"
            cssClass="e-outline"
          />
          <TextBoxComponent
            placeholder="نام خانوادگی *"
            floatLabelType="Auto"
            cssClass="e-outline"
          />
          <TextBoxComponent
            placeholder=" کد ملی *"
            floatLabelType="Auto"
            cssClass="e-outline"
          />
          <TextBoxComponent
            placeholder=" شماره موبایل *"
            floatLabelType="Auto"
            cssClass="e-outline"
          />
          <TextBoxComponent
            placeholder="آدرس ایمیل *"
            floatLabelType="Auto"
            cssClass="e-outline"
          />
          <DropDownTreeComponent
            id="dropdowntree"
            fields={fields}
            placeholder="سطح سازمانی *"
            popupHeight="220px"
            floatLabelType="Auto"
            cssClass="e-outline"
          />
          <h5 className="checkbox_Title">وضعیت: *</h5>
          <div className="checkbox_wrapper">
            <RadioButtonComponent
              label="فعال"
              name="status"
              value="active"
              checked={selectedStatus === "active"}
              change={() => setSelectedStatus("active")}
            />
            <RadioButtonComponent
              label="غیرفعال"
              name="status"
              value="inactive"
              checked={selectedStatus === "inactive"}
              change={() => setSelectedStatus("inactive")}
            />
          </div>

          <TextBoxComponent
            placeholder="بازه فعالیت کاربر *"
            floatLabelType="Auto"
            cssClass="e-outline"
          />
          <TextAreaComponent
            id="rating"
            placeholder="توضیحات"
            floatLabelType="Auto"
            width="498px"
            cssClass="e-outline"
          />
          <div className="btn_wrapper">
            <ButtonComponent type="submit" cssClass="e-custom ">
              ذخیره
            </ButtonComponent>
            <ButtonComponent cssClass="e-outline"> انصراف</ButtonComponent>
          </div>
        </form>
      </div>
      {isFormOpen && <div className="overlay"></div>}
    </>
  );
}
