const button = document.getElementById("contact");

const learn = document.getElementById("learn");

let paragraph = document.getElementById("paragraph")

const notLearnMore = document.getElementById("notLearnMorePlz")

button?.addEventListener("click", myClick);

function myClick(){
    button.innerText = "Contacted"
    alert("were you contacted?")
}

button?.addEventListener("click", learnMore);

function learnMore(){
    paragraph.innerHTML = `<p id="paragraph" style="background-color: #000, color: #fff">Content Changed</p>`
}

notLearnMore?.addEventListener("click", notLearnMorePlz);

function notLearnMorePlz(){
    paragraph.innerHTML = `<p id="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br> Voluptates aliquam autem deserunt dolores, omnis, laboriosam tempore id non amet distinctio obcaecati in, ad corrupti eveniet?<br> Nisi ipsa quidem obcaecati culpa!</p>`
}

