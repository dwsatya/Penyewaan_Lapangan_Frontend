export const getTokenPayload = () => {
  try {
    // Get token from sessionStorage
    const token = sessionStorage.getItem('token');
    if (!token) throw new Error('Token not found');

    // Decode payload
    const payloadBase64 = token.split('.')[1];
    const payload = JSON.parse(atob(payloadBase64));

    return payload;
  } catch (error) {
    console.error('Failed to get token payload:', error);
    return null;
  }
};

// get user id
export const getUserId = () => {
  const payload = getTokenPayload();
  return payload ? payload.id : null;
};

// get user role
export const getUserRole = () => {
  const payload = getTokenPayload();
  try {
    return payload.role || null;
  } catch {
    return null;
  }
};

// get user name
export const getUserName = () => {
  const payload = getTokenPayload();
  try {
    return payload.userName || null;
  } catch {
    return null;
  }
};

// get user full name
export const getFullName = () => {
  const payload = getTokenPayload();
  try {
    return payload.fullName || null;
  } catch {
    return null;
  }
};

// get user email
export const getUserEmail = () => {
  const payload = getTokenPayload();
  try {
    return payload.email || null;
  } catch {
    return null;
  }
};

// get user phone number
export const getUserPhone = () => {
  const payload = getTokenPayload();
  try {
    return payload.telp || null;
  } catch {
    return null;
  }
};

// get user address date
export const getUserAddress = () => {
  const payload = getTokenPayload();
  try {
    return payload.address || null;
  } catch {
    return null;
  }
};
