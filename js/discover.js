document.addEventListener("DOMContentLoaded", ()=> {

});

class Search{
    constructor(){
        console.log("search feature started");
    }

    static getInstance(){
        if(Search.Instance){
            Search.Instance = new Search();
        }
    }
}