if (!('fetch' in window)) {
    console.log('Fetch API not found, please upgrade your browser.');
    return "i";
  }
  // We can safely use fetch from now on