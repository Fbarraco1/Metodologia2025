import styles from "./CursosScreen.module.css";
import { CursoCard } from "../../ui/CursoCard";
import { ICurso } from "../../../types/ICurso";
import { getAllCursos } from "../../../http/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const CursosScreen = () => {
  const [cursos, setCursos] = useState<ICurso[]>([]);
  const navigate = useNavigate();

  const getCursos = async () => {
    const data = await getAllCursos();
    if (data) setCursos(data);
  };

  useEffect(() => {
    getCursos();
  }, []);

  const handleCursoClick = (cursoId: number) => {
    navigate(`/curso/${cursoId}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cursos:</h1>
      {cursos.map((curso) => (
        <div
          key={curso.id}
          className={styles.cardWrapper}
          onClick={() => handleCursoClick(curso.id)}
        >
          <CursoCard curso={curso} />
        </div>
      ))}
    </div>
  );
};
