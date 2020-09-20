import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

function PhoneInput(props) {
  const [text, setText] = useState("");
  console.log(props.num);
  return (
    <TextInput
      name="phone"
      maxLength={13}
      style={{ fontSize: 20, color: "white" }}
      keyboardType="numeric"
      defaultValue={props.num}
      onChangeText={(text) => setText(unformatPhone(text))}
      value={formatPhone(text)}
      selection={{ start: getPos(text.length), end: getPos(text.length) }}
    />
  );
}

const getPos = (tLength) => {
  let pos;
  switch (tLength) {
    case 0:
      pos = 1;
      break;
    case 1:
      pos = 2;
      break;
    case 2:
      pos = 3;
      break;
    case 3:
      pos = 4;
      break;
    case 4:
      pos = 6;
      break;
    case 5:
      pos = 7;
      break;
    case 6:
      pos = 8;
      break;
    case 7:
      pos = 10;
      break;
    case 8:
      pos = 11;
      break;
    case 9:
      pos = 12;
      break;
    case 10:
      pos = 13;
      break;
  }
  return pos;
};

const unformatPhone = (i) => {
  let txt = i;
  let output = "";
  //only numbers allowed
  for (let i = 0; i < txt.length; i++) {
    if (
      txt.substring(i, i + 1) == "1" ||
      txt.substring(i, i + 1) == "2" ||
      txt.substring(i, i + 1) == "3" ||
      txt.substring(i, i + 1) == "4" ||
      txt.substring(i, i + 1) == "5" ||
      txt.substring(i, i + 1) == "6" ||
      txt.substring(i, i + 1) == "7" ||
      txt.substring(i, i + 1) == "8" ||
      txt.substring(i, i + 1) == "9" ||
      txt.substring(i, i + 1) == "0"
    )
      output += txt.substring(i, i + 1);
  }
  return output;
};

const formatPhone = (i) => {
  let input = i;
  let output = "";
  for (let i = 0; i <= 10; i++) {
    if (i == 0 && output.substring(0, 1) != "(") output += "(";
    if (i < input.length) output += input.substring(i, i + 1);
    else if (i < 6) output += " ";
    if (i == 2 && output.substring(3, 4) != ")") output += ")";
    if (i == 5 && output.substring(8, 9) != "-") output += "-";
  }
  return output;
};

export default PhoneInput;
