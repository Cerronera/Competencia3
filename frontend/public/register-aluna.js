document.getElementById('registerAlunaForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const cpf = document.getElementById('cpf').value;
  const ra = document.getElementById('ra').value;
  const curso = document.getElementById('curso').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {
    const res = await fetch('http://localhost:5000/api/alunas/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, telefone, cpf, ra, curso, email, senha })
    });
    const data = await res.json();
    console.log(data);
    // Limpar formulário
    document.getElementById('registerAlunaForm').reset();
    // Exibir mensagem de confirmação
    alert('Cadastro realizado com sucesso! Aguarde até 5 dias úteis para aprovação.');
  } catch (err) {
    console.error(err);
    alert('Erro ao realizar cadastro. Tente novamente.');
  }
});