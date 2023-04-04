addEventListener("DOMContentLoaded",async()=>{
    let currentURL = window.location.href
    let fileName = currentURL.split("?")[1];
    let fileJson = await getAllData(fileName);
    displayContentFromJson(fileJson);
    showRenderHTML()
    
})

renameIcon.addEventListener("click",async()=>{
    let newName = prompt("Enter New File Name")
    if (newName ==null ||  newName =="" || newName ==undefined) return alert("Enter a valid Name")
    newName +=".md"; 
    showLoading()
    let renamedJson = await rename(displayTitle.innerText,newName)
    hideLoading()
    displayContentFromJson(renamedJson)
    changeUrl(renamedJson.fileName)
})
 
commonBtn.addEventListener("click",trigger)
function trigger (){ 
    if(commonBtn.innerText == "Edit")
    showSourceCode()
    else
    showRenderHTML()
}

saveBtn.addEventListener("click", async ()=>{
    showLoading()
    let fileJson = await saveData(displayTitle.innerText,sourceCodeTextArea.value);
    displayContentFromJson(fileJson)
    hideLoading()
})

deleteBtn.addEventListener("click",async ()=>{
    let confirm = window.confirm("Are you sure, You wanna delete this file")
    showLoading()
    if(!confirm)
    return;
    let status = await deleteFile(displayTitle.innerText)
    alert("File Deleted \n Redirecting to Index");
    window.open("index.html","_self")

})

document.addEventListener('keydown',async e => {
    if (e.ctrlKey && e.key === 's') {
      // Prevent the Save dialog to open
      e.preventDefault();
    let fileJson = await saveData(displayTitle.innerText,sourceCodeTextArea.value);
    displayContentFromJson(fileJson)
    hideLoading()
    }
  });

  document.addEventListener('keydown',async e => {
    if (e.ctrlKey && e.key === '/') {
      // Prevent the Save dialog to open
      e.preventDefault();
      let url = window.location.href;
      if(window.location.href.indexOf("#") != -1){
         url = window.location.href.split("#")[0];
       
      }
      window.open(`${url}#searchDocumentInput`,"_self")
    }
  });

  document.addEventListener('keydown', async e => {
    if (e.altKey && e.key === 'q') {
      // Prevent the Save dialog to open
      e.preventDefault();
       trigger()
    }
  });
 
  
searchDocumentInput.addEventListener("click",()=>{
    searchsuggestionDiv.style.display="block";
    searchDocumentInput.style.borderRadius ="20px 20px 0px 0px" ;
    generateSuggestion()
})     

searchDocumentInput.addEventListener("keyup",searchHeading)

 

searchsuggestionDiv.addEventListener("mouseleave",()=>{
    searchsuggestionDiv.style.display="none";
    searchDocumentInput.style.borderRadius ="20px" ;
})


window.addEventListener('beforeunload', async function (e) {
  e.preventDefault();
     
  let fileJson = await saveData(displayTitle.innerText,sourceCodeTextArea.value);
  displayContentFromJson(fileJson)
 
 

});


function searchHeading(){
  let targetValue = searchDocumentInput.value.toLowerCase();
  let filesList = searchsuggestionDiv.childNodes;

  filesList.forEach(tr=>{
    if(tr.innerText.toLowerCase().includes(targetValue))
    tr.style.display=""
    else
    tr.style.display="none"
  })
  console.log(filesList)
 
  
}