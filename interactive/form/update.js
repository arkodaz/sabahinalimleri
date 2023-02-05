function pis(){

    var say = 0;
    const store = new SteinStore(
           "https://api.steinhq.com/v1/storages/63d69b10eced9b09e9bbb99f"
         );

    store.read("Sheet1", { search: { this: "this" } }).then(data => {
        say = parseInt(data[0].pis) + 1;
        store
        .edit("Sheet1", {
          search: { this: "this" },
          set: { pis: say }
        })
        .then(res => {
          console.log(res);
        });
      });
      alert("Rəyinizə görə təşəkkür edirik! Sizi əsas səhifəyə yönləndiririk.")
      window.open("/interactive/i-cam.html", "_self")


   
    
      
}
function orta(){
    var say = 0;
    const store = new SteinStore(
           "https://api.steinhq.com/v1/storages/63d69b10eced9b09e9bbb99f"
         );

    store.read("Sheet1", { search: { this: "this" } }).then(data => {
        say = parseInt(data[0].orta) + 1;
        store
        .edit("Sheet1", {
          search: { this: "this" },
          set: { orta: say }
        })
        .then(res => {
          console.log(res);
        });
      });
      alert("Rəyinizə görə təşəkkür edirik! Sizi əsas səhifəyə yönləndiririk.")
      window.open("/interactive/i-cam.html", "_self")

}
function ela(){
    var say = 0;
    const store = new SteinStore(
           "https://api.steinhq.com/v1/storages/63d69b10eced9b09e9bbb99f"
         );

    store.read("Sheet1", { search: { this: "this" } }).then(data => {
        say = parseInt(data[0].ela) + 1;
        store
        .edit("Sheet1", {
          search: { this: "this" },
          set: { ela: say }
        })
        .then(res => {
          console.log(res);
        });
      });
      alert("Rəyinizə görə təşəkkür edirik! Sizi əsas səhifəyə yönləndiririk.")
      window.open("/interactive/i-cam.html", "_self")

}