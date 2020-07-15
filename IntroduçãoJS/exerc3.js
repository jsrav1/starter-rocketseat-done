var skills = ["Javascript", "ReactJS", "React Native"];


function usaJS(skills){
    for(i = 0; i < skills.length; i++){
        if(skills[i] == "Javascript"){
            console.log("True")
        }else{
            console.log("False")
        }
    }
}

usaJS(skills) // true ou false
