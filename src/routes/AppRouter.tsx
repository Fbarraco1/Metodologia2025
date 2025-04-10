import { Route, Routes } from "react-router";
import { CursosScreen } from "../components/screens/CursosScreen/CursosScreen";
import { EstudiantesScreen } from "../components/screens/EstudiantesScreen/EstudiantesScreen";
import { useParams } from "react-router";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CursosScreen />} />
        {/* Ruta dinámica para estudiantes por cursoId */}
        <Route
          path="/curso/:cursoId"
          element={<EstudiantesScreenWrapper />}
        />
      </Routes>
    </>
  );
};

// Wrapper para pasar cursoId desde los parámetros de la URL
const EstudiantesScreenWrapper = () => {
  const { cursoId } = useParams<{ cursoId: string }>();
  console.log("cursoId desde la URL:", cursoId); // Depuración
  return <EstudiantesScreen cursoId={cursoId || ""} />;
};
