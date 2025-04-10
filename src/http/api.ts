import axios from "axios";
import { ICurso } from "../types/ICurso";
import { IEstudiante } from "../types/IEstudiante";
const API_URL = "http://localhost:3001/cursos";
export const getAllCursos = async () => { 
    try {
        const response = await axios.get<ICurso[]>(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching cursos:", error);
        throw error;
    }


}
export const getAllEstudiantesByCursoId = async (cursoId: string) => { 
    try {
        // Solicitar el curso por su ID
        const response = await axios.get<{ id: number; nombre: string; estudiantes: IEstudiante[] }>(`${API_URL}/${cursoId}`);
        return response.data.estudiantes; // Retornar solo la lista de estudiantes
    } catch (error) {
        console.error(`Error fetching estudiantes for cursoId ${cursoId}:`, error);
        throw error;
    }
};