import { useEffect, useRef } from "react";

const CustomModel = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  const ref = useRef();

  useEffect(() => {
    const handleListner = (key) => {
      console.log("name", key);
      if (key.key === "Escape") {
        console.log("clicek");
        closeModal(false);
      }
    };
    document.addEventListener("keydown", handleListner);

    return () => document.removeEventListener("keydown", handleListner);
  }, []);

  useEffect(() => {
    const handleOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeModal(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);

    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "1px solid red",
            // padding: "80px 20px",
            width: "200px",
            height: "100px",
            margin: "20px",
            borderRadius: "2px",
          }}
          ref={ref}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "2px",
                right: "4px",
                background: "grey",
                padding: "3px",
                borderRadius: "3px",
                cursor: "pointer",
              }}
              onClick={() => closeModal(false)}
            >
              X
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomModel;
