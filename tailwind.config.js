function atualizarIconeTema() {

    const html = document.documentElement;

    const icon = document.getElementById("themeIcon");
    const text = document.getElementById("themeText");

    if (html.classList.contains("dark")) {

        text.textContent = "Light mode";

        icon.setAttribute("data-lucide", "sun");

    } else {

        text.textContent = "Dark mode";

        icon.setAttribute("data-lucide", "moon");
    }

    lucide.createIcons();
}


function alternarTema() {

    const html = document.documentElement;

    if (html.classList.contains("dark")) {

        html.classList.remove("dark");

        html.setAttribute(
            "data-theme",
            "light"
        );

    } else {

        html.classList.add("dark");

        html.setAttribute(
            "data-theme",
            "dark"
        );
    }

    atualizarIconeTema();
}



function selecionarPagamento(tipo) {

    const cartao = document.getElementById("cartaoContent");
    const pix = document.getElementById("pixContent");
    const boleto = document.getElementById("boletoContent");

    const btnCartao = document.getElementById("btnCartao");
    const btnPix = document.getElementById("btnPix");
    const btnBoleto = document.getElementById("btnBoleto");

    const total = document.getElementById("total");
    const totalInfo = document.getElementById("totalInfo");
    const finalizarText = document.getElementById("finalizarText");
    const descontoLinha = document.getElementById("descontoLinha");



    cartao.classList.add("hidden");
    pix.classList.add("hidden");
    boleto.classList.add("hidden");



    [btnCartao, btnPix, btnBoleto].forEach(btn => {

        btn.classList.remove(
            "border-gray-800",
            "dark:border-gray-300"
        );

        btn.classList.add(
            "border-gray-200",
            "dark:border-[#29292c]"
        );

    });
