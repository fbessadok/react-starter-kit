export const onComponentEnter = store =>
  () => {
    store.dispatch(/* actions.loadSomething() */ () => {});
  };

export const onComponentEnter2 = store =>
  (nextState, replace, done) => {
    if (nextState.params.uid !== 'add') {
      store
        .dispatch(/* actions.getSomething(nextState.params.uid) */)
        .then(() => done())
        .catch((error) => {
          done(error); // Block the changing route
          console.error(error);
        });
    } else {
      done();
    }
  };
