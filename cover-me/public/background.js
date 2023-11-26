/*global chrome*/


//the chomr variavble gives access to tabs , that allwos to listen for events

console.log("Bg running")
// Declaring constants to store LinkedIn URLs.
//diffrent urls to cehck and scrape it
const linkedInListViewURL = "https://www.linkedin.com/jobs/collections"; //list og jobs
const linkedInDetailView = "https://www.linkedin.com/jobs/view"; //detailed summary of single job

// This function returns the appropriate job description class name based on the URL.
function getJobDescriptionClassName(url) {
  // If the URL starts with the LinkedIn list view URL, return the list view class name, else return the detail view class name.
  return url.startsWith(linkedInListViewURL) //if list view otr actual job desciton look at the specific className
    ? "jobs-search__job-details--container"
    : "jobs-description-content__text";
}

// This function grabs the job description text from the web page.
function grabJobDescription(className) {
  const jobDetailsContainer = document.body.querySelector(`.${className}`);
  const jobDetails = jobDetailsContainer.textContent; //there are a lot of white rsapces so we need to trim them
  const cleanedJobDetails = jobDetails.replace(/\s\s+/g, " ");
  console.log(cleanedJobDetails);
  return cleanedJobDetails; //get teh actual job details
}

// This is an event listener that runs when a tab is updated in Chrome.
//evern  litsetnterr when we cahgne between tabs , 
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log("Event Triggered")
  // Check if the tab is fully loaded and active.
  if (changeInfo.status === "complete" && tab.active) {
    // Check if the URL of the tab matches the LinkedIn list or detail view URL.
    if (
      tab.url?.startsWith(linkedInListViewURL) ||
      tab.url?.startsWith(linkedInDetailView)
    ) {
      // Execute the grabJobDescription function on the current tab and store the result in local storage.
      chrome.scripting
        .executeScript({ //run in bg asynchronously
          target: { tabId: tabId },
          func: grabJobDescription,
          args: [getJobDescriptionClassName(tab.url)],
        })
        .then((queryResult) => { //have access to  get the jd
          chrome.storage.local.set({ jobDescription: queryResult[0].result }); //save job descrioption 
          //everytime we chagne from one tab to another its goning to scarapre linkeinf page adn save jd, and then on frontend lookup at this jd key
        });
    }
  }
});