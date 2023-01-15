fetch("https://api.github.com/users/alyazahraf/repos")
  .then((response) => response.json())
  .then((repositories) => {
    repositories.forEach((repo) => {
      let slider = document.createElement("div");
      let name = document.createElement("h3");
      let description = document.createElement("p");
      let language = document.createElement("h4");
      let stargazers_count = document.createElement("i");
      let watchers_count = document.createElement("i");

      name.innerHTML = `${repo.name}`;
      description.innerHTML = `${repo.description}`;
      language.innerHTML = `${repo.language}`;
      stargazers_count.innerHTML = `${repo.stargazers_count}`;
      watchers_count.innerHTML = `${repo.watchers_count}`;

      slider.appendChild(name);
      slider.appendChild(description);
      slider.appendChild(language);
      slider.appendChild(stargazers_count);
      slider.appendChild(watchers_count);
      document.getElementById('swiper-wrapper').appendChild(slider);
    });
  });