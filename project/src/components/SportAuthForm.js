import React, { useState } from 'react';

const SportAuthForm = ({ onLogin, onRegister, onResetPassword }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isReset) {
      onResetPassword(formData.emailOrPhone);
      return;
    }

    if (isLogin) {
      onLogin(formData.emailOrPhone, formData.password);
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
      onRegister(formData.emailOrPhone, formData.password, formData.name);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isReset ? 'Recuperar Contraseña' : (isLogin ? 'Iniciar Sesión' : 'Registrarse')}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isReset && !isLogin && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {isReset ? 'Correo o Teléfono' : 'Correo o Teléfono'}
          </label>
          <input
            type="text"
            name="emailOrPhone"
            value={formData.emailOrPhone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        {!isReset && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        )}
        
        {!isLogin && !isReset && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        )}
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
          >
            {isReset ? 'Enviar Link' : (isLogin ? 'Iniciar Sesión' : 'Registrarse')}
          </button>
        </div>
      </form>
      
      <div className="mt-4 text-center">
        {isReset ? (
          <button
            onClick={() => {
              setIsReset(false);
              setIsLogin(true);
            }}
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Volver a Iniciar Sesión
          </button>
        ) : (
          <>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia Sesión'}
            </button>
            <br />
            <button
              onClick={() => setIsReset(true)}
              className="text-sm text-gray-600 hover:text-gray-800 mt-1"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SportAuthForm;