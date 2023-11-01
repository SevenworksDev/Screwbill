javascript:(function() {
  function getRandomString(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
    return result;
  }

  function openRandomBingSearchWindow() {
    const searchQuery = getRandomString(20);
    const bingSearchUrl = `https://www.bing.com/search?q=${searchQuery}`;
    const searchWindow = window.open(bingSearchUrl, "BingSearchWindow", "width=800, height=600");

    setTimeout(function() {
      if (searchWindow) {
        searchWindow.close();
      }
    }, 2000);
  }

  const menu = document.createElement("div");
  menu.style.position = "fixed";
  menu.style.top = "10px";
  menu.style.left = "10px";
  menu.style.backgroundColor = "white";
  menu.style.border = "1px solid #000";
  menu.style.padding = "10px";
  menu.style.zIndex = "9999";

  const title = document.createElement("div");
  title.innerText = "Screwbill v0.1";
  title.style.fontSize = "20px";
  title.style.marginBottom = "10px";
  menu.appendChild(title);

  const autoSearchButton = document.createElement("button");
  autoSearchButton.innerText = "Auto-Search";
  autoSearchButton.addEventListener("click", function() {
    const intervalId = setInterval(openRandomBingSearchWindow, 1000);

    setTimeout(function() {
      clearInterval(intervalId);
    }, 30000);
  });
  menu.appendChild(autoSearchButton);

  document.body.appendChild(menu);
})();
