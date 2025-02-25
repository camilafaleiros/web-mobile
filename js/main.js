// Array de dicas (exemplo)
const dicas = [
    "Beba bastante água ao longo do dia.",
    "Faça pausas para alongar o corpo durante o trabalho.",
    "Pratique meditação ou respiração profunda por 5 minutos diários.",
    "Reserve tempo para atividades de lazer que você gosta.",
    "Durma o suficiente para recarregar as energias."
  ];
  
  // Variável para armazenar número de likes, por exemplo
  let likes = 0;
  
  // Captura de elementos do DOM
  const btnGerarDica = document.getElementById("btn-gerar-dica");
  const textoDica = document.getElementById("texto-dica");
  const btnLike = document.getElementById("btn-like");
  const btnCompartilhar = document.getElementById("btn-compartilhar");
  const btnEnviarDicaExtra = document.getElementById("btn-enviar-dica-extra");
  const inputDicaExtra = document.getElementById("input-dica-extra");
  
  // 1. Interação: Gerar dica ao clicar no botão
  btnGerarDica.addEventListener("click", function() {
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    textoDica.textContent = dicas[indiceAleatorio];
  });
  
  // 2. Interação: Botão de 'Gostei'
  btnLike.addEventListener("click", function() {
    likes++;
    alert(`Você curtiu esta dica! Total de likes: ${likes}`);
  });
  
  // 3. Interação: Botão de 'Compartilhar'
  btnCompartilhar.addEventListener("click", function() {
    // Se quiser apenas simular:
    alert("Dica compartilhada com sucesso!");
  
  });
  
  // 4. (Opcional) Enviar comentário/dica extra
  btnEnviarDicaExtra.addEventListener("click", function() {
    const textoExtra = inputDicaExtra.value.trim();
    if (textoExtra) {
      // Exemplo: exibir em um alert ou console
      alert(`Seu comentário: ${textoExtra}`);
      inputDicaExtra.value = "";
    } else {
      alert("Por favor, insira um texto antes de enviar.");
    }
  });
  