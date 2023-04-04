
async function getAllData(fileName){
    try{
    let responseData = await fetch("http://localhost:3000/api/Md_Files/?fileName="+fileName);
    if(!responseData.ok){
        alert("Connection Faild");
        alert("Redirecting to index Page")
        window.open("index.html","_self")
        return;
    }
    return await responseData.json();
    }
    catch (err){
        alert("Connection Faild - "+err)
        alert("Redirecting to index Page")
        window.open("index.html","_self")
    }   
    
 }

async function rename(fileName,newName){
    let bodyJson = {
        fileName:fileName,
        newName:newName
    }
    try{
        let responseData = await fetch("http://localhost:3000/api/MD_Files/rename",{
            method:"PUT",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(bodyJson)
        })    
        if(!responseData.ok){
            let error =  await responseData.json()
            alert("Error Occured \n "+ error.msg)
            return
        } 
        return await responseData.json()
    }
    catch (err){
        console.log(err)
    }
}

async function saveData(fileName,content){
    let bodyJson = {fileName:fileName,content:content};
    try{
        let responseData = await fetch("http://localhost:3000/api/MD_Files",{
            method:"PUT",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(bodyJson)
        })
        if(!responseData.ok){
            let error =  await responseData.json()
            alert("Error Occured \n "+ error.msg);
            return;
        } 

        return await responseData.json()
    }
    catch (err){
        console.log(err)
    }
}

async function deleteFile(fileName){
    try{
        let responseData = await fetch("http://localhost:3000/api/MD_Files?fileName="+fileName,{
            method:"DELETE"
        })
        
        if(!responseData.ok){
            let error =  await responseData.json()
            alert("Error Occured \n "+ error.msg)
            return;
        } 
        return await responseData.json()
    }
    catch (err){
        console.log(err)
    }
}
 