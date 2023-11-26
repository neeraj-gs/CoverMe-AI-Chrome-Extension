/*global chrome*/

//chrom allow us adcces to chrome global variable whene workign with the chrome extension
// Function to save data to local storage or Chrome extension storage
export const saveData = (key, data) => {
    if (isChromeExtension()) {
      try {
        // Save data to Chrome extension storage
        return chrome.storage.local.set({ [key]: data }); //dynamically pass key and then pass teh data we wantto save
      } catch (error) {
        console.error("Error saving to local state");
        console.error(error);
      }
    } else {
      // Save data to local storage
      return Promise.resolve(localStorage.setItem(key, JSON.stringify(data))); //set returns a promise so and to acts as a promise we wrap insode return
    }
  };


  // Function to load data from local storage or Chrome extension storage
  //loading data instead of savving data or setting we get the data
export const loadData = (key) => {
    if (isChromeExtension()) {
      try {
        // Load data from Chrome extension storage
        return chrome.storage.local.get(key).then((data) => data[key]);
      } catch (error) {
        console.error("Error loading from local state");
        console.error(error);
      }
    } else {
      // Load data from local storage
      return Promise.resolve(JSON.parse(localStorage.getItem(key)));
    }
  };
  



  // Function to check if the environment is a Chrome extension
const isChromeExtension = () => {
    return !!chrome?.storage;
  };