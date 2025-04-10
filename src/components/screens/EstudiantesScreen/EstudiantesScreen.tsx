import { useEffect, useState } from "react";
import styles from "./EstudiantesScreen.module.css";
import { getAllEstudiantesByCursoId } from "../../../http/api";
import { IEstudiante } from "../../../types/IEstudiante";
import { EstudianteCard } from "../../ui/EstudianteCard";
import { useNavigate } from "react-router"; // 👈 Agregado

interface EstudiantesScreenProps {
  cursoId: string;
}

export const EstudiantesScreen: React.FC<EstudiantesScreenProps> = ({ cursoId }) => {
  const [estudiantes, setEstudiantes] = useState<IEstudiante[]>([]);
  const navigate = useNavigate(); // 👈 Hook para navegar

  const getEstudiantes = async () => {
    try {
      const data = await getAllEstudiantesByCursoId(cursoId);
      if (data) setEstudiantes(data);
    } catch (error) {
      console.error("Error al obtener estudiantes:", error);
    }
  };

  useEffect(() => {
    getEstudiantes();
  }, [cursoId]);

  const handleVolver = () => {
    navigate("/"); // 👈 Volver a la ruta de inicio
  };

  return (
    <div className={styles.container}>
      <button onClick={handleVolver} className={styles.backButton}>
        ← Volver a Cursos
      </button>

      <h1 className={styles.header}>Estudiantes del Curso {cursoId}:</h1>
      {estudiantes.length > 0 ? (
        <ul className={styles.list}>
          {estudiantes.map((estudiante) => (
            <li key={estudiante.id} className={styles.listItem}>
              <EstudianteCard estudiante={estudiante} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No hay estudiantes disponibles para este curso.</p>
      )}
    </div>
  );
};
