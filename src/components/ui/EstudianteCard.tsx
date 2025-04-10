import React from "react";
import { IEstudiante } from "../../types/IEstudiante";

interface EstudianteCardProps {
  estudiante: IEstudiante;
}

export const EstudianteCard: React.FC<EstudianteCardProps> = ({ estudiante }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.name}>{estudiante.nombre}</h3>
      <p style={styles.text}>
        <strong>Edad:</strong> {estudiante.edad}
      </p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "20px",
    margin: "12px auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    maxWidth: "500px",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s",
    cursor: "default",
  },
  name: {
    fontSize: "1.25rem",
    color: "#1f2937",
    marginBottom: "8px",
  },
  text: {
    fontSize: "1rem",
    color: "#4b5563",
    margin: 0,
  },
};
