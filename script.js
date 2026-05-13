let menu;
//do para realizar prompt antes de escolher a opcão.

do {
  menu = Number(prompt(" 1- Inserir produto | 2- Listar produtos | 3- Sair "));
//while para  encerrar o sistema caso o usuário digitar 3.
} while (menu != 3);
alert(`Sistema encerrado.`);
