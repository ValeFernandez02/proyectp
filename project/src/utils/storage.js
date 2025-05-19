export const getProducts = () => {
  const products = JSON.parse(localStorage.getItem('sportProducts'));
  return products || [];
};

export const saveProducts = (products) => {
  localStorage.setItem('sportProducts', JSON.stringify(products));
};

export const getUsers = () => {
  const users = JSON.parse(localStorage.getItem('sportUsers'));
  return users || [];
};

export const saveUsers = (users) => {
  localStorage.setItem('sportUsers', JSON.stringify(users));
};

export const getSales = () => {
  const sales = JSON.parse(localStorage.getItem('sportSales'));
  return sales || [];
};

export const saveSale = (sale) => {
  const sales = getSales();
  sales.push(sale);
  localStorage.setItem('sportSales', JSON.stringify(sales));
  return sales;
};

export const registerUser = (emailOrPhone, password, name) => {
  const users = getUsers();
  const newUser = {
    id: Date.now(),
    email: emailOrPhone.includes('@') ? emailOrPhone : '',
    phone: emailOrPhone.includes('@') ? '' : emailOrPhone,
    password, // En una app real, la contraseña debería estar hasheada
    name
  };
  users.push(newUser);
  saveUsers(users); // Guardar la lista actualizada de usuarios
  return newUser;
};

export const loginUser = (emailOrPhone, password) => {
  const users = getUsers();
  return users.find(user => 
    (user.email === emailOrPhone || user.phone === emailOrPhone) && 
    user.password === password
  );
};

export const resetPassword = (emailOrPhone) => {
  // SIMULACIÓN: En una aplicación real, aquí enviaríamos un email o SMS
  console.log(`SIMULACIÓN: Enviar link de recuperación a: ${emailOrPhone}`);
  // Aquí podrías añadir lógica para verificar si el usuario existe antes de "enviar"
  const users = getUsers();
  const userExists = users.some(user => user.email === emailOrPhone || user.phone === emailOrPhone);

  if (userExists) {
    // Enviar un mensaje de éxito simulado
    return true;
  } else {
    // Enviar un mensaje de error simulado si el usuario no existe
    return false;
  }
};