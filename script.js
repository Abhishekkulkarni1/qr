const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
qrImg = wrapper.querySelector(".qr-code img"),
generateBtn = wrapper.querySelector(".form button");

generateBtn.addEventListener("click", () =>{
    let qrValue = qrInput.value;
    if(!qrValue) return;
    // console.log(qrValue);
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    generateBtn.innerText = "Generating QR Code..."
    qrImg.addEventListener("load", () =>{
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code"
    });
});
qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
       wrapper.classList.remove("active");
    }
})