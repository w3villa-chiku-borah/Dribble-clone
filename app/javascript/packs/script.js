
window.addEventListener("turbolinks:load", () => {
    const dropZone  = document.getElementsByClassName("drag-area")[0]
    const fileInput  = document.getElementsByClassName("file-input")[0]
    let file;

   
    dropZone.addEventListener("dragover" , (event)=>{

        event.preventDefault();
       dropZone.value = "Drop Your File"
       
    })
    dropZone.addEventListener("dragleave" , ()=>{
   
        dropZone.value = "Drag what's in your mind"
    })

    dropZone.addEventListener("drop", (event)=>{
        event.preventDefault();
     
        file = event.dataTransfer.files[0]
        fileInput.files = event.dataTransfer.files;
     
        console.log(fileInput)
        console.log(file)
        let fileReader = new FileReader();
        fileReader.onload= () =>{
            let fileUrl = fileReader.result;
            let imageT =`<div class="image-div"><image class="drop-image" src="${fileUrl}"/></div`
            dropZone.innerHTML = imageT
            dropZone.classList.add("")
        }

        
        fileReader.readAsDataURL(file)
       


    })

});