document.addEventLister("DOMContentLoaded", ()=>{
    Main.getInstance();
});

class Main{
    constructor(){
        console.log("main started");

    }

    static getInstance(){
        if(!Main.Instance){
            Main.Instance = new Main();
        }
    }
}