export const registerUser = (emailOrPhone, password, name) => {
  const users = JSON.parse(localStorage.getItem('sportUsers')) || [];
  const newUser = {
    id: Date.now(),
    email: emailOrPhone.includes('@') ? emailOrPhone : '',
    phone: emailOrPhone.includes('@') ? '' : emailOrPhone,
    password,
    name
  };
  users.push(newUser);
  localStorage.setItem('sportUsers', JSON.stringify(users));
  return newUser;
};

export const loginUser = (emailOrPhone, password) => {
  const users = JSON.parse(localStorage.getItem('sportUsers')) || [];
  return users.find(user => 
    (user.email === emailOrPhone || user.phone === emailOrPhone) && 
    user.password === password
  );
};

export const resetPassword = (emailOrPhone) => {
  // En una aplicación real, aquí enviaríamos un email o SMS
  console.log(`Enviar link de recuperación a: ${emailOrPhone}`);
  return true;
};