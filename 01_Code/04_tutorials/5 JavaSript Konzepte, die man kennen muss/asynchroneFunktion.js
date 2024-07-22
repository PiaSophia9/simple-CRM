async function load() {
  let response = await fetch("https://catfact.ninja/fact");
  let result = await response.json();
  console.log(result.fact);
}

load();
