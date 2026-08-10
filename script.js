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

/*=========================================================            GLOBAL VARIABLES

=========================================================*/

const loader = document.getElementById("loader");

const adminBtn = document.getElementById("adminBtn");

const usernameModal =
    document.getElementById("usernameModal");
const studentPerformanceBtn =
    document.getElementById(
        "studentPerformanceBtn"
    );
    
const closeUsernameModal =
    document.getElementById("closeUsernameModal");

const usernameInput =
    document.getElementById("usernameInput");

const saveUsernameBtn =
    document.getElementById("saveUsernameBtn");
    
const addBtn =
    document.getElementById("addBtn");
    
const openDashboardBtn =
document.getElementById("openDashboardBtn");

const dashboard = document.getElementById("adminDashboard");

const modal = document.getElementById("adminModal");

const closeModal = document.querySelector(".closeModal");

const loginBtn = document.getElementById("loginBtn");

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
const homeworkSearch =
    document.getElementById("homeworkSearch");

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
const attendanceBtn =
document.getElementById("attendanceBtn");
const attendanceDate =
document.getElementById("attendanceDate");

const attendanceBatch =
document.getElementById("attendanceBatch");

const attendanceSearch =
document.getElementById("attendanceSearch");
const attendanceAdminControls =
document.getElementById(
    "attendanceAdminControls"
);

const addAttendanceStudentBtn =
document.getElementById(
    "addAttendanceStudentBtn"
);

const attendanceStudentModal =
document.getElementById(
    "attendanceStudentModal"
);

const closeAttendanceStudentModal =
document.getElementById(
    "closeAttendanceStudentModal"
);

const attendanceStudentName =
document.getElementById(
    "attendanceStudentName"
);

const attendanceStudentBatch =
document.getElementById(
    "attendanceStudentBatch"
);

const saveAttendanceStudentBtn =
document.getElementById(
    "saveAttendanceStudentBtn"
);
const studentDirectoryAdminControls =
document.getElementById(
    "studentDirectoryAdminControls"
);

const addStudentBtn =
document.getElementById("addStudentBtn");

const addStudentModal =
document.getElementById("addStudentModal");

const closeAddStudentModal =
document.getElementById(
    "closeAddStudentModal"
);

const newStudentName =
document.getElementById("newStudentName");

const newStudentBatch =
document.getElementById("newStudentBatch");

const saveNewStudentBtn =
document.getElementById("saveNewStudentBtn");
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
const testTimerAdminControls =
document.getElementById("testTimerAdminControls");

const testTimerDate =
document.getElementById("testTimerDate");

const testTimerTime =
document.getElementById("testTimerTime");

const testTimerDuration =
document.getElementById("testTimerDuration");

const startTestTimerBtn =
document.getElementById("startTestTimerBtn");

const stopTestTimerBtn =
document.getElementById("stopTestTimerBtn");
/*=========================================
        CHAPTER RECORDS ELEMENTS
==========================================*/

const chapterSearch =
    document.getElementById("chaptersSearch");

const addChapterBtn =
    document.getElementById("addChapterBtn");

const chapterModal =
    document.getElementById("chapterModal");

const closeChapterModal =
    document.getElementById("closeChapterModal");

const saveChapterBtn =
    document.getElementById("saveChapterBtn");

const chapterSubject =
    document.getElementById("chapterSubject");

const chapterName =
    document.getElementById("chapterName");

const chapterExplanation =
    document.getElementById("chapterExplanation");

const chapterQuestions =
    document.getElementById("chapterQuestions");

const chapterTest =
    document.getElementById("chapterTest");

const chapterRevision =
    document.getElementById("chapterRevision");

const chaptersAdminControls =
    document.getElementById(
        "chaptersAdminControls"
    );
    const chapterRecordsBtn =
    document.getElementById("chapterRecordsBtn");
    /*=========================================
        STUDENT QUESTIONS ELEMENTS
==========================================*/
const studentQuestionSubject =
    document.getElementById(
        "studentQuestionSubject"
    );

const studentQuestionText =
    document.getElementById(
        "studentQuestionText"
    );

const submitStudentQuestionBtn =
    document.getElementById(
        "submitQuestionBtn"
    );

const studentQuestionsContent =
    document.getElementById(
        "studentQuestionsContent"
    );
    /*=========================================
        STUDENT PERFORMANCE ELEMENTS
==========================================*/

const studentPerformanceContent =
    document.getElementById(
        "studentPerformanceContent"
    );

const performanceModal =
    document.getElementById(
        "performanceModal"
    );

const closePerformanceModal =
    document.getElementById(
        "closePerformanceModal"
    );

const performanceStudent =
    document.getElementById(
        "performanceStudent"
    );

const performanceSubject =
    document.getElementById(
        "performanceSubject"
    );

const performanceTest =
    document.getElementById(
        "performanceTest"
    );

const performanceMarks =
    document.getElementById(
        "performanceMarks"
    );

const performanceTotal =
    document.getElementById(
        "performanceTotal"
    );

const savePerformanceBtn =
    document.getElementById(
        "savePerformanceBtn"
    );
    const studentPerformanceSearch =
    document.getElementById(
        "studentPerformanceSearch"
    );
    
    
    
    

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

adminBtn.onclick = () => {

    if(adminLoggedIn){

        dashboard.style.display = "block";

    }

    else{

        modal.style.display = "block";

    }

};
if(openDashboardBtn){

    openDashboardBtn.onclick = () => {

        if(adminLoggedIn){

            dashboard.style.display = "block";

        }

    };

}

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

    updateAttendanceAdminControls();
    renderStudentDirectory();
    updateStudentDirectoryAdminControls();
    updateTestTimerAdminControls();
    updateChapterAdminControls();
    updateStudentPerformanceAdminControls();
    renderStudentPerformance();
    updateEditableMode();
    

    modal.style.display = "none";

    enableAdmin();
renderStudentQuestions();
    renderHomework();
    renderNotes();
    renderAnnouncements();
    renderImages();
    renderCompetitions();
    renderRecords();
    renderChapterRecords();

    if(dashboard){

        dashboard.style.display = "block";

    }

    if(addBtn){

        addBtn.style.display = "block";

    }

    if(openDashboardBtn){

        openDashboardBtn.style.display = "block";

    }

    if(logoutBtn){

        logoutBtn.style.display = "block";

    }

    notify("Admin Mode Activated");

};


/*=========================================================
            CLOSE ADMIN DASHBOARD
=========================================================*/

if(closeDashboard){

    closeDashboard.onclick = () => {

        dashboard.style.display = "none";

        if(adminLoggedIn && openDashboardBtn){

            openDashboardBtn.style.display = "block";

        }

    };

}


/*=========================================================
            DASHBOARD LOGOUT
=========================================================*/

if(logoutBtn){

    logoutBtn.onclick = () => {

        logoutAdmin();

    };

}
if(studentPerformanceBtn){

    studentPerformanceBtn.onclick = () => {

        dashboard.style.display = "none";

        const section =
            document.getElementById(
                "studentPerformance"
            );

        if(section){

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

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
if(attendanceBtn){

    attendanceBtn.onclick = () => {

        dashboard.style.display = "none";

        const attendanceSection =
        document.getElementById("attendance");

        if(attendanceSection){

            attendanceSection.scrollIntoView({
                behavior:"smooth"
            });

        }

        updateAttendanceAdminControls();

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

    // Change top admin button
    if(adminBtn){

        adminBtn.innerHTML = "🚪 Logout";

        adminBtn.onclick = logoutAdmin;

        adminBtn.style.display = "block";

    }

    // Show dashboard logout button
    if(logoutBtn){

        logoutBtn.style.display = "block";

    }

    renderImages();

}





/*=========================================================
            LOGOUT
=========================================================*/

function logoutAdmin(){

    adminLoggedIn = false;

    updateEditableMode();

    updateAttendanceAdminControls();
    updateStudentDirectoryAdminControls();
    updateTestTimerAdminControls();
    updateChapterAdminControls();
    updateStudentPerformanceAdminControls();
    

    if(dashboard){

        dashboard.style.display = "none";

    }

    // Reset top admin button
    if(adminBtn){

        adminBtn.innerHTML =
            '<i class="fa-solid fa-user-shield"></i> Admin Login';

        adminBtn.onclick = () => {

            modal.style.display = "block";

        };

        adminBtn.style.display = "block";

    }

    // Hide dashboard logout button
    if(logoutBtn){

        logoutBtn.style.display = "none";

    }

    if(openDashboardBtn){

        openDashboardBtn.style.display = "none";

    }

    if(addBtn){

        addBtn.style.display = "none";

    }

    renderHomework();
    renderNotes();
    renderImages();
    renderCompetitions();
    renderRecords();
    renderChapterRecords();

    if(typeof renderManagePDFs === "function"){

        renderManagePDFs();

    }

    if(typeof renderManageHomework === "function"){

        renderManageHomework();

    }

    if(typeof renderManageNotes === "function"){

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
            NAVIGATION BUTTON
=========================================================*/

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🧭";

darkBtn.id = "themeBtn";

darkBtn.style.position = "fixed";

darkBtn.style.left = "20px";

darkBtn.style.bottom = "20px";

darkBtn.style.width = "60px";

darkBtn.style.height = "60px";

darkBtn.style.borderRadius = "50%";

darkBtn.style.border = "none";

darkBtn.style.fontSize = "24px";

darkBtn.style.cursor = "pointer";

darkBtn.style.background = "#00d9ff";

darkBtn.style.zIndex = "999";

document.body.appendChild(darkBtn);


/*=========================================================
        SCROLL TO NAVIGATION
=========================================================*/

darkBtn.onclick = () => {

    const navigation =
        document.querySelector("nav");

    if(navigation){

        navigation.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        return;

    }


    /* Fallback if nav uses another structure */

    const navigationBar =
        document.querySelector(
            "#navigation, .navigation, .navbar"
        );

    if(navigationBar){

        navigationBar.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

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


sendBtn.addEventListener(
    "click",
    sendChatMessage
);

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
let homeworkData = [];

/*=========================================================
                FIREBASE HOMEWORK SAVE
=========================================================*/

async function saveHomework(){

    try{

        await saveData(
            "academyHomework",
            homeworkData
        );

        notify("Homework Saved");

    }

    catch(error){

        console.error(
            "Homework Save Error:",
            error
        );

        notify(
            "Failed to save homework"
        );

    }

}

/*=========================================================
            LOAD HOMEWORK FROM FIREBASE
=========================================================*/
async function loadHomework(){

    try{

        const data =
            await loadData("academyHomework");

        if(Array.isArray(data)){

            homeworkData = data;

        }

        else if(data && typeof data === "object"){

            // Migrate old single-homework format
            homeworkData = [data];

            await saveHomework();

        }

        else{

            homeworkData = [];

        }

        renderHomework();
        renderManageHomework();

    }

    catch(error){

        console.error(
            "Homework Load Error:",
            error
        );

    }

}



function renderHomework(){

    const box =
        document.getElementById("homeworkContent");

    if(!box) return;

    if(
        !Array.isArray(homeworkData) ||
        homeworkData.length === 0
    ){

        box.innerHTML = `
            <div class="empty-box">
                <i class="fa-solid fa-circle-info"></i>

                <h3>No Homework Available</h3>

                <p>
                    Homework has not been assigned yet.
                </p>
            </div>
        `;

        return;
    }


    const keyword =
        homeworkSearch
        ? homeworkSearch.value
            .trim()
            .toLowerCase()
        : "";


    const filteredHomework =
        homeworkData.filter(homework =>

            String(homework.title || "")
                .toLowerCase()
                .includes(keyword)

        );


    if(filteredHomework.length === 0){

        box.innerHTML = `
            <div class="empty-box">
                <i class="fa-solid fa-magnifying-glass"></i>

                <h3>No Homework Found</h3>

                <p>
                    No homework matches your search.
                </p>
            </div>
        `;

        return;
    }


    box.innerHTML = `

        <div class="homework-grid">

            ${
                filteredHomework.map(homework => `

                    <div class="homework-card">

                        <div class="homework-card-icon">
                            📚
                        </div>

                        <h2>
                            ${homework.title}
                        </h2>

                        <p>
                            ${homework.text}
                        </p>

                    </div>

                `).join("")
            }

        </div>

    `;

}

if(homeworkSearch){

    homeworkSearch.oninput = () => {

        renderHomework();

    };

}


function renderManageHomework(){

    if(!manageHomeworkList) return;

    manageHomeworkList.innerHTML = "";

    if(
        !Array.isArray(homeworkData) ||
        homeworkData.length === 0
    ){

        manageHomeworkList.innerHTML = `
            <p>No Homework Added.</p>
        `;

        return;

    }

    manageHomeworkList.innerHTML =
        homeworkData.map(homework => `

            <div class="pdf-card">

                <h3>
                    ${homework.title}
                </h3>

                <p>
                    ${homework.text}
                </p>

                <button
                    onclick="editHomework('${homework.id}')">

                    ✏ Edit

                </button>

                <button
                    onclick="deleteHomework('${homework.id}')">

                    🗑 Delete

                </button>

            </div>

        `).join("");

}

function editHomework(id){

    if(!adminLoggedIn) return;

    const homework =
        homeworkData.find(
            item => item.id === id
        );

    if(!homework){

        notify(
            "Homework not found",
            "#ff4b5c"
        );

        return;

    }

    homeworkModal.style.display =
        "block";

    manageHomeworkModal.style.display =
        "none";

    homeworkTitle.value =
        homework.title;

    homeworkText.value =
        homework.text;

    // Remember which homework is being edited
    homeworkModal.dataset.editingId =
        id;

}

async function deleteHomework(id){

    if(!adminLoggedIn) return;

    const homework =
        homeworkData.find(
            item => item.id === id
        );

    if(!homework){

        notify(
            "Homework not found",
            "#ff4b5c"
        );

        return;

    }

    if(
        !confirm(
            `Delete "${homework.title}"?`
        )
    ){

        return;

    }


    homeworkData =
        homeworkData.filter(
            item => item.id !== id
        );


    await saveHomework();

    renderHomework();
    renderManageHomework();

    manageHomeworkModal.style.display =
        "none";

    notify("Homework Deleted");

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
let notesData = [];
const notesSearch =
    document.getElementById("notesSearch");
    
async function saveNotes(){

    try{

        await saveData(
            "academyNotes",
            notesData
        );

        notify("Notes Saved");

    }

    catch(error){

        console.error(
            "Notes Save Error:",
            error
        );

        notify(
            "Failed to save notes"
        );

    }

}
/*=========================================================
            LOAD NOTES FROM FIREBASE
=========================================================*/

async function loadNotes(){

    try{

        const data =
            await loadData("academyNotes");

        if(Array.isArray(data)){

            notesData = data;

        }

        else if(data && typeof data === "object"){

            // Migrate old single-note format
            notesData = [data];

            await saveNotes();

        }

        else{

            notesData = [];

        }

        renderNotes();
        renderManageNotes();

    }

    catch(error){

        console.error(
            "Notes Load Error:",
            error
        );

    }

}
function renderNotes(){

    const box =
        document.getElementById(
            "notesContent"
        );

    if(!box) return;


    if(
        !Array.isArray(notesData) ||
        notesData.length === 0
    ){

        box.innerHTML = `

            <div class="empty-box">

                <i class="fa-solid fa-circle-info"></i>

                <h3>
                    No Notes Available
                </h3>

                <p>
                    Notes have not been uploaded yet.
                </p>

            </div>

        `;

        return;

    }


const keyword =
    notesSearch
    ? notesSearch.value
        .trim()
        .toLowerCase()
    : "";
    


    const filteredNotes =
        notesData.filter(note =>

            String(
                note.title || ""
            )
            .toLowerCase()
            .includes(keyword)

        );


    if(filteredNotes.length === 0){

        box.innerHTML = `

            <div class="empty-box">

                <i class="fa-solid fa-magnifying-glass"></i>

                <h3>
                    No Notes Found
                </h3>

                <p>
                    No notes match your search.
                </p>

            </div>

        `;

        return;

    }


    box.innerHTML =
        filteredNotes.map(note => `

            <div class="homework-card">

                <h2>
                    ${note.title}
                </h2>

                <p>
                    ${note.text}
                </p>

            </div>

        `).join("");

}
if(notesSearch){

    notesSearch.oninput = () => {

        renderNotes();

    };

}
function renderManageNotes(){

    if(!manageNotesList) return;

    manageNotesList.innerHTML = "";

    if(
        !Array.isArray(notesData) ||
        notesData.length === 0
    ){

        manageNotesList.innerHTML = `
            <p>No Notes Added.</p>
        `;

        return;

    }

    manageNotesList.innerHTML =
        notesData.map(note => `

            <div class="pdf-card">

                <h3>
                    ${note.title}
                </h3>

                <p>
                    ${note.text}
                </p>

                <button
                    onclick="editNotes('${note.id}')">

                    ✏ Edit

                </button>

                <button
                    onclick="deleteNotes('${note.id}')">

                    🗑 Delete

                </button>

            </div>

        `).join("");

}
function editNotes(id){

    if(!adminLoggedIn) return;

    const note =
        notesData.find(
            item => item.id === id
        );

    if(!note){

        notify(
            "Note not found",
            "#ff4b5c"
        );

        return;

    }

    notesModal.style.display =
        "block";

    manageNotesModal.style.display =
        "none";

    notesTitle.value =
        note.title;

    notesText.value =
        note.text;

    notesModal.dataset.editingId =
        id;

}
async function deleteNotes(id){

    if(!adminLoggedIn) return;

    const note =
        notesData.find(
            item => item.id === id
        );

    if(!note){

        notify(
            "Note not found",
            "#ff4b5c"
        );

        return;

    }

    if(
        !confirm(
            `Delete "${note.title}"?`
        )
    ){

        return;

    }


    notesData =
        notesData.filter(
            item => item.id !== id
        );


    await saveNotes();

    renderNotes();
    renderManageNotes();

    manageNotesModal.style.display =
        "none";

    notify("Note Deleted");

}
window.editNotes = editNotes;
window.deleteNotes = deleteNotes;
/*=========================================
        VIDEO SYSTEM
=========================================*/


let videoLibrary = [];
const videosSearch =
    document.getElementById("videosSearch");
    
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


    if(
        !Array.isArray(videoLibrary) ||
        videoLibrary.length === 0
    ){

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


    const keyword =
        videosSearch
        ? videosSearch.value
            .trim()
            .toLowerCase()
        : "";


    const filteredVideos =
        videoLibrary.filter(video =>

            String(
                video.title || ""
            )
            .toLowerCase()
            .includes(keyword)

        );


    if(filteredVideos.length === 0){

        container.innerHTML = `

            <div class="empty-box">

                <i class="fa-solid fa-magnifying-glass"></i>

                <h3>No Videos Found</h3>

                <p>
                    No videos match your search.
                </p>

            </div>

        `;

        return;

    }


    filteredVideos.forEach(video => {

        if(video.type === "youtube"){

            let id = "";

            try{

                const url =
                    new URL(video.url);

                if(
                    url.hostname.includes("youtu.be")
                ){

                    id =
                        url.pathname.substring(1);

                }

                else{

                    id =
                        url.searchParams.get("v");

                    if(
                        !id &&
                        url.pathname.includes("/shorts/")
                    ){

                        id =
                            url.pathname
                            .split("/shorts/")[1];

                    }

                }

            }

            catch(e){

                console.error(
                    "Invalid YouTube URL:",
                    e
                );

            }


            container.innerHTML += `

                <div class="pdf-card">

                    <h3>
                        ${video.title}
                    </h3>

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

                    <h3>
                        ${video.title}
                    </h3>

                    <video
                        controls
                        playsinline
                        preload="metadata"
                        style="
                            width:100%;
                            height:220px;
                            background:#000;
                        ">

                        <source
                            src="${video.url}"
                            type="video/mp4">

                        Your browser does not support
                        the video tag.

                    </video>

                </div>

            `;

        }

    });

}
if(videosSearch){

    videosSearch.oninput = () => {

        renderVideos();

    };

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
let contactData = {

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

let attendanceStudents = {

    batch1: [
        "Pratik Roy",
        "Subir Das",
        "debamalya dey",
        "Debapriya Dey",
        "NILOY",
        "Ayush Das",
        "Ayush Das 2",
        "Swaraj Das",
        "Ishan paul",
        "Snigdha",
        "Roshni",
        "Jili Barman",
        "Soumyajit Das",
        "Sujashree",
        "Ripa Saha",
        "Mrimmoy Saha",
        "Supradip",
        "Joydeep Datta",
        "Ajay Das",
        "Birat Chakraborty",
        "Aditya Chakraborty"
    ],

    batch2: [
        "ARINDAM Acharjee",
        "Bishal Dey",
        "Ayush Sarkar",
        "Soumyabrata dey",
        "Abir Bhattacharya",
        "Deepjoy Dhar",
        "Amandeep Biswas",
        "Taniva Das",
        "Nikita Dey",
        "Moumita",
        "Shreyashi",
        "Upashana",
        "Paridhi Chakrabarty",
        "Sahanas Aktar",
        "Gargi Bhattacharya"
    ]

};
let studentDirectory = {

    batch1: [...attendanceStudents.batch1],

    batch2: [...attendanceStudents.batch2]

};
async function saveStudentDirectory(){

    try{

        await saveData(
            "studentDirectory",
            studentDirectory
        );

        notify("Student List Saved");

    }

    catch(error){

        console.error(
            "Student Directory Save Error:",
            error
        );

        notify(
            "Failed to save student list",
            "#ff4b5c"
        );

    }

}
async function loadStudentDirectory(){

    try{

        const data =
            await loadData("studentDirectory");

        if(data){

            studentDirectory = data;

        }
        else{

            await saveStudentDirectory();

        }

        renderStudentDirectory();

    }

    catch(error){

        console.error(
            "Student Directory Load Error:",
            error
        );

    }

}
function renderStudentDirectory(){

    const box =
        document.getElementById("studentDirectoryContent");

    if(!box) return;

    box.innerHTML = `

        <div class="student-batch">

            <h3>
                🌅 Batch 1
            </h3>

            <div class="student-list">

                ${
                    (studentDirectory.batch1 || [])
                    .map((student,index)=>`

                        <div class="student-directory-card">

                            <div class="student-name">

                                <span>
                                    ${index + 1}
                                </span>

                                👨‍🎓 ${student}

                            </div>

                            ${
                                adminLoggedIn
                                ? `

                                    <div class="student-admin-actions">

                                        <button
                                            class="btn"
                                            onclick="editStudent('batch1', ${index})">

                                            ✏️ Edit

                                        </button>

                                        <button
                                            class="btn"
                                            onclick="deleteStudentFromDirectory('batch1', ${index})">

                                            🗑️ Delete

                                        </button>

                                    </div>

                                `
                                : ""
                            }

                        </div>

                    `)
                    .join("")
                }

            </div>

        </div>


        <div class="student-batch">

            <h3>
                🌙 Batch 2
            </h3>

            <div class="student-list">

                ${
                    (studentDirectory.batch2 || [])
                    .map((student,index)=>`

                        <div class="student-directory-card">

                            <div class="student-name">

                                <span>
                                    ${index + 1}
                                </span>

                                👨‍🎓 ${student}

                            </div>

                            ${
                                adminLoggedIn
                                ? `

                                    <div class="student-admin-actions">

                                        <button
                                            class="btn"
                                            onclick="editStudent('batch2', ${index})">

                                            ✏️ Edit

                                        </button>

                                        <button
                                            class="btn"
                                            onclick="deleteStudentFromDirectory('batch2', ${index})">

                                            🗑️ Delete

                                        </button>

                                    </div>

                                `
                                : ""
                            }

                        </div>

                    `)
                    .join("")
                }

            </div>

        </div>

    `;

}


function renderTestTimer(){

    const days =
        document.getElementById("days");

    const hours =
        document.getElementById("hours");

    const minutes =
        document.getElementById("minutes");

    const seconds =
        document.getElementById("seconds");

    if(
        !days ||
        !hours ||
        !minutes ||
        !seconds
    ) return;


    if(!testTimerData.active){

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;

    }


    if(!testTimerData.startedAt){

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;

    }


    const durationMilliseconds =
        testTimerData.durationMinutes *
        60 *
        1000;


    const endTime =
        testTimerData.startedAt +
        durationMilliseconds;


    const difference =
        endTime - Date.now();


    if(difference <= 0){

    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";

    if(testTimerData.active){

        testTimerData.active = false;

        saveTestTimer();

    }

    return;

}


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const d =
        Math.floor(
            totalSeconds / 86400
        );


    const h =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const m =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const s =
        totalSeconds % 60;


    days.textContent =
        String(d).padStart(2,"0");

    hours.textContent =
        String(h).padStart(2,"0");

    minutes.textContent =
        String(m).padStart(2,"0");

    seconds.textContent =
        String(s).padStart(2,"0");

}

setInterval(() => {

    renderTestTimer();

}, 1000);
if(startTestTimerBtn){

    startTestTimerBtn.onclick = async () => {

        if(!adminLoggedIn) return;

        const date =
            testTimerDate.value;

        const time =
            testTimerTime.value;

        const duration =
            parseInt(
                testTimerDuration.value
            );

        if(!date || !time){

            notify(
                "Select test date and time",
                "#ff4b5c"
            );

            return;

        }

        if(!duration || duration < 1){

            notify(
                "Enter a valid duration",
                "#ff4b5c"
            );

            return;

        }

        testTimerData = {

            active: true,

            testDate: date,

            testTime: time,

            durationMinutes: duration,
startedAt: Date.now()
            

        };

        await saveTestTimer();

        renderTestTimer();

        notify("Test Timer Started");

    };

}


if(stopTestTimerBtn){

    stopTestTimerBtn.onclick = async () => {

        if(!adminLoggedIn) return;

        testTimerData.active = false;

        await saveTestTimer();

        renderTestTimer();

        notify("Test Timer Stopped");

    };

}
async function editStudent(batch, index){

    if(!adminLoggedIn) return;

    if(
        !studentDirectory[batch] ||
        studentDirectory[batch][index] === undefined
    ){

        notify(
            "Student not found",
            "#ff4b5c"
        );

        return;

    }

    const oldName =
        studentDirectory[batch][index];

    const newName =
        prompt(
            "Edit student name:",
            oldName
        );

    if(newName === null) return;

    const name =
        newName.trim();

    if(!name){

        notify(
            "Student name cannot be empty",
            "#ff4b5c"
        );

        return;

    }

    const exists =
        studentDirectory[batch]
        .some((student, i) =>
            i !== index &&
            student.toLowerCase() ===
            name.toLowerCase()
        );

    if(exists){

        notify(
            "Student already exists",
            "#ff4b5c"
        );

        return;

    }

    studentDirectory[batch][index] =
        name;

    /*
        Keep Attendance synchronized
        with the Student Directory.
    */

    if(attendanceStudents[batch]){

        const attendanceIndex =
            attendanceStudents[batch]
            .findIndex(student =>
                student.toLowerCase() ===
                oldName.toLowerCase()
            );

        if(attendanceIndex !== -1){

            attendanceStudents[batch][attendanceIndex] =
                name;

        }

    }

    try{

        await saveData(
            "studentDirectory",
            studentDirectory
        );

        await saveAttendanceStudents();

        renderStudentDirectory();
        renderAttendance();

        notify("Student Name Updated");

    }

    catch(error){

        console.error(
            "Student Edit Error:",
            error
        );

        notify(
            "Failed to update student",
            "#ff4b5c"
        );

    }

}


async function deleteStudentFromDirectory(
    batch,
    index
){

    if(!adminLoggedIn) return;

    if(
        !studentDirectory[batch] ||
        studentDirectory[batch][index] === undefined
    ){

        notify(
            "Student not found",
            "#ff4b5c"
        );

        return;

    }

    const student =
        studentDirectory[batch][index];

    const confirmed =
        confirm(
            `Delete ${student} from the student directory?`
        );

    if(!confirmed) return;

    try{

        studentDirectory[batch].splice(
            index,
            1
        );

        /*
            Keep Attendance synchronized
            with the Student Directory.
        */

        if(attendanceStudents[batch]){

            attendanceStudents[batch] =
                attendanceStudents[batch]
                .filter(name =>
                    name.toLowerCase() !==
                    student.toLowerCase()
                );

        }

        await saveData(
            "studentDirectory",
            studentDirectory
        );

        await saveAttendanceStudents();

        renderStudentDirectory();
        renderAttendance();

        notify("Student Deleted");

    }

    catch(error){

        console.error(
            "Student Delete Error:",
            error
        );

        notify(
            "Failed to delete student",
            "#ff4b5c"
        );

    }

}


/*
    Make functions available to
    inline onclick handlers.
*/

window.editStudent =
    editStudent;

window.deleteStudentFromDirectory =
    deleteStudentFromDirectory;

let attendanceData = {};
async function saveAttendanceStudents(){

    try{

        await saveData(
            "attendanceStudents",
            attendanceStudents
        );

    }

    catch(error){

        console.error(
            "Attendance Student Save Error:",
            error
        );

        notify("Failed to save attendance students");

    }

}
async function loadAttendanceStudents(){

    try{

        const data =
        await loadData("attendanceStudents");

        if(data){

            attendanceStudents = data;

        }
        else{

            await saveAttendanceStudents();

        }

        renderAttendance();

    }

    catch(error){

        console.error(
            "Attendance Student Load Error:",
            error
        );

    }

}
async function saveAttendance(){

    try{

        await saveData(
            "academyAttendance",
            attendanceData
        );

    }

    catch(error){

        console.error(
            "Attendance Save Error:",
            error
        );

        notify("Failed to save attendance");

    }

}
async function loadAttendance(){

    try{

        const data =
        await loadData("academyAttendance");

        if(data){

            attendanceData = data;

        }
        else{

            attendanceData = {};

        }

        renderAttendance();

    }

    catch(error){

        console.error(
            "Attendance Load Error:",
            error
        );

    }

}


let testLibrary = [];
const testsSearch =
    document.getElementById("testsSearch");
let testTimerData = {

    active: false,

    testDate: "",

    testTime: "",

    durationMinutes: 60,

    startedAt: null

};
async function saveTestTimer(){

    try{

        await saveData(
            "testTimer",
            testTimerData
        );

    }

    catch(error){

        console.error(
            "Test Timer Save Error:",
            error
        );

        notify(
            "Failed to save test timer",
            "#ff4b5c"
        );

    }

}
async function loadTestTimer(){

    try{

        const data =
            await loadData("testTimer");

        if(data){

            testTimerData = data;

        }

        loadTestTimerControls();

        renderTestTimer();

    }

    catch(error){

        console.error(
            "Test Timer Load Error:",
            error
        );

    }

}


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
const competitionsSearch =
    document.getElementById("competitionsSearch");
    
let announcementLibrary = [];
const announcementsSearch =
    document.getElementById("announcementsSearch");
    
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
/*=========================================
        FEES RECORD SYSTEM
==========================================*/

let feesData = [];

const feesSearch =
    document.getElementById("feesSearch");

const feesMonth =
    document.getElementById("feesMonth");
    
    const feePaymentDatePicker =
    document.getElementById(
        "feePaymentDatePicker"
    );
    
    
    if(feesMonth){

    const now =
        new Date();

    const year =
        now.getFullYear();

    const month =
        String(
            now.getMonth() + 1
        ).padStart(2, "0");

    feesMonth.value =
        `${year}-${month}`;

}

    async function saveFeesData(){

    try{

        await saveData(
            "academyFees",
            feesData
        );

        notify("Fees Records Saved");

    }

    catch(error){

        console.error(
            "Fees Save Error:",
            error
        );

        notify(
            "Failed to save fees records",
            "#ff4b5c"
        );

    }

}


async function loadFeesData(){

    try{

        const data =
            await loadData("academyFees");


        if(Array.isArray(data)){

            feesData = data;

        }

        else{

            feesData = [];

        }


        renderFees();

    }

    catch(error){

        console.error(
            "Fees Load Error:",
            error
        );

    }

}

function renderFees(){

    const box =
        document.getElementById("feesContent");

    if(!box) return;


    if(
        !feesMonth ||
        !feesMonth.value
    ){

        box.innerHTML = `

            <div class="empty-box">

                <i class="fa-solid fa-calendar"></i>

                <h3>Select a Month</h3>

                <p>
                    Select a month to view fee records.
                </p>

            </div>

        `;

        return;

    }


    const selectedMonth =
        feesMonth.value;


    const keyword =
        feesSearch
        ? feesSearch.value
            .trim()
            .toLowerCase()
        : "";


   function renderBatch(
    batch,
    title,
    icon
){

    const students =
        studentDirectory[batch] || [];


    const filteredStudents =
        students.filter(student =>

            String(student)
                .toLowerCase()
                .includes(keyword)

        );


    if(filteredStudents.length === 0){

        return "";

    }


    return `

        <div class="fees-batch">

            <h3>

                ${icon} ${title}

            </h3>


            <div class="fees-student-list">

                ${
                    filteredStudents
                    .map(student => {

                        const record =
                            feesData.find(item =>

                                item.month === selectedMonth &&
                                item.batch === batch &&
                                String(
                                    item.student
                                ).toLowerCase() ===
                                String(
                                    student
                                ).toLowerCase()

                            );


                        return `

                            <div class="fees-student-card">

                                <div class="fees-student-name">

                                    👨‍🎓
                                    ${student}

                                </div>


                                ${
                                    record &&
                                    record.paid

                                    ? `

                                        <div class="fees-paid">

                                            ✅ Paid

                                            <span>
                                                ₹${record.amount}
                                            </span>

                                            <small>
                                                📅
                                                ${record.paidDate}
                                            </small>

                                        </div>

                                    `

                                    : `

                                        <div class="fees-unpaid">

                                            ❌ Unpaid

                                        </div>

                                    `
                                }


                                ${
                                    adminLoggedIn
                                    ? `

                                        <div class="fees-admin-actions">

                                            <button
                                                class="btn"
                                                onclick="editFeeRecord(
                                                    '${batch}',
                                                    '${student.replace(/'/g, "\\'")}',
                                                    '${selectedMonth}'
                                                )">

                                                ✏️
                                                ${
                                                    record
                                                    ? "Edit"
                                                    : "Mark Paid"
                                                }

                                            </button>

                                            ${
                                                record
                                                ? `

                                                    <button
                                                        class="btn"
                                                        onclick="deleteFeeRecord(
                                                            '${record.id}'
                                                        )">

                                                        🗑️ Delete

                                                    </button>

                                                `
                                                : ""
                                            }

                                        </div>

                                    `
                                    : ""
                                }

                            </div>

                        `;

                    })
                    .join("")
                }

            </div>

        </div>

    `;

}


    const batch1HTML =
        renderBatch(
            "batch1",
            "Batch 1",
            "🌅"
        );


    const batch2HTML =
        renderBatch(
            "batch2",
            "Batch 2",
            "🌙"
        );


    if(
        !batch1HTML &&
        !batch2HTML
    ){

        box.innerHTML = `

            <div class="empty-box">

                <i class="fa-solid fa-magnifying-glass"></i>

                <h3>
                    No Students Found
                </h3>

                <p>
                    No students match your search.
                </p>

            </div>

        `;

        return;

    }


    box.innerHTML = `

        <div class="fees-month-title">

            📅
            ${selectedMonth}

        </div>

        ${batch1HTML}

        ${batch2HTML}

    `;

}
if(feesSearch){

    feesSearch.oninput = () => {

        renderFees();

    };

}


if(feesMonth){

    feesMonth.onchange = () => {

        renderFees();

    };

}

async function editFeeRecord(
    batch,
    student,
    month
){

    if(!adminLoggedIn) return;


    const existing =
        feesData.find(item =>

            item.month === month &&
            item.batch === batch &&
            String(item.student)
                .toLowerCase() ===
            String(student)
                .toLowerCase()

        );


    const amount =
        prompt(
            `Enter paid amount for ${student}:`,
            existing
                ? existing.amount
                : ""
        );


    if(amount === null) return;


    const numericAmount =
        Number(amount);


    if(
        !Number.isFinite(numericAmount) ||
        numericAmount <= 0
    ){

        notify(
            "Enter a valid amount",
            "#ff4b5c"
        );

        return;

    }


    /*
        Default payment date.
        Existing record keeps its previous date.
    */

    let paidDate =
        existing?.paidDate ||
        new Date()
            .toISOString()
            .split("T")[0];


    /*
        Use the calendar picker if available.
    */

    if(feePaymentDatePicker){

        feePaymentDatePicker.value =
            paidDate;

        feePaymentDatePicker.style.display =
            "block";


        const selectedDate =
            await new Promise(resolve => {

                let finished = false;


                const finish = value => {

                    if(finished) return;

                    finished = true;

                    feePaymentDatePicker
                        .removeEventListener(
                            "change",
                            handleChange
                        );

                    resolve(value);

                };


                const handleChange = () => {

                    finish(
                        feePaymentDatePicker.value
                    );

                };


                feePaymentDatePicker
                    .addEventListener(
                        "change",
                        handleChange
                    );


                /*
                    If the user closes the
                    native date picker without
                    changing anything, keep
                    the existing/default date.
                */

                feePaymentDatePicker
                    .addEventListener(
                        "blur",
                        () => {

                            setTimeout(() => {

                                if(!finished){

                                    finish(
                                        feePaymentDatePicker.value ||
                                        paidDate
                                    );

                                }

                            },300);

                        },
                        {once:true}
                    );


                try{

                    if(
                        typeof
                        feePaymentDatePicker.showPicker
                        === "function"
                    ){

                        feePaymentDatePicker.showPicker();

                    }
                    else{

                        feePaymentDatePicker.focus();

                    }

                }

                catch(error){

                    feePaymentDatePicker.focus();

                }

            });


        feePaymentDatePicker.style.display =
            "none";


        if(selectedDate){

            paidDate =
                selectedDate;

        }

    }


    /*
        UPDATE EXISTING RECORD
    */

    if(existing){

        existing.amount =
            numericAmount;

        existing.paid =
            true;

        existing.paidDate =
            paidDate;

    }


    /*
        CREATE NEW RECORD
    */

    else{

        feesData.push({

            id:
                Date.now().toString(),

            month:
                month,

            batch:
                batch,

            student:
                student,

            amount:
                numericAmount,

            paid:
                true,

            paidDate:
                paidDate

        });

    }


    /*
        SAVE TO FIRESTORE
    */

    await saveFeesData();


    /*
        REFRESH UI
    */

    renderFees();


    notify(
        `${student}'s fee marked as paid`
    );

}


async function deleteFeeRecord(id){

    if(!adminLoggedIn) return;


    const confirmed =
        confirm(
            "Delete this payment record?"
        );


    if(!confirmed) return;


    feesData =
        feesData.filter(
            record =>
                record.id !== id
        );


    await saveFeesData();

    renderFees();

    notify(
        "Payment Record Deleted"
    );

}
window.editFeeRecord =
    editFeeRecord;

window.deleteFeeRecord =
    deleteFeeRecord;
    
/*=========================================
        CHAPTER RECORDS SYSTEM
==========================================*/

let chapterRecords = [];
let editingChapterId = null;
    
async function saveChapterRecords(){

    try{

        await saveData(
            "academyChapterRecords",
            chapterRecords
        );

        notify("Chapter Records Saved");

    }

    catch(error){

        console.error(
            "Chapter Records Save Error:",
            error
        );

        notify(
            "Failed to save chapter records",
            "#ff4b5c"
        );

    }

}


async function loadChapterRecords(){

    try{

        const data =
            await loadData(
                "academyChapterRecords"
            );


        if(Array.isArray(data)){

            chapterRecords = data;

        }

        else{

            chapterRecords = [];

        }


        renderChapterRecords();

    }

    catch(error){

        console.error(
            "Chapter Records Load Error:",
            error
        );

    }

}

function renderChapterRecords(){

const box =
    document.getElementById(
        "chaptersContent"
    );
    

    if(!box) return;


    if(
        !Array.isArray(chapterRecords) ||
        chapterRecords.length === 0
    ){

        box.innerHTML = `

            <div class="empty-box">

                <i class="fa-solid fa-book-open"></i>

                <h3>
                    No Chapter Records
                </h3>

                <p>
                    Chapter progress will appear here.
                </p>

            </div>

        `;

        return;

    }


    const keyword =
        chapterSearch
        ? chapterSearch.value
            .trim()
            .toLowerCase()
        : "";


    const filteredRecords =
        chapterRecords.filter(record =>

            String(record.subject || "")
                .toLowerCase()
                .includes(keyword)

            ||

            String(record.chapter || "")
                .toLowerCase()
                .includes(keyword)

        );


    if(filteredRecords.length === 0){

        box.innerHTML = `

            <div class="empty-box">

                <i class="fa-solid fa-magnifying-glass"></i>

                <h3>
                    No Chapters Found
                </h3>

                <p>
                    No chapter matches your search.
                </p>

            </div>

        `;

        return;

    }


    box.innerHTML =
        filteredRecords.map(record => `

            <div class="chapter-record-card">

                <h2>
                    📚 ${record.subject}
                </h2>

                <h3>
                    ${record.chapter}
                </h3>


                <div class="chapter-status">

                    <p>
                        Explanation Done? 

                        ${
                            record.explanation
                            ? "✅"
                            : "❌"
                        }
                    </p>


                    <p>
                        Question Solving?

                        ${
                            record.questions
                            ? "✅"
                            : "❌"
                        }
                    </p>


                    <p>
                        Test:

                        ${
                            record.test
                            ? "✅"
                            : "❌"
                        }
                    </p>


                    <p>
                        Revision:

                        ${
                            record.revision
                            ? "✅"
                            : "❌"
                        }
                    </p>

                </div>


                ${
                    adminLoggedIn
                    ? `

                        <div class="chapter-admin-actions">

                            <button
                                class="btn"
                                onclick="editChapterRecord(
                                    '${record.id}'
                                )">

                                ✏️ Edit

                            </button>


                            <button
                                class="btn"
                                onclick="deleteChapterRecord(
                                    '${record.id}'
                                )">

                                🗑️ Delete

                            </button>

                        </div>

                    `
                    : ""
                }

            </div>

        `)
        .join("");

}

if(chapterSearch){

    chapterSearch.oninput = () => {

        renderChapterRecords();

    };

}
if(addChapterBtn){

    addChapterBtn.onclick = () => {

        if(!adminLoggedIn) return;

        // Make sure Save is in ADD mode
        editingChapterId = null;

        chapterSubject.value = "";
        chapterName.value = "";

        chapterExplanation.value = "false";
        chapterQuestions.value = "false";
        chapterTest.value = "false";
        chapterRevision.value = "false";

        chapterModal.style.display = "block";

    };

}

if(closeChapterModal){

    closeChapterModal.onclick = () => {

        chapterModal.style.display =
            "none";

    };

}
if(saveChapterBtn){

    saveChapterBtn.onclick = async () => {

        if(!adminLoggedIn) return;


        const subject =
            chapterSubject.value.trim();

        const chapter =
            chapterName.value.trim();


        if(!subject || !chapter){

            notify(
                "Enter subject and chapter name",
                "#ff4b5c"
            );

            return;

        }


        /*
        =========================================
        EDIT EXISTING CHAPTER
        =========================================
        */

        if(editingChapterId){

            const record =
                chapterRecords.find(
                    item =>
                        item.id === editingChapterId
                );


            if(!record){

                notify(
                    "Chapter record not found",
                    "#ff4b5c"
                );

                return;

            }


            record.subject =
                subject;

            record.chapter =
                chapter;

            record.explanation =
                chapterExplanation.value === "true";

            record.questions =
                chapterQuestions.value === "true";

            record.test =
                chapterTest.value === "true";

            record.revision =
                chapterRevision.value === "true";


            await saveChapterRecords();

            renderChapterRecords();


            chapterModal.style.display =
                "none";


            editingChapterId = null;


            notify(
                "Chapter Record Updated"
            );


            return;

        }


        /*
        =========================================
        ADD NEW CHAPTER
        =========================================
        */

        const newChapter = {

            id:
                Date.now().toString(),

            subject:
                subject,

            chapter:
                chapter,

            explanation:
                chapterExplanation.value === "true",

            questions:
                chapterQuestions.value === "true",

            test:
                chapterTest.value === "true",

            revision:
                chapterRevision.value === "true"

        };


        chapterRecords.push(
            newChapter
        );


        await saveChapterRecords();

        renderChapterRecords();


        chapterModal.style.display =
            "none";


        editingChapterId = null;


        notify(
            "Chapter Record Added"
        );

    };

}

if(chapterRecordsBtn){

    chapterRecordsBtn.onclick = () => {

        if(!adminLoggedIn) return;

        if(dashboard){

            dashboard.style.display = "none";

        }

        const chapters =
            document.getElementById("chapters");

        if(chapters){

            chapters.scrollIntoView({
                behavior: "smooth"
            });

        }

    };

}


function updateChapterAdminControls(){

    const controls =
        document.getElementById(
            "chaptersAdminControls"
        );

    if(!controls) return;

    controls.style.display =
        adminLoggedIn
        ? "block"
        : "none";

}

async function editChapterRecord(id){

    if(!adminLoggedIn) return;


    const record =
        chapterRecords.find(
            item =>
                item.id === id
        );


    if(!record){

        notify(
            "Chapter record not found",
            "#ff4b5c"
        );

        return;

    }


    // Tell the single Save handler that
    // we are editing this record.
    editingChapterId = id;


    chapterSubject.value =
        record.subject || "";

    chapterName.value =
        record.chapter || "";


    chapterExplanation.value =
        String(
            record.explanation || false
        );

    chapterQuestions.value =
        String(
            record.questions || false
        );

    chapterTest.value =
        String(
            record.test || false
        );

    chapterRevision.value =
        String(
            record.revision || false
        );


    chapterModal.style.display =
        "block";

}

async function deleteChapterRecord(id){

    if(!adminLoggedIn) return;


    if(
        !confirm(
            "Delete this chapter record?"
        )
    ){

        return;

    }


    chapterRecords =
        chapterRecords.filter(
            record =>
                record.id !== id
        );


    await saveChapterRecords();

    renderChapterRecords();


    notify(
        "Chapter Record Deleted"
    );

}


window.editChapterRecord =
    editChapterRecord;

window.deleteChapterRecord =
    deleteChapterRecord;
/*=========================================
        STUDENT PERFORMANCE SYSTEM
==========================================*/

/*=========================================
        STUDENT PERFORMANCE SYSTEM
==========================================*/

let studentPerformance = [];


/*=========================================
        SAVE PERFORMANCE
==========================================*/

async function saveStudentPerformance(){

    try{

        await saveData(
            "academyStudentPerformance",
            studentPerformance
        );

        notify("Performance Saved");

    }

    catch(error){

        console.error(
            "Student Performance Save Error:",
            error
        );

        notify(
            "Failed to save performance",
            "#ff4b5c"
        );

    }

}


/*=========================================
        LOAD PERFORMANCE
==========================================*/

async function loadStudentPerformance(){

    try{

        const data =
            await loadData(
                "academyStudentPerformance"
            );


        if(Array.isArray(data)){

            studentPerformance = data;

        }

        else{

            studentPerformance = [];

        }


        renderStudentPerformance();

    }

    catch(error){

        console.error(
            "Student Performance Load Error:",
            error
        );

    }

}


/*=========================================
        ADMIN CONTROLS
==========================================*/

function updateStudentPerformanceAdminControls(){

    const controls =
        document.getElementById(
            "studentPerformanceAdminControls"
        );

    if(!controls) return;


    controls.style.display =
        adminLoggedIn
        ? "block"
        : "none";

}


/*=========================================
        OPEN PERFORMANCE MODAL
==========================================*/

function openStudentPerformanceModal(){

    if(!adminLoggedIn) return;


    if(!performanceModal) return;


    performanceStudent.value = "";
    performanceSubject.value = "";
    performanceTest.value = "";
    performanceMarks.value = "";
    performanceTotal.value = "";


    performanceModal.style.display =
        "block";

}


/*=========================================
        CLOSE PERFORMANCE MODAL
==========================================*/

if(closePerformanceModal){

    closePerformanceModal.onclick = () => {

        performanceModal.style.display =
            "none";

    };

}


/*=========================================
        SAVE PERFORMANCE RECORD
==========================================*/

if(savePerformanceBtn){

    savePerformanceBtn.onclick =
        async () => {

        if(!adminLoggedIn) return;


        const student =
            performanceStudent.value.trim();

        const subject =
            performanceSubject.value.trim();

        const test =
            performanceTest.value.trim();

        const marks =
            Number(
                performanceMarks.value
            );

        const total =
            Number(
                performanceTotal.value
            );


        if(
            !student ||
            !subject ||
            !test ||
            performanceMarks.value === "" ||
            performanceTotal.value === ""
        ){

            notify(
                "Please fill all fields",
                "#ff4b5c"
            );

            return;

        }


        if(
            marks < 0 ||
            total <= 0 ||
            marks > total
        ){

            notify(
                "Enter valid marks",
                "#ff4b5c"
            );

            return;

        }


        const percentage =
            ((marks / total) * 100)
            .toFixed(1);


        const newPerformance = {

            id:
                Date.now().toString(),

            student:
                student,

            subject:
                subject,

            test:
                test,

            marks:
                marks,

            total:
                total,

            percentage:
                percentage,

            createdAt:
                new Date().toISOString()

        };


        studentPerformance.push(
            newPerformance
        );


        await saveStudentPerformance();

        renderStudentPerformance();


        performanceModal.style.display =
            "none";


        notify(
            "Performance Record Added"
        );

    };

}


/*=========================================
        RENDER STUDENT PERFORMANCE
==========================================*/
/*=========================================================
        RENDER STUDENT PERFORMANCE
=========================================================*/

function renderStudentPerformance(){

    const box =
        document.getElementById(
            "studentPerformanceContent"
        );

    if(!box) return;


    if(
        !Array.isArray(studentPerformance) ||
        studentPerformance.length === 0
    ){

        box.innerHTML = `

            <div class="empty-box">

                <i class="fa-solid fa-chart-line"></i>

                <h3>
                    No Performance Records
                </h3>

                <p>
                    Student performance records will
                    appear here.
                </p>

            </div>

        `;

        return;

    }


    /*=====================================================
            SEARCH FILTER
    =====================================================*/

    const searchTerm =
        studentPerformanceSearch
        ? studentPerformanceSearch.value
            .trim()
            .toLowerCase()
        : "";


    const filteredRecords =
        studentPerformance.filter(record => {

            const student =
                String(record.student || "")
                    .toLowerCase();

            const subject =
                String(record.subject || "")
                    .toLowerCase();

            const test =
                String(record.test || "")
                    .toLowerCase();


            return (
                student.includes(searchTerm) ||
                subject.includes(searchTerm) ||
                test.includes(searchTerm)
            );

        });


    if(filteredRecords.length === 0){

        box.innerHTML = `

            <div class="empty-box">

                <i class="fa-solid fa-magnifying-glass"></i>

                <h3>
                    No Matching Records
                </h3>

                <p>
                    Try another student, subject or test name.
                </p>

            </div>

        `;

        return;

    }


    /*=====================================================
            DISPLAY PERFORMANCE RECORDS
    =====================================================*/

    box.innerHTML =
        filteredRecords
        .map(record => `

            <div class="student-performance-card">

                <div class="student-performance-header">

                    <h3>
                        👨‍🎓 ${record.student || ""}
                    </h3>

                    <span>
                        📚 ${record.subject || ""}
                    </span>

                </div>


                <div class="student-performance-details">

                    <p>

                        🧪 Test:

                        <strong>
                            ${record.test || ""}
                        </strong>

                    </p>


                    <p>

                        🎯 Score:

                        <strong>
                            ${record.marks ?? 0}
                            /
                            ${record.total ?? 0}
                        </strong>

                    </p>


                    <p>

                        📊 Percentage:

                        <strong>
                            ${record.percentage ?? 0}%
                        </strong>

                    </p>

                </div>


                ${
                    adminLoggedIn
                    ? `

                        <div
                            class="student-performance-admin-actions">

                            <button
                                type="button"
                                class="btn"
                                onclick="
                                    editStudentPerformance(
                                        '${record.id}'
                                    )
                                ">

                                ✏️ Edit

                            </button>


                            <button
                                type="button"
                                class="btn"
                                onclick="
                                    deleteStudentPerformance(
                                        '${record.id}'
                                    )
                                ">

                                🗑️ Delete

                            </button>

                        </div>

                    `
                    : ""
                }

            </div>

        `)
        .join("");

}


/*=========================================================
        PERFORMANCE SEARCH
=========================================================*/

if(studentPerformanceSearch){

    studentPerformanceSearch.addEventListener(
        "input",
        renderStudentPerformance
    );

}


/*=========================================================
        EDIT STUDENT PERFORMANCE
=========================================================*/

async function editStudentPerformance(id){

    if(!adminLoggedIn) return;


    const record =
        studentPerformance.find(
            item => item.id === id
        );


    if(!record) return;


    const student =
        prompt(
            "Student Name:",
            record.student || ""
        );

    if(student === null) return;


    const subject =
        prompt(
            "Subject:",
            record.subject || ""
        );

    if(subject === null) return;


    const test =
        prompt(
            "Test / Exam Name:",
            record.test || ""
        );

    if(test === null) return;


    const marks =
        prompt(
            "Marks Obtained:",
            record.marks ?? ""
        );

    if(marks === null) return;


    const total =
        prompt(
            "Total Marks:",
            record.total ?? ""
        );

    if(total === null) return;


    const cleanStudent =
        student.trim();

    const cleanSubject =
        subject.trim();

    const cleanTest =
        test.trim();

    const marksNumber =
        Number(marks);

    const totalNumber =
        Number(total);


    /*=====================================================
            VALIDATION
    =====================================================*/

    if(
        !cleanStudent ||
        !cleanSubject ||
        !cleanTest ||
        !Number.isFinite(marksNumber) ||
        !Number.isFinite(totalNumber) ||
        totalNumber <= 0 ||
        marksNumber < 0 ||
        marksNumber > totalNumber
    ){

        notify(
            "Please enter valid performance details",
            "#ff4b5c"
        );

        return;

    }


    /*=====================================================
            UPDATE RECORD
    =====================================================*/

    record.student =
        cleanStudent;

    record.subject =
        cleanSubject;

    record.test =
        cleanTest;

    record.marks =
        marksNumber;

    record.total =
        totalNumber;

    record.percentage =
        ((marksNumber / totalNumber) * 100)
        .toFixed(1);


    /*=====================================================
            SAVE TO FIRESTORE
    =====================================================*/

    await saveStudentPerformance();

    renderStudentPerformance();


    notify(
        "Performance Updated"
    );

}


/*=========================================================
        DELETE STUDENT PERFORMANCE
=========================================================*/

async function deleteStudentPerformance(id){

    if(!adminLoggedIn) return;


    const record =
        studentPerformance.find(
            item => item.id === id
        );


    if(!record) return;


    const confirmed =
        confirm(
            `Delete performance record for ${record.student}?`
        );


    if(!confirmed) return;


    studentPerformance =
        studentPerformance.filter(
            item => item.id !== id
        );


    /*=====================================================
            SAVE UPDATED ARRAY TO FIRESTORE
    =====================================================*/

    await saveStudentPerformance();

    renderStudentPerformance();


    notify(
        "Performance Deleted"
    );

}


/*=========================================================
        GLOBAL ACCESS FOR ADMIN BUTTONS
=========================================================*/

window.editStudentPerformance =
    editStudentPerformance;

window.deleteStudentPerformance =
    deleteStudentPerformance;


/*=========================================================
        ADMIN GLOBAL FUNCTION
=========================================================*/

window.openStudentPerformanceModal =
    openStudentPerformanceModal;
/*=========================================
        STUDENT QUESTIONS SYSTEM
==========================================*/

let studentQuestions = [];


async function saveStudentQuestions(){

    try{

        await saveData(
            "academyStudentQuestions",
            studentQuestions
        );

        notify("Question Saved");

    }

    catch(error){

        console.error(
            "Student Questions Save Error:",
            error
        );

        notify(
            "Failed to save question",
            "#ff4b5c"
        );

    }

}


async function loadStudentQuestions(){

    try{

        const data =
            await loadData(
                "academyStudentQuestions"
            );


        if(Array.isArray(data)){

            studentQuestions = data;

        }

        else{

            studentQuestions = [];

        }


        renderStudentQuestions();

    }

    catch(error){

        console.error(
            "Student Questions Load Error:",
            error
        );

    }

}
function renderStudentQuestions(){

    const box =
        studentQuestionsContent;

    if(!box) return;


    if(
        !Array.isArray(studentQuestions) ||
        studentQuestions.length === 0
    ){

        box.innerHTML = `

            <div class="empty-box">

                <i class="fa-solid fa-comments"></i>

                <h3>
                    No Questions Yet
                </h3>

                <p>
                    Be the first student to ask a question.
                </p>

            </div>

        `;

        return;

    }


    box.innerHTML =
        studentQuestions
        .map(question => `

            <div class="student-question-card">

                <div class="student-question-header">

                    <strong>
                        👤 ${question.student}
                    </strong>

                    <span>

                        ${
                            question.status === "answered"
                            ? "✅ Answered"
                            : "🟡 Pending"
                        }

                    </span>

                </div>


                <h4>

                    📚 ${question.subject}

                </h4>


                <p class="student-question-text">

                    ❓ ${question.question}

                </p>


                ${
                    question.status === "answered"
                    ? `

                        <div class="student-question-answer">

                            <strong>
                                👨‍🏫 Teacher Answer
                            </strong>

                            <p>
                                ${question.answer || ""}
                            </p>

                        </div>

                    `
                    : `

                        <div class="student-question-pending">

                            ⏳ Waiting for teacher response...

                        </div>

                    `
                }


                ${
                    adminLoggedIn
                    ? `

                        <div class="student-question-admin-actions">

                            <button
                                class="btn"
                                onclick="answerStudentQuestion(
                                    '${question.id}'
                                )">

                                ✏️
                                ${
                                    question.status === "answered"
                                    ? "Edit Answer"
                                    : "Answer"
                                }

                            </button>


                            <button
                                class="btn"
                                onclick="deleteStudentQuestion(
                                    '${question.id}'
                                )">

                                🗑️ Delete

                            </button>

                        </div>

                    `
                    : ""
                }

            </div>

        `)
        .join("");

}
if(submitStudentQuestionBtn){

    submitStudentQuestionBtn.onclick =
        async () => {

        const subject =
            studentQuestionSubject.value.trim();

        const question =
            studentQuestionText.value.trim();


        if(!currentUser){

            notify(
                "Please enter your name first",
                "#ff4b5c"
            );

            return;

        }


        if(!subject || !question){

            notify(
                "Enter a subject and question",
                "#ff4b5c"
            );

            return;

        }


        const newQuestion = {

            id:
                Date.now().toString(),

            student:
                currentUser,

            subject:
                subject,

            question:
                question,

            answer:
                "",

            status:
                "pending",

            createdAt:
                new Date().toISOString()

        };


        studentQuestions.push(
            newQuestion
        );


        await saveStudentQuestions();

        renderStudentQuestions();


        studentQuestionSubject.value =
            "";

        studentQuestionText.value =
            "";


        notify(
            "Question Submitted"
        );

    };

}
async function answerStudentQuestion(id){

    if(!adminLoggedIn) return;


    const question =
        studentQuestions.find(
            item => item.id === id
        );


    if(!question) return;


    const answer =
        prompt(
            `Enter answer for ${question.student}:`,
            question.answer || ""
        );


    if(answer === null) return;


    const cleanAnswer =
        answer.trim();


    if(!cleanAnswer){

        notify(
            "Answer cannot be empty",
            "#ff4b5c"
        );

        return;

    }


    question.answer =
        cleanAnswer;

    question.status =
        "answered";


    await saveStudentQuestions();

    renderStudentQuestions();


    notify(
        "Question Answered"
    );

}


async function deleteStudentQuestion(id){

    if(!adminLoggedIn) return;


    const confirmed =
        confirm(
            "Delete this student question?"
        );


    if(!confirmed) return;


    studentQuestions =
        studentQuestions.filter(
            question =>
                question.id !== id
        );


    await saveStudentQuestions();

    renderStudentQuestions();


    notify(
        "Question Deleted"
    );

}


window.answerStudentQuestion =
    answerStudentQuestion;

window.deleteStudentQuestion =
    deleteStudentQuestion;
    

let imageLibrary = [];
const gallerySearch =
    document.getElementById("gallerySearch");
    
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

async function saveContact(){

    try{

        await saveData(
            "academyContact",
            contactData
        );

    }

    catch(error){

        console.error(
            "Contact Save Error:",
            error
        );

        notify("Failed to save contact information");

    }

}
async function loadContact(){

    try{

        const data = await loadData(
            "academyContact"
        );

        if(data){

            contactData = data;

        }

        renderContact();

    }

    catch(error){

        console.error(
            "Contact Load Error:",
            error
        );

    }

}

async function saveSyllabus(){

    try{

        await saveData(
            "academySyllabus",
            syllabusData
        );

    }
    catch(error){

        console.error(
            "Syllabus Save Error:",
            error
        );

        notify("Failed to save syllabus");

    }

}
async function loadSyllabus(){

    try{

        const data = await loadData(
            "academySyllabus"
        );

        if(data){

            syllabusData = data;

        }

        renderSyllabus();

    }
    catch(error){

        console.error(
            "Syllabus Load Error:",
            error
        );

    }

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

    const box =
        document.getElementById("testContent");

    if(!box) return;

    box.innerHTML = "";


    if(
        !Array.isArray(testLibrary) ||
        testLibrary.length === 0
    ){

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


    const keyword =
        testsSearch
        ? testsSearch.value
            .trim()
            .toLowerCase()
        : "";


    const filteredTests =
        testLibrary.filter(test =>

            String(
                test.title || ""
            )
            .toLowerCase()
            .includes(keyword)

        );


    if(filteredTests.length === 0){

        box.innerHTML = `

            <div class="empty-box">

                <i class="fa-solid fa-magnifying-glass"></i>

                <h3>No Tests Found</h3>

                <p>
                    No tests match your search.
                </p>

            </div>

        `;

        return;

    }


    filteredTests.forEach(test => {

        const originalIndex =
            testLibrary.indexOf(test);

        box.innerHTML += `

            <div class="pdf-card">

                <h2>
                    ${test.title}
                </h2>

                <p>
                    ${test.questions.length} Questions
                </p>

                <button
                    onclick="startTest(${originalIndex})">

                    ▶ Start Test

                </button>

                ${
                    adminLoggedIn
                    ? `

                        <button
                            onclick="deleteTest(${originalIndex})">

                            🗑 Delete

                        </button>

                    `
                    : ""
                }

            </div>

        `;

    });

}
if(testsSearch){

    testsSearch.oninput = () => {

        renderTests();

    };

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


    if(
        !Array.isArray(competitionLibrary) ||
        competitionLibrary.length === 0
    ){

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


    const keyword =
        competitionsSearch
        ? competitionsSearch.value
            .trim()
            .toLowerCase()
        : "";


    const filteredCompetitions =
        competitionLibrary.filter(item =>

            String(
                item.title || ""
            )
            .toLowerCase()
            .includes(keyword)

        );


    if(filteredCompetitions.length === 0){

        box.innerHTML = `

            <div class="empty-box">

                <i class="fa-solid fa-magnifying-glass"></i>

                <h3>No Competitions Found</h3>

                <p>
                    No competitions match your search.
                </p>

            </div>

        `;

        return;

    }


    filteredCompetitions.forEach(item => {

        const originalIndex =
            competitionLibrary.indexOf(item);

        box.innerHTML += `

            <div class="pdf-card">

                <h2>
                    ${item.title}
                </h2>

                <p>
                    📅 ${item.date}
                </p>

                <p>
                    🕒 ${item.time}
                </p>

                <p>
                    📍 ${item.venue}
                </p>

                <p>
                    ${item.description}
                </p>

                ${
                    adminLoggedIn
                    ? `
                        <br>

                        <button
                            onclick="deleteCompetition(${originalIndex})">

                            🗑 Delete

                        </button>
                    `
                    : ""
                }

            </div>

        `;

    });

}
if(competitionsSearch){

    competitionsSearch.oninput = () => {

        renderCompetitions();

    };

}

function renderAnnouncements(){

    const box =
        document.getElementById("announcementContent");

    if(!box) return;

    box.innerHTML = "";


    if(
        !Array.isArray(announcementLibrary) ||
        announcementLibrary.length === 0
    ){

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


    const keyword =
        announcementsSearch
        ? announcementsSearch.value
            .trim()
            .toLowerCase()
        : "";


    const filteredAnnouncements =
        announcementLibrary.filter(item =>

            String(
                item.title || ""
            )
            .toLowerCase()
            .includes(keyword)

        );


    if(filteredAnnouncements.length === 0){

        box.innerHTML = `

            <div class="empty-box">

                <i class="fa-solid fa-magnifying-glass"></i>

                <h3>No Announcements Found</h3>

                <p>
                    No announcements match your search.
                </p>

            </div>

        `;

        return;

    }


    filteredAnnouncements.forEach(item => {

        const originalIndex =
            announcementLibrary.indexOf(item);

        box.innerHTML += `

            <div class="pdf-card">

                <h2>
                    ${item.title}
                </h2>

                <p style="margin:15px 0;">
                    ${item.text}
                </p>

                <small>
                    📅 ${item.date}
                </small>

                ${
                    adminLoggedIn
                    ? `

                        <br><br>

                        <button
                            onclick="deleteAnnouncement(${originalIndex})">

                            🗑 Delete

                        </button>

                    `
                    : ""
                }

            </div>

        `;

    });


    box.style.opacity = "0";

    setTimeout(() => {

        box.style.opacity = "1";

    }, 150);

}
if(announcementsSearch){

    announcementsSearch.oninput = () => {

        renderAnnouncements();

    };

}

function renderAttendance(){

    const box =
    document.getElementById("attendanceContent");

    if(!box) return;

    const dateInput =
    document.getElementById("attendanceDate");

    const batchSelect =
    document.getElementById("attendanceBatch");

    const searchInput =
    document.getElementById("attendanceSearch");

    if(!dateInput || !batchSelect) return;

    const date = dateInput.value;

    const batch = batchSelect.value;

    if(!date) return;

    const students =
    attendanceStudents[batch] || [];

    const keyword =
    searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

    const filteredStudents =
    students.filter(student =>
        student.toLowerCase().includes(keyword)
    );

    const dayData =
    attendanceData[date] &&
    attendanceData[date][batch]
    ? attendanceData[date][batch]
    : {};

    box.innerHTML = `

        <div class="attendance-header">

            <h2>
                📅 ${date}
            </h2>

            <h3>
                ${batch==="batch1"
                    ? "Batch 1"
                    : "Batch 2"}
            </h3>

        </div>

        <div class="attendance-list">

            ${
                filteredStudents.length === 0

                ? `

                <div class="empty-box">

                    <i class="fa-solid fa-user-slash"></i>

                    <h3>
                        No Students Found
                    </h3>

                    <p>
                        Try another search.
                    </p>

                </div>

                `

                :

                filteredStudents.map((student,index)=>`

                    <div class="attendance-row">

                        <span>
                            ${index+1}. ${student}
                        </span>

<label class="attendance-check">
<input
    type="checkbox"

    ${dayData[student]
        ? "checked"
        : ""}

    ${adminLoggedIn ? "" : "disabled"}

    onchange="
        toggleAttendance(
            '${batch}',
            '${student.replace(/'/g,"\\'")}',
            this.checked
        )
    "
>

    <span>
        ${dayData[student]
            ? "✅ Present"
            : "❌ Absent"}
    </span>

</label>

                    </div>

                `).join("")
            }

        </div>

        ${adminLoggedIn ? `

<button
    class="btn"
    onclick="saveAttendanceNow()">

    💾 Save Attendance

</button>

` : ""}

    `;

}
function toggleAttendance(
    batch,
    student,
    present
){
if(!adminLoggedIn) return;
    const dateInput =
    document.getElementById("attendanceDate");

    if(!dateInput || !dateInput.value) return;

    const date = dateInput.value;

    if(!attendanceData[date]){

        attendanceData[date] = {};

    }

    if(!attendanceData[date][batch]){

        attendanceData[date][batch] = {};

    }

    attendanceData[date][batch][student] =
    present;

}
async function saveAttendanceNow(){

    await saveAttendance();

    notify("Attendance Saved");

}
window.toggleAttendance =
toggleAttendance;
if(addAttendanceStudentBtn){

    addAttendanceStudentBtn.onclick = () => {

        if(!adminLoggedIn) return;

        attendanceStudentName.value = "";

        attendanceStudentBatch.value = "batch1";

        attendanceStudentModal.style.display = "block";

    };

}


if(closeAttendanceStudentModal){

    closeAttendanceStudentModal.onclick = () => {

        attendanceStudentModal.style.display = "none";

    };

}
window.saveAttendanceNow =
saveAttendanceNow;
/*=========================================================
        ATTENDANCE CONTROLS
=========================================================*/



if(attendanceDate){

    attendanceDate.onchange = () => {

        renderAttendance();

    };

}


if(attendanceBatch){

    attendanceBatch.onchange = () => {

        renderAttendance();

    };

}


if(attendanceSearch){

    attendanceSearch.oninput = () => {

        renderAttendance();

    };

}
if(saveAttendanceStudentBtn){

    saveAttendanceStudentBtn.onclick = async () => {

        if(!adminLoggedIn) return;

        const name =
            attendanceStudentName.value.trim();

        const batch =
            attendanceStudentBatch.value;

        if(!name){

            notify(
                "Enter student name",
                "#ff4b5c"
            );

            return;

        }

        if(!attendanceStudents[batch]){

            attendanceStudents[batch] = [];

        }

        const exists =
            attendanceStudents[batch]
            .some(student =>
                student.toLowerCase() ===
                name.toLowerCase()
            );

        if(exists){

            notify(
                "Student already exists",
                "#ff4b5c"
            );

            return;

        }

        attendanceStudents[batch].push(name);

        await saveAttendanceStudents();

        renderAttendance();

        attendanceStudentModal.style.display =
            "none";

        notify("Student Added");

    };

}
if(addStudentBtn){

    addStudentBtn.onclick = () => {

        if(!adminLoggedIn) return;

        newStudentName.value = "";
        newStudentBatch.value = "batch1";

        addStudentModal.style.display = "block";

    };

}

if(closeAddStudentModal){

    closeAddStudentModal.onclick = () => {

        addStudentModal.style.display = "none";

    };

}

if(saveNewStudentBtn){

    saveNewStudentBtn.onclick = async () => {

        if(!adminLoggedIn) return;

        const name =
            newStudentName.value.trim();

        const batch =
            newStudentBatch.value;

        if(!name){

            notify(
                "Enter student name",
                "#ff4b5c"
            );

            return;

        }

        if(!studentDirectory[batch]){

            studentDirectory[batch] = [];

        }

        const exists =
            studentDirectory[batch]
            .some(student =>
                student.toLowerCase() ===
                name.toLowerCase()
            );

        if(exists){

            notify(
                "Student already exists",
                "#ff4b5c"
            );

            return;

        }

        studentDirectory[batch].push(name);

        if(!attendanceStudents[batch]){

            attendanceStudents[batch] = [];

        }

        if(
            !attendanceStudents[batch]
            .some(student =>
                student.toLowerCase() ===
                name.toLowerCase()
            )
        ){

            attendanceStudents[batch].push(name);

        }

        await saveData(
            "studentDirectory",
            studentDirectory
        );

        await saveAttendanceStudents();

        renderStudentDirectory();

        renderAttendance();

        addStudentModal.style.display =
            "none";

        notify("Student Added");

    };

}
function updateAttendanceAdminControls(){

    if(!attendanceAdminControls) return;

    if(adminLoggedIn){

        attendanceAdminControls.style.display =
            "block";

    }
    else{

        attendanceAdminControls.style.display =
            "none";

    }

}
function updateTestTimerAdminControls(){

    if(!testTimerAdminControls) return;

    if(adminLoggedIn){

        testTimerAdminControls.style.display =
            "block";

    }
    else{

        testTimerAdminControls.style.display =
            "none";

    }

}

function loadTestTimerControls(){

    if(!testTimerDate ||
       !testTimerTime ||
       !testTimerDuration) return;

    testTimerDate.value =
        testTimerData.testDate || "";

    testTimerTime.value =
        testTimerData.testTime || "";

    testTimerDuration.value =
        testTimerData.durationMinutes || 60;

}
if(startTestTimerBtn){

    startTestTimerBtn.onclick = async () => {

        if(!adminLoggedIn) return;

        const date =
            testTimerDate.value;

        const time =
            testTimerTime.value;

        const duration =
            parseInt(
                testTimerDuration.value
            );

        if(!date || !time){

            notify(
                "Select test date and time",
                "#ff4b5c"
            );

            return;

        }

        if(
            !duration ||
            duration < 1
        ){

            notify(
                "Enter a valid duration",
                "#ff4b5c"
            );

            return;

        }

        testTimerData = {

            active: true,

            testDate: date,

            testTime: time,

            durationMinutes: duration,

            startedAt: Date.now()

        };

        await saveTestTimer();

        renderTestTimer();

        notify("Test Timer Started");

    };

}


if(stopTestTimerBtn){

    stopTestTimerBtn.onclick = async () => {

        if(!adminLoggedIn) return;

        testTimerData.active = false;

        await saveTestTimer();

        renderTestTimer();

        notify("Test Timer Stopped");

    };

}
function updateStudentDirectoryAdminControls(){

    if(!studentDirectoryAdminControls) return;

    if(adminLoggedIn){

        studentDirectoryAdminControls.style.display =
            "block";

    }
    else{

        studentDirectoryAdminControls.style.display =
            "none";

    }

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


    if(
        !Array.isArray(imageLibrary) ||
        imageLibrary.length === 0
    ){

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


    const keyword =
        gallerySearch
        ? gallerySearch.value
            .trim()
            .toLowerCase()
        : "";


    const filteredImages =
        imageLibrary.filter(img =>

            String(
                img.title || ""
            )
            .toLowerCase()
            .includes(keyword)

        );


    if(filteredImages.length === 0){

        box.innerHTML = `

            <div class="empty-box">

                <i class="fa-solid fa-magnifying-glass"></i>

                <h3>No Photos Found</h3>

                <p>
                    No photos match your search.
                </p>

            </div>

        `;

        return;

    }


    filteredImages.forEach(img => {

        const originalIndex =
            imageLibrary.indexOf(img);

        box.innerHTML += `

            <div class="pdf-card">

                <img
                    src="${img.url}"
                    class="studyImage"
                    onclick="openStudyImage('${img.url}')">

                <h3>
                    ${img.title}
                </h3>

                <small>
                    📅 ${img.date}
                </small>

                ${
                    adminLoggedIn
                    ? `

                        <br><br>

                        <button
                            onclick="deleteImage(${originalIndex})">

                            🗑 Delete

                        </button>

                    `
                    : ""
                }

            </div>

        `;

    });

}
if(gallerySearch){

    gallerySearch.oninput = () => {

        renderImages();

    };

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

    saveHomeworkBtn.onclick = async () => {

        if(
            homeworkTitle.value.trim() === "" ||
            homeworkText.value.trim() === ""
        ){

            alert("Fill all fields.");

            return;

        }

        const editingId =
            homeworkModal.dataset.editingId;


        if(editingId){

            const homework =
                homeworkData.find(
                    item => item.id === editingId
                );

            if(homework){

                homework.title =
                    homeworkTitle.value.trim();

                homework.text =
                    homeworkText.value.trim();

            }

            delete homeworkModal.dataset.editingId;

        }

        else{

            homeworkData.push({

                id:
                    Date.now().toString(),

                title:
                    homeworkTitle.value.trim(),

                text:
                    homeworkText.value.trim()

            });

        }


        await saveHomework();

        renderHomework();
        renderManageHomework();

        homeworkModal.style.display =
            "none";

        homeworkTitle.value = "";
        homeworkText.value = "";

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

    saveNotesBtn.onclick = async () => {

        if(
            notesTitle.value.trim() === "" ||
            notesText.value.trim() === ""
        ){

            alert("Fill all fields.");

            return;

        }

        const newNote = {

            id:
                Date.now().toString(),

            title:
                notesTitle.value.trim(),

            text:
                notesText.value.trim()

        };

        notesData.push(
            newNote
        );

        await saveNotes();

        renderNotes();
        renderManageNotes();

        notesModal.style.display =
            "none";

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

    saveSyllabusBtn.onclick = async ()=>{

        syllabusData.text =
        syllabusText.value.trim();

        await saveSyllabus();

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

    saveContactBtn.onclick = async ()=>{

        contactData.address =
        academyAddress.value.trim();

        contactData.phone =
        academyPhone.value.trim();

        contactData.email =
        academyEmail.value.trim();

        contactData.website =
        academyWebsite.value.trim();

        contactData.map =
        academyMap.value.trim();

        await saveContact();

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
loadTestTimer();
loadCompetitions();
loadAnnouncements();
loadRecords(); 
loadImages();
loadFeesData();
loadChapterRecords();
loadStudentPerformance();
loadStudentQuestions();
loadSyllabus();
loadContact();
updateEditableMode();
renderContact();
loadTeacherProfile();
loadLogo();
loadHomework();
loadSettings();
loadAttendanceStudents();
loadAttendance();
loadStudentDirectory();
renderStudentDirectory();
updateAttendanceAdminControls();
updateStudentDirectoryAdminControls();
updateChapterAdminControls();
updateStudentPerformanceAdminControls();

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
/*=========================================================
        REMOVE FLOATING CHAT MESSAGE BUTTON
=========================================================*/

function removeFloatingChatButton(){

    document
        .querySelectorAll("button, div, a, span")
        .forEach(element => {

            const text =
                element.textContent
                    .trim()
                    .replace(/\s+/g, " ");

            if(
                text.includes("Messages") &&
                text.length < 40
            ){

                /*
                    Don't remove the actual chat messages
                    container or chat input.
                */

                if(
                    element.id !== "chatMessages" &&
                    element.id !== "chatInput" &&
                    element.id !== "sendMessage"
                ){

                    element.remove();

                }

            }

        });

}


/* Run once */
removeFloatingChatButton();


/* Also catch the button if another script creates it later */
const chatButtonObserver =
    new MutationObserver(() => {

        removeFloatingChatButton();

    });


chatButtonObserver.observe(
    document.body,
    {
        childList: true,
        subtree: true
    }
);
