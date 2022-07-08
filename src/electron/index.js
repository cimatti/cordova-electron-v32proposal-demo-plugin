module.exports = {
  coolMethod: async function (args, success, error) {
    return new Promise((resolve, reject) => {
      if (typeof success !== 'function') {
        success = function(){};
        error = function(){};
      }
      args = args[0];
      if (args[0] != undefined && args[0] != null) {
        const message = String(args[0]);
        if (message.length > 0) {
          success(message); // with cordova-electron-v32proposal by Cimatti, success or error must be called before the function returns or fulfills its promise
          resolve(message); // backward compatibility with cordova-electron>=3<3.2
          return;
        }
      }
      error("Expected one non-empty string argument."); // with cordova-electron-v32proposal by Cimatti, success or error must be called before the function returns or fulfills its promise
      reject("Expected one non-empty string argument."); //backward compatibility with cordova-electron>=3<3.2
    });
  }
};
