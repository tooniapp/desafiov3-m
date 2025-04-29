// Function to format number to BRL currency string
function formatBRL(value) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Fetch exchange rate and update prices on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM carregado, iniciando conversão de moeda");
    const API_URL = "https://api.frankfurter.dev/latest?from=USD&to=BRL";

    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Dados da API recebidos:", data);
            const rate = data.rates.BRL;
            console.log("Taxa de câmbio USD para BRL:", rate);

            if (!rate) {
                console.error("Não foi possível obter a taxa de câmbio BRL.");
                return;
            }

            // Update all elements with data-usd attribute
            const elementsToConvert = document.querySelectorAll("[data-usd]");
            console.log(`Convertendo ${elementsToConvert.length} elementos`);

            elementsToConvert.forEach(element => {
                const usdValue = parseFloat(element.getAttribute("data-usd"));
                if (!isNaN(usdValue)) {
                    const brlValue = usdValue * rate;
                    const formattedBRL = formatBRL(brlValue);
                    console.log(`Convertendo ${usdValue} USD para ${formattedBRL}`);

                    // Update the text content based on element class
                    if (element.classList.contains("amount")) {
                        element.textContent = formattedBRL.replace("R$", "").trim();
                        // Update the currency symbol in the parent
                        const priceElement = element.closest(".price");
                        if (priceElement) {
                            const currencySpan = priceElement.querySelector(".currency");
                            if (currencySpan) currencySpan.textContent = "R$";
                        }
                    } else if (element.classList.contains("save-amount")) {
                        // Update the savings amount, keeping the structure
                        const savingsElement = element.closest(".savings");
                        if (savingsElement) {
                            savingsElement.innerHTML = `YOU SAVE <span class="save-amount" data-usd="${usdValue}">${formattedBRL}</span>!`;
                        }
                    } else if (element.classList.contains("original")) {
                        // Update the original price within the <del> tag
                        element.textContent = formattedBRL;
                    } else if (element.classList.contains("discounted")) {
                        // Update the discounted price
                        element.textContent = formattedBRL;
                    } else {
                        // Default update for any other elements
                        element.textContent = formattedBRL;
                    }
                }
            });
        })
        .catch(error => {
            console.error("Erro ao buscar ou processar dados de moeda:", error);
            // Optionally display an error message to the user on the page
        });
});

