import React from "react";
import { View, Text, TouchableOpacity,StyleSheet  } from "react-native";


// Define Props type
interface CommonButtonProps {
  type: "0" | "1"; // type can only be "0" or "1"
  height?: any;
  width?: any ;
  backgroundColor?: string;
  borderRadius?: number;
  onPress: () => void;
  leftIcon?: React.ElementType;
  RightIcon?: React.ElementType;
  textAlign?: "center" | "flex-start";
  textColor?: string;
  fontFamily?: string;
  textSize?: number;
  title: string;
}

const CommonButton= (props:CommonButtonProps) => {

  const renderButton = () => {
    try {
      return (
        <View style={styles.parentContainer}>
          <TouchableOpacity
            style={[
              styles.ButtonContainer,
              {
                height: props.height || (props.type === "0" ? "45%" : 45),
                width: props.width || "100%",
                backgroundColor:
                props.backgroundColor || (props.type === "0" ? "green" : "yellow"),
                borderRadius: props.borderRadius || (props.type === "0" ? 10 : 25),
              },
            ]}
            onPress={props.onPress}
          >
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.buttonText,
                  {
                    color: props.textColor || (props.type === "0" ? "red" : "blue"),
                    fontFamily: props.fontFamily || "Arial",
                    fontSize: props.textSize || (props.type === "0" ? 14 : 15),
                  },
                ]}
              >
                {props.title || (props.type === "0" ? "Button" : "Ok")}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } catch (error) {
      console.error("Error rendering button:", error);
    }
  };

  return renderButton();
};

const styles = StyleSheet.create({
  parentContainer: {
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },

  ButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  textContainer: {
    alignItems: "center",
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },

  buttonText: {
    fontWeight: "bold",
  },
});

export default CommonButton;

