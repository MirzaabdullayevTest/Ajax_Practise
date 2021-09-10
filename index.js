window.addEventListener('load', function (e) {
    const url = 'http://localhost:3000/people'

    function sendReq() {
        function requestServer(url) {
            return fetch(url)
        }

        requestServer(url).then(res => {
            if (res.ok) {
                return res.json()
            }
            else {
                console.error('This is error', res.status);
            }
        }).then(data => {
            const app = document.querySelector('.app');

            data.forEach((val, index) => {
                const card = document.createElement('div')
                card.classList.add('card')

                if (val.gender === 'female') {
                    icon = '<i class="fas fa-venus"></i>'
                } else {
                    icon = '<i class="fas fa-mars"></i>'
                }

                card.innerHTML = `
            <img src="${val.photo}" class="account_img" alt="jpg">
            <img src="${val.photo}" class="card_img" alt="jpg">
            <div class="name">${val.name}</div>
            <div class="gender">${icon}</div>
            <div class="like"><i class="far fa-heart"></i></div>
            <div class="count">${val.like}</div>
            <div class="save"><i class="far fa-bookmark"></i></div>
            `

                app.appendChild(card)
                // console.log(val);
            })
        }).catch((err) => {
            console.error(err);
        })


        btn.remove()
    }

    const btn = document.querySelector('.button');
    btn.addEventListener('click', sendReq)

});