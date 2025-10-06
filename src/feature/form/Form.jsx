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
  userId: "",
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  nationalId: "",
  mobile: "",
  activityPeriod: "",
  organizationalLevel: "",
  status: "active",
  discription: "",
};
let formObject;
export default function Form() {
  const { isFormOpen, setIsFormOpen } = useContext(FormContext);
  const [selectedStatus, setSelectedStatus] = useState("active");
  const [state, dispatch] = useReducer(reducer, initialState);

  const formRefs = {
    password: useRef(null),
  };

  useEffect(function () {
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

  ///////////select the icon and add listener to it

  useEffect(
    function () {
      console.log("click");
      /////////change the type of the input
      function handleClick() {
        const input = formRefs.password.current.element;
        input.type = input.type === "password" ? "text" : "password";
      }

      if (!formRefs.password.current) return;

      const iconGroup = formRefs.password.current.element.parentElement;
      const icon = iconGroup.querySelector(".my-custom-icon");

      if (!icon) return;

      icon.addEventListener("click", handleClick);

      ///////clear event listener on each mount
      return () => icon.removeEventListener("click", handleClick);
    },
    [formRefs.password.current]
  );

  function reducer(state, action) {
    switch (action.type) {
      case "update":
        return { ...state, [action.field]: action.value };

      case "reset":
        return { ...initialState };
      default:
        return state;
    }
  }

  const update = (field) => (event) => {
    dispatch({ type: "update", field, value: event.value });
  };

  const handleCancel = function () {
    dispatch({ type: "reset" });
    formObject.element.reset();
    setIsFormOpen(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (formObject && formObject.validate()) {
      console.log("Form is valid!");
      // Submit logic here
      setIsFormOpen(false);
      formObject.element.reset();
    } else if (!formObject) {
      console.error("Form validator not initialized");
    }
  };

  function oncreate() {
    formRefs.password.current.addIcon("append", "my-custom-icon");
  }

  return (
    <>
      <div className={`form_wrapper ${isFormOpen ? "form-active" : ""} `}>
        <h1>کاربر جدید</h1>
        <form id="userForm" className="input_wrapper">
          <TextBoxComponent
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
            ref={formRefs.password}
            className="password"
            cssClass="e-outline"
            placeholder="پسورد اولیه تصادفی"
            floatLabelType="Auto"
            type="password"
            change={update("password")}
            value={state.password}
            created={oncreate}
          />
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
            name="organizationalLevel"
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
            <ButtonComponent cssClass="e-outline" onClick={handleCancel}>
              انصراف
            </ButtonComponent>
          </div>
        </form>
      </div>
      {isFormOpen && <div className="overlay"></div>}
    </>
  );
}
