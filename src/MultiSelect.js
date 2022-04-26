import { useField } from "formik";
import Select from "react-select";
import { MultiValueContainer } from "./MultiValue";
import { SingleOption } from "./SingleOption";
import { SingleValue } from "./SingleValue";

export const MultiSelect = ({ name, label, options }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <label style={{ display: "flex", marginBottom: ".4rem" }}>{label}</label>

      <Select
        options={options}
        onChange={(selection) => {
          helpers.setValue(selection);
        }}
        styles={{
          multiValue: () => ({
            borderRadius: "8px",
            boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.1)",
            backgroundColor: "transparent",
            marginRight: ".5rem",
            marginBottom: ".5rem"
          })
        }}
        name={field.name}
        isMulti
        components={{
          Option: SingleOption,
          SingleValue: SingleValue,
          MultiValueContainer: MultiValueContainer
        }}
      />

      {meta?.error && <span>{meta.error}</span>}
    </>
  );
};
