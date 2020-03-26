document.addEventListener("DOMContentLoaded", ()=> {

});

class Discover{
    constructor(){
        console.log("search feature started");
    }

    static getInstance(){
        if(Discover.Instance){
            Discover.Instance = new Search();
        }
    }
}