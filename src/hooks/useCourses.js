import { useState, useEffect } from 'react';
import { coursesApi } from '../api/courses';

export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await coursesApi.getAll(); 
        const coursesData = response.data || response;
        setCourses(Array.isArray(coursesData) ? coursesData : []);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('No se pudieron cargar los cursos. Verifica la conexión con el servidor.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading, error };
};
