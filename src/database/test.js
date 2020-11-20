const Database = require("./db");
const saveOrphanage = require("./savaOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-19.9231873",
    lng: "-43.9465255",
    name: "Lar das meninas",
    about:
      "Presta assisêcia a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabildiade social",
    whatsapp: "3133333333",
    images: [
      "https://images.unsplash.com/photo-1595803330237-83a3a8698450?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1602973756506-2bd229de08bc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horario de visitas Das 18h até as 8h",
    open_on_weekends: "1",
  });

  // consultar dados da tabela
  const selectedOrphanage = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanage);

  // // consultar somente um orfanato pelo ID
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  // console.log(orphanage);

  // deletando dados
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
});
