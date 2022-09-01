function progressBar(progressVal,el,x, totalPercentageVal = 100) {
    var strokeVal = (5 * 100) / totalPercentageVal;
    var start = new Date().getTime();

    setTimeout(function () {
        x.style.strokeDasharray = progressVal * (strokeVal) + ' 999';
        var now = (new Date().getTime()) - start;
        var progress = now / 700;
        el.innerHTML = progressVal / totalPercentageVal * 100 + '%';
        if (progress < 1) setTimeout(arguments.callee, 10);
    }, 1000);

}

let get_val = document.querySelectorAll('.progress-text');
get_val.forEach(elem => {
    let percent_value = (elem.attributes.value.nodeValue)
    let temp = elem.previousElementSibling.children
    x = temp[1];
    progressBar(percent_value,elem,x,100)
})

