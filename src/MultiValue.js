import { components } from "react-select";

export const MultiValueContainer = ({ children, ...props }) => {
  const { MultiValueContainer } = components;
  return (
    <MultiValueContainer {...props}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: ".4rem .8rem",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: props.data.color,
          fontWeight: "bolder"
        }}
      >
        {children}
      </div>
    </MultiValueContainer>
  );
};
