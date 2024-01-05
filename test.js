try {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      username: data.username,
      email: data.email,
      password: data.password
    }),
    headers: {
      'Content-type': 'application/json'
    }
  });

  if (res.ok) {
    // Si la respuesta es exitosa, redirigir al usuario a la página de inicio de sesión
    router.push('/auth/login');
  } else {
    // Si hay un error, obtener el mensaje de error de la respuesta
    const errorResponse = await res.json();
    console.error(errorResponse.message);
  }
} catch (error) {
  console.error('Error en la solicitud:', error);
}
