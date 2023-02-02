const modal = document.getElementById("modal");
const btnModal = document.getElementById("btnModal");
const btnClose = document.getElementsByClassName("close")[0];

const fileElem = document.getElementById("fileElem");
const fileList = document.getElementById("fileList");

const btnSelect = document.getElementById("btnSelect");

btnModal.onclick = function() {
    modal.style.display = "block";
}

btnClose.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

btnSelect.addEventListener('click', e => {
    if(fileElem){
        fileElem.click();
    }
    e.preventDefault();
}, false);

fileElem.onchange = function(e){
    const files = Array.from(e.target.files);
    //used promise
    Promise.all(files.map(file => handleFile(file))).then().catch(console.error);
  };

function handleFile(file) {
    return new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function() {
            resolve(reader.result);
        };

        reader.onerror = (error) => reject(error);
        
        const container = document.createElement("div");
        fileList.appendChild(container);
        const img = document.createElement("img");
        img.className = "gallary-item";
        img.src = window.URL.createObjectURL(file);
        img.onload = function() {
            window.URL.revokeObjectURL(this.src);
        }
        container.appendChild(img);
    })
}


