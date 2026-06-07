function toggleDropdown(id) {
    var content = document.getElementById(id);
    if (content) {
      content.classList.toggle('open');
      var audio = new Audio('https://actions.google.com/sounds/v1/cartoon/pop.ogg');
      audio.play();
    }
  }
  
  
  const binId = '68113e568561e97a500a562e';
  const apiKey = '$2a$10$dESLzWtywGFV1bSVU95Q../tb7ODOEaihmaYlpxKAh7SKq2QHzLMO';
  const url = `https://api.jsonbin.io/v3/b/${binId}`;
  
  function actualizarContadorUI(valor) {
    document.getElementById("contador").textContent = valor;
  }
  
  async function obtenerContador() {
    try {
      const res = await fetch(url, { headers: { "X-Master-Key": apiKey } });
      const data = await res.json();
      actualizarContadorUI(data.record.contador || 0);
    } catch (e) {
      actualizarContadorUI("ERR");
      console.error("No se pudo obtener el contador:", e);
    }
  }
  
  async function incrementarContador() {
    try {
      const res = await fetch(url, { headers: { "X-Master-Key": apiKey } });
      const data = await res.json();
      const nuevo = (data.record.contador || 0) + 1;
  
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": apiKey
        },
        body: JSON.stringify({ contador: nuevo })
      });
  
      actualizarContadorUI(nuevo);
    } catch (e) {
      console.error("No se pudo incrementar el contador:", e);
    }
  }
  
  obtenerContador();