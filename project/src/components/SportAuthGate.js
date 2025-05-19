import React, { useState } from 'react';
import SportAuthForm from './SportAuthForm';
import { registerUser, loginUser, resetPassword } from '../utils/storage'; // Importar desde storage

const SportAuthGate = ({ onAuthSuccess }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleRegister = (emailOrPhone, password, name) => {
    const user = registerUser(emailOrPhone, password, name);
    if (user) {
      setIsAuthenticated(true);
      onAuthSuccess(user);
    } else {
      alert("Error al registrar usuario. Intenta con otro correo/teléfono.");
    }
  };

  const handleLogin = (emailOrPhone, password) => {
    const user = loginUser(emailOrPhone, password);
    if (user) {
      setIsAuthenticated(true);
      onAuthSuccess(user);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const handleResetPassword = (emailOrPhone) => {
    const success = resetPassword(emailOrPhone);
    if (success) {
      alert("Si el correo o teléfono está registrado, recibirás un link de recuperación.");
    } else {
      alert("El correo o teléfono ingresado no se encuentra registrado.");
    }
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <SportAuthForm 
        onRegister={handleRegister}
        onLogin={handleLogin}
        onResetPassword={handleResetPassword}
      />
    </div>
  );
};

export default SportAuthGate;

// DONE