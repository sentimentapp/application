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

  return new Proxy( type, changeHandler )
}

// Creates needed data
let entries

function dataInitialization() {
  // Returns a promise to be waited upon
  return Storage.get({ key: "entries" }).then((value) => {
    // Parrses stored entries
    let storedEntries = JSON.parse(value.value)
    // Creates array proxy
    entries = createLocalStorage(storedEntries, "entries")
    console.log("Completed Data Hydration")
    return true
    
    // Watches for an error
  }).catch((error) => { 
    console.error(error)
  })
}

// Exports data
export { entries, dataInitialization }