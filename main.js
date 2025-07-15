const app = document.getElementById("app");

const state = {
  horario: null,
  comida: null,
  lugar: null,
};

// Etapa 1
function renderStep1() {
  app.innerHTML = `
    <h1>Oii bb, seja bem-vinda! </h1>
    <button onclick="goToStep(2)">Vamos lá?</button>
  `;
}

// Etapa 2
function renderStep2() {
  app.innerHTML = `
    <h2>Já que você está livre na quarta... vamos em um date? </h2>
    <button onclick="goToStep(3)">Sim!</button>
    <button id="noBtn" onmouseover="moveNoButton()">Não 🙄​</button>
  `;
  document.getElementById('noBtn').style.position = "absolute";
}

// Etapa 3
function renderStep3() {
  app.innerHTML = `
    <h2>Escolha sensata!</h2>

    <p>Escolha o horário:</p>
    <select id="horario">
      <option value="19h">19h</option>
      <option value="20h">20h</option>
      <option value="21h">21h</option>
    </select>

    <p>O que você quer comer? (um dia fora da dieta, nn vai te matar 😑)</p>
    <select id="comidaSelect">
      <option value="pizza">Pizza</option>
      <option value="sushi">Sushi</option>
      <option value="hambúrguer">Hambúrguer</option>
      <option value="comida fit">Comida fit 🫠</option>
      <option value="custom">Quero escolher...</option>
    </select>
    <input type="text" id="customComida" class="hidden" placeholder="Escreva sua opção">

    <p>Onde você quer que seja o encontro?</p>
    <select id="lugar">
      <option value="Secreto"> Secreto </option>
    </select>

    <br>
    <button onclick="finalizar()">Confirmar</button>
  `;

  document.getElementById("comidaSelect").addEventListener("change", () => {
    const select = document.getElementById('comidaSelect');
    const input = document.getElementById('customComida');
    if (select.value === 'custom') {
      input.classList.remove("hidden");
    } else {
      input.classList.add("hidden");
    }
  });
}

// Etapa 4 (mensagem final)
function renderStep4(msg) {
  app.innerHTML = `
    <h2>Fechou!</h2>
    <p>${msg}</p>
  `;
}

// Troca de etapas
window.goToStep = (step) => {
  switch (step) {
    case 1: renderStep1(); break;
    case 2: renderStep2(); break;
    case 3: renderStep3(); break;
    case 4: renderStep4(state.mensagem); break;
  }
};

// Botão "não" se move
window.moveNoButton = () => {
  const btn = document.getElementById("noBtn");
  btn.style.top = Math.random() * (window.innerHeight - 80) + "px";
  btn.style.left = Math.random() * (window.innerWidth - 120) + "px";
};

// Confirmar
window.finalizar = () => {
  const horario = document.getElementById("horario").value;
  const cs = document.getElementById("comidaSelect").value;
  const custom = document.getElementById("customComida").value.trim();
  const lugar = document.getElementById("lugar").value;

  const comida = cs === "custom" ? custom || "alguma surpresa 👀" : cs;
  const msg = `Te busco às ${horario} pra comermos ${comida}, em um lugar ${lugar.toLowerCase()}. ❤️`;
  <p style="color: red; font-size: 10px;">
        Se você topou,eu nn tenhaa recebido, me manda um print dessa tela lá no zap 😅
        </p>` : ""}
  state.horario = horario;
  state.comida = comida;
  state.lugar = lugar;
  state.mensagem = msg;

  goToStep(4);
  console.log(msg);

  // Você pode adicionar aqui o fetch para enviar por e-mail, se quiser.
};

// Inicializa
goToStep(1);
