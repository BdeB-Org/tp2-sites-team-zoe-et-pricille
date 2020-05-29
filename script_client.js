function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const ul = document.getElementById("client");
  //const url = "http://localhost:8080/ords/hr2/employees";
  const URL =
  "https://ozowiaeg5cbkhal-db202005041853.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/client/";
  fetch(URL)
    .then((resp) => resp.json())
    .then(function (data) {
      let client = data.items; //.results;
      return client.map(function (client) {
        let li = createNode("li"),
          span = createNode("span");
        span.innerHTML = `#${client.num_client} ................${client.nom_client} ................$${client.mode_paiement}`;
        append(li, span);
        append(ul, li);
      });
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
  