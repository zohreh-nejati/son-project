import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

const Header = () => {
  return (
    <div className="control-container">
      <AppBarComponent className="appBar">
        <div className="e-appbar-spacer"></div>
        <ButtonComponent cssClass="e-inherit">
          <img src="/header-logo/Duties-Dark.svg" alt="logo icon"></img>
        </ButtonComponent>
        <ButtonComponent cssClass="e-inherit">
          <img src="/header-logo/Notifications-Dark.svg" alt="logo icon"></img>
        </ButtonComponent>
        <ButtonComponent cssClass="e-inherit">
          <img src="/header-logo/User-Account-Dark.svg" alt="logo icon"></img>
        </ButtonComponent>
      </AppBarComponent>
    </div>
  );
};

export default Header;
