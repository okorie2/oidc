let tel = document.querySelector("#tel");
i = 0
tel.addEventListener("click", () => {
    let form = document.querySelector("#phonenumber");
    let newfield = document.createElement("input");
    newfield.setAttribute("type", "tel");
    newfield.setAttribute("class", "signinput-field suhh");
    newfield.setAttribute("placeholder", "Phone number");
    newbtn = document.createElement("div");
    newbtn.setAttribute("id", "t"+(i++));
    newbtn.setAttribute("class", "minus remove");
    newbtn.setAttribute("onclick", "remove()");
    form.appendChild(newfield);
    form.appendChild(newbtn);
});

remove = () => {
    let items = document.querySelectorAll(".suhh");
    let btns = document.querySelectorAll(".remove");
    btns.forEach(btn => {
        items.forEach(item => {
            item.classList.add("d-none"); 
            });
        btn.classList.add("d-none");
    });

}


const def = document.querySelector("#filebox");
const nw = document.querySelector(".newbtn");
const fileName = document.querySelector(".file")
let regExp = /[0-9a-zA-Z\^\&\`\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function med() {
    def.click();
}
nw.addEventListener("click", med);

def.addEventListener("change", function() {
    if (this.value) {
        let valueStore = this.value.match(regExp);
        fileName.textContent = valueStore;
        
    }
    
});
