
addEventListener("DOMContentLoaded",getAllData);

createBtn.addEventListener("click",()=>{
    let fileName = prompt("Enter File Name")
    if(!fileName)
    return alert("Enter a valid file Name")
    createFile(fileName+".md")
})