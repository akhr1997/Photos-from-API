const image = document.querySelector("#image")
const name = document.querySelector("#name")

const accessKey = "9JkjA54ExNMXHwH03Yvw_e-yr2eRcbJ3U4psrgsE0Ok"
const endpoint = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`

fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        image.src=data.urls.regular;
        name.innerText = data.user.name
    })
    .catch(error => console.log(error))
