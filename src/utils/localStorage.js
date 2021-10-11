const load = key => {
  try {
    const serializedState = window.localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    window.localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

const localStorage = { load, save };
export default localStorage;
