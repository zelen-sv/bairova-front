function requestWithDelay(request, delay) {
  let del = new Promise((resolve,) => {
    setTimeout(() => {
      resolve(true);
    }, delay);

  });
  return Promise.all([request, del]).then(results => { return results[0] })
}

export default requestWithDelay
