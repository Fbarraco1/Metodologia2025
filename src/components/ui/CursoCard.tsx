import React from "react";
import { ICurso } from "../../types/ICurso";

interface CursoCardProps {
  curso: ICurso;
}

export const CursoCard: React.FC<CursoCardProps> = ({ curso }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{curso.nombre}</h2>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    padding: "20px",
    margin: "16px auto",
    borderRadius: "12px",
    maxWidth: "500px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
    transition: "transform 0.2s ease-in-out",
    cursor: "pointer",
  },
  title: {
    fontSize: "1.5rem",
    color: "#111827",
    margin: 0,
    textAlign: "center",
  },
};
