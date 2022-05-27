class Controls {
    constructor() {
        this.left = false;
        this.right = false;

        this.#addKeyboardListeners();
    }

    // # means the function is private

    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
            }
            // console.table(this);
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
            }
        }
    }

}

export { Controls };