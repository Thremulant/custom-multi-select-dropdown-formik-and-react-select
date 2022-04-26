import { Formik } from "formik";
import { MultiSelect } from "./MultiSelect";
import "./index.css";

export default function App() {
  const options = [
    { label: "Agnatha", value: "AG", color: "#BDC3C7" },
    { label: "Chrondrichtyes", value: "CH", color: "#1ABC9C" },
    { label: "Osteichthyes", value: "OS", color: "#9B59B6" },
    { label: "Amphibia", value: "AM", color: "#3498DB" },
    { label: "Reptilia", value: "RE", color: "#2ECC71" },
    { label: "Aves", value: "AV", color: "#ECF0F1" },
    { label: "Mammalia", value: "MA", color: "#E74C3C" }
  ];

  const initialValues = {
    Order: ""
  };

  return (
    <div
      className="w-1/2"
      syle={{
        background:
          "linear-gradient(90deg, rgba(185,43,39,1) 0%, rgba(21,101,192,1) 100%)"
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ handleSubmit, setFieldError }) => (
          <>
            <MultiSelect label="Animal order" name="Order" options={options} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1.5rem"
              }}
            >
              <button
                type="submit"
                onClick={handleSubmit}
                style={{ marginRight: "1rem" }}
              >
                Submit
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setFieldError("Order", "There was an error");
                }}
              >
                Error
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}
