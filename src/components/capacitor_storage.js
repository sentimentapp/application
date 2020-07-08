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
      // Actually runs the change
      target[property] = value;
      // Saves the value to local storage 
      saveToLocalStorage(localStorageKey, target)
      // you have to return true to accept the changes
      return true;
    }
  }

  // Returns an array
  if (type == "array") {
    return new Proxy( [], changeHandler )
  }

  // Returns a javascript object (dictionary)
  else if (type == "object") {
    return new Proxy( {}, changeHandler );
  }

  // Returns an error for incorrect datatype
  else {
    console.error("Invalid data type passed to the createLocalStorage() function. Supported data types are objects and arrays")
    return null
  }
}

export let proxyToArray = createLocalStorage("array", "proxyToArray")