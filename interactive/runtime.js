var pist = document.getElementsByClassName("text-pis")[0]
var ortat = document.getElementsByClassName("text-orta")[0]
var elat = document.getElementsByClassName("text-ela")[0]
const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/63d69b10eced9b09e9bbb99f"
  );

  store.read("Sheet1", { limit: 1}).then(data => {
    var pis = data[0].pis;
    var orta = data[0].orta;
    var ela = data[0].ela;

    pist.setAttribute("value" , 'pis: '+ pis)
    ortat.setAttribute("value" , 'orta: '+ orta)
    elat.setAttribute("value" , 'ela: '+ ela)

  });

  function open(){
     window.open("https://arkodaz.netlify.com/interactive/form/form.html", "_self")
  }
