const compartilhar = document.querySelector(".compartilhar");
const redesSociais = document.querySelector(".redes-sociais");
const seta = document.querySelectorAll(".seta");

seta.forEach((item) => {
  item.addEventListener("click", () => {

    if (compartilhar.classList.contains("esconder")) {
      compartilhar.classList.remove("esconder");
      redesSociais.classList.remove("esconder");
    } else {
      compartilhar.classList.add("esconder");
      redesSociais.classList.add("esconder");
    }
  });
});
