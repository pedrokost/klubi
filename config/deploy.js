var VALID_DEPLOY_TARGETS = [
  // update these to match what you call your deployment targets
  "dev",
  "qa",
  "prod"
];

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    redis: {
      allowOverwrite: true,
      keyPrefix: "klubi",
      maxRecentUploads: 100
    },
    s3: {
      prefix: "",
      filePattern:
        "**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,otf,json}",
      signatureVersion: "v4",
      filePattern: function(context, pluginHelper) {
        let filePattern = pluginHelper.readConfigDefault("filePattern");
        return filePattern.replace("}", ",json}");
      }
    }
  };
  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error("Invalid deployTarget " + deployTarget);
  }

  if (deployTarget === "dev") {
    ENV.build.environment = "development";
    ENV.redis.url = process.env.REDIS_URL || "redis://0.0.0.0:6379/";
    ENV.plugins = ["build", "redis"]; // only care about deploying index.html into redis in dev
  }

  if (deployTarget === "qa" || deployTarget === "prod") {
    ENV.build.environment = "production";
    ENV.s3.accessKeyId = process.env.AWS_KEY;
    ENV.s3.secretAccessKey = process.env.AWS_SECRET;
    ENV.s3.bucket = process.env.AWS_S3_BUCKET;
    ENV.s3.region = process.env.AWS_S3_REGION;
    ENV.s3.signatureVersion = "v4";
  }

  if (deployTarget === "qa") {
    ENV.redis.url = process.env.QA_REDIS_URL;
  }

  if (deployTarget === "prod") {
    ENV.redis.url = process.env.PROD_REDIS_URL;
  }

  return ENV;

  /* Note: a synchronous return is shown above, but ember-cli-deploy
   * does support returning a promise, in case you need to get any of
   * your configuration asynchronously. e.g.
   *
   *    var Promise = require('ember-cli/lib/ext/promise')
   *    return new Promise(function(resolve, reject){
   *      var exec = require('child_process').exec
   *      var command = 'heroku config:get REDISTOGO_URL --app my-app-' + deployTarget
   *      exec(command, function (error, stdout, stderr) {
   *        ENV.redis.url = stdout.replace(/\n/, '').replace(/\/\/redistogo:/, '//:')
   *        if (error) {
   *          reject(error)
   *        } else {
   *          resolve(ENV)
   *        }
   *      })
   *    })
   *
   */
};
