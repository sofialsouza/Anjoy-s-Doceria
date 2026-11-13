/* ==========================================================
   Anjoy's - script.js
   Recursos: 1 menu hambúrguer, 2 sons, 3 cards dinâmicos,
   4 filtro e busca, 5 carrossel, 6 parallax, 7 neve,
   8 carrinho, 9 contagem regressiva, 10 contadores animados,
   11 ofertas, 12 validação do formulário.
   Cada bloco só roda se os elementos existirem na página.
   ========================================================== */
'use strict';

/* ---------- Utilitários ---------- */
const $ = (seletor, base = document) => base.querySelector(seletor);
const $$ = (seletor, base = document) => [...base.querySelectorAll(seletor)];
const moeda = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
// Tira acentos e deixa minúsculo, para a busca ignorar "Pão" x "pao"
const normalizar = (t) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- 1. Menu hambúrguer ---------- */
const btnMenu = $('#btn-menu');
const menu = $('#menu');
btnMenu.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  btnMenu.setAttribute('aria-expanded', aberto);
});

/* ---------- 2. Música de fundo: "Underneath the Tree" (arquivo em audio/) ---------- */
const musica = new Audio('audio/underneath-the-tree.mp3');
musica.loop = true;   // repete sem parar
musica.volume = 0.3;  // volume baixo (vai de 0 a 1)

// O botão é criado aqui e entra no cabeçalho de todas as páginas
const btnMusica = document.createElement('button');
btnMusica.type = 'button';
btnMusica.className = 'icon-btn';
$('.header-actions').prepend(btnMusica);

function atualizarBotao() {
  const tocando = !musica.paused;
  btnMusica.classList.toggle('ligado', tocando);
  btnMusica.textContent = tocando ? '♪ Pausar' : '♪ Música';
  btnMusica.setAttribute('aria-label', tocando ? 'Pausar a música' : 'Tocar a música de Natal');
}

// Guarda o ponto da música para ela continuar de onde parou ao trocar de página
function guardarMusica() {
  if (musica.readyState === 0) return; // ainda não carregou
  try { localStorage.setItem('musica', JSON.stringify({ tempo: musica.currentTime, tocando: !musica.paused })); } catch (e) { /* sem storage: segue */ }
}
let salvaMusica = {};
try { salvaMusica = JSON.parse(localStorage.getItem('musica')) || {}; } catch (e) { salvaMusica = {}; }
musica.addEventListener('loadedmetadata', () => {
  if (salvaMusica.tempo) musica.currentTime = salvaMusica.tempo % musica.duration;
});
// Se estava tocando na página anterior, tenta continuar (o navegador pode bloquear; aí é só clicar)
if (salvaMusica.tocando) musica.play().catch(() => {});

btnMusica.addEventListener('click', async () => {
  if (musica.paused) {
    try {
      await musica.play();
    } catch (erro) {
      console.error('Falha ao reproduzir a música:', erro);
      alert('Não foi possível iniciar a música. Confira se a pasta audio está junto dos arquivos do site e tente novamente.');
    }
  } else {
    musica.pause();
  }
});

musica.addEventListener('error', () => {
  btnMusica.textContent = '♪ Indisponível';
  btnMusica.setAttribute('aria-label', 'Arquivo de música indisponível');
  btnMusica.title = 'Não foi possível carregar audio/underneath-the-tree.mp3';
});
musica.addEventListener('play', () => { atualizarBotao(); guardarMusica(); });
musica.addEventListener('pause', () => { atualizarBotao(); guardarMusica(); });
setInterval(guardarMusica, 1000);
window.addEventListener('pagehide', guardarMusica);
atualizarBotao();

/* ---------- 3. Cards dinâmicos ---------- */
// Gera um card a partir de um objeto do array "produtos".
// "oferta" (opcional) é o percentual de desconto.
function criarCard(p, oferta = 0) {
  const preco = oferta ? +(p.preco * (1 - oferta / 100)).toFixed(2) : p.preco;
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    ${oferta ? `<span class="selo">-${oferta}%</span>` : ''}
    <div class="card-img"><img src="${p.imagem}" alt="${p.alt}" width="600" height="600" loading="lazy"></div>
    <div class="card-corpo">
      <span class="card-cat">${p.categoria}</span>
      <h3>${p.nome}</h3>
      <p>${p.descricao}</p>
      <span class="preco">${oferta ? `<s>${moeda(p.preco)}</s>` : ''}${moeda(preco)}</span>
      <button class="btn" type="button" data-id="${p.id}" data-preco="${preco}">Adicionar ao carrinho</button>
    </div>`;
  return card;
}

function desenharCards(lista, alvo, oferta = 0) {
  alvo.innerHTML = '';
  lista.forEach((p) => alvo.appendChild(criarCard(p, oferta)));
}

// Home: apenas os produtos com destaque = true
const gradeDestaques = $('#destaques');
if (gradeDestaques) desenharCards(produtos.filter((p) => p.destaque), gradeDestaques);

/* ---------- 4. Filtro por categoria e busca por nome ---------- */
const gradeProdutos = $('#grade');
if (gradeProdutos) {
  const campoBusca = $('#busca');
  const boxCategorias = $('#categorias');
  const contador = $('#contador');
  const vazio = $('#vazio');
  const categorias = ['Todas', ...new Set(produtos.map((p) => p.categoria))];
  let categoriaAtual = 'Todas';

  categorias.forEach((cat) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = cat;
    b.setAttribute('aria-pressed', cat === 'Todas');
    b.addEventListener('click', () => {
      categoriaAtual = cat;
      $$('button', boxCategorias).forEach((x) => x.setAttribute('aria-pressed', x === b));
      atualizar();
    });
    boxCategorias.appendChild(b);
  });

  function atualizar() {
    const termo = normalizar(campoBusca.value.trim());
    const resultado = produtos.filter((p) =>
      (categoriaAtual === 'Todas' || p.categoria === categoriaAtual) &&
      normalizar(p.nome).includes(termo)
    );
    desenharCards(resultado, gradeProdutos);
    contador.textContent = `Mostrando ${resultado.length} de ${produtos.length} produtos`;
    vazio.hidden = resultado.length > 0;
  }
  campoBusca.addEventListener('input', atualizar); // atualiza a cada tecla
  atualizar();
}

/* ---------- 5. Carrossel ---------- */
const carrossel = $('#carrossel');
if (carrossel) {
  const slides = $$('.slide', carrossel);
  const pontos = $('#pontos');
  let atual = 0;
  let timer;

  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `Ir para o slide ${i + 1}`);
    b.addEventListener('click', () => { mostrar(i); reiniciar(); });
    pontos.appendChild(b);
  });

  function mostrar(i) {
    atual = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle('ativo', n === atual));
    $$('button', pontos).forEach((b, n) => b.setAttribute('aria-selected', n === atual));
  }
  function reiniciar() {
    clearInterval(timer);
    if (!reduzMovimento) timer = setInterval(() => mostrar(atual + 1), 6000);
  }
  $('#prev').addEventListener('click', () => { mostrar(atual - 1); reiniciar(); });
  $('#next').addEventListener('click', () => { mostrar(atual + 1); reiniciar(); });
  carrossel.addEventListener('mouseenter', () => clearInterval(timer));
  carrossel.addEventListener('mouseleave', reiniciar);

  // Arrastar o dedo no celular
  let inicioX = 0;
  carrossel.addEventListener('touchstart', (e) => { inicioX = e.touches[0].clientX; }, { passive: true });
  carrossel.addEventListener('touchend', (e) => {
    const dif = e.changedTouches[0].clientX - inicioX;
    if (Math.abs(dif) > 50) { mostrar(atual + (dif < 0 ? 1 : -1)); reiniciar(); }
  });
  mostrar(0);
  reiniciar();
}

/* ---------- 6. Parallax (sem background-attachment: fixed, que falha no iPhone) ---------- */
const camadasParallax = $$('[data-parallax]');
if (camadasParallax.length && !reduzMovimento) {
  let esperando = false;
  const mover = () => {
    camadasParallax.forEach((el) => {
      const secao = el.parentElement.getBoundingClientRect();
      if (secao.bottom < 0) return; // seção fora da tela
      el.style.transform = `translate3d(0, ${-secao.top * el.dataset.parallax}px, 0)`;
    });
    esperando = false;
  };
  window.addEventListener('scroll', () => {
    if (!esperando) { esperando = true; requestAnimationFrame(mover); }
  }, { passive: true });
  mover();
}

/* ---------- 7. Neve e brilhos (canvas) ---------- */
const canvasNeve = $('#neve');
if (canvasNeve) {
  const c = canvasNeve.getContext('2d');
  let flocos = [], brilhos = [], bokeh = [];
  let largura = 0, altura = 0, visivel = true;
  const animar = !reduzMovimento; // com "reduzir movimento" ativo no sistema, desenha só um quadro parado
  const rand = (n) => Math.random() * n;

  function ajustar() {
    const dpr = window.devicePixelRatio || 1;
    largura = canvasNeve.clientWidth;
    altura = canvasNeve.clientHeight;
    canvasNeve.width = largura * dpr;
    canvasNeve.height = altura * dpr;
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    flocos = Array.from({ length: Math.min(220, Math.round(largura / 5)) }, () => {
      const prof = Math.random(); // 0 = longe, 1 = perto
      return { x: rand(largura), y: rand(altura), r: 1.2 + prof * 3.6, vy: 0.35 + prof * 1.5, fase: rand(6.28), opac: 0.45 + prof * 0.5, prof };
    });
    brilhos = Array.from({ length: Math.min(26, Math.round(largura / 50)) }, () => ({ x: rand(largura), y: rand(altura), s: 3 + rand(7), fase: rand(6.28), vel: 0.8 + rand(1.6) }));
    bokeh = Array.from({ length: 12 }, () => ({ x: rand(largura), y: rand(altura), r: 10 + rand(34), vy: 0.08 + rand(0.2), fase: rand(6.28) }));
    if (!animar) quadro(0);
  }

  // Estrela de 4 pontas (brilho dourado)
  function estrela(x, y, s) {
    c.beginPath();
    c.moveTo(x, y - s);
    c.quadraticCurveTo(x, y, x + s, y);
    c.quadraticCurveTo(x, y, x, y + s);
    c.quadraticCurveTo(x, y, x - s, y);
    c.quadraticCurveTo(x, y, x, y - s);
    c.fill();
  }

  function quadro(t) {
    if (visivel) {
      c.clearRect(0, 0, largura, altura);
      // 1) luzes douradas desfocadas (bokeh) subindo devagar
      bokeh.forEach((b) => {
        if (animar) { b.y -= b.vy; if (b.y < -b.r) b.y = altura + b.r; }
        const a = 0.07 + 0.05 * Math.sin(t / 1500 + b.fase);
        const g = c.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, `rgba(243,223,160,${a * 2})`);
        g.addColorStop(1, 'rgba(201,162,39,0)');
        c.fillStyle = g;
        c.beginPath();
        c.arc(b.x, b.y, b.r, 0, 6.283);
        c.fill();
      });
      // 2) brilhos que piscam
      c.fillStyle = '#f6e7b4';
      c.shadowColor = '#C9A227';
      c.shadowBlur = 10;
      brilhos.forEach((b) => {
        const pulso = 0.5 + 0.5 * Math.sin((t / 1000) * b.vel + b.fase);
        c.globalAlpha = 0.25 + 0.75 * pulso;
        estrela(b.x, b.y, b.s * (0.6 + 0.5 * pulso));
      });
      c.shadowBlur = 0;
      c.globalAlpha = 1;
      // 3) neve: flocos de tamanhos diferentes; os mais próximos são maiores e mais macios
      const vento = Math.sin(t / 4000) * 0.6;
      flocos.forEach((f) => {
        if (animar) {
          f.y += f.vy;
          f.x += vento * (0.4 + f.prof) + Math.sin(t / 900 + f.fase) * 0.4;
          if (f.y > altura + 8) { f.y = -8; f.x = rand(largura); }
          if (f.x > largura + 8) f.x = -8;
          if (f.x < -8) f.x = largura + 8;
        }
        const raio = f.r * 1.5;
        const g = c.createRadialGradient(f.x, f.y, 0, f.x, f.y, raio);
        g.addColorStop(0, `rgba(255,255,255,${f.opac})`);
        g.addColorStop(f.prof > 0.8 ? 0.25 : 0.6, `rgba(255,255,255,${f.opac * 0.85})`);
        g.addColorStop(1, 'rgba(255,255,255,0)');
        c.fillStyle = g;
        c.beginPath();
        c.arc(f.x, f.y, raio, 0, 6.283);
        c.fill();
      });
    }
    if (animar) requestAnimationFrame(quadro);
  }
  // Pausa a animação quando o banner sai da tela (economiza bateria)
  new IntersectionObserver(([e]) => { visivel = e.isIntersecting; }).observe(canvasNeve);
  window.addEventListener('resize', ajustar);
  ajustar();
  if (animar) requestAnimationFrame(quadro);
}

/* ---------- 8. Carrinho (dialog + localStorage) ---------- */
let carrinho = [];
try { carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; } catch (e) { carrinho = []; }

const dialogo = document.createElement('dialog');
dialogo.setAttribute('aria-labelledby', 'titulo-carrinho');
dialogo.innerHTML = `
  <h2 id="titulo-carrinho">Seu carrinho</h2>
  <ul id="itens"></ul>
  <p>Total: <strong id="total"></strong></p>
  <p id="msg-carrinho" role="status"></p>
  <div class="acoes">
    <button type="button" class="btn btn-sec" id="fechar-carrinho">Continuar comprando</button>
    <button type="button" class="btn" id="finalizar">Finalizar pedido</button>
  </div>`;
document.body.appendChild(dialogo);

function salvarCarrinho() {
  try { localStorage.setItem('carrinho', JSON.stringify(carrinho)); } catch (e) { /* sem storage: segue em memória */ }
}

function desenharCarrinho() {
  const lista = $('#itens', dialogo);
  lista.innerHTML = '';
  carrinho.forEach((item) => {
    const p = produtos.find((x) => x.id === item.id);
    const li = document.createElement('li');
    li.className = 'item-carrinho';
    li.innerHTML = `<span>${p.nome}</span>
      <button type="button" data-acao="menos" data-id="${item.id}" aria-label="Diminuir quantidade">-</button>
      <span>${item.qtd}</span>
      <button type="button" data-acao="mais" data-id="${item.id}" aria-label="Aumentar quantidade">+</button>
      <span>${moeda(item.preco * item.qtd)}</span>`;
    lista.appendChild(li);
  });
  if (!carrinho.length) lista.innerHTML = '<li>Seu carrinho está vazio.</li>';
  const total = carrinho.reduce((s, i) => s + i.preco * i.qtd, 0);
  $('#total', dialogo).textContent = moeda(total);
  $('#cart-count').textContent = carrinho.reduce((s, i) => s + i.qtd, 0);
  salvarCarrinho();
}

function adicionar(id, preco) {
  const item = carrinho.find((i) => i.id === id);
  if (item) { item.qtd++; item.preco = Math.min(item.preco, preco); }
  else carrinho.push({ id, qtd: 1, preco });
  desenharCarrinho();
}

// Um único "ouvinte" na página inteira cuida de todos os botões de adicionar
document.addEventListener('click', (e) => {
  const b = e.target.closest('.card .btn');
  if (!b) return;
  adicionar(Number(b.dataset.id), Number(b.dataset.preco));
  const original = b.textContent;
  b.textContent = 'Adicionado!';
  b.classList.add('add-ok');
  setTimeout(() => { b.textContent = original; b.classList.remove('add-ok'); }, 1200);
});

$('#itens', dialogo).addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  const item = carrinho.find((i) => i.id === Number(b.dataset.id));
  item.qtd += b.dataset.acao === 'mais' ? 1 : -1;
  carrinho = carrinho.filter((i) => i.qtd > 0);
  desenharCarrinho();
});
$('#btn-carrinho').addEventListener('click', () => { $('#msg-carrinho', dialogo).textContent = ''; dialogo.showModal(); });
$('#fechar-carrinho', dialogo).addEventListener('click', () => dialogo.close());
dialogo.addEventListener('click', (e) => { if (e.target === dialogo) dialogo.close(); }); // clique no fundo fecha
$('#finalizar', dialogo).addEventListener('click', () => {
  if (!carrinho.length) {
    $('#msg-carrinho', dialogo).textContent = 'Seu carrinho está vazio. Escolha um doce primeiro!';
    return;
  }
  salvarCarrinho();
  window.location.href = 'pagamento.html'; // segue para a simulação de pagamento
});
desenharCarrinho();

/* ---------- 9. Contagem regressiva até o Natal ---------- */
function proximoNatal() {
  const hoje = new Date();
  let natal = new Date(hoje.getFullYear(), 11, 25);
  if (hoje > natal) natal = new Date(hoje.getFullYear() + 1, 11, 25);
  return natal;
}
function atualizarContagem() {
  const falta = proximoNatal() - new Date();
  const dias = Math.floor(falta / 864e5);
  $$('[data-dias]').forEach((el) => { el.textContent = dias; });
  const set = (id, v) => { const el = $(id); if (el) el.textContent = String(v).padStart(2, '0'); };
  set('#cd-d', dias);
  set('#cd-h', Math.floor(falta / 36e5) % 24);
  set('#cd-m', Math.floor(falta / 6e4) % 60);
  set('#cd-s', Math.floor(falta / 1e3) % 60);
}
atualizarContagem();
setInterval(atualizarContagem, 1000);

/* ---------- 10. Contadores animados (Sobre nós) ---------- */
const diasSobre = $('#dias');
if (diasSobre) diasSobre.dataset.contar = Math.floor((proximoNatal() - new Date()) / 864e5);

function animarNumero(el) {
  const alvo = Number(el.dataset.contar);
  if (reduzMovimento) { el.textContent = alvo.toLocaleString('pt-BR'); return; }
  const inicio = performance.now();
  const passo = (agora) => {
    const prog = Math.min((agora - inicio) / 1500, 1);
    el.textContent = Math.round(alvo * prog).toLocaleString('pt-BR');
    if (prog < 1) requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
}
const observador = new IntersectionObserver((entradas, obs) => {
  entradas.forEach((en) => { if (en.isIntersecting) { animarNumero(en.target); obs.unobserve(en.target); } });
}, { threshold: 0.6 });
$$('[data-contar]').forEach((el) => observador.observe(el));

/* ---------- 11. Página de ofertas ---------- */
const gradeOfertas = $('#ofertas');
if (gradeOfertas) {
  const ofertas = [[1, 20], [9, 15], [19, 20], [28, 25], [43, 10], [14, 50]]; // [id do produto, % de desconto]
  ofertas.forEach(([id, off]) => {
    gradeOfertas.appendChild(criarCard(produtos.find((p) => p.id === id), off));
  });
}

/* ---------- 12. Validação do formulário de contato ---------- */
const form = $('#form-contato');
if (form) {
  const regras = {
    nome: (v) => (v.length < 3 ? 'Digite seu nome (mínimo de 3 letras).' : ''),
    email: (v) => (!v ? 'Digite seu e-mail.' : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? 'Use um e-mail válido, como nome@exemplo.com.' : ''),
    assunto: (v) => (v.length < 3 ? 'Informe o assunto da mensagem.' : ''),
    mensagem: (v) => (v.length < 10 ? 'Escreva pelo menos 10 caracteres.' : '')
  };

  function validar(campo) {
    const erro = regras[campo.name](campo.value.trim());
    $(`#erro-${campo.name}`).textContent = erro;
    campo.parentElement.classList.toggle('invalido', Boolean(erro));
    campo.setAttribute('aria-invalid', Boolean(erro));
    return !erro;
  }

  const campos = $$('input, textarea', form);
  campos.forEach((c) => c.addEventListener('blur', () => validar(c)));
  campos.forEach((c) => c.addEventListener('input', () => { if (c.parentElement.classList.contains('invalido')) validar(c); }));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const retorno = $('#retorno');
    const todosOk = campos.map(validar).every(Boolean); // valida todos, sem parar no primeiro erro
    retorno.classList.toggle('ok', todosOk);
    if (todosOk) {
      retorno.textContent = 'Mensagem enviada! Responderemos em breve. (simulação do trabalho escolar)';
      form.reset();
    } else {
      retorno.textContent = 'Corrija os campos destacados e envie de novo.';
      campos.find((c) => c.getAttribute('aria-invalid') === 'true').focus();
    }
  });
}
