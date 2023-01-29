const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/63d69b10eced9b09e9bbb99f"
  );

  store.read("Sheet1", { limit: 1}).then(data => {
    var pis = data[0].pis;
    var orta = data[0].orta;
    var ela = data[0].ela;
  });