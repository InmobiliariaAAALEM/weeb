//selecting all required elements
const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon");

window.onload = ()=>{ //once window loaded
    for (let i = 0; i < gallery.length; i++) {
        let newIndex = i; //passing i value to newIndex variable
        gallery[i].onclick = ()=>{
            console.log(i); 
            function preview(){
                let selectedImgUrl = gallery[newIndex].querySelector("img").src; //getting user clicked image url
                previewImg.src = selectedImgUrl; //passing user clicked img url to previewImg source 
            }

            //let`s work on previous and next button 
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            prevBtn.onclick = ()=>{
                newIndex--; //decrement newIndexvaule
                if(newIndex == 0){
                    preview();
                    prevBtn.estilo.display = "none";
                }else{
                    preview(); //calling agin above function to update image 
                } 
            }
            
            preview(); //calling above function
            previewBox.classList.add("show"); 
               
            closeIcon.onclick = ()=>{
                prevBtn.estilo.display = "block";
                nextBtn.estilo.display = "block";
                previewBox.classList.remove("show");
            }
        }

    }
}



