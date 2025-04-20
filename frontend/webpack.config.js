module.exports = {
    // other configurations...
    resolve: {
      fallback: {
        "timers": require.resolve("timers-browserify")
      }
    }
  };
  