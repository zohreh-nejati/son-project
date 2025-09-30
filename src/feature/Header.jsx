import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

const Header = () => {
  return (
    <div className="control-container">
      <AppBarComponent colorMode="Primary">
        <ButtonComponent
          cssClass="e-inherit"
          iconCss="e-icons e-menu"
        ></ButtonComponent>
        <span className="prominent">AppBar Component with Prominent mode</span>
        <div className="e-appbar-spacer"></div>
        <ButtonComponent cssClass="e-inherit">FREE TRIAL</ButtonComponent>
      </AppBarComponent>
    </div>
  );
};

export default Header;
