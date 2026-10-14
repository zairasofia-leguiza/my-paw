const texto = document.getElementById("texto");
const lista = document.getElementById("lista");
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
function guardar() {
localStorage.setItem("tareas", JSON.stringify(tareas));
}
function mostrar() {
lista.innerHTML = "";
tareas.forEach((t, i) => {
const li = document.createElement("li");
if (t.hecha) li.classList.add("hecha");
const span = document.createElement("span");
span.textContent = t.texto;
span.onclick = () => { t.hecha = !t.hecha; guardar(); mostrar(); };
const borrar = document.createElement("button");
borrar.textContent = "X";
borrar.onclick = () => { tareas.splice(i, 1); guardar(); mostrar(); };
li.append(span, borrar);
lista.append(li);
});
}
document.getElementById("agregar").onclick = () => {
if (!texto.value.trim()) return;
tareas.push({ texto: texto.value.trim(), hecha: false });
texto.value = "";
guardar();
mostrar();
};
mostrar();
if ("serviceWorker" in navigator) {
navigator.serviceWorker.register("sw.js");
}