(async () => {
  const tema = prompt("Digite ou confirme o tema da redação:", document.title || "Tema não encontrado");

  if (!tema) return alert("Tema não informado.");

  const promptIA = `Crie uma redação completa sobre o tema: "${tema}", com introdução, desenvolvimento e conclusão. Use linguagem formal e argumentativa, mas depois humanize o texto para parecer natural, como um estudante brasileiro escreveria.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer SUA_CHAVE_API"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: promptIA }],
      max_tokens: 1500
    })
  });

  const data = await response.json();
  const redacao = data.choices[0].message.content;

  console.log("Redação:\n\n" + redacao);
  alert("Redação gerada com sucesso! Veja no console (F12) para copiar.");
})();
