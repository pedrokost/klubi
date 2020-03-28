export default function(server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);

  let klubs = server.createList("klub", 30);
  server.create("obcina", { klubs: klubs, id: 99 });
  server.createList("obcina", 10);

  server.createList('online-training-entry', 3)
}
