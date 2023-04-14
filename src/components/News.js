const News = () => {
  // Display the images
  function display(images) {
    const gallery = document.querySelector(".newsGallery div");
    const pElement = document.createElement("p");

    gallery.innerHTML = " ";
    pElement.innerText = images.data[0].title;
    gallery.appendChild(pElement);
  }

  // Call the API
  async function callAPI(url) {
    const obj = await fetch(url);
    const images = await obj.json();
    console.log(images.data[0].image);
    console.log(images);
    display(images);
  }

  // Construct the endpoint
  function endpoint() {
    const apiKey = '0fa169ec9d099a5466a62a98dc6fdfa2';
    const url = new URL("http://api.mediastack.com/v1/news");
    
    url.search = new URLSearchParams({
      access_key: apiKey,
      limit: 1
      // date - today's date
    })
    callAPI(url);
  }

  return (
    <section className="newsGallery">
      <button className="generate" id="generate" onClick={endpoint}>Generate</button>
      <div>

      </div>
    </section>
  )
}

export default News;