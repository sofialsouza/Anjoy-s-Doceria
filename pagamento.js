/* ==========================================================
   pagamento.js - simulação de pagamento (nenhum pagamento real)
   Funciona com produtos.js e script.js carregados antes dele.
   ========================================================== */
(() => {
  'use strict';
  const $ = (seletor) => document.querySelector(seletor);
  const moeda = (v) => Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  function iniciar() {
    // 1. Lê o carrinho que o script.js salvou no localStorage
    let salvo = [];
    try { salvo = JSON.parse(localStorage.getItem('carrinho')) || []; } catch (e) { salvo = []; }
    const lista = typeof produtos !== 'undefined' ? produtos : [];
    const itens = salvo.map((i) => {
      const produto = lista.find((p) => p.id === i.id);
      return {
        nome: produto ? produto.nome : 'Produto ' + i.id,
        qtd: Number(i.qtd) || 1,
        preco: Number(i.preco) || (produto ? produto.preco : 0)
      };
    });
    const total = itens.reduce((soma, i) => soma + i.preco * i.qtd, 0);

    // Carrinho vazio: avisa e não mostra as opções de pagamento
    if (!itens.length) {
      $('#carrinho-vazio').hidden = false;
      $('#etapa-pagamento').hidden = true;
      return;
    }

    // 2. Resumo do pedido
    itens.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${item.qtd}x ${item.nome}</span><span>${moeda(item.preco * item.qtd)}</span>`;
      $('#resumo-itens').appendChild(li);
    });
    $('#total-pedido').textContent = moeda(total);

    // 3. Opções de parcelamento do crédito: à vista, 2x ou 3x sem juros
    $('#lista-parcelas').innerHTML = [1, 2, 3].map((n) => {
      const texto = n === 1 ? `À vista: ${moeda(total)}` : `${n}x de ${moeda(total / n)} sem juros`;
      return `<label class="opcao"><input type="radio" name="parcelas" value="${n}"> ${texto}</label>`;
    }).join('');

    // 4. QR Code de exemplo para o Pix (quadradinhos aleatórios + 3 cantos fixos)
    const cantos = [[0, 0], [0, 14], [14, 0]];
    function quadrado(linha, coluna) {
      for (const [qa, qb] of cantos) {
        const a = linha - qa, b = coluna - qb;
        if (a >= 0 && a < 7 && b >= 0 && b < 7) {
          return a === 0 || a === 6 || b === 0 || b === 6 || (a >= 2 && a <= 4 && b >= 2 && b <= 4);
        }
      }
      return Math.random() < 0.5;
    }
    let qr = '';
    for (let n = 0; n < 441; n++) qr += `<i class="${quadrado(Math.floor(n / 21), n % 21) ? '' : 'v'}"></i>`;
    $('#pix-qr').innerHTML = qr;

    // 5. Mostra a área da forma escolhida e libera o botão "Realizar pagamento"
    const form = $('#form-pagamento');
    function atualizar() {
      const marcada = form.querySelector('input[name="forma"]:checked');
      const forma = marcada ? marcada.value : '';
      $('#opcoes-credito').hidden = forma !== 'credito';
      $('#opcoes-debito').hidden = forma !== 'debito';
      $('#opcoes-pix').hidden = forma !== 'pix';
      const parcela = form.querySelector('input[name="parcelas"]:checked');
      // Crédito só libera o botão depois de escolher à vista ou parcelado
      $('#btn-pagar').hidden = !(forma === 'debito' || forma === 'pix' || (forma === 'credito' && parcela));
    }
    form.addEventListener('change', atualizar);
    atualizar(); // já mostra a área certa se uma opção veio marcada

    // 6. "Realizar pagamento": mostra "processando", depois "Volte sempre!"
    form.addEventListener('submit', (evento) => {
      evento.preventDefault();
      $('#etapa-pagamento').hidden = true;
      $('#processando').hidden = false;
      // Esvazia o carrinho
      try { localStorage.removeItem('carrinho'); } catch (e) { /* segue */ }
      if (typeof carrinho !== 'undefined' && typeof desenharCarrinho === 'function') { carrinho = []; desenharCarrinho(); }
      setTimeout(() => {
        $('#processando').hidden = true;
        $('#final').hidden = false;
        $('#t-final').focus();
      }, 1500);
    });
  }

  try { iniciar(); } catch (erro) { console.error('Erro em pagamento.js:', erro); }
})();
