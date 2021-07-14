import { requireNativeComponent, NativeModules, View, Platform } from "react-native";

let CustomComponent = View;

if ("PinchableView" in NativeModules.UIManager && Platform.OS=='android') {
   CustomComponent = requireNativeComponent("PinchableView")
}
export default CustomComponent;
