import { useCourses } from '../../hooks/useCourses';
import { CourseCard } from '../molecules/CourseCard';

export const CourseList = () => {
  const { courses, loading, error } = useCourses();

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return <div className="bg-red-50 text-red-600 p-4 rounded-md border border-red-200">{error}</div>;
  }

  if (courses.length === 0) {
    return <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">No hay cursos disponibles aún.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard 
          key={course._id || course.id} 
          name={course.name} 
          division={course.division} 
          cupoMaximo={course.cupoMaximo} 
        />
      ))}
    </div>
  );
};
