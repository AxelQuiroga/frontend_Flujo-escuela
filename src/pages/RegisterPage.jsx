import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center bg-white p-10 rounded-xl shadow-lg border border-gray-100 max-w-md">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Acceso Restringido</h2>
        <p className="text-gray-600 mb-6">El registro público no está habilitado. Las cuentas de alumnos y profesores son gestionadas exclusivamente por la Dirección de la escuela.</p>
        <Link to="/login" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">Volver al Login</Link>
      </div>
    </div>
  );
};
