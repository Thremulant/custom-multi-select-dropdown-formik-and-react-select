import { components } from "react-select";

export const SingleOption = (props) => {
  const { Option } = components;
  return (
    <Option {...props}>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          width: "100%",
          textAlign: "left"
        }}
      >
        <div
          style={{
            width: "14px",
            height: "14px",
            marginRight: "14px",
            borderRadius: "99px",
            backgroundColor: props.data.color
          }}
        ></div>
        {props.data.label}
      </div>
    </Option>
  );
};
