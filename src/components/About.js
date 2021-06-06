import React from 'react'

function About() {
    return (
        <div className="container">
            <div className="row d-flex flex-row mt-5">
                <div className="col-4 mt-5">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label fw-bold">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="cgunes52@gmail.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label fw-bold">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div className="col-7 ms-5">
                    <span className="display-5 fw-bold">PATİKA</span>
                    <p>Patika, 2007 yılına uzanan arkadaşlıkların ve eğitim alanındaki sorunları çözmeyi kendine dert edinmiş bir ekibin ürünü.

                        Peki derdimiz ne?

                        Genç işsizliği yükselişte. Hayatın en verimli zamanlarında yıllarca okuyup iş bulamamak ve diplomaların geçerliliğini yitirmesi artık eğitim kurumlarını iyice zorluyor. Diğer yanda teknoloji sektörünün 1 numaralı sorunu yetenek bulamamak.

                        Aradaki boşluğu kim, nasıl dolduracak?

                        Bu soruyu cevaplamak için önce 2016’da Kodluyoruz’u kurduk. Kodluyoruz, Türkiye’nin en büyük yazılımcı topluluklarından biri oldu ve 4 yılda sektöre binlerce yazılımcı kazandırdı.

                        2021’de, sınırlarımızı aşmak için Patika’yı kurduk. Eğitim platformumuzla ve global partnerliklerle hem biz hem Türkiye’deki yazılımcılar daha da güzel işlere kanat açmaya artık daha hazır!</p>
                </div>
            </div>
        </div>
    )
}

export default About
