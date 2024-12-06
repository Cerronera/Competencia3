document.getElementById('loginTutoraForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    try {
      const res = await fetch('http://localhost:5000/api/tutoras/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  });