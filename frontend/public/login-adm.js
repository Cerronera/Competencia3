document.getElementById('loginAdmForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {
    const res = await fetch('http://localhost:5000/api/admins/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });
    const data = await res.json();
    if (res.ok) {
      // Redirecionar para o dashboard do Admin
      window.location.href = 'admin-dashboard.html';
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error(err);
    alert('Erro ao fazer login. Tente novamente.');
  }
});