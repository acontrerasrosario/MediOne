require('dotenv').config();
const webServerConfig       = require('./config/WebServer.config');
const webServer             = require('./services/WebServer.service');

async function startup(){
    console.log(`Starting Application - ${webServerConfig.appName}`);

    try {
        console.log('Initializing web server module');
        await webServer.initialize();
    } catch (e) {
        console.error(e);
        process.exit(1); // Non-zero failure code
    }
}

startup();


async function shutdown(e) {
    let err = e;
      
    console.log('Shutting down');

    try {
      console.log('Closing web server module');
  
      await webServer.close();
    } catch (e) {
      console.log('Encountered error', e);
  
      err = err || e;
    }

    try {
        console.log('Closing database module');

        await sequilize.close();
    } catch (err) {
        console.log('Encountered error', err);
        err = err || e;
    }
  
    console.log('Exiting process');
  
    if (err) {
      process.exit(1); // Non-zero failure code
    } else {
      process.exit(0);
    }
}
  
process.on('SIGTERM', () => {
  console.log('Received SIGTERM');

  shutdown();
});

process.on('SIGINT', () => {
  console.log('Received SIGINT');

  shutdown();
});