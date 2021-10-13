const storeCurrentUser = <T>(currentUser:Record<string, T>):void => {
  window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
};

const getCurrentUser = ():Record<string, any> => {
  const currentUser = window.localStorage.getItem('currentUser');

  const augmentedCurrentUserData = Object.assign({ date: new Date(), currentUser });

  return currentUser ? JSON.parse(augmentedCurrentUserData) : currentUser;
};

const removeCurrentUser = ():void => {
  window.localStorage.removeItem('currentUser');
};

const checkIsTokenValid = ():boolean => {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return true;

    // Todo Check if current date is greater than 3 days, then you false
  }

  return false;
};

export {
  storeCurrentUser, getCurrentUser, removeCurrentUser, checkIsTokenValid
};
