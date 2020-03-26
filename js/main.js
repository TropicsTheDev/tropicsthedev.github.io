document.addEventListener("DOMContentLoaded", ()=>{
    Main.getInstance();
});

class Main{
    constructor(){
        console.log("main started");

     const navButton = document.querySelector('button[aria-expanded]');

    navButton.addEventListener('click', ()=>{
        
        
        const expanded = navButton.getAttribute("aria-expanded") === "true" || false;
        
        navButton.setAttribute('aria-expanded', !expanded);
        console.log(navButton.getAttribute("aria-expanded"), "i AM EXPENDABLE");
        console.log("expended ==>", expanded);
    });
    
    }

    static getInstance(){
        if(!Main.Instance){
            Main.Instance = new Main();
        }
    }

     
}