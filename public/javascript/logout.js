async function logout() {
  console.log('made it to logout.js')
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    document.location.alert('Username and/or email already in use. Please try again.')
  }
}

document.querySelector('#logout').addEventListener('click', logout);
