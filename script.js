import {

db,
storage,
collection,
addDoc,
onSnapshot,
query,
orderBy,
serverTimestamp,
doc,
getDoc,
setDoc,
deleteDoc,

ref,
uploadBytes,
getDownloadURL,
deleteObject

} from "./firebase.js";

async function saveData(name, data){

await setDoc(

doc(db,"academy",name),

{

data:data

}

);

}
async function loadData(name){

const snap = await getDoc(

doc(db,"academy",name)

);

if(snap.exists()){

return snap.data().data;

}

return null;

}
/*=========================================================
            FIREBASE STORAGE UPLOAD
=========================================================*/
async function uploadFile(file){

    return new Promise((resolve,reject)=>{

        const formData = new FormData();

        formData.append("file",file);

        formData.append(
            "upload_preset",
            "ScienceHackAcademy"
        );

        let endpoint="image";

        if(file.type.startsWith("video/")){

            endpoint="video";

        }

        else if(file.type==="application/pdf"){

            endpoint="raw";

        }

        const xhr = new XMLHttpRequest();
document.getElementById("cancelUploadBtn").onclick = ()=>{

    xhr.abort();
document.getElementById(
    "loaderProgress"
).style.width="100%";

document.getElementById(
    "loaderPercent"
).innerText="100%";

document.getElementById(
    "loaderTitle"
).innerText="✔ Upload Complete";

setTimeout(()=>{

    document.getElementById(
        "uploadLoader"
    ).style.display="none";

},600);
   

};
        xhr.open(
            "POST",
            `https://api.cloudinary.com/v1_1/yakib0eg/${endpoint}/upload`
        );

        // Show Loader
        document.getElementById("uploadLoader").style.display="flex";
        document.getElementById("loaderTitle").innerText="Uploading...";
        document.getElementById("loaderProgress").style.width="0%";
        document.getElementById("loaderPercent").innerText="0%";

        xhr.upload.onprogress=(e)=>{

            if(e.lengthComputable){

                const percent=Math.round(
                    (e.loaded/e.total)*100
                );

                document.getElementById(
                    "loaderProgress"
                ).style.width=percent+"%";

                document.getElementById(
                    "loaderPercent"
                ).innerText=percent+"%";

            }

        };

        xhr.onload=()=>{

            document.getElementById(
                "uploadLoader"
            ).style.display="none";

            if(xhr.status===200){

                const data=JSON.parse(xhr.responseText);

                resolve(data.secure_url);

            }

            else{

                reject("Upload Failed");

            }

        };

        xhr.onerror=()=>{

            document.getElementById(
                "uploadLoader"
            ).style.display="none";

            reject("Upload Failed");

        };

        xhr.send(formData);

    });

}



/*=========================================================
                USER PROFILE
=========================================================*/

let currentUser = localStorage.getItem("scienceUser");

if(!currentUser){

currentUser = prompt("Enter your name:");


if(!currentUser || currentUser.trim()===""){

currentUser = "student";

}

localStorage.setItem("scienceUser",currentUser);

}/*=========================================================
        SCIENCE HACK ACADEMY
        JAVASCRIPT
        PART 3A-1
=========================================================*/

"use strict";
/*==============================
        APP STATE
==============================*/

let adminLoggedIn = false;

/*=========================================================
            GLOBAL VARIABLES
=========================================================*/

const loader = document.getElementById("loader");

const adminBtn = document.getElementById("adminBtn");

const modal = document.getElementById("adminModal");

const closeModal = document.querySelector(".closeModal");

const loginBtn = document.getElementById("loginBtn");

const dashboard = document.getElementById("adminDashboard");

const uploadPdfBtn = document.getElementById("uploadPdfBtn");

const homeworkBtn =
document.getElementById("homeworkBtn");

const homeworkModal =
document.getElementById("homeworkModal");

const closeHomeworkModal =
document.getElementById("closeHomeworkModal");

const homeworkTitle =
document.getElementById("homeworkTitle");

const homeworkText =
document.getElementById("homeworkText");

const saveHomeworkBtn =
document.getElementById("saveHomeworkBtn");

const notesBtn =
document.getElementById("notesBtn");

const manageNotesBtn =
document.getElementById("manageNotesBtn");

const notesModal =
document.getElementById("notesModal");

const closeNotesModal =
document.getElementById("closeNotesModal");

const notesTitle =
document.getElementById("notesTitle");

const notesText =
document.getElementById("notesText");

const saveNotesBtn =
document.getElementById("saveNotesBtn");

const manageNotesModal =
document.getElementById("manageNotesModal");

const manageNotesList =
document.getElementById("manageNotesList");

const closeManageNotes =
document.getElementById("closeManageNotes");

const videosBtn =
document.getElementById("videosBtn");

const manageVideosBtn =
document.getElementById("manageVideosBtn");

const videoModal =
document.getElementById("videoModal");

const closeVideoModal =
document.getElementById("closeVideoModal");

const videoTitle =
document.getElementById("videoTitle");

const youtubeLink =
document.getElementById("youtubeLink");

const videoFile =
document.getElementById("videoFile");

const saveVideoBtn =
document.getElementById("saveVideoBtn");

const manageVideoModal =
document.getElementById("manageVideoModal");

const manageVideoList =
document.getElementById("manageVideoList");

const closeManageVideo =
document.getElementById("closeManageVideo");
const manageTestModal =
document.getElementById("manageTestModal");

const manageTestList =
document.getElementById("manageTestList");

const closeManageTest =
document.getElementById("closeManageTest");
const managePdfBtn = document.getElementById("managePdfBtn");

const closeDashboard = document.getElementById("closeDashboard");

const pdfUploadModal =
document.getElementById("pdfUploadModal");

const closePdfModal =
document.getElementById("closePdfModal");

const savePdfBtn =
document.getElementById("savePdfBtn");

const pdfTitle =
document.getElementById("pdfTitle");

const pdfFile =
document.getElementById("pdfFile");

const pdfViewer =
document.getElementById("pdfViewer");

const pdfFrame =
document.getElementById("pdfFrame");

const closeViewer =
document.getElementById("closeViewer");

const managePdfModal =
document.getElementById("managePdfModal");

const managePdfList =
document.getElementById("managePdfList");

const closeManagePdf =
document.getElementById("closeManagePdf");

const passwordInput = document.getElementById("adminPassword");

const editableBoxes = document.querySelectorAll(".editable-content");

const scrollTopBtn = document.getElementById("scrollTop");

const quickHome = document.getElementById("quickHome");

const manageHomeworkModal =
document.getElementById("manageHomeworkModal");

const manageHomeworkList =
document.getElementById("manageHomeworkList");

const closeManageHomework =
document.getElementById("closeManageHomework");

const manageHomeworkBtn =
document.getElementById("manageHomeworkBtn");
const logoutBtn =
document.getElementById("logoutBtn");
const videoViewer =
document.getElementById("videoViewer");

const videoPlayer =
document.getElementById("videoPlayer");

const closeVideoViewer =
document.getElementById("closeVideoViewer");
const testsBtn =
document.getElementById("testsBtn");

const manageTestsBtn =
document.getElementById("manageTestsBtn");

const testModal =
document.getElementById("testModal");

const closeTestModal =
document.getElementById("closeTestModal");

const testTitle =
document.getElementById("testTitle");

const questionText =
document.getElementById("questionText");

const option1 =
document.getElementById("option1");

const option2 =
document.getElementById("option2");

const option3 =
document.getElementById("option3");

const option4 =
document.getElementById("option4");

const correctAnswer =
document.getElementById("correctAnswer");

const saveQuestionBtn =
document.getElementById("saveQuestionBtn");
const finishTestBtn =
document.getElementById("finishTestBtn");
const correctSound = new Audio("sounds/correct.mp3");

const wrongSound = new Audio("sounds/wrong.mp3");
const competitionModal =
document.getElementById("competitionModal");

const competitionBtn =
document.getElementById("competitionBtn");

const closeCompetitionModal =
document.getElementById("closeCompetitionModal");

const competitionTitle =
document.getElementById("competitionTitle");

const competitionDate =
document.getElementById("competitionDate");

const competitionTime =
document.getElementById("competitionTime");

const competitionVenue =
document.getElementById("competitionVenue");

const competitionDescription =
document.getElementById("competitionDescription");

const saveCompetitionBtn =
document.getElementById("saveCompetitionBtn");
const announcementsBtn =
document.getElementById("announcementBtn");

const announcementModal =
document.getElementById("announcementModal");

const closeAnnouncementModal =
document.getElementById("closeAnnouncementModal");

const announcementTitle =
document.getElementById("announcementTitle");

const announcementText =
document.getElementById("announcementText");

const saveAnnouncementBtn =
document.getElementById("saveAnnouncementBtn");
const recordsBtn =
document.getElementById("recordsBtn");

const recordsModal =
document.getElementById("recordsModal");

const closeRecordsModal =
document.getElementById("closeRecordsModal");

const studentName =
document.getElementById("studentName");

const saveStudentBtn =
document.getElementById("saveStudentBtn");
const resultModal =
document.getElementById("resultModal");

const closeResultModal =
document.getElementById("closeResultModal");

const resultSubject =
document.getElementById("resultSubject");

const resultChapter =
document.getElementById("resultChapter");

const resultScore =
document.getElementById("resultScore");

const saveResultBtn =
document.getElementById("saveResultBtn");
const recordSearch =
document.getElementById("recordSearch");
const galleryBtn =
document.getElementById("galleryBtn");

const galleryModal =
document.getElementById("galleryModal");

const closeGalleryModal =
document.getElementById("closeGalleryModal");

const imageTitle =
document.getElementById("imageTitle");

const imageFile =
document.getElementById("imageFile");

const saveImageBtn =
document.getElementById("saveImageBtn");

const studyImageViewer =
document.getElementById("studyImageViewer");


const syllabusBtn =
document.getElementById("syllabusBtn");

const syllabusModal =
document.getElementById("syllabusModal");

const closeSyllabusModal =
document.getElementById("closeSyllabusModal");

const syllabusText =
document.getElementById("syllabusText");

const saveSyllabusBtn =
document.getElementById("saveSyllabusBtn");
const contactBtn =
document.getElementById("contactBtn");

const contactModal =
document.getElementById("contactModal");

const closeContactModal =
document.getElementById("closeContactModal");

const saveContactBtn =
document.getElementById("saveContactBtn");

const academyAddress =
document.getElementById("academyAddress");

const academyPhone =
document.getElementById("academyPhone");

const academyEmail =
document.getElementById("academyEmail");

const academyWebsite =
document.getElementById("academyWebsite");

const academyMap =
document.getElementById("academyMap");
const teacherBtn =
document.getElementById("teacherBtn");

const teacherModal =
document.getElementById("teacherModal");

const closeTeacherModal =
document.getElementById("closeTeacherModal");

const teacherName =
document.getElementById("teacherName");

const teacherMessage =
document.getElementById("teacherMessage");

const teacherPhoto =
document.getElementById("teacherPhoto");

const saveTeacherBtn =
document.getElementById("saveTeacherBtn");
const settingsBtn =
document.getElementById("settingsBtn");

const settingsModal =
document.getElementById("settingsModal");

const closeSettingsModal =
document.getElementById("closeSettingsModal");

const academyName =
document.getElementById("academyName");

const websiteTitle =
document.getElementById("websiteTitle");

const footerText =
document.getElementById("footerText");

const academyLogo =
document.getElementById("academyLogo");

const saveSettingsBtn =
document.getElementById("saveSettingsBtn");

const resetWebsiteBtn =
document.getElementById("resetWebsiteBtn");

/*=========================================================
                ADMIN PASSWORD
=========================================================*/

const ADMIN_PASSWORD = "science70771";

/*
Later

Replace this with Firebase Authentication

*/

/*=========================================================
                LOADER
=========================================================*/

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

loader.style.pointerEvents = "none";

setTimeout(() => {

loader.style.display = "none";

},700);

},1500);

});

/*=========================================================
                MODAL
=========================================================*/

adminBtn.onclick=()=>{

if(adminLoggedIn){



}

else{

modal.style.display="block";

}

};
closeModal.onclick=()=>{

modal.style.display="none";

}

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

}

/*=========================================================
            NOTIFICATION
=========================================================*/

function notify(text,color="#00ffaa"){

const note=document.createElement("div");

note.innerText=text;

note.style.position="fixed";

note.style.right="20px";

note.style.top="20px";

note.style.padding="15px 25px";

note.style.background=color;

note.style.color="black";

note.style.fontWeight="bold";

note.style.borderRadius="12px";

note.style.zIndex="999999";

note.style.boxShadow="0 0 20px rgba(0,0,0,.3)";

document.body.appendChild(note);

setTimeout(()=>{

note.remove();

},2500);

}

/*=========================================================
            ADMIN LOGIN
=========================================================*/

loginBtn.onclick = () => {

    if(passwordInput.value.trim() !== ADMIN_PASSWORD){

        notify("Wrong Password", "#ff4b5c");
        return;

    }

    adminLoggedIn = true;
updateEditableMode();
notify("Admin Mode Activated");

modal.style.display = "none";

enableAdmin();


renderHomework();
renderNotes();
renderAnnouncements();
renderImages();
renderCompetitions();
renderRecords();

if(dashboard){

    dashboard.style.display = "block";

}
    if(addBtn){

        addBtn.style.display = "block";

    }

};

if(closeDashboard){

    closeDashboard.onclick = () => {

        dashboard.style.display = "none";

    };

}

if(closePdfModal){

    closePdfModal.onclick = () => {

        pdfUploadModal.style.display = "none";

    };

}
if(closeManageHomework){

    closeManageHomework.onclick = ()=>{

        manageHomeworkModal.style.display = "none";

    };

}
if(closeViewer){

    closeViewer.onclick = () => {

        pdfViewer.style.display = "none";

        pdfFrame.src = "";

    };

}
if(closeManagePdf){

    closeManagePdf.onclick = () => {

        managePdfModal.style.display = "none";

    };

}

if(managePdfBtn){

    managePdfBtn.onclick = () => {

        renderManagePDFs();

        dashboard.style.display = "none";

        managePdfModal.style.display = "block";

    };

}
if(homeworkBtn){

    homeworkBtn.onclick = ()=>{

        dashboard.style.display="none";

        homeworkModal.style.display="block";

    };

}
if(notesBtn){

    notesBtn.onclick = ()=>{

        dashboard.style.display = "none";

        notesModal.style.display = "block";

    };

}

if(manageNotesBtn){

    manageNotesBtn.onclick = ()=>{

        dashboard.style.display = "none";

        renderManageNotes();

        manageNotesModal.style.display = "block";

    };

}
if(videosBtn){

    videosBtn.onclick = ()=>{

        dashboard.style.display = "none";

        videoModal.style.display = "block";

    };

}

if(testsBtn){

    testsBtn.onclick = ()=>{

        dashboard.style.display = "none";

        testModal.style.display = "block";

    };

}
if(competitionBtn){

    competitionBtn.onclick = ()=>{

        competitionModal.style.display="block";

    };

}

if(closeCompetitionModal){

    closeCompetitionModal.onclick = ()=>{

        competitionModal.style.display="none";

    };

}
if(announcementsBtn){

    announcementsBtn.onclick = ()=>{

        announcementModal.style.display = "block";

    };

}

if(closeAnnouncementModal){

    closeAnnouncementModal.onclick = ()=>{

        announcementModal.style.display = "none";

    };

}
if(recordsBtn){

    recordsBtn.onclick = ()=>{

        recordsModal.style.display="block";

    };

}

if(closeRecordsModal){

    closeRecordsModal.onclick = ()=>{

        recordsModal.style.display="none";

    };

}
if(closeResultModal){

    closeResultModal.onclick = ()=>{

        resultModal.style.display = "none";

    };

}
if(galleryBtn){

    galleryBtn.onclick = ()=>{

        galleryModal.style.display = "block";

    };

}

if(closeGalleryModal){

    closeGalleryModal.onclick = ()=>{

        galleryModal.style.display = "none";

    };

}
if(syllabusBtn){

    syllabusBtn.onclick = ()=>{

        syllabusModal.style.display = "block";

        syllabusText.value = syllabusData.text;

    };

}

if(closeSyllabusModal){

    closeSyllabusModal.onclick = ()=>{

        syllabusModal.style.display = "none";

    };

}
if(contactBtn){

    contactBtn.onclick = ()=>{

        academyAddress.value = contactData.address;

        academyPhone.value = contactData.phone;

        academyEmail.value = contactData.email;

        academyWebsite.value = contactData.website;

        academyMap.value = contactData.map;

        contactModal.style.display = "block";

    };

}

if(closeContactModal){

    closeContactModal.onclick = ()=>{

        contactModal.style.display = "none";

    };

}
if(settingsBtn){

    settingsBtn.onclick = ()=>{

        academyName.value = settingsData.academyName;

        websiteTitle.value = settingsData.websiteTitle;

        footerText.value = settingsData.footer;

        settingsModal.style.display = "block";

    };

}

if(closeSettingsModal){

    closeSettingsModal.onclick = ()=>{

        settingsModal.style.display = "none";

    };

}
if(resetWebsiteBtn){

    resetWebsiteBtn.onclick = ()=>{

        const confirmReset = confirm(

        "⚠ This will permanently delete ALL website data.\n\nContinue?"

        );

        if(!confirmReset) return;

        localStorage.clear();

        notify("Website Reset Successfully");

        setTimeout(()=>{

            location.reload();

        },800);

    };

}
if(teacherBtn){

    teacherBtn.onclick = ()=>{

        teacherName.value = teacherData.name;

        teacherMessage.value = teacherData.message;

        teacherModal.style.display = "block";

    };

}

if(closeTeacherModal){

    closeTeacherModal.onclick = ()=>{

        teacherModal.style.display = "none";

    };

}
if(manageVideosBtn){

    manageVideosBtn.onclick = ()=>{

        dashboard.style.display = "none";

        renderManageVideos();

        manageVideoModal.style.display = "block";

    };

}
if(manageTestsBtn){

    manageTestsBtn.onclick = ()=>{

        dashboard.style.display = "none";

        renderManageTests();

        manageTestModal.style.display = "block";

    };

}

if(closeVideoModal){

    closeVideoModal.onclick = ()=>{

        videoModal.style.display = "none";

    };

}

if(closeTestModal){

    closeTestModal.onclick = ()=>{

        testModal.style.display = "none";

    };

}
if(closeManageTest){

    closeManageTest.onclick = ()=>{

        manageTestModal.style.display = "none";

    };

}
if(closeVideoViewer){

    closeVideoViewer.onclick = ()=>{

        videoPlayer.pause();

        videoPlayer.removeAttribute("src");

        videoPlayer.load();

        videoViewer.style.display = "none";

    };

}

if(closeManageVideo){

    closeManageVideo.onclick = ()=>{

        manageVideoModal.style.display = "none";

    };

}
if(manageHomeworkBtn){

    manageHomeworkBtn.onclick = ()=>{

        dashboard.style.display = "none";

        renderManageHomework();

        manageHomeworkModal.style.display = "block";

    };

}
if(closeHomeworkModal){

    closeHomeworkModal.onclick = ()=>{

        homeworkModal.style.display="none";

    };

}
if(uploadPdfBtn){

    uploadPdfBtn.onclick = () => {

        dashboard.style.display = "none";

        pdfUploadModal.style.display = "block";

    };

}
if(closeHomeworkModal){

    closeHomeworkModal.onclick = ()=>{

        homeworkModal.style.display = "none";

    };

}
/*=========================================================
            ENABLE ADMIN
=========================================================*/
function updateEditableMode(){

    editableBoxes.forEach(box=>{

        box.contentEditable = adminLoggedIn;

        if(adminLoggedIn){

            box.style.border = "2px solid #00ffaa";
            box.style.background = "rgba(0,255,170,.08)";

        }else{

            box.style.border = "none";
            box.style.background = "";

        }

    });

}
function enableAdmin(){

    adminBtn.innerHTML = "🚪 Logout";

    adminBtn.onclick = logoutAdmin;

    renderImages();

}

/*=========================================================
            LOGOUT
=========================================================*/

function logoutAdmin(){

    adminLoggedIn = false;
updateEditableMode();
    dashboard.style.display = "none";


    adminBtn.innerHTML =
    '<i class="fa-solid fa-user-shield"></i> Admin Login';

    adminBtn.onclick = ()=>{

        modal.style.display = "block";

    };

    

    renderHomework();

    renderNotes();
    
renderImages();

renderCompetitions();

renderRecords();


    if(typeof renderManagePDFs==="function"){

        renderManagePDFs();

    }

    if(typeof renderManageHomework==="function"){

        renderManageHomework();

    }

    if(typeof renderManageNotes==="function"){

        renderManageNotes();

    }

    notify("Logged Out");

}

/*=========================================================
        AUTO SAVE LOCAL STORAGE
=========================================================*/

editableBoxes.forEach((box,index)=>{

const key="scienceBox"+index;

box.innerHTML=

localStorage.getItem(key)||box.innerHTML;

box.addEventListener("input",()=>{

localStorage.setItem(key,box.innerHTML);

});

});
/*=========================================================
            PART 3A-2
            NAVIGATION & ANIMATIONS
=========================================================*/

/*=========================================================
        SMOOTH SCROLL FOR NAVIGATION
=========================================================*/

document.querySelectorAll('#navbar a').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/*=========================================================
        BACK TO TOP BUTTON
=========================================================*/

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=========================================================
        QUICK HOME BUTTON
=========================================================*/

quickHome.addEventListener("click",()=>{

document.getElementById("home").scrollIntoView({

behavior:"smooth"

});

});

/*=========================================================
        QUICK CHAT BUTTON
=========================================================*/

/*=========================================================
        SHOW BUTTON WHEN SCROLLED
=========================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>350){

scrollTopBtn.style.display="block";

}

else{

scrollTopBtn.style.display="none";

}

});

/*=========================================================
        ACTIVE NAVBAR LINK
=========================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("#navbar ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=sec.offsetTop-180;

if(pageYOffset>=top){

current=sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*=========================================================
        FADE IN ON SCROLL
=========================================================*/

const revealItems=document.querySelectorAll(".section");

function reveal(){

const trigger=window.innerHeight-120;

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.style.opacity="1";

item.style.transform="translateY(0px)";

}

});

}

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(70px)";

item.style.transition="1s";

});

window.addEventListener("scroll",reveal);

reveal();

/*=========================================================
        ANIMATED COUNTERS
=========================================================*/

const counters=document.querySelectorAll(".stat-card h2");

function animateCounter(counter,target){

let count=0;

const speed=30;

const timer=setInterval(()=>{

count++;

counter.innerText=count;

if(count>=target){

clearInterval(timer);

}

},speed);

}

animateCounter(document.getElementById("studentCount"),35);

animateCounter(document.getElementById("noteCount"),0);

animateCounter(document.getElementById("pdfCount"),0);

animateCounter(document.getElementById("videoCount"),0);

animateCounter(document.getElementById("competitionCount"),0);

/*=========================================================
        LIVE DATE
=========================================================*/

const today=new Date();

console.log("Today's Date:",today.toDateString());

/*=========================================================
        GREETING
=========================================================*/

setTimeout(()=>{

notify("🌹 Welcome to Science Hack Academy!");

},2200);

/*=========================================================
        BUTTON RIPPLE EFFECT
=========================================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.style.position="absolute";

circle.style.width="20px";

circle.style.height="20px";

circle.style.borderRadius="50%";

circle.style.background="rgba(255,255,255,.6)";

circle.style.left=e.offsetX+"px";

circle.style.top=e.offsetY+"px";

circle.style.transform="translate(-50%,-50%)";

circle.style.animation="ripple .6s linear";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/*=========================================================
        CONSOLE MESSAGE
=========================================================*/

console.log("Science Hack Academy Loaded Successfully");
/*=========================================================
            PART 3B-1
        COUNTDOWN + SEARCH + DARK MODE
=========================================================*/

/*=========================================================
        NEXT TEST COUNTDOWN
=========================================================*/

// Change this date anytime
let nextTestDate = new Date("2026-01-15T10:00:00");

function updateCountdown(){

const now = new Date().getTime();

const distance = nextTestDate - now;

if(distance <= 0){

document.getElementById("days").innerHTML="00";
document.getElementById("hours").innerHTML="00";
document.getElementById("minutes").innerHTML="00";
document.getElementById("seconds").innerHTML="00";

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();

/*=========================================================
            SEARCH RECORDS
=========================================================*/

const recordTable=document.querySelector(".recordTable");

if(recordTable){

const search=document.createElement("input");

search.placeholder="🔍 Search Student...";

search.style.width="100%";
search.style.padding="15px";
search.style.marginBottom="20px";
search.style.borderRadius="15px";
search.style.border="none";

recordTable.parentElement.insertBefore(search,recordTable);

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const rows=recordTable.querySelectorAll("tbody tr");

rows.forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(value)

? ""

: "none";

});

});

}

/*=========================================================
            DARK/LIGHT MODE
=========================================================*/

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.id="themeBtn";

darkBtn.style.position="fixed";

darkBtn.style.left="20px";

darkBtn.style.bottom="20px";

darkBtn.style.width="60px";

darkBtn.style.height="60px";

darkBtn.style.borderRadius="50%";

darkBtn.style.border="none";

darkBtn.style.fontSize="24px";

darkBtn.style.cursor="pointer";

darkBtn.style.background="#00d9ff";

darkBtn.style.zIndex="999";

document.body.appendChild(darkBtn);

let dark=true;

darkBtn.onclick=()=>{

dark=!dark;

if(!dark){

document.documentElement.style.setProperty("--bg","#ffffff");
document.documentElement.style.setProperty("--bg2","#f4f4f4");
document.documentElement.style.setProperty("--text","#222");

darkBtn.innerHTML="☀️";

notify("Light Mode");

}else{

document.documentElement.style.setProperty("--bg","#07111f");
document.documentElement.style.setProperty("--bg2","#0c1f38");
document.documentElement.style.setProperty("--text","#d7e8ff");

darkBtn.innerHTML="🌙";

notify("Dark Mode");

}

};

/*=========================================================
            LIVE CLOCK
=========================================================*/

const clock=document.createElement("div");

clock.style.position="fixed";
clock.style.left="20px";
clock.style.top="20px";
clock.style.padding="12px 20px";
clock.style.background="rgba(0,0,0,.4)";
clock.style.backdropFilter="blur(10px)";
clock.style.borderRadius="15px";
clock.style.fontWeight="bold";
clock.style.zIndex="999";

document.body.appendChild(clock);

function updateClock(){

const d=new Date();

clock.innerHTML=d.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

/*=========================================================
            AUTO YEAR
=========================================================*/

console.log("Year :",new Date().getFullYear());

/*=========================================================
            PART 3B-2
        CHAT + BACKUP + ANNOUNCEMENTS
=========================================================*/

/*=========================================================
            CHAT SYSTEM (OFFLINE)
=========================================================*/

const chatInput = document.getElementById("chatInput");

const sendBtn =
document.getElementById("sendMessage");

sendBtn.addEventListener(
    "click",
    sendChatMessage
);

const chatMessages =
document.getElementById("chatMessages");

let messages = JSON.parse(
localStorage.getItem("academyChat")
) || [];

function saveChat(){

localStorage.setItem(
"academyChat",
JSON.stringify(messages)
);

}

function renderChat(){

chatMessages.innerHTML="";

messages.forEach((msg,index)=>{
const bubble=document.createElement("div");

bubble.className=(msg.sender==="👨‍🏫 Teacher")

? "received"

: "sent";

bubble.innerHTML = `
<div class="sender">
${msg.sender}
</div>

<div class="message">
${msg.message}
</div>

<div class="time">
${msg.displayTime || ""}
</div>
`;
if(adminLoggedIn || msg.owner === currentUser){

    const del = document.createElement("button");

    del.innerHTML = "❌";

    del.style.float = "right";
    del.style.marginTop = "8px";
    del.style.border = "none";
    del.style.background = "transparent";
    del.style.cursor = "pointer";
    del.style.fontSize = "18px";

    del.onclick = () => {

        deleteDoc(

    doc(db,"chat",msg.id)

);

        
    };

    bubble.appendChild(del);

}

if(msg.sender==="👨‍🏫 Teacher"){

bubble.style.borderLeft="5px solid gold";

}
chatMessages.appendChild(bubble);
bubble.addEventListener("dblclick",()=>{

const like=document.createElement("div");

like.innerHTML="❤️";

like.style.fontSize="22px";

like.style.marginTop="6px";

bubble.appendChild(like);

setTimeout(()=>{

like.remove();

},2500);

});
bubble.addEventListener("contextmenu",(e)=>{

e.preventDefault();

navigator.clipboard.writeText(msg.message);

notify("📋 Message Copied");

});
});
chatMessages.scrollTop = chatMessages.scrollHeight;

}
function startRealtimeChat(){

    const q = query(

        collection(db,"chat"),

        orderBy("time")

    );

    onSnapshot(q,(snapshot)=>{

        messages = [];

        snapshot.forEach(doc=>{

            messages.push({

    id: doc.id,

    ...doc.data()

});

        });

        renderChat();

    });

}



sendBtn.addEventListener("click",sendChatMessage);

chatInput.addEventListener("keypress",e=>{

if(e.key==="Enter"){

sendChatMessage();

}

});

async function sendChatMessage(){

    const text = chatInput.value.trim();

    if(text=="") return;

    const now = new Date();

    await addDoc(

        collection(db,"chat"),

        {

            sender: adminLoggedIn
                ? "👨‍🏫 Teacher"
                : currentUser,

            owner: currentUser,

            message: text,

            time: serverTimestamp(),

            displayTime: now.toLocaleTimeString()

        }

    );

    chatInput.value = "";

    chatInput.focus();

}

/*=========================================
        TYPING INDICATOR
=========================================*/

const typing = document.getElementById("typingStatus");

chatInput.addEventListener("input", () => {

    typing.innerHTML = currentUser + " is typing...";

    clearTimeout(window.typingTimer);

    window.typingTimer = setTimeout(() => {

        typing.innerHTML = "";

    }, 1200);

});
/*=========================================
        EMOJI BUTTON
=========================================*/

const emojiBtn=document.getElementById("emojiBtn");

const emojiList=[

"😀","😁","😂","🤣","😊","😍","👍","👏","🔥","🎉","📚","🧪","⚛️","🌹"

];

let emojiIndex=0;

emojiBtn.onclick=()=>{

chatInput.value+=emojiList[emojiIndex];

emojiIndex++;

if(emojiIndex>=emojiList.length){

emojiIndex=0;

}

chatInput.focus();

};

/*===========================
        CLEAR CHAT
===========================*/
/*=========================================================
            CLEAR CHAT
=========================================================*/

/*=========================================================
            EXPORT BACKUP
=========================================================*/

const exportBtn=document.createElement("button");

exportBtn.innerHTML="📤 Export Backup";

exportBtn.style.margin="20px";

document.body.appendChild(exportBtn);

exportBtn.onclick=()=>{

const data={

chat:messages,

homework:

localStorage.getItem("scienceBox0"),

tests:

localStorage.getItem("scienceBox1"),

competition:

localStorage.getItem("scienceBox2"),

records:

localStorage.getItem("scienceBox3"),

announcement:

localStorage.getItem("scienceBox4"),

notes:

localStorage.getItem("scienceBox5")

};

const blob=new Blob(

[JSON.stringify(data,null,2)],

{type:"application/json"}

);

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="ScienceHackBackup.json";

link.click();

notify("Backup Downloaded");

};

/*=========================================================
            IMPORT BACKUP
=========================================================*/

const importInput=document.createElement("input");

importInput.type="file";

importInput.accept=".json";

importInput.style.display="none";

document.body.appendChild(importInput);

const importBtn=document.createElement("button");

importBtn.innerHTML="📥 Import Backup";

document.body.appendChild(importBtn);

importBtn.onclick=()=>{

importInput.click();

};

importInput.onchange=e=>{

const file=e.target.files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=function(){

const data=JSON.parse(reader.result);

messages=data.chat||[];

saveChat();

renderChat();
updateCounter();

notify("Backup Imported");

};

reader.readAsText(file);

};

/*=========================================================
            ANNOUNCEMENT TICKER
=========================================================*/

const ticker=document.createElement("marquee");

ticker.innerHTML=

"🔬 Welcome to Science Hack Academy • Homework, Tests and Announcements will appear here •";

ticker.style.position="fixed";

ticker.style.bottom="0";

ticker.style.left="0";

ticker.style.width="100%";

ticker.style.background="#00d9ff";

ticker.style.color="black";

ticker.style.padding="10px";

ticker.style.fontWeight="bold";

ticker.style.zIndex="999";

document.body.appendChild(ticker);

/*=========================================================
            ADMIN SHORTCUTS
=========================================================*/

document.addEventListener("keydown",e=>{

if(e.ctrlKey && e.key==="s"){

e.preventDefault();

notify("Everything Saved");

}

if(e.ctrlKey && e.key==="l"){

e.preventDefault();

logoutAdmin();

}

});

/*=========================================================
            END OF PART 3B-2
=========================================================*/
function playBeep(){

const audio=new Audio(

"https://actions.google.com/sounds/v1/cartoon/pop.ogg"

);

audio.play().catch(()=>{});
}
const msgCounter=document.createElement("div");

msgCounter.id="msgCounter";

msgCounter.style.position="fixed";

msgCounter.style.right="20px";

msgCounter.style.top="90px";

msgCounter.style.background="#00ffaa";

msgCounter.style.padding="10px 18px";

msgCounter.style.borderRadius="15px";

msgCounter.style.fontWeight="bold";

document.body.appendChild(msgCounter);

function updateCounter(){

academyStats.messages = messages.length;

saveStats();

msgCounter.innerHTML =
"💬 " + academyStats.messages + " Messages";


}
let academyStats = JSON.parse(
    localStorage.getItem("academyStats")
) || {

    homework: 0,
    tests: 0,
    announcements: 0,
    notes: 0,
    pdfs: 0,
    videos: 0,
    records: 0,
    competitions: 0,
    messages: 0

};

function saveStats(){

    localStorage.setItem(
        "academyStats",
        JSON.stringify(academyStats)
    );

}
updateCounter();
/*=========================================
        HOMEWORK SYSTEM
=========================================*/
let homeworkData = null;

/*=========================================================
                FIREBASE HOMEWORK SAVE
=========================================================*/

async function saveHomework(){

    try{

        await saveData("academyHomework", homeworkData);

        notify("Homework Saved");

    }

    catch(error){

        console.error("Homework Save Error:", error);

        notify("Failed to save homework");

    }

}

/*=========================================================
            LOAD HOMEWORK FROM FIREBASE
=========================================================*/

async function loadHomework(){

    try{

        const data = await loadData("academyHomework");

        if(data){

            homeworkData = data;

            renderHomework();

            renderManageHomework();

        }

    }

    catch(error){

        console.error("Homework Load Error:", error);

    }

}

function renderHomework(){

    const box =
    document.getElementById("homeworkContent");

    if(!box) return;

    if(homeworkData==null){

        return;

    }

    box.innerHTML = `

        <div class="homework-card">

            <h2>
                ${homeworkData.title}
            </h2>

            <p>
                ${homeworkData.text}
            </p>

        </div>

    `;

}
function renderManageHomework(){

    manageHomeworkList.innerHTML = "";

    if(homeworkData==null){

        manageHomeworkList.innerHTML = `
            <p>No Homework Added.</p>
        `;

        return;

    }

    manageHomeworkList.innerHTML = `

        <div class="pdf-card">

            <h3>${homeworkData.title}</h3>

            <p>${homeworkData.text}</p>

            <button onclick="editHomework()">

                ✏ Edit

            </button>

            <button onclick="deleteHomework()">

                🗑 Delete

            </button>

        </div>

    `;

}
function editHomework(){

    homeworkModal.style.display = "block";

    manageHomeworkModal.style.display = "none";

    homeworkTitle.value = homeworkData.title;

    homeworkText.value = homeworkData.text;

}
async function deleteHomework(){

    if(!confirm("Delete this homework?")) return;

    homeworkData = null;

try{

    await deleteDoc(doc(db,"academy","academyHomework"));

    notify("Homework Deleted");

}

catch(error){

    console.error("Homework Delete Error:", error);

    notify("Failed to delete homework");

    return;

}


    document.getElementById("homeworkContent").innerHTML = `

        <div class="empty-box">

            <i class="fa-solid fa-circle-info"></i>

            <h3>No Homework Available</h3>

            <p>

                Homework has not been assigned yet.

                Please check again later.

            </p>

        </div>

    `;

    renderManageHomework();

    manageHomeworkModal.style.display = "none";


}
// Make functions available to inline onclick buttons
window.editHomework = editHomework;
window.deleteHomework = deleteHomework;
/*=========================================
        PDF LIBRARY - STEP 4
=========================================*/
/*=========================================
        NOTES SYSTEM
=========================================*/
let notesData = null;
async function saveNotes(){

    try{

        await saveData("academyNotes", notesData);

        notify("Notes Saved");

    }

    catch(error){

        console.error("Notes Save Error:", error);

        notify("Failed to save notes");

    }

}
/*=========================================================
            LOAD NOTES FROM FIREBASE
=========================================================*/

async function loadNotes(){

    try{

        const data = await loadData("academyNotes");

        if(data){

            notesData = data;

        }else{

            notesData = [];

        }

        renderNotes();

        renderManageNotes();

    }

    catch(error){

        console.error("Notes Load Error:", error);

    }

}
function renderNotes(){

    const box =

    document.getElementById("notesContent");

    if(!box) return;

    if(!notesData){

    box.innerHTML = `

        <div class="empty-box">

            <i class="fa-solid fa-circle-info"></i>

            <h3>No Notes Available</h3>

            <p>

                Notes have not been uploaded yet.

                Please check again later.

            </p>

        </div>

    `;

    return;

}

box.innerHTML = `

    <div class="homework-card">

        <h2>

            ${notesData.title}

        </h2>

        <p>

            ${notesData.text}

        </p>

    </div>

`;
}
function renderManageNotes(){

    manageNotesList.innerHTML = "";

    if(notesData==null){

        manageNotesList.innerHTML = `
            <p>No Notes Added.</p>
        `;

        return;

    }

    manageNotesList.innerHTML = `

        <div class="pdf-card">

            <h3>${notesData.title}</h3>

            <p>${notesData.text}</p>

            <button onclick="editNotes()">

                ✏ Edit

            </button>

            <button onclick="deleteNotes()">

                🗑 Delete

            </button>

        </div>

    `;

}
function editNotes(){

    notesModal.style.display = "block";

    manageNotesModal.style.display = "none";

    notesTitle.value = notesData.title;

    notesText.value = notesData.text;

}

async function deleteNotes(){

    if(!confirm("Delete Notes?")) return;

    notesData = null;

    try{

        await deleteDoc(doc(db,"academy","academyNotes"));

        renderNotes();

        renderManageNotes();

        manageNotesModal.style.display = "none";

        notify("Notes Deleted");

    }

    catch(error){

        console.error("Notes Delete Error:", error);

        notify("Failed to delete notes");

    }

}
window.editNotes = editNotes;
window.deleteNotes = deleteNotes;
/*=========================================
        VIDEO SYSTEM
=========================================*/


let videoLibrary = [];

async function saveVideos(){

    try{

        await saveData("academyVideos", videoLibrary);

        notify("Videos Saved");

    }

    catch(error){

        console.error("Video Save Error:", error);

        notify("Failed to save videos");

    }
}
/*=========================================================
            LOAD VIDEOS FROM FIREBASE
=========================================================*/

async function loadVideos(){

    try{

        const data = await loadData("academyVideos");

        if(data){

            videoLibrary = data;

        }else{

            videoLibrary = [];

        }

        renderVideos();

        renderManageVideos();

    }

    catch(error){

        console.error("Video Load Error:", error);

    }

}
function renderVideos(){

    const container =

    document.getElementById("videosContent");

    if(!container) return;

    container.innerHTML = "";

    if(videoLibrary.length===0){

        container.innerHTML = `

        <div class="empty-box">

            <i class="fa-solid fa-video"></i>

            <h3>No Videos Uploaded</h3>

            <p>

                Your teacher hasn't uploaded any videos yet.

            </p>

        </div>

        `;

        return;

    }

    videoLibrary.forEach(video=>{

        if(video.type==="youtube"){

         let id = "";

try{

    const url = new URL(video.url);

    if(url.hostname.includes("youtu.be")){

        id = url.pathname.substring(1);

    }

    else{

        id = url.searchParams.get("v");

        if(!id && url.pathname.includes("/shorts/")){

            id = url.pathname.split("/shorts/")[1];

        }

    }

}catch(e){}

            

            container.innerHTML += `

            <div class="pdf-card">

                <h3>${video.title}</h3>

<iframe
width="100%"
height="220"
src="https://www.youtube.com/embed/${id}?rel=0"
title="${video.title}"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin"
allowfullscreen>
</iframe>

            </div>

            `;

        }

        else{

            container.innerHTML += `

            <div class="pdf-card">

                <h3>${video.title}</h3>
<video
controls
playsinline
preload="metadata"
style="width:100%;height:220px;background:#000;">

    <source
    src="${video.url}"
    type="video/mp4">

    Your browser does not support the video tag.

</video>

            </div>

            `;

        }

    });

}
function renderManageVideos(){

    manageVideoList.innerHTML = "";

    if(videoLibrary.length===0){

        manageVideoList.innerHTML = `
            <p>No Videos Uploaded.</p>
        `;

        return;

    }

    videoLibrary.forEach((video,index)=>{

        manageVideoList.innerHTML += `

        <div class="pdf-card">

            <h3>${video.title}</h3>

            <p>${video.date}</p>

            <button onclick="playVideo(${index})">

                ▶ Open

            </button>

            <button onclick="renameVideo(${index})">

                ✏ Rename

            </button>

            <button onclick="deleteVideo(${index})">

                🗑 Delete

            </button>

        </div>

        `;

    });

}
function playVideo(index){

    const video = videoLibrary[index];

    const videoPlayer =
    document.getElementById("videoPlayer");

    const videoViewer =
    document.getElementById("videoViewer");

    if(video.type==="youtube"){

        window.open(video.url,"_blank");

        return;

    }

    videoPlayer.src = video.url;

    videoViewer.style.display = "block";

}

async function renameVideo(index){

    const newName = prompt(

        "Enter new video title:",

        videoLibrary[index].title

    );

    if(!newName) return;

    videoLibrary[index].title = newName.trim();

    await saveVideos();

    renderVideos();

    renderManageVideos();

    notify("Video Renamed");

}
async function deleteVideo(index){

    if(!confirm("Delete this video?")) return;

    videoLibrary.splice(index,1);

    try{

        await saveVideos();

        renderVideos();

        renderManageVideos();

        notify("Video Deleted");

    }

    catch(error){

        console.error(
            "Video Delete Error:",
            error
        );

        notify("Failed to delete video");

    }

}


window.deleteVideo = deleteVideo;
window.renameVideo = renameVideo;
window.playVideo = playVideo;
/*=========================================
        TEST SYSTEM
=========================================*/
let contactData =

JSON.parse(

localStorage.getItem("academyContact")

)

||

{

address:"",

phone:"",

email:"",

website:"",

map:""

};
let syllabusData =
JSON.parse(
    localStorage.getItem("academySyllabus")
)
||
{
    text: ""
};
let settingsData =

JSON.parse(

localStorage.getItem("academySettings")

)

||

{

academyName:"Science Hack Academy",

websiteTitle:"Science Hack Academy",

footer:"Science Hack Academy © 2026",

logo:""

};
let recordsLibrary = [];

let testLibrary = [];


let currentTest = {

    title: "",

    questions: []

};
let currentQuestion = 0;

let testTimer;

let timeLeft = 0;

let studentAnswers = [];

let activeTest = null;

let competitionLibrary = [];

let announcementLibrary = [];

let teacherData =

JSON.parse(

localStorage.getItem("academyTeacher")

)

||

{

name:"",

message:"",

photo:""

};
let logoData = {

    url: ""

};

let imageLibrary = [];
async function saveImages(){

    await saveData(

        "gallery",

        imageLibrary

    );

}
async function saveLogo(){

    await saveData(

        "academyLogo",

        logoData

    );

}
async function loadLogo(){

    const data = await loadData(

        "academyLogo"

    );

    if(data){

        logoData = data;

    }

    renderLogo();

}
function renderLogo(){

    if(
        academyLogo &&
        logoData.url
    ){

        academyLogo.src = logoData.url;

    }

}

async function loadImages(){

    const data = await loadData("gallery");

    if(data){

        imageLibrary = data;

    }

    renderImages();

}
let currentStudentIndex = -1;

function saveContact(){

localStorage.setItem(

"academyContact",

JSON.stringify(contactData)

);

}
function saveSyllabus(){

    localStorage.setItem(
        "academySyllabus",
        JSON.stringify(syllabusData)
    );

}
async function saveSettings(){

    await saveData(

        "academySettings",

        settingsData

    );

}
async function loadSettings(){

    const data = await loadData(
        "academySettings"
    );

    if(data){

        settingsData = data;

    }

    applySettings();

}

async function saveTeacher(){

    await saveData(

        "teacherProfile",

        teacherData

    );

}
async function loadTeacherProfile(){

    const teacherFromFirebase = await loadData("teacherProfile");

    if(teacherFromFirebase){

        teacherData = teacherFromFirebase;

    }

    renderTeacher();

}
async function saveTests(){

    try{

        await saveData(
            "academyTests",
            testLibrary
        );

        notify("Tests Saved");

    }

    catch(error){

        console.error(
            "Tests Save Error:",
            error
        );

        notify("Failed to save tests");

    }

}
/*=========================================================
            LOAD TESTS FROM FIREBASE
=========================================================*/

async function loadTests(){

    try{

        const data =
        await loadData("academyTests");

        if(data){

            testLibrary = data;

        }

        else{

            testLibrary = [];

        }

        renderTests();

        renderManageTests();

    }

    catch(error){

        console.error(
            "Tests Load Error:",
            error
        );

    }

}
async function saveCompetitions(){

    try{

        await saveData(
            "academyCompetitions",
            competitionLibrary
        );

        notify("Competition Saved");

    }

    catch(error){

        console.error(
            "Competition Save Error:",
            error
        );

        notify("Failed to save competition");

    }

}
/*=========================================================
        LOAD COMPETITIONS FROM FIREBASE
=========================================================*/

async function loadCompetitions(){

    try{

        const data =
        await loadData("academyCompetitions");

        if(data){

            competitionLibrary = data;

        }else{

            competitionLibrary = [];

        }

        renderCompetitions();

    }

    catch(error){

        console.error(
            "Competition Load Error:",
            error
        );

    }

}
async function saveAnnouncements(){

    try{

        await saveData(
    "academyAnnouncements",
    announcementLibrary
);

        notify("Announcement Saved");

    }

    catch(error){

        console.error(
            "Announcement Save Error:",
            error
        );

        notify("Failed to save announcement");

    }

}
/*=========================================================
        LOAD ANNOUNCEMENTS FROM FIREBASE
=========================================================*/

async function loadAnnouncements(){

    try{

        const data =
        await loadData("academyAnnouncements");

        if(data){

    announcementLibrary = data;

}

else{

    announcementLibrary = [];

}

        renderAnnouncements();

        

    }

    catch(error){

        console.error(
            "Announcement Load Error:",
            error
        );

    }

}
async function saveRecords(){

    try{

        await saveData(
            "academyRecords",
            recordsLibrary
        );

        notify("Records Saved");

    }

    catch(error){

        console.error(
            "Records Save Error:",
            error
        );

        notify("Failed to save records");

    }

}

/*=========================================================
            LOAD RECORDS FROM FIREBASE
=========================================================*/
async function loadRecords(){

    try{

        const data =
        await loadData("academyRecords");

        if(data){

            recordsLibrary = data;

        }else{

            recordsLibrary = [];

        }

        renderRecords();

    }

    catch(error){

        console.error(
            "Records Load Error:",
            error
        );

    }

}

function renderTests(){

    const box = document.getElementById("testContent");

    if(!box) return;

    box.innerHTML = "";

    if(testLibrary.length===0){

        box.innerHTML = `

        <div class="empty-box">

            <i class="fa-solid fa-flask"></i>

            <h3>No Tests Available</h3>

            <p>

                Your teacher hasn't uploaded any tests yet.

            </p>

        </div>

        `;

        return;

    }

    testLibrary.forEach((test,index)=>{

        box.innerHTML += `

        <div class="pdf-card">

            <h2>${test.title}</h2>

            <p>

                ${test.questions.length} Questions

            </p>

            <button onclick="startTest(${index})">

                ▶ Start Test

            </button>
${adminLoggedIn ? `

<button onclick="deleteTest(${index})">

    🗑 Delete

</button>

` : ""}
        </div>

        `;

    });

}
function startTest(index){

    activeTest = testLibrary[index];

    currentQuestion = 0;

    studentAnswers = [];

    timeLeft = activeTest.questions.length * 30;

    renderQuestion();

    startTimer();

}
function startTimer(){

    clearInterval(testTimer);

    testTimer = setInterval(()=>{

        timeLeft--;

        const timer =
        document.getElementById("testTimer");

        if(timer){

            timer.innerHTML =
            "⏱ Time Left : " + timeLeft + " sec";

        }

        if(timeLeft<=0){

            clearInterval(testTimer);

            finishTest();

        }

    },1000);

}

function renderQuestion(){

    const box = document.getElementById("testContent");

if(!box) return;

const q = activeTest.questions[currentQuestion];

box.style.opacity = "0";

setTimeout(()=>{

box.innerHTML = `

<div class="homework-card">

<button class="closeTestBtn"
onclick="exitTest()">
✖
</button>

        <h2>

            ${activeTest.title}

        </h2>
        
<div class="progressBar">

    <div

        class="progressFill"

        style="width:${
            ((currentQuestion+1)/
            activeTest.questions.length)*100
        }%;">

    </div>

</div>
      <h3>

    📖 Question

    ${currentQuestion+1}

    of

    ${activeTest.questions.length}

</h3>
<div style="
width:100%;
height:12px;
background:#20364f;
border-radius:20px;
overflow:hidden;
margin:20px 0;">

<div style="
width:${((currentQuestion+1)/activeTest.questions.length)*100}%;
height:100%;
background:linear-gradient(90deg,#00d9ff,#00ffaa);
transition:.5s;
"></div>

</div>
<p style="
font-size:26px;
font-weight:bold;
line-height:1.6;
margin:30px 0;">


            ${q.question}

        </p>
<div id="testTimer"

style="

font-size:22px;

font-weight:bold;

color:#00ffaa;

margin:15px 0;

">

⏱ Time Left

</div>
        <div id="optionsBox"></div>

        <button id="nextQuestionBtn">

            Next ➜

        </button>

    </div>

    `;

    const optionBox = document.getElementById("optionsBox");

    q.options.forEach((option,index)=>{

    optionBox.innerHTML += `

    <div

        class="optionCard"

        onclick="selectAnswer(${index})">

        <span class="optionLetter">

            ${String.fromCharCode(65+index)}

        </span>

        <span class="optionText">

            ${option}

        </span>

    </div>

    `;

});

    document.getElementById("nextQuestionBtn").onclick = nextQuestion;

box.style.opacity = "1";

},180);

}
function selectAnswer(index){

    studentAnswers[currentQuestion] = index;
if(index===activeTest.questions[currentQuestion].answer){

    correctSound.play();

}else{

    wrongSound.play();

}
    document.querySelectorAll(".optionCard").forEach((card,i)=>{

        card.style.background = "";
        card.style.border = "";
        card.style.transform = "scale(1)";
        card.style.boxShadow = "";

        if(i===index){

            card.style.background =
            "linear-gradient(135deg,#00d9ff,#00ffaa)";

            card.style.color = "#000";

            card.style.border =
            "2px solid white";

            card.style.transform =
            "scale(1.03)";

            card.style.boxShadow =
            "0 0 25px rgba(0,255,170,.5)";
        }

    });

}
function nextQuestion(){

    if(studentAnswers[currentQuestion]===undefined){

        alert("Please select an answer.");

        return;

    }

    currentQuestion++;

    if(currentQuestion >= activeTest.questions.length){

        finishTest();

        return;

    }

    renderQuestion();

}
function finishTest(){

    clearInterval(testTimer);

    let score = 0;

    activeTest.questions.forEach((q,i)=>{

        if(studentAnswers[i]===q.answer){

            score++;

        }

    });

    const percent = Math.round(
        (score/activeTest.questions.length)*100
    );

    let stars = "⭐";

    if(percent>=90) stars="⭐⭐⭐⭐⭐";
    else if(percent>=75) stars="⭐⭐⭐⭐";
    else if(percent>=60) stars="⭐⭐⭐";
    else if(percent>=40) stars="⭐⭐";
    else stars="⭐";
let badge = "";

if(percent===100){

badge="🏆 SCIENCE MASTER";

}

else if(percent>=80){

badge="🥇 EXCELLENT";

}

else if(percent>=60){

badge="🥈 GOOD JOB";

}

else if(percent>=40){

badge="🥉 NICE TRY";

}

else{

badge="📚 KEEP LEARNING";

}
    document.getElementById("testContent").innerHTML=`

    <div class="homework-card">

        <h1>🎉 Test Completed!</h1>

        <h2>${activeTest.title}</h2>

        <br>

        <h1 style="
        color:#00ffaa;
        font-size:60px;">
        ${percent}%
        </h1>

        <h2>

            Score :

            ${score}

            /

            ${activeTest.questions.length}

        </h2>

       <h2>${stars}</h2>

<div class="resultBadge">

    ${badge}

</div>

<br>

<div style="
margin-top:35px;
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:15px;
">

<button class="btn"
onclick="restartTest()">

🔄 Restart Test

</button>

<button class="btn"
onclick="renderTests()">

📚 Other Tests

</button>

<button class="btn"
onclick="reviewAnswers()">

📑 Review Answers

</button>

</div>
        
    </div>

    `;

}
function restartTest(){

    startTest(

        testLibrary.indexOf(activeTest)

    );

}
function showResultScreen(){

    finishTest();

}

function reviewAnswers(){

    let html = `

<div class="homework-card">

<button
class="closeTestBtn"
onclick="exitTest()">

✖

</button>
    

    <h1>📑 Answer Review</h1>

    `;

    activeTest.questions.forEach((q,i)=>{

        const user = studentAnswers[i];

        const correct = q.answer;

        const ok = user===correct;

        html += `

        <div style="
        margin:25px 0;
        padding:20px;
        border-radius:15px;
        background:#20364f;
        text-align:left;
        ">

        <h3>

        ${ok?"✅":"❌"}

        Question ${i+1}

        </h3>

        <p>

        <b>${q.question}</b>

        </p>

        <p>

        Your Answer :

        ${q.options[user]??"Not Answered"}

        </p>

        <p style="color:#00ffaa;">

        Correct Answer :

        ${q.options[correct]}

        </p>

        </div>

        `;

    });

    html += `

    <div style="
display:flex;
justify-content:center;
gap:15px;
margin-top:30px;
flex-wrap:wrap;
">

<button class="btn"
onclick="showResultScreen()">

❌ Back

</button>

<button class="btn"
onclick="restartTest()">

🔄 Restart

</button>

<button class="btn"
onclick="renderTests()">

📚 Other Tests

</button>

</div>

    </div>

    `;

    document.getElementById("testContent").innerHTML = html;

}
function exitTest(){

    clearInterval(testTimer);

    activeTest = null;

    renderTests();

}
async function deleteTest(index){

    if(!confirm("Delete this test?")) return;

    testLibrary.splice(index,1);

    try{

        await saveTests();

        renderTests();

        renderManageTests();

        notify("Test Deleted");

    }

    catch(error){

        console.error(
            "Test Delete Error:",
            error
        );

        notify("Failed to delete test");

    }

}
window.startTest = startTest;
window.previewTest = previewTest;
window.renameTest = renameTest;
window.deleteTest = deleteTest;

window.selectAnswer = selectAnswer;
window.nextQuestion = nextQuestion;

window.finishTest = finishTest;
window.restartTest = restartTest;
window.reviewAnswers = reviewAnswers;
window.showResultScreen = showResultScreen;

window.renderTests = renderTests;

window.exitTest = exitTest;


function renderCompetitions(){

    const box =
    document.getElementById("competitionContent");

    if(!box) return;

    box.innerHTML = "";

    if(competitionLibrary.length===0){

        box.innerHTML = `

        <div class="empty-box">

            <i class="fa-solid fa-medal"></i>

            <h3>No Competition Added</h3>

            <p>

                Upcoming competitions will appear here.

            </p>

        </div>

        `;

        return;

    }
competitionLibrary.forEach((item,index)=>{

    box.innerHTML += `

    <div class="pdf-card">

        <h2>${item.title}</h2>

        <p>📅 ${item.date}</p>

        <p>🕒 ${item.time}</p>

        <p>📍 ${item.venue}</p>

        <p>${item.description}</p>

        ${
        adminLoggedIn
        ? `
        <br>

        <button onclick="deleteCompetition(${index})">

            🗑 Delete

        </button>
        `
        : ""
        }

    </div>

    `;

});

}
function renderAnnouncements(){

    const box =
    document.getElementById("announcementContent");

    if(!box) return;

    box.innerHTML = "";

    if(announcementLibrary.length===0){

        box.innerHTML = `

        <div class="empty-box">

            <i class="fa-solid fa-bullhorn"></i>

            <h3>No Announcements Yet</h3>

            <p>

                New announcements will appear here.

            </p>

        </div>

        `;

        return;

    }

    announcementLibrary.forEach((item,index)=>{

        box.innerHTML += `

        <div class="pdf-card">

            <h2>${item.title}</h2>

            <p style="margin:15px 0;">

                ${item.text}

            </p>

            <small>

                📅 ${item.date}

            </small>

            ${adminLoggedIn ? `

            <br><br>

            <button
            onclick="deleteAnnouncement(${index})">

            🗑 Delete

            </button>

            ` : ""}

        </div>

        `;

    });
    box.style.opacity="0";

setTimeout(()=>{

box.style.opacity="1";

},150);

}
function renderRecords(){

    const box =
    document.getElementById("recordsContent");
const keyword =

recordSearch

? recordSearch.value.toLowerCase()

: "";

    if(!box) return;

    box.innerHTML="";

    if(recordsLibrary.length===0){

        box.innerHTML=`

        <div class="empty-box">

            <i class="fa-solid fa-user-graduate"></i>

            <h3>No Students Added</h3>

            <p>

                Add students from the Admin Dashboard.

            </p>

        </div>

        `;

        return;

    }

    recordsLibrary.forEach((student,index)=>{

    const searchable =

    student.name.toLowerCase()

    +

    JSON.stringify(student.results).toLowerCase();

    if(

        keyword!=="" &&

        !searchable.includes(keyword)

    ) return;
box.innerHTML += `

<div class="record-card">

<h2>👨‍🎓 ${student.name}</h2>

<div class="resultList">

${student.results.map(result=>`

<div class="resultItem">

<div class="subject">

${result.subject}

</div>

<div class="chapter">

${result.chapter}

</div>

<div class="score">

🏆 ${result.score}

</div>

</div>

`).join("")}

</div>

${adminLoggedIn?`

<button onclick="addResult(${index})">

➕ Add Result

</button>

<button onclick="deleteStudent(${index})">

🗑 Delete Student

</button>

`:""}

</div>

`;

    });
box.style.opacity="0";

setTimeout(()=>{

box.style.opacity="1";

},150);
}
function renderImages(){

    const box =

    document.getElementById("imageContent");

    if(!box) return;

    box.innerHTML = "";

    if(imageLibrary.length===0){

        box.innerHTML = `

        <div class="empty-box">

            <i class="fa-solid fa-image"></i>

            <h3>No Study Images</h3>

            <p>

                Study diagrams and summaries will appear here.

            </p>

        </div>

        `;

        return;

    }

    imageLibrary.forEach((img,index)=>{

        box.innerHTML += `

        <div class="pdf-card">

          <img
src="${img.url}"
class="studyImage"
onclick="openStudyImage('${img.url}')">
    

            <h3>${img.title}</h3>

            <small>📅 ${img.date}</small>

            ${adminLoggedIn?`

            <br><br>

            <button

            onclick="deleteImage(${index})">

            🗑 Delete

            </button>

            `:""}

        </div>

        `;

    });

}
const imageViewer =
document.getElementById("imageViewer");

const viewerImage =
document.getElementById("viewerImage");

const closeImageViewer =
document.getElementById("closeImageViewer");

function openImage(url){

    viewerImage.src = url;

    imageViewer.style.display = "flex";

}
window.openStudyImage = openStudyImage;

closeImageViewer.onclick = ()=>{

    imageViewer.style.display = "none";

};

imageViewer.onclick = (e)=>{

    if(e.target===imageViewer){

        imageViewer.style.display="none";

    }

};

window.openImage = openImage;

function renderSyllabus(){

    const box =

    document.getElementById("syllabusContent");

    if(!box) return;

    if(syllabusData.text.trim()==""){

        box.innerHTML=`

        <div class="empty-box">

        <i class="fa-solid fa-book-atlas"></i>

        <h3>No Syllabus Added</h3>

        <p>

        The syllabus will be updated by the teacher.

        </p>

        </div>

        `;

        return;

    }

    box.innerHTML = `

    <div class="homework-card">

    ${syllabusData.text.replace(/\n/g,"<br>")}

    </div>

    `;

}
function renderContact(){

    const box =
    document.getElementById("contactContent");

    if(!box) return;

    if(contactData.address==""){

        box.innerHTML = `

        <div class="empty-box">

            <i class="fa-solid fa-phone"></i>

            <h3>No Contact Information</h3>

            <p>

            Contact details will be updated soon.

            </p>

        </div>

        `;

        return;

    }

    box.innerHTML = `

    <div class="record-card">

        <h2>🏫 Academy Contact</h2>

        <p><strong>📍 Address:</strong><br>${contactData.address}</p>

        <p><strong>📞 Phone:</strong><br>${contactData.phone}</p>

        <p><strong>📧 Email:</strong><br>${contactData.email}</p>

        <p><strong>🌐 Website:</strong><br>${contactData.website}</p>

        <p>

        <a href="${contactData.map}" target="_blank">

        📍 Open Google Maps

        </a>

        </p>

    </div>

    `;

}
function applySettings(){

    document.title = settingsData.websiteTitle;

    const footer =
    document.querySelector("footer");

    if(footer){

        footer.innerHTML = settingsData.footer;

    }

    const academyTitles =
    document.querySelectorAll(".academyName");

    academyTitles.forEach(title=>{

        title.innerText =
        settingsData.academyName;

    });

    const logos =
    document.querySelectorAll(".academyLogo");

    logos.forEach(img=>{

        if(settingsData.logo){

            img.src = settingsData.logo;

        }

    });

}

function renderTeacher(){

    const box =
    document.getElementById("teacherContent");

    if(!box) return;

    if(teacherData.name===""){

        box.innerHTML = `

        <div class="empty-box">

            <i class="fa-solid fa-user-tie"></i>

            <h3>Teacher Profile</h3>

            <p>

            Teacher information will appear here.

            </p>

        </div>

        `;

        return;

    }

    box.innerHTML = `

    <div class="teacherProfile">

        <img

        src="${teacherData.photo}"

        class="teacherImage">

        <h2>

        👨‍🏫 ${teacherData.name}

        </h2>

        <p>

        ${teacherData.message}

        </p>

    </div>

    `;

}

function openStudyImage(url){

    studyImageViewer.src = url;
imageViewer.style.display = "flex";
    

}
if(closeImageViewer){

    closeImageViewer.onclick = ()=>{

        imageViewer.style.display = "none";

    };

}
async function deleteImage(index){

    if(!confirm("Delete this image?")) return;

    imageLibrary.splice(index,1);

    await saveImages();

    renderImages();

    notify("Image Deleted");

}

window.deleteImage = deleteImage;

async function deleteStudent(index){

    if(!confirm("Delete this student?")) return;

    recordsLibrary.splice(index,1);

    try{

        await saveRecords();

        renderRecords();

        notify("Student Deleted");

    }

    catch(error){

        console.error(
            "Student Delete Error:",
            error
        );

        notify("Failed to delete student");

    }

}

window.deleteStudent = deleteStudent;

function addResult(index){

    currentStudentIndex = index;

    resultModal.style.display = "block";

}
window.addResult = addResult;
async function deleteAnnouncement(index){

    if(!confirm("Delete this announcement?")) return;

    announcementLibrary.splice(index,1);

    try{

        await saveAnnouncements();

        renderAnnouncements();

        notify("Announcement Deleted");

    }

    catch(error){

        console.error(
            "Announcement Delete Error:",
            error
        );

        notify("Failed to delete announcement");

    }

}

window.deleteAnnouncement = deleteAnnouncement;
async function deleteCompetition(index){

    if(!confirm("Delete this competition?")) return;

    competitionLibrary.splice(index,1);

    try{

        await saveCompetitions();

        renderCompetitions();

        notify("Competition Deleted");

    }

    catch(error){

        console.error(
            "Competition Delete Error:",
            error
        );

        notify("Failed to delete competition");

    }

}

window.deleteCompetition = deleteCompetition;

function addQuestion(){

    const question =
    document.getElementById("questionInput").value.trim();

    const op1 =
    document.getElementById("option1").value.trim();

    const op2 =
    document.getElementById("option2").value.trim();

    const op3 =
    document.getElementById("option3").value.trim();

    const op4 =
    document.getElementById("option4").value.trim();

    const answer =
    document.getElementById("correctAnswer").value;

    if(

        question=="" ||

        op1=="" ||

        op2=="" ||

        op3=="" ||

        op4==""

    ){

        alert("Fill all fields.");

        return;

    }

    currentTest.questions.push({

        question:question,

        options:[op1,op2,op3,op4],

        answer:Number(answer)

    });

    notify(

        "Question Added ("+

        currentTest.questions.length+

        ")"

    );

    document.getElementById("questionInput").value="";

    document.getElementById("option1").value="";

    document.getElementById("option2").value="";

    document.getElementById("option3").value="";

    document.getElementById("option4").value="";

    document.getElementById("correctAnswer").selectedIndex=0;

}


function renderManageTests(){

    const list = document.getElementById("manageTestList");

    if(!list) return;

    list.innerHTML = "";

    if(testLibrary.length===0){

        list.innerHTML = "<p>No Tests Created.</p>";

        return;

    }

    testLibrary.forEach((test,index)=>{

        list.innerHTML += `

        <div class="pdf-card">

            <h3>${test.title}</h3>

            <p>

                ${test.questions.length} Questions

            </p>
<button onclick="previewTest(${index})">

👁 Preview

</button>

            <button onclick="renameTest(${index})">

                ✏ Rename

            </button>

            <button onclick="deleteTest(${index})">

                🗑 Delete

            </button>

        </div>

        `;

    });

}
function previewTest(index){

    startTest(index);

}

async function renameTest(index){

    const name = prompt(

        "Enter new test title:",

        testLibrary[index].title

    );

    if(!name) return;

    testLibrary[index].title = name.trim();

    try{

        await saveTests();

        renderTests();

        renderManageTests();

        notify("Test Renamed");

    }

    catch(error){

        console.error(
            "Rename Test Error:",
            error
        );

        notify("Failed to rename test");

    }

}
window.previewTest = previewTest;
window.renameTest = renameTest;
window.deleteTest = deleteTest;
window.startTest = startTest;


if(saveHomeworkBtn){

    saveHomeworkBtn.onclick = async ()=>{

        if(

            homeworkTitle.value.trim()=="" ||

            homeworkText.value.trim()==""

        ){

            alert("Fill all fields.");

            return;

        }

        homeworkData={

            title:homeworkTitle.value.trim(),

            text:homeworkText.value.trim()

        };

        await saveHomework();

        renderHomework();

        renderManageHomework();

        homeworkModal.style.display="none";

        homeworkTitle.value="";

        homeworkText.value="";

    };

}
if(saveVideoBtn){
saveVideoBtn.onclick = async ()=>{

        if(videoTitle.value.trim()==""){

            alert("Enter a video title.");

            return;

        }

        if(

            youtubeLink.value.trim()=="" &&

            videoFile.files.length===0

        ){

            alert("Choose a YouTube link or a video file.");

            return;

        }

        if(youtubeLink.value.trim()!=""){

            videoLibrary.push({

                title:videoTitle.value.trim(),

                type:"youtube",

                url:youtubeLink.value.trim(),

                date:new Date().toLocaleDateString()

            });
await saveVideos();

renderVideos();

renderManageVideos();

        }

        else{

            try{

    const url = await uploadFile(

    videoFile.files[0]

);

    videoLibrary.push({

        title:videoTitle.value.trim(),

        type:"local",

        url:url,

        date:new Date().toLocaleDateString()

    });

    await saveVideos();

    renderVideos();

    renderManageVideos();

}

catch(error){

    console.error(error);

    notify("Video Upload Failed");

}
        }

        videoModal.style.display="none";

        videoTitle.value="";

        youtubeLink.value="";

        videoFile.value="";

        notify("Video Saved");

    };

}
if(saveNotesBtn){
    
saveNotesBtn.onclick = async ()=>{
    
        if(

            notesTitle.value.trim()=="" ||

            notesText.value.trim()==""

        ){

            alert("Fill all fields.");

            return;

        }

        notesData = {

            title: notesTitle.value.trim(),

            text: notesText.value.trim()

        };
await saveNotes();

        renderNotes();

      renderManageNotes();
        notesModal.style.display = "none";

        notesTitle.value = "";

        notesText.value = "";


    };

}
if(saveCompetitionBtn){
saveCompetitionBtn.onclick = async ()=>{
        if(
            competitionTitle.value.trim()=="" ||
            competitionDate.value=="" ||
            competitionTime.value=="" ||
            competitionVenue.value.trim()=="" ||
            competitionDescription.value.trim()==""
        ){

            alert("Please fill all fields.");

            return;

        }

        competitionLibrary.push({

            title: competitionTitle.value.trim(),

            date: competitionDate.value,

            time: competitionTime.value,

            venue: competitionVenue.value.trim(),

            description: competitionDescription.value.trim()

        });
await saveCompetitions();

        renderCompetitions();

        notify("Competition Saved Successfully");

        competitionTitle.value="";

        competitionDate.value="";

        competitionTime.value="";

        competitionVenue.value="";

        competitionDescription.value="";

        competitionModal.style.display="none";

    };

}
if(saveAnnouncementBtn){

    saveAnnouncementBtn.onclick = async ()=>{

        if(
            announcementTitle.value.trim()=="" ||
            announcementText.value.trim()==""
        ){

            alert("Fill all fields.");

            return;

        }

        announcementLibrary.push({

    title:announcementTitle.value.trim(),

    text:announcementText.value.trim(),

    date:new Date().toLocaleDateString()

});

        await saveAnnouncements();

        renderAnnouncements();

        

        announcementModal.style.display="none";

        announcementTitle.value="";

        announcementText.value="";

    };

}

if(saveStudentBtn){
saveStudentBtn.onclick = async ()=>{

        if(studentName.value.trim()==""){

            alert("Enter student name.");

            return;

        }

        recordsLibrary.push({

            name:

            studentName.value.trim(),

            results:[]

        });
await saveRecords();

        renderRecords();

        notify("Student Added");

        studentName.value="";

        recordsModal.style.display="none";

    };

}
if(saveResultBtn){

    saveResultBtn.onclick = async ()=>{

        if(

            resultSubject.value.trim()=="" ||

            resultChapter.value.trim()=="" ||

            resultScore.value.trim()==""

        ){

            alert("Please fill all fields.");

            return;

        }

        recordsLibrary[currentStudentIndex].results.push({

            subject: resultSubject.value.trim(),

            chapter: resultChapter.value.trim(),

            score: resultScore.value.trim()

        });

        await saveRecords();

        renderRecords();

        notify("Result Added Successfully");

        resultSubject.value="";

        resultChapter.value="";

        resultScore.value="";

        resultModal.style.display="none";

    };

}
if(saveImageBtn){
saveImageBtn.onclick = async ()=>{

        if(

            imageTitle.value.trim()=="" ||

            imageFile.files.length===0

        ){

            alert("Please select an image and enter a title.");

            return;

        }

        const url = await uploadFile(imageFile.files[0]);

imageLibrary.push({

    title: imageTitle.value.trim(),

    url: url,

    date: new Date().toLocaleDateString()

});

await saveImages();

renderImages();

notify("Study Image Saved");

imageTitle.value = "";

imageFile.value = "";

galleryModal.style.display = "none";

    };

}
if(saveSyllabusBtn){

    saveSyllabusBtn.onclick = ()=>{

        syllabusData.text =

        syllabusText.value.trim();

        saveSyllabus();

        renderSyllabus();

        syllabusModal.style.display="none";

        notify("Syllabus Updated");

    };

}
if(saveTeacherBtn){

    saveTeacherBtn.onclick = async ()=>{

        teacherData.name = teacherName.value.trim();

        teacherData.message = teacherMessage.value.trim();

        if(teacherPhoto.files.length>0){

    teacherData.photo = await uploadFile(teacherPhoto.files[0]);

}

await saveTeacher();

renderTeacher();

teacherModal.style.display = "none";

notify("Teacher Profile Updated");

    };

}
if(saveContactBtn){

    saveContactBtn.onclick = ()=>{

        contactData.address = academyAddress.value.trim();

        contactData.phone = academyPhone.value.trim();

        contactData.email = academyEmail.value.trim();

        contactData.website = academyWebsite.value.trim();

        contactData.map = academyMap.value.trim();

        saveContact();

        renderContact();

        contactModal.style.display = "none";

        notify("Contact Information Updated");

    };

}
if(saveSettingsBtn){

    saveSettingsBtn.onclick = async ()=>{

        settingsData.academyName =
        academyName.value.trim();

        settingsData.websiteTitle =
        websiteTitle.value.trim();

        settingsData.footer =
        footerText.value.trim();

        if(academyLogo.files.length>0){

            settingsData.logo =
            await uploadFile(
                academyLogo.files[0]
            );

        }

        await saveSettings();

        applySettings();

        settingsModal.style.display = "none";

        academyLogo.value = "";

        notify("Settings Saved");

    };

}

/*=========================================
        SAVE TEST QUESTION
=========================================*/

if(saveQuestionBtn){

    saveQuestionBtn.onclick = ()=>{

        if(

            testTitle.value.trim()=="" ||

            questionText.value.trim()=="" ||

            option1.value.trim()=="" ||

            option2.value.trim()=="" ||

            option3.value.trim()=="" ||

            option4.value.trim()==""

        ){

            alert("Please fill all fields.");

            return;

        }

        if(currentTest.title===""){

            currentTest.title = testTitle.value.trim();

        }

        currentTest.questions.push({

            question: questionText.value.trim(),

            options:[

                option1.value.trim(),

                option2.value.trim(),

                option3.value.trim(),

                option4.value.trim()

            ],

            answer:Number(correctAnswer.value)

        });

        notify(

            "Question " +

            currentTest.questions.length +

            " Saved"

        );

        questionText.value="";

        option1.value="";

        option2.value="";

        option3.value="";

        option4.value="";

        correctAnswer.selectedIndex=0;

    };

}
/*=========================================
        FINISH TEST
=========================================*/
if(finishTestBtn){

    finishTestBtn.onclick = async ()=>{

        if(currentTest.questions.length===0){

            alert("Add at least one question.");

            return;

        }

        currentTest.title = testTitle.value.trim();

        testLibrary.push(currentTest);

        await saveTests();

        renderTests();

        renderManageTests();

        notify("Test Saved Successfully");

        currentTest = {

            title:"",
            questions:[]

        };

        testTitle.value="";

        questionText.value="";

        option1.value="";

        option2.value="";

        option3.value="";

        option4.value="";

        correctAnswer.selectedIndex=0;

        testModal.style.display="none";

    };

}

//=============================
// INITIAL PAGE LOAD
//=============================
loadNotes();
loadVideos();
loadTests();
loadCompetitions();
loadAnnouncements();
loadRecords(); 
loadImages();
updateEditableMode();
renderContact();
loadTeacherProfile();
loadLogo();
loadHomework();
loadSettings();

startRealtimeChat();

renderManageHomework();
renderManageNotes();
renderSyllabus();
renderManageVideos();
renderManageTests();


if(recordSearch){

    recordSearch.addEventListener("input", renderRecords);
 
}
// =========================================
// SAFE SCROLL REVEAL
// =========================================

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(

    entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold:.15
    }

);

revealElements.forEach(element=>{

    revealObserver.observe(element);

});
