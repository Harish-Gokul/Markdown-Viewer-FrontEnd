 

function renderAllFilesJSON(data){

    tbodyListAllFiles.innerHTML = "";
  
    for(let i =0;i<data.length;i++){
      let eachObj = data[i];
      tbodyListAllFiles.appendChild(bulidHTMLInfoTable(eachObj.fileName,eachObj.createdOn))
    }
  }
   
  function bulidHTMLInfoTable(fileName,createdOn){
    let tr = document.createElement("tr")
    let tdCol1 = document.createElement("td")
    let fileNameAtag = document.createElement("a")
    fileNameAtag.href = `markdown-viewer.html?${fileName}`
    fileNameAtag.innerText = fileName
    tdCol1.appendChild(fileNameAtag)
    tr.appendChild(tdCol1)
    let tdCol2 = document.createElement("td")
    let tdSpan = document.createElement("span")
    let date = new Date( createdOn);
    tdSpan.innerText  = date.toDateString()
    tdCol2.appendChild(tdSpan)
    tr.appendChild(tdCol2)
    return tr
  
  }
  
  
  
  searchDocumentInput.addEventListener("keyup",searchFile)
  
  function searchFile(){
    let targetValue = searchDocumentInput.value.toLowerCase();
    let filesList = tbodyListAllFiles.childNodes;
  
    filesList.forEach(tr=>{
      if(tr.innerText.toLowerCase().includes(targetValue))
      tr.style.display=""
      else
      tr.style.display="none"
    })
    console.log(filesList)
   
    
  }
  
  function showLoading(){
     spinner.style.display="inline";
     mainConent.style.opacity="0"
  }
  
  function hideLoading(){
    spinner.style.display="none";
    mainConent.style.opacity="1"
  }
  