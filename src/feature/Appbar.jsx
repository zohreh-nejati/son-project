import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

const Appbar = () => {
  return (
    <div className="control-container">
      <AppBarComponent className="appBar">
        <div className="e-appbar-spacer"></div>
        <ButtonComponent cssClass="e-inherit">
          <img src="/icons/header/Duties-Dark.svg" alt="logo icon"></img>
        </ButtonComponent>
        <ButtonComponent cssClass="e-inherit">
          <img src="/icons/header/Notifications-Dark.svg" alt="logo icon"></img>
        </ButtonComponent>
        <ButtonComponent cssClass="e-inherit">
          <img src="/icons/header/User-Account-Dark.svg" alt="logo icon"></img>
        </ButtonComponent>
      </AppBarComponent>
    </div>
  );
};

export default Appbar;
