// Imports the Capacitor Storage API
import { Plugins } from '@capacitor/core'
const { Storage } = Plugins

// Saves a key-value pair to local storage with Capacitor
const setItem = (key, value)=>(
  Storage.set({
    key,
    value: JSON.stringify(value)
  })
)

// Retrieves a value from storage, then parses or falls back
const getItem = (key, fallback)=>(
  Storage.get({ key }).then(({ value })=>(
    value ? JSON.parse(value) : fallback
  ))
)

// Returns an object that automatically backs up to local storage when changed
const createAccessor = (name, data)=>(
  // Proxy object watches for changes (but not delete yet)
  new Proxy(data, {
    // Runs when a value is changed
    set(){
      // Actually runs the change
      Reflect.set(...arguments)
      // Saves the value to local storage 
      setItem(name, data)
      // Return true to accept the changes
      return true
    }
  })
)

// Handles the logic for initalizing all variables from local storage
export function loadStorage() {
  // Used to generate named accessors
  const accessors = {
    entries: [],
    settings: {
      "Haptic Feedback": true,
      "Delete Entries": false
    },
  }

  // Builds a list of promises that populate accessors
  const promises = Object.entries(accessors)
  .map(( [key,value] )=>(
    getItem( key, value ).then((data)=>{
      accessors[key] = createAccessor(key, data)
    })
  ))

  // Checks to make sure all promises for data have been fulfilled
  return Promise.all(promises).then(() => accessors )
}
