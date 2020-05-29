function ins_prod() {
    let prod_rec = {
      id_produit: 12,
      id_categorie: 1320,
    };
    prod_rec.id_produit = document.getElementById("id_produit").value;
    prod_rec.marque = document.getElementById("marque").value;
    prod_rec.prix = document.getElementById("prix").value;
  
    const URL =
    "https://ozowiaeg5cbkhal-db202005041853.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/produit/";
  
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prod_rec),
    })
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
      });
  }
  