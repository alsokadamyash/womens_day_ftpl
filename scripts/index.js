const date = 8;
function getParams() {
    const queryParams = new URLSearchParams(window.location.search);
    return(queryParams.get("name"))
}

const le_name = getParams();

le_name?document.getElementById("greeting").innerHTML = le_name:null;

fetch('scripts/data.json')
    .then(response => response.json())
    .then(data => {
      // Set the href attribute for the anchor tag
      le_name?document.getElementById("meta").setAttribute("content", "Hello "+le_name+"! "+data.meta.greeting):null;
      document.getElementById('venue').href = data.venue.gps;
      document.getElementById('venue').href = data.venue.gps;
      document.getElementById('venue').innerText = data.venue.title;
      document.getElementById('restaurant').innerText = data.venue.title2;
      document.getElementById('test').href = data.test.url;
      document.getElementById('test').innerText = data.test.title;
      document.getElementById('video').href = data.video.link;
      document.getElementById('videoplayer').src = data.video.src;
      document.getElementById('localvideoplayer').src = data.video.local;
      // document.getElementById('videoplayer').src = data.video.link;
    })
    .catch(error => console.error('Error fetching JSON:', error));