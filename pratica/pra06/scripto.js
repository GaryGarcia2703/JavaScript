 const quizData = [
      {
        pergunta: "1. Em que sistema operacional surgiu a estética Aero?",
        opcoes: ["Windows XP", "Windows Vista", "Linux Ubuntu", "Mac OS X"],
        correta: "Windows Vista"
      },
      {
        pergunta: "2. Qual é a principal característica visual do Frutiger Aero?",
        opcoes: ["Elementos planos e minimalistas", "Sombras fortes e tipografia gótica", "Reflexos, transparência e natureza", "Textos serifados e fundo preto"],
        correta: "Reflexos, transparência e natureza"
      },
      {
        pergunta: "3. O que a estética Frutiger Aero tenta transmitir?",
        opcoes: ["Frieza e tecnologia distante", "Minimalismo rígido", "Inovação amigável e otimismo", "Estilo retrô dos anos 80"],
        correta: "Inovação amigável e otimismo"
      },
      {
        pergunta: "4. Quando o Frutiger Aero começou a perder espaço?",
        opcoes: ["Em 2005", "Em 2010", "A partir de 2013", "Ainda é usado amplamente"],
        correta: "A partir de 2013"
      },
      {
        pergunta: "5. Por que o estilo Frutiger Aero voltou a aparecer nos últimos anos?",
        opcoes: ["Foi adotado por empresas de segurança", "Por nostalgia e estética retrô", "Por obrigatoriedade de design", "Nunca voltou"],
        correta: "Por nostalgia e estética retrô"
      }
    ];

    let atual = 0;
    let pontos = 0;
    const quizContainer = document.getElementById("quiz-container");
    const resultDiv = document.getElementById("result");
    const feedbackDiv = document.getElementById("feedback");

    function mostrarPergunta() {
      if (atual < quizData.length) {
        const q = quizData[atual];
        feedbackDiv.textContent = ""; // limpa feedback ao mostrar nova pergunta
        quizContainer.innerHTML = `
          <div class="question">${q.pergunta}</div>
          <div class="answers">
            ${q.opcoes.map(opcao => `<button onclick="verificarResposta('${opcao}')">${opcao}</button>`).join('')}
          </div>
        `;
      } else {
        mostrarResultado();
      }
    }

    function verificarResposta(resposta) {
      const correta = quizData[atual].correta;
      if (resposta === correta) {
        pontos++;
        feedbackDiv.style.color = "#00ff00"; // verde
        feedbackDiv.textContent = "Acertou lil blud";
      } else {
        feedbackDiv.style.color = "#ff3300"; // vermelho
        feedbackDiv.textContent = "Errou";
      }
      // Desabilitar botões para evitar múltiplos cliques
      const botoes = document.querySelectorAll(".answers button");
      botoes.forEach(botao => botao.disabled = true);

      // Espera 2 segundos e passa para a próxima pergunta
      setTimeout(() => {
        atual++;
        mostrarPergunta();
      }, 2000);
    }

    function mostrarResultado() {
      quizContainer.innerHTML = "";
      feedbackDiv.textContent = "";
      resultDiv.innerHTML = `Você acertou <strong>${pontos}</strong> de ${quizData.length} perguntas!<br><br>` +
        (pontos === 5 ? "🎉 Excelente! Você é um expert em Frutiger Aero!" :
         pontos >= 3 ? "✨ Muito bom! Você entende bem essa estética!" :
         "🧐 Vale a pena rever o conteúdo da página!");
    }

    // Iniciar quiz
    mostrarPergunta();