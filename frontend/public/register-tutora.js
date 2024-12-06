document.addEventListener('DOMContentLoaded', function () {
  const telefoneInput = document.getElementById('telefone');
  const telefoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  vanillaTextMask.maskInput({
    inputElement: telefoneInput,
    mask: telefoneMask
  });
});

document.getElementById('registerTutoraForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const cpf = document.getElementById('cpf').value;
  const ra = document.getElementById('ra').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  let valid = true;

  // Validação de número de celular
  const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
  if (!telefoneRegex.test(telefone)) {
    document.getElementById('telefone-error').textContent = 'Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX.';
    valid = false;
  } else {
    document.getElementById('telefone-error').textContent = '';
  }

  // Validação de CPF
  if (!validarCPF(cpf)) {
    document.getElementById('cpf-error').textContent = 'Por favor, insira um CPF válido.';
    valid = false;
  } else {
    document.getElementById('cpf-error').textContent = '';
  }

  if (!valid) {
    return;
  }

  try {
    const res = await fetch('http://localhost:5000/api/tutoras/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, telefone, cpf, ra, email, senha })
    });
    const data = await res.json();
    console.log(data);
    // Limpar formulário
    document.getElementById('registerTutoraForm').reset();
    // Exibir mensagem de confirmação
    alert('Cadastro realizado com sucesso! Aguarde até 5 dias úteis para aprovação.');
  } catch (err) {
    console.error(err);
    alert('Erro ao realizar cadastro. Tente novamente.');
  }
});

function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;
  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf.charAt(10));
}