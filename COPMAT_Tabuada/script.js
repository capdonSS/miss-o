function gerarMultiplicacao() {
    let numerosBase = [6, 7, 8];
    let numero1 = numerosBase[Math.floor(Math.random() * numerosBase.length)];
    let numero2 = Math.floor(Math.random() * 8) + 2; // Multiplicador de 2 a 9

    document.getElementById("resultado").innerText = `${numero1} × ${numero2}`;
}
let texto=document.querySelector('p');
texto.innerHTML="Tres segundos";
let segundos = 0;
        let cronometro;
        let rodando = false;

        function formatarTempo(segundos) {
            let horas = Math.floor(segundos / 3600);
            let minutos = Math.floor((segundos % 3600) / 60);
            let seg = segundos % 60;
            return (
                String(horas).padStart(2, '0') + ":" +
                String(minutos).padStart(2, '0') + ":" +
                String(seg).padStart(2, '0')
            );
        }

        function atualizarTela() {
            document.getElementById("cronometro").innerText = formatarTempo(segundos);
        }

        function iniciar() {
            if (!rodando) {
                cronometro = setInterval(() => {
                    segundos++;
                    atualizarTela();
                }, 1000);
                rodando = true;
            }
        }

        function pausar() {
            clearInterval(cronometro);
            rodando = false;
        }

        function resetar() {
            pausar();
            segundos = 0;
            atualizarTela();
        }