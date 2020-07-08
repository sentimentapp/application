// Imports the Capacitor storage API
import { Plugins } from "@capacitor/core"
const { Storage } = Plugins

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
      console.log('pushed value to array')
      // Actually runs the change
      target[property] = value;
      // Saves the value to local storage 
      saveToLocalStorage(localStorageKey, target)
      // you have to return true to accept the changes
      return true;
    }
  }

  if (type == "array") {
    return new Proxy( [], changeHandler )
  }

  else if (type == "object") {
    return new Proxy( {}, changeHandler );
  }

  else {
    console.error("Invalid data type passed to the createLocalStorage() function. Supported data types are objects and arrays")
    return null
  }
}

export let proxyToArray = createLocalStorage("array", "entries")