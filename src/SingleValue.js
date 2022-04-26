import { components } from "react-select";

export const SingleValue = (props) => {
  const { SingleValue } = components;

  return (
    <SingleValue {...props}>
      <div
        style={
          {
            // padding: "1rem"
            // width: "100% !important"
            // backgroundColor: props.data.color
          }
        }
      >
        {props.data.label}
      </div>
    </SingleValue>
  );
};
