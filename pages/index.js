import * as React from "react";
import {
  Checkbox,
  ColorPicker,
  createTheme,
  Customizer,
  Dropdown,
  Fabric,
  initializeIcons,
  PrimaryButton,
  Slider,
  TextField,
  Toggle,
  IDropdownStyles,
} from "office-ui-fabric-react";

initializeIcons();

// Go to aka.ms/themedesigner for more control over theme.
const theme = createTheme({
  palette: {
    themePrimary: "red",
  },
});

const dropdownStyles = { root: { width: 200 } };

const dropdownObjects = [];

for (let i = 0; i < 100; i++) {
  dropdownObjects.push({ key: `object${i}`, text: `object${i}` });
}

const Index = () => (
  <Customizer settings={{ theme }}>
    <Fabric applyTheme>
      <div>
        <Dropdown styles={dropdownStyles} options={dropdownObjects} />
      </div>
    </Fabric>
  </Customizer>
);

export default Index;
