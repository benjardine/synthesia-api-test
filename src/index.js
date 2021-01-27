// Using synthesia API to create and download videos given a script and csv file input

const apiURL = "https://api.synthesia.io/v1/videos";

// GET A VIDEO

fetch(apiURL, {
  method: 'GET',
  headers: {
    Authorization: '40969d9f0e055f61b3acaf5dfe2ec9e8',
  },
})
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  });

// CREATING A VIDEO

// curl https://api.synthesia.io/v1/videos  \
//   -H "Authorization: ${API_KEY}" \
//   -H "Content-Type: application/json" \
//   -X POST \
//   -d '{ "test": true, "input": [{ "script": "Hello, World! This is my first synthetic video, made with the Synthesia API!", "actor": "anna_costume1_cameraA", "background": "green_screen"}] }'

const data = { "test": true, "input": [{ "script": "Hello, World! Testing this API out!", "actor": "anna_costume1_cameraA", "background": "green_screen"}] };


fetch(apiURL, {
  method: 'POST',
  headers: {
    Authorization: '40969d9f0e055f61b3acaf5dfe2ec9e8',
    'Content-Type': 'application/json'
  },
  // body: JSON.stringify({ script: "This is my first synthetic video, made with the Synthesia API!", actor: "anna_costume1_cameraA", background: "off_white" })
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  });
