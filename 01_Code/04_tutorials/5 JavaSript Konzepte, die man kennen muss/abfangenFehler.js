async function load() {
  try {
    let response = await fetch("https://cact.ninja/fact");
    let result = await response.json();
    console.log(result.fact);
  } catch (e) {
    console.log("Ein Fehler ist augetreten", e);
  }
}
load();
