import React from "react";
import me4 from "../../assets/images/me4.jpeg";

export default function EducationImg({ theme }) {
  return (
    <img
      src={me4}
      alt="Education"
      style={{
        width: "100%",
        maxWidth: "500px", // Increase this value for a larger image
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
      }}
    />
  );
}
