import Mirage from "ember-cli-mirage";

export default function() {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  this.namespace = "";
  this.urlPrefix = "http://api.app.local:3200";

  this.post("/klubs/:id/confirm", (schema, request) => {
    const hash = JSON.parse(request.requestBody).request_hash;

    if (hash === "invalid-code") {
      return new Mirage.Response(
        404,
        { "Content-Type": "application/json" },
        {}
      );
    } else {
      return null;
    }
  });
  this.get("/klubs");
  this.get("/klubs/:id");
  this.get("/obcinas/:id");
  this.post("/comments");
  this.post("/comment-requests");
  // this.get("/comments/:id");
  // this.get("/comment-requests/:id");
}
