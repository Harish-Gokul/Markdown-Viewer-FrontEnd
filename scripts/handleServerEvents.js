async function getAllData(){
   showLoading()
   try{
   let rawResponseData = await fetch("http://localhost:3000/");
   console.log( rawResponseData);
   if(rawResponseData.status != 200){
        alert("Connection Error")
        hideLoading()
        return
   }
   let responseBody = await rawResponseData.json();
    console.log(responseBody)
   renderAllFilesJSON(responseBody)
   hideLoading()
   }
   catch (err){
        alert("Error occured while Conneting to server.. \nError Message -"+err)
      
        hideLoading()
   }
}
 

async function createFile(fileName){
     showLoading()
     let rawResponseData = await fetch("http://localhost:3000/api/MD_Files/",{
          method: "POST",
          body: JSON.stringify({
               fileName:fileName
          }),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
     })
     if(rawResponseData.status == 400){
          alert("File Already Exits")
          hideLoading()
          return
     }
     if(rawResponseData.status != 200){
          alert("Connection Error")
          hideLoading()
          return
     }
     const resData = await rawResponseData.json();
      
     tbodyListAllFiles.appendChild(bulidHTMLInfoTable(resData.fileName,resData.createdOn));
     hideLoading()
     alert("redirecting to "+fileName)
     window.open(`markdown-viewer.html?${fileName}`,"_self")
}