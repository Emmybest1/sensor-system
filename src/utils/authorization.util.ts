const checkIsUserAuthorizedToAccessPage = (pagePermissionNumber: number, permissions: number[]) => {
  if (permissions) {
    return permissions.includes(pagePermissionNumber);
  }

  return false;
};

export { checkIsUserAuthorizedToAccessPage };
