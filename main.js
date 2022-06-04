
function textDOM() {
   var ul = document.getElementById("ul-tag");
   var text = document.getElementById("btn-text");
   var li = document.createElement("li"); 
   li.appendChild(document.createTextNode(text.value));
   var span = document.createElement("span");
   var txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);

   // CLOSE BUTTON 
   span.addEventListener('click', () => {
       li.remove();
   });
   // 

   li.addEventListener("click", () => {
       li.classList.toggle("completed");
   })

   li.appendChild(span);
   ul.appendChild(li); 

   // ALERTLER
   if (text.value.trim() =='') {
       alert("Boş bırakılamaz");
       li.remove();
    } else {
       setTimeout('alert("Listeye eklendi")', 500);
    }

}       

