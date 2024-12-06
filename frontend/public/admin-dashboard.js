async function loadTutoras() {
    try {
      const res = await fetch('http://localhost:5000/api/admins/tutoras');
      const tutoras = await res.json();
      const content = document.getElementById('content');
      content.innerHTML = '<h3>Tutoras</h3>';
      tutoras.forEach(tutora => {
        if (tutora.aprovado) {
          content.innerHTML += `<p>${tutora.nome} - ${tutora.email}</p>`;
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
  
  async function loadAlunas() {
    try {
      const res = await fetch('http://localhost:5000/api/admins/alunas');
      const alunas = await res.json();
      const content = document.getElementById('content');
      content.innerHTML = '<h3>Alunas</h3>';
      alunas.forEach(aluna => {
        if (aluna.aprovado) {
          content.innerHTML += `<p>${aluna.nome} - ${aluna.email}</p>`;
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
  
  async function loadAprovacoes() {
    try {
      const res = await fetch('http://localhost:5000/api/admins/aprovacoes');
      const { tutoras, alunas } = await res.json();
      const content = document.getElementById('content');
      content.innerHTML = '<h3>Pedidos de Aprovação</h3>';
      content.innerHTML += '<h4>Tutoras</h4>';
      tutoras.forEach(tutora => {
        content.innerHTML += `<p>${tutora.nome} - ${tutora.email} - ${tutora.telefone} - ${tutora.cpf} - ${tutora.ra} <button onclick="aprovarTutora(${tutora.id})">Aprovar</button> <button onclick="negarTutora(${tutora.id})">Negar</button></p>`;
      });
      content.innerHTML += '<h4>Alunas</h4>';
      alunas.forEach(aluna => {
        content.innerHTML += `<p>${aluna.nome} - ${aluna.email} - ${aluna.telefone} - ${aluna.cpf} - ${aluna.ra} - ${aluna.curso} <button onclick="aprovarAluna(${aluna.id})">Aprovar</button> <button onclick="negarAluna(${aluna.id})">Negar</button></p>`;
      });
    } catch (err) {
      console.error(err);
    }
  }
  
  async function aprovarTutora(id) {
    try {
      const res = await fetch(`http://localhost:5000/api/admins/aprovar-tutora/${id}`, {
        method: 'POST'
      });
      const data = await res.json();
      console.log(data);
      loadAprovacoes();
    } catch (err) {
      console.error(err);
    }
  }
  
  async function negarTutora(id) {
    try {
      const res = await fetch(`http://localhost:5000/api/admins/negar-tutora/${id}`, {
        method: 'POST'
      });
      const data = await res.json();
      console.log(data);
      loadAprovacoes();
    } catch (err) {
      console.error(err);
    }
  }
  
  async function aprovarAluna(id) {
    try {
      const res = await fetch(`http://localhost:5000/api/admins/aprovar-aluna/${id}`, {
        method: 'POST'
      });
      const data = await res.json();
      console.log(data);
      loadAprovacoes();
    } catch (err) {
      console.error(err);
    }
  }
  
  async function negarAluna(id) {
    try {
      const res = await fetch(`http://localhost:5000/api/admins/negar-aluna/${id}`, {
        method: 'POST'
      });
      const data = await res.json();
      console.log(data);
      loadAprovacoes();
    } catch (err) {
      console.error(err);
    }
  }