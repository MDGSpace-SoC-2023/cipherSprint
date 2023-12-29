export function check_login() {
    const sId = localStorage.getItem('sessionId');
  
    if (sId) {
      return true;  // User is authenticated
    } else {
      return false; // User is not authenticated
    }
}