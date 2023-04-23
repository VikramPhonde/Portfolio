let count=1;

let home_btn= document.getElementById('home_tab');
home_btn.addEventListener('click', function() {
    console.log("test");
    window.scrollBy(0,window.scrollY-(2*window.scrollY));
})


let projects_btn= document.getElementById('projects_tab');
projects_btn.addEventListener('click', function() {
    //console.log("test");
    let temp = 600;
    if(window.scrollY==0)
    {  
        window.scrollBy(0,temp);
    }
    else{
        if(window.scrollY>=600)
            window.scrollBy(0,-(window.scrollY-(temp)));
        else if(window.scrollY<600)
            window.scrollBy(0,(temp-window.scrollY))
    }
})


let darkmode_btn= document.getElementById('darkmode');
darkmode_btn.addEventListener('click', function() {
    if (count%2!=0) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById('navbar').style.backgroundColor = 'black';
        document.getElementById('navbar').style.color = 'white';
        document.getElementById('navbar').style.borderBottom = '1px solid white';
        document.getElementById('project1_img').style.border = '1px solid white';
        document.getElementById('project2_img').style.border = '1px solid white';
        document.getElementById('enablemode').src = "./icons/lightmode.png";
        //document.getElementById('resume').style.color = 'black';
        //document.getElementById('resume').style.backgroundColor = 'white';
        document.getElementById('resume').setAttribute('class','button_dark');
        document.getElementById('project1_ld').setAttribute('class','button_dark');
        document.getElementById('project1_vg').setAttribute('class','button_dark');
        document.getElementById('project2_ld').setAttribute('class','button_dark');
        document.getElementById('project2_vg').setAttribute('class','button_dark');
        document.getElementById('project3_ld').setAttribute('class','button_dark');
        document.getElementById('project3_vg').setAttribute('class','button_dark');
        document.getElementById('project4_vg').setAttribute('class','button_dark');
        document.getElementById("linkedinlogo").src = "./icons/linkedin_white.png";
        document.getElementById("githublogo").src = "./icons/github_white.png";
        document.getElementById("linkedinlogo").style.border = "1px solid white";
        document.getElementById("githublogo").style.border = "1px solid white";
        count++;
    }
    else{
        document.body.style.backgroundColor ="white";
        document.body.style.color = "black";
        document.getElementById('navbar').style.backgroundColor = 'white';
        document.getElementById('navbar').style.color = 'black';
        document.getElementById('navbar').style.borderBottom = '1px solid black';
        document.getElementById('project1_img').style.border = '1px solid black';
        document.getElementById('project2_img').style.border = '1px solid black';
        document.getElementById('enablemode').src = "./icons/darkmode.png";
        //document.getElementById('resume').style.color = 'white';
        //document.getElementById('resume').style.backgroundColor = 'black';
        document.getElementById('resume').setAttribute('class','button_light');
        document.getElementById('project1_ld').setAttribute('class','button_light');
        document.getElementById('project1_vg').setAttribute('class','button_light');
        document.getElementById('project2_ld').setAttribute('class','button_light');
        document.getElementById('project2_vg').setAttribute('class','button_light');
        document.getElementById('project3_ld').setAttribute('class','button_light');
        document.getElementById('project3_vg').setAttribute('class','button_light');
        document.getElementById('project4_vg').setAttribute('class','button_light');
        document.getElementById("linkedinlogo").src = "./icons/linkedin_black.png";
        document.getElementById("githublogo").src = "./icons/github_black.png";
        document.getElementById("linkedinlogo").style.border = "1px solid black";
        document.getElementById("githublogo").style.border = "1px solid black";
        count++;
    }
})


let images = ["./icons/newsmonkey_img1.png","./icons/newsmonkey_img2.png","./icons/newsmonkey_img3.png"]
let i=0;
window.setInterval(function(){
    document.getElementById('project2_img').setAttribute('src',images[i]);
    i++;
    if(i==images.length-1)
    {
        i=0;
    }
},2000);