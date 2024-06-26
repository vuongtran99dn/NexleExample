const levelPassword: { [x: number]: { level: number; strengthLevel: string; color?: string } } = {
  0: { level: 0, strengthLevel: '', color: undefined },
  1: { level: 1, strengthLevel: 'Wear', color: '#E05151' },
  2: { level: 2, strengthLevel: 'Fair', color: '#E3A063' },
  3: { level: 3, strengthLevel: 'Good', color: '#647FFF' },
  4: { level: 4, strengthLevel: 'Strong', color: '#91E2B7' },
};

export const checkPasswordStrength = (password: string) => {
  if (password.length < 6) {
    return levelPassword[0];
  }
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumeric = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  let level = 0;
  (hasLowerCase || hasUpperCase) && level++;
  hasLowerCase && hasUpperCase && level++;
  hasNumeric && level++;
  hasSpecialChar && level++;
  return levelPassword[level];
};
