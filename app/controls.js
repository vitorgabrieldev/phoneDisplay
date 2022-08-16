let pwBtn = document.getElementById('pwBtn').addEventListener('click', () => 
{
    let displayOn = document.querySelector('#displayOn');
    let loadMobile = document.querySelector('#loadMobile');


    // displayOn.style.display = 'block'

    if (displayOn.style.display == 'none')
    {
        loadMobile.style.display = 'block';
        loadMobile.style.margin = '15rem 0 0 7rem';

        setTimeout(() => {
            loadMobile.style.display = 'none';
            displayOn.style.display = 'block';

            var batery = document.getElementById("batery");
            var bateryChanger = 100;

            let bateryProgress = setInterval(() => {
                bateryChanger--;
                batery.innerHTML = bateryChanger + '%';
            }, 3000);
        }, 5000);

    }else
    {
        displayOn.style.display = 'none'
    };


});
// function data
function dataMobile()
{
    let hoursDOM = document.querySelector('#dataHours');
    let dataMinutes = document.querySelector('#dataMinutes');

    let hm = new Date().getHours();
    let mm = new Date().getMinutes();

    hoursDOM.innerHTML = hm + ':';
    dataMinutes.innerHTML = mm + ':';
};

displayOn.style.display = 'block';