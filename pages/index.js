import * as React from "react";
import { Dropdown, Fabric, initializeIcons } from "office-ui-fabric-react";

initializeIcons()

const dropdownStyles = { root: { width: 200 } };
const dropdownObjects = [];
for (let i = 0; i < 100; i++) {
  dropdownObjects.push({ key: `object${i}`, text: `object${i}` });
}

const Index = () => (
  <Fabric>
    <div>
      <Dropdown styles={dropdownStyles} options={dropdownObjects} />
    </div>
  </Fabric>
);

export default Index;
