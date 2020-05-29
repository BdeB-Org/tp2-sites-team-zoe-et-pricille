function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const ul = document.getElementById("produit");
  //const url = "http://localhost:8080/ords/hr2/employees";
  const URL =
  "https://ozowiaeg5cbkhal-db202005041853.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/produit/";

  const ul2 = document.getElementById("categorie");
  const URL2 =
  "https://ozowiaeg5cbkhal-db202005041853.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/categorie/";
  
  fetch(URL)
    .then((resp) => resp.json())
    .then(function (data) {
      let produit = data.items; //.results;
      return produit.map(function (produit) {
        fetch(URL2) 
          .then((resp) => resp.json())
          .then(function (data) {
          let categorie = data.items;
            return categorie.map(function (categorie) {

              let li = createNode("li"),
              span = createNode("span");
                if(produit.id_categorie === categorie.id_categorie){
                  span.innerHTML = `#${produit.id_produit} ...........${produit.marque} .................${categorie.type_produits}..................................................${produit.prix}$`;
                  append(li, span);
                  append(ul, li);
                  append(ul2, li);
                }
            });
         });
      })
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });