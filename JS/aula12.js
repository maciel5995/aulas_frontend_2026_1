// console.log(document.body);

// console.log(document.body.childNodes);

// console.log(document.body.childNodes[3]);

// console.log(document.body.childNodes[3].childNodes);

// console.log(document.body.childNodes[3].childNodes[1].textContent);

// console.log(document.body.childNodes[3].childNodes[3].textContent);

// const tagTitle = document.getElementsByTagName("h2");
// console.log(tagTitle);
// console.log(tagTitle[0].textContent);
// console.log(tagTitle[1].textContent);
// const title = document.getElementById("title");
// console.log(title);
// console.log(title.textContent);

// const posts = document.getElementsByClassName("posts");
// console.log(posts);
// console.log(posts[0].textContent);

// const posts = document.querySelectorAll(".posts");
// console.log(posts);
// console.log(posts[0].textContent);

// const container = document.querySelector("#container");
// console.log(container);
// console.log(container.textContent);

// const p2 = document.createElement("p");

// console.log(p2);
// p2.textContent = 'Eu sou o novo parágrafo';

// console.log(p2);

// posts[0].appendChild(p2);


// const myText = document.createTextNode("Inserindo novo título");

// const h3 = document.createElement("h3");

// h3.appendChild(myText);

// container.appendChild(h3);

const btn = document.querySelector("#button");

btn.addEventListener("mouseenter", function () {
   btn.style.backgroundColor = "red";
   console.log("Mouse sobre o botão");
});

btn.addEventListener("mouseleave", function () {
    btn.style.backgroundColor = "blue";
    console.log("Mouse deixou o botão");
 });

 btn.addEventListener("click", function () {
    console.log("Clicou aqui!");
   });
   
   const mouse = document.querySelector("#mouse");

   mouse.addEventListener("dblclick", () => {
    console.log("Clique duplo");
   });
   
   mouse.addEventListener("mousedown", () => {
    console.log("Pressionou botão");
   });
   
   mouse.addEventListener("mouseup", () => {
    console.log("Soltou botão");
   });

   const event_title = document.querySelector("#event_title");

   event_title.addEventListener("click", (e) => {
        console.log('clicou');
        console.log(e);
    });

    document.addEventListener("mousemove", (e) => {
        // console.log(`Eixo X: ${e.x}`);
        // console.log(`Eixo Y: ${e.y}`);
       });

    document.addEventListener("keydown", (e) => {
    console.log(`Pressionou ${e.key}`);
    });
    
    document.addEventListener("keyup", (e) => {
        console.log(`Soltou ${e.key}`);
       });
    
       const site = document.querySelector("#site");

       site.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Desabilitou ação do link");
       });
    
       const input = document.querySelector("#input");

       input.addEventListener("focus", (e) => {
        console.log("Efeito de focus!");
       });

       input.addEventListener("blur", (e) => {
        console.log("Efeito de blur!");
       });
       
       
       
       

   