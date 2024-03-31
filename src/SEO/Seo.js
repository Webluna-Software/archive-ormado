
(function () {
    fetch("https://ormadoapi.webluna.org/api/client/mainSetting", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
  
        const metaDescription = document.getElementById("description");
        const metaKeywords = document.getElementById("keywords");
  
        const mainDescription = JSON.stringify(res.data[0].description);
        const mainKeyWords = JSON.stringify(res.data[0].seoKeywords);
  
        metaDescription.setAttribute("content", mainDescription);
        metaKeywords.setAttribute("content", mainKeyWords);
      })
      .catch((error) => {
        console.error("API XƏTA BAŞ VERDİ", error);
      });
  })();