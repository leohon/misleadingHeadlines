const FirstAPI = function() {
  // Display the images
  const display = function(images) {
    const imgContainer = document.getElementsByClassName("imgContainer");
    
    // Loop through the different images, store the image and title as src and alt respectively.
    for (let i = 0; i < imgContainer.length; i++) {
      imgContainer[i].innerHTML = "";
      const imgElement = document.createElement("img");
      const pElement = document.createElement("p");
      let index = Math.floor(Math.random() * 100);

      // If API returns null image, notify user and make option unavailable.
      // replace with placeholder and add sidenote?
      // Else, grab image & title, and put into gallery.
      if (images[index].urlToImage !== null) {
        imgElement.src = images[index].urlToImage;
        imgElement.alt = images[index].title;
        imgContainer[i].appendChild(imgElement);
      }
      else {
        pElement.innerHTML = "There is no image. Please choose another image or press the GENERATE button.";
        imgContainer[i].appendChild(pElement);
        continue;
      }
    }
  }

  // Call the API
  const callAPI = async function(url) {
    const obj = await fetch(url);
    const res = await obj.json();
    const images = res.articles;
    display(images);
  }

  // Construct the endpoint
  const endpoint = function() {
    // TODO change API - apparently http works local, not live
    const url = new URL("https://newsapi.org/v2/everything?");
    const apiKey = '68704b9a27404c29ad7269d1f286f5a7';
    const keyword = "news";
    const language = "en";

    url.search = new URLSearchParams({
      apiKey: apiKey,
      q: keyword,
      language: language,
    })

    callAPI(url);
  }
  
  return (
    // The Generate button that calls the News API for 3 photos
    <div className="buttonContainer">
      <button className="generate" id="generate" onClick={endpoint}>Generate</button>
    </div>
  )
}

export default FirstAPI;