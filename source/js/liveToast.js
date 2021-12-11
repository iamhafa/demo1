var toastTrigger = document.getElementById('liveToastBtn')
var toastTrigger1 = document.getElementById('liveToastBtn1')
                    
var toastLiveExample = document.getElementById('liveToast')
    
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        let toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    })
};

if (toastTrigger1) {
    toastTrigger1.addEventListener('click', function () {
        let toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    })
}