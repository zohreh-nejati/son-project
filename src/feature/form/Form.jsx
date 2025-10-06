import { useContext, useEffect, useReducer, useRef, useState } from "react";
import "./Form.css";
import { FormContext } from "../contextAPI/FormContext";
import {
  FormValidator,
  TextAreaComponent,
  TextBoxComponent,
} from "@syncfusion/ej2-react-inputs";
import { DropDownTreeComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  ButtonComponent,
  RadioButtonComponent,
} from "@syncfusion/ej2-react-buttons";
// import { valueAccessor } from "@syncfusion/ej2-react-grids";

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
const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  nationalId: "",
  mobile: "",
  activityPeriod: "",
};
let formObject;

export default function Form() {
  const { isFormOpen } = useContext(FormContext);
  const [selectedStatus, setSelectedStatus] = useState("active");
  const [state, dispatch] = useReducer(reducer, initialState);
  const userId = useRef(null);

  const testRegex = /^09[0-9۰-۹]{9}$/;
  console.log(testRegex.test("09015405881"));
  console.log(testRegex.test("۰۹۰۱۵۴۰۵۸۸۱"));

  useEffect(function () {
    userId.current.focusIn();
    const options = {
      rules: {
        userId: {
          required: [true, "*شناسه کاربری الزامی است"],
        },
        email: {
          required: [true, "*آدرس ایمیل الزامی است"],
          regex: [
            "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
            " آدرس ایمیل معتبر نیست",
          ],
        },
        password: {
          required: [true, "* رمز کاربری الزامی است"],
        },
        firstName: {
          required: [true, "* نام الزامی است"],
        },
        lastName: {
          required: [true, "* نام خانوادگی الزامی است"],
        },
        nationalId: {
          required: [true, "* کدملی الزامی است"],
          regex: ["^[0-9]{10}$", " کدملی معتبر نیست"],
        },
        mobile: {
          required: [true, "* شماره تماس الزامی است"],
          regex: ["^09[0-9۰-۹]{9}$", "شماره تماس معتبر نیست"],
        },
        activityPeriod: {
          required: [true, "*بازه فعالیت الزامی است"],
        },
      },
    };
    formObject = new FormValidator("#userForm", options);
  }, []);

  function reducer(state, action) {
    switch (action.type) {
      case "update":
        return { ...state, [action.field]: action.value };
      default:
        return initialState;
    }
  }

  const update = (field) => (event) => {
    dispatch({ type: "update", field, value: event.value });
  };

  const onSubmit = () => {
    formObject.validate();
    if (formObject.validate()) {
      formObject.element.reset();
    }
  };

  return (
    <>
      <div className={`form_wrapper ${isFormOpen ? "form-active" : ""} `}>
        <h1>کاربر جدید</h1>
        <form id="userForm" className="input_wrapper">
          <TextBoxComponent
            ref={userId}
            id="userId"
            name="userId"
            placeholder="شناسه کاربری "
            floatLabelType="Auto"
            cssClass="e-outline"
            type="text"
            change={update("userId")}
            value={state.userId}
          />

          <TextBoxComponent
            id="password"
            name="password"
            className="password"
            cssClass="e-outline"
            placeholder="پسورد اولیه تصادفی"
            floatLabelType="Auto"
            type="password"
            change={update("password")}
            value={state.password}
          />
          <span className="icon-wrapper">
            <img
              src="icons/form/Eye-Disable.svg"
              alt="Calendar"
              className="custom-icon"
            />
          </span>
          <TextBoxComponent
            id="firstName"
            name="firstName"
            placeholder="نام *"
            floatLabelType="Auto"
            cssClass="e-outline"
            change={update("firstName")}
            value={state.firstName}
          />
          <TextBoxComponent
            id="lastName"
            name="lastName"
            placeholder="نام خانوادگی *"
            floatLabelType="Auto"
            cssClass="e-outline"
            change={update("lastName")}
            value={state.lastName}
          />
          <TextBoxComponent
            id="nationalId"
            name="nationalId"
            placeholder=" کد ملی *"
            floatLabelType="Auto"
            cssClass="e-outline"
            change={update("nationalId")}
            value={state.nationalId}
          />
          <TextBoxComponent
            id="mobile"
            name="mobile"
            placeholder=" شماره موبایل *"
            floatLabelType="Auto"
            cssClass="e-outline"
            change={update("mobile")}
            value={state.mobile}
          />
          <TextBoxComponent
            id="email"
            name="email"
            placeholder="آدرس ایمیل *"
            floatLabelType="Auto"
            cssClass="e-outline"
            change={update("email")}
            value={state.email}
          />
          <DropDownTreeComponent
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
            id="activityPeriod"
            name="activityPeriod"
            placeholder="بازه فعالیت کاربر *"
            floatLabelType="Auto"
            cssClass="e-outline"
            change={update("activityPeriod")}
            value={state.activityPeriod}
          />
          <TextAreaComponent
            id="discription"
            name="discription"
            placeholder="توضیحات"
            floatLabelType="Auto"
            width="498px"
            cssClass="e-outline"
            change={update("discription")}
          />
          <div className="btn_wrapper">
            <ButtonComponent
              type="submit"
              cssClass="e-custom"
              onClick={onSubmit}
            >
              ذخیره
            </ButtonComponent>
            <ButtonComponent cssClass="e-outline">انصراف</ButtonComponent>
          </div>
        </form>
      </div>
      {isFormOpen && <div className="overlay"></div>}
    </>
  );
}
