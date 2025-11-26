const url = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0";
const urlType = "https://pokeapi.co/api/v2/type";
//
const main = document.querySelector("main");
const wrapperPoke = document.querySelector(".wrapper-poke");
//
const fetchDataPoke = async (urlPoke, urlType) => {
  try {
    const response1 = await fetch(urlPoke);
    const datas1 = await response1.json();
    const characters = datas1.results;

    // Fetch detail setiap pokemon
    const detailPromises = characters.map(async (character) => {
      const res = await fetch(character.url);
      const datas = await res.json();
      console.log(datas);

      return datas;
      // dapat semua data
    });

    // Tunggu semua selesai
    const detailPokemons = await Promise.all(detailPromises);

    // Render DOM
    detailPokemons.forEach((data2) => {
      const sprites = data2.sprites;

      const img = document.createElement("img");
      img.src = sprites.front_shiny;
      img.alt = data2.name;

      const name = document.createElement("p");
      name.textContent = data2.name;

      const detailtype = document.createElement("p");
      detailtype.textContent = data2.types
        .map((item) => {
          return item.type.name;
        })
        .join(" ");

      const div = document.createElement("div");
      div.append(img, name, detailtype);

      wrapperPoke.append(div);
    });
    // console.log(pokemonDivs);

    // fetch data type
    const response2 = await fetch(urlType);
    const dataType = await response2.json();

    const type = dataType.results;

    type.forEach(async (item, id) => {
      const detailUrlType = item.url;
      // console.log(detailUrlType);

      const fetchDetail = await fetch(detailUrlType);
      const dataTypeDetail = await fetchDetail.json();
      // console.log(dataTypeDetail.name);
      const detailType = document.createElement("p");
      detailType.textContent = dataTypeDetail.name;
    });

    // Buat select type
    const fragment = document.createDocumentFragment();

    const label = document.createElement("label");
    label.setAttribute("for", "type-poke");
    label.textContent = "Choose your pokemon type: ";

    const select = document.createElement("select");
    select.id = "type-poke";
    select.name = "type-poke";

    const option1 = document.createElement("option");
    option1.textContent = "Choose your pokemon type:";
    option1.disabled = true;
    option1.selected = true;

    const option2 = document.createElement("option");
    option2.value = "test";
    option2.textContent = "Test";

    select.append(option1, option2);

    fragment.append(wrapperPoke);
    main.prepend(label, select, fragment);
  } catch (error) {
    console.log(error);
  }
};

fetchDataPoke(url, urlType);
