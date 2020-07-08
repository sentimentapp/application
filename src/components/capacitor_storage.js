// Imports the Capacitor storage API
import { Plugins } from "@capacitor/core"
const { Storage } = Plugins

// All variables are stored here. It is referenced in order to get the key and data type for local storage
var appData = {"entries": [], "settings": {}}

// Saves a key-value pair to local storage with Capacitor
async function saveToLocalStorage (key, value) {
  // Transforms data into a String
  let valueToString = JSON.stringify(value)

  // Pushes the data to the local database 
  await Storage.set({
    key: key,
    value: valueToString
  })  
}

// Returns an array or dictionary that automatically backs up to local storage when changed
function createLocalStorage(type, localStorageKey) {

  // What to do when the data is changed or retrieved
  const changeHandler = {
    // Runs when a value is changed
    set(target, property, value) {
      // Actually runs the change
      target[property] = value;
      // Saves the value to local storage 
      saveToLocalStorage(localStorageKey, target)
      // you have to return true to accept the changes
      return true;
    }
  }

  return new Proxy( type, changeHandler )
}

// Initalizes a single variable from local storage
function initializeSingleVariable(variableKey, variableValue) {
  // Returns a promise to be waited upon
  return Storage.get({ key: variableKey }).then((localData) => {
    // Parrses stored entries
    let parsedLocalData = JSON.parse(localData.value)
    // Creates array proxy
    appData[variableKey] = createLocalStorage(parsedLocalData, variableKey)
    console.log("Completed data hydration for " + variableKey)
    return true
    
  // Watches for no present data
  }).catch(() => { 
    console.warn("No data at requested entry. Creating new local storage entry for requested data")
    // Creates new data entry based on passed data
    appData[variableKey] = createLocalStorage(variableValue, variableKey)
    console.log("Completed data hydration for " + variableKey)
    return true
  })
}

// Handles the logic for initalizing all variables from local storage
function dataInitialization() {
  // Array to store promises
  let promises = []

  // Loops through potential array values in object
  for (let [key, value] of Object.entries(appData)) {
    promises.push(initializeSingleVariable(key, value))
  }
  
  // Checks to make sure all promises for data have been fulfilled
  return Promise.all(promises)
  .then(() => {
    return appData
  })
  .catch((e) => {
    console.error(e)
  });
}

// Exports data 
export { dataInitialization }