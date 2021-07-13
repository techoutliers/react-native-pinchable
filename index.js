import { requireNativeComponent, NativeModules, View } from "react-native";

let CustomComponent = View;

if ("PinchableView" in NativeModules.UIManager) {
   CustomComponent = requireNativeComponent("PinchableView")
}
export default CustomComponent;
