const FirstAPI = function() {
  // Display the images
  const display = function(images) {
    const imgContainer = document.getElementsByClassName("imgContainer");
      
    // Loop through the different images, store the image and title as src and alt respectively.
    for (let i = 0; i < imgContainer.length; i++) {
      imgContainer[i].innerHTML = "";
      const imgElement = document.createElement("img");
      const pElement = document.createElement("p");

      // If API returns null image, notify user and make option unavailable.
      // Else, grab image & title, and put into gallery.
      if (images.data[i].image === null) {
        pElement.innerHTML = "There is no image. Please choose another image or press the GENERATE button.";
        imgContainer[i].appendChild(pElement);
        continue;
      }
      else {
        imgElement.src = images.data[i].image;
        imgElement.alt = images.data[i].title;
        imgContainer[i].appendChild(imgElement);
      }
    }
  }

  // Call the API
  const callAPI = async function(url) {
    const obj = await fetch(url);
    const images = await obj.json();
    display(images);
  }

  // Construct the endpoint
  const endpoint = function() {
    const url = new URL("https://api.mediastack.com/v1/news");
    const apiKey = '0fa169ec9d099a5466a62a98dc6fdfa2';
    const canada = "ca";
    const offset = Math.floor(Math.random() * 100);

    url.search = new URLSearchParams({
      access_key: apiKey,
      countries: canada,
      offset: offset,
      limit: 3
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