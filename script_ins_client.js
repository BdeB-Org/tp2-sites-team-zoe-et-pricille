function ins_client() {
    let client_rec = {
      num_client: 75,
    };
    client_rec.num_client = document.getElementById("num_client").value;
    client_rec.nom_client = document.getElementById("nom_client").value;
    client_rec.mode_paiement = document.getElementById("mode_paiement").value;
  
    const URL =
    "https://ozowiaeg5cbkhal-db202005041853.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/client/";
  
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client_rec),
    })
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
      });
  }
  