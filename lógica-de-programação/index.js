function controleEstoque() {
    let saldo = parseInt(prompt("Informe o saldo inicial da peça:"));
    document.write("Saldo inicial: " + saldo + "<br>")
    let continuar = true;
  
    while (continuar) {
      const entrada = parseInt(prompt("Informe o tipo de entrada (1 para compra, 2 para venda):"));
      const quantidade = parseInt(prompt("Informe a quantidade de peças:"));
  
      if (entrada == 1) {
            saldo = saldo + quantidade;
            document.write("Entrada: " + quantidade + "<br>")
      } else if (entrada == 2) {
            if (saldo >= quantidade) {
                saldo = saldo - quantidade;
                document.write("Saída: " + quantidade + "<br>")
        } else {
            document.write("Saldo insuficiente" + "<br>");
            alert("Saldo insuficiente")
        }
      }
  
      document.write("Saldo atual do estoque: " + saldo + "<br>");
  
      const resposta = prompt("Deseja continuar a entrada de dados? (s/n)").toLowerCase();
      if (resposta !== "s") {
            continuar = false;
      }
    }
  
    document.write("Sistema encerrado");
  }
  
  controleEstoque();