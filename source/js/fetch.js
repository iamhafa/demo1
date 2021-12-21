
const loadFurnitures = async () => {
  try {
    const api = await fetch("https://localhost:44327/api/app/furniture", {
      method: 'GET',
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'accept': 'text/json',
            'RequestVerificationToken': 'CfDJ8I_T-0Xnk0VBu8ZHsJK5ZH1grQlAl62wDQRifUP5-Z7s2JkKUhPFgvoiZDfeO2jOE1VMtARgnasqnhZMJmLfJuig0vnxRpq6Uh3hjYJOlrUIUO36-d2QyYH9LPENBQOVR6whLHo9sJI8FOr1q-wAJ5QUA-Sye3lEaGobW1hmDFLsRPPnDJMfw2P9sK9QT6qZvQ',
          }
    });
    
      let furnitures = await api.json();
      console.log(furnitures);
  }
  catch (err) {
    console.error("CHƯA LẤY ĐƯỢC, mã lỗi:",err);
  }
};

loadFurnitures();  //callback function fetch furnitures