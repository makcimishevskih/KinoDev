// function logger(store: unknown) {
//    const next = store.dispatch;

//    return function dispatchAndLog(action: any) {
//       console.log("dispatching", action);
//       let result = next(action);
//       console.log("next state", store.getState());
//       return result;
//    };
// }

// export { logger };
