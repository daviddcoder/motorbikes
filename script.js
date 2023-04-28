alert('test');

window.addEventListener("load",()=>{
    const input = document.getElementById("upload");
    const filewrapper=document.getElementById("filewrapper");

    input.addEventListener("change" ,(e)=>{
     let fileName = e.target.files[0].name;
     let filetype = e.target.value.split(".").pop()
     console.log
    })

const fileshow=(filename, filetype=>{
 const showfileboxElem=document.createElememt("div");
 showfileboxElem.classList.add("showfilebox");
 const leftElem=document.createElement("div");
 leftElem.classList.add("left");
 const fileType=document.createElement("span");
 fileTypeElem.classList.add("filetype");
 fileTypeElem.innerHTML=filetype;
 leftElem.append(fileTypeElem);
 const filetitlElem=document.createElement(h3);
 rightElem.append(filetitleElem);
 showfileboxElem.append(fileTypeElem);
 const rightElem=document.createElement("div");
 rightElem.classList.add("right");
 showfileboxElem.append(rightElem);
 const crossElem=document.createElement("span");
 crossElem.innerHTML="&#215;";
 rightElem.append(crossElem);
 filewrapper.append(showfileboxElem);

    crosssElem.addEventListener("click", ()=>)
}

}
)