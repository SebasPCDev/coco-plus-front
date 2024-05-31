const redirectionByRole = (role: string) => {
  if (role === 'superadmin') {
    return '/dashboard/superadmin';
  } else if (role === 'adminCoworking') {
    return '/dashboard/adminCoworking';
  } else if (role === 'adminCompany') {
    return '/dashboard/adminCompany';
  } else if (role === 'employee') {
    return '/dashboard/employee';
  } else if (role === 'coworking') {
    return '/dashboard/coworking';
  } else {
    return '/';
  }
};

export default redirectionByRole;
