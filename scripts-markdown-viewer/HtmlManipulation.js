function showSourceCode(){
    commonBtn.innerText = "Preview"
    displayMDHTMLDIV.style.display ="none";
    displaySourceFileDIV.style.display = "block";
} 


function showRenderHTML(){
    commonBtn.innerText = "Edit"
    displayMDHTMLDIV.style.display ="block";
    displaySourceFileDIV.style.display = "none";
    displayMDHTMLDIV.innerHTML = marked.parse(sourceCodeTextArea.value);
    highlightCode()
}

function highlightCode(){
    document.querySelectorAll("pre code").forEach(item =>{
        hljs.highlightBlock(item)
    })
}

function displayContentFromJson(json){
    displayTitle.innerText = json.fileName;
    document.title = json.fileName;
    if(json.content ==""){
    sourceCodeTextArea.value = "Your File is Empty";
    return;
    }
    sourceCodeTextArea.value = json.content
}

function changeUrl(fileName){
    let currentURL = window.location.href
    console.log(currentURL)
    let urlArray = currentURL.split("?")
    urlArray[1]= fileName;
    let newUrl = urlArray.join("?")
    console.log(newUrl)
    window.location.href = newUrl

}


function showLoading(){
    spinner.style.display="inline";
    mainConent.style.opacity="0"
 }
 
 function hideLoading(){
   spinner.style.display="none";
   mainConent.style.opacity="1"
 }
 

 function generateSuggestion(){
    let headingTags = document.querySelectorAll("h1,h2");
    searchsuggestionDiv.innerHTML =""

     headingTags.forEach(item =>{
        let aTag = document.createElement("a")
        
        aTag.innerText = item.innerText;
        let url = window.location.href;
      if(window.location.href.indexOf("#") != -1){
         url = window.location.href.split("#")[0];
      }
      aTag.href =  url+"#"+item.id;
        aTag.className ="formatSuggestion"
        searchsuggestionDiv.append(aTag)
     })
 } 
 
 