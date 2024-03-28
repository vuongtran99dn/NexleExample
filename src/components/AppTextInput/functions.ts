const levelPassword: { [x: number]: { level: number; strengthLevel: string; color: string } } = {
  1: { level: 1, strengthLevel: 'Wear', color: '#E05151' },
  2: { level: 2, strengthLevel: 'Fair', color: '#E3A063' },
  3: { level: 3, strengthLevel: 'Good', color: '#647FFF' },
  4: { level: 4, strengthLevel: 'Strong', color: '#91E2B7' },
};

export const checkPasswordStrength = (password: string) => {
  if (password.length < 8) {
    return {};
  }
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumeric = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  let level = 1;
  hasLowerCase && hasUpperCase && level++;
  hasNumeric && level++;
  hasSpecialChar && level++;
  return levelPassword[level];
};
