/**
 * 1.Render songs - OK
 * 2.Scroll top - OK
 * 3.Play / pause / seek - OK
 * 4.CD rotate - OK
 * 5.Next / prev - OK
 * 6.Random - OK
 * 7.Next / Repeat when ended - OK
 * 8.Active song - OK
 * 9.Scroll active song into view - OK
 * 10.Play song when click 
 */






const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player = $('.player')
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');

const progress = $('#progress')
const cd = $('.cd');

const playBtn = $('.btn-play');

const backWawrdbtn = $('.btn-backward');
const nextBtn = $('.btn-next');

const randomBtn = $('.btn-random');

const repeatBtn = $('.btn-repeat');

const playlist = $('.playlist');





const app = {
    currentIndex : 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs:[
        {
            name: "Dubstep",
            singer: "Bendsound",
            path: "./asset/songs/dubstep.mp3",
            image: "./asset/images/DashboardImg.png",
        },
        {
            name: "Cute",
            singer: "Bendsound",
            path: "./asset/songs/cute.mp3",
            image: "./asset/images/DashboardImg.png",
        },
        {
            name: "Better Day Song",
            singer: "Bendsound",
            path: "./asset/songs/betterdays.mp3",
            image: "./asset/images/DashboardImg.png",
        },
        {
            name: "Creative Minds ",
            singer: "Bendsound",
            path: "./asset/songs/creativeminds.mp3",
            image: "./asset/images/DashboardImg.png",
        },  {
            name: "Evolution",
            singer: "Bendsound",
            path: "./asset/songs/evolution.mp3",
            image: "https://www.bensound.com/bensound-img/evolution.jpg",
        },
        {
            name: "Reality",
            singer: "Lost Frequencies",
            path: "./asset/songs/Reality.mp3",
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESERERERESERESEhIQEhEQERESERIYGRQZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs2Py40NTEBDAwMEA8QHhISGDQsISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0MTQ0NDQ0NDQxNDE0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAABAgAFAwQGB//EADkQAAICAQIEAwYFAwQBBQAAAAECABEDBCEFEjFBBlFhEyIycYGRQlKhscFy0fAUI2Lh8RUzU5LS/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEDAgT/xAAgEQEBAQEAAwACAwEAAAAAAAAAARECEiExA0EiMlFx/9oADAMBAAIRAxEAPwDjAIQJAI4EqABGAhAjASAARgIQIQIAAhAjARgICgQ1GAhAgLUNR6kqAlRgIagdwtX1PQeci4NSVNh9K4AJGxrex9j5H0mPliUsxjqGo/L5w8sBKkqNUNShKgqZKgqEJUFTJUFQEIgqORBUBKgqPUlQEqSPUkDQAjASARwJRAIQJAI4EgAEYCECMBCgBGAhAhAgCoQvX0F/594wA7xmsLYKnmocoYXd9KMluLJpGFAE3v02MscHDGYWfdo73YG3Xfp6zAcye1GJseTlUWXXzoGwa9P0mDiGoynICMgCr5qQ7hqAsdF6de/XbaZXu341n45PrJxY48ACHd2FEj8I6E+p6yuwHS78gK1sXBB5RVUBXceXXfeYtbkTISMmNsT4w3RXIcWOaiTYatx2sWBsAdThunXJizO3uqiCxudyt9epPTr1uMubauyXJFpr9VjxlQC3I4HK7tzWBd9P7zNw/W6YoS+QO+wFBlRT5dx+oM0+GcNxnDi/1fM6u7hV5yQnbr9K2rvLbU6bTYiqoiIu9syWVU9eWzfMemw7ybnp1477xj1uUf6Y5wE2flKpR3voD+L7fOpVafibZPcRORtgXY84rz2nQYMfOvIiFMQ+DYXv126DoPXp8pr6ng6gF8ZPMvVRy3679D8jfSJ0dcaxKe1gxqnO6rV5MT87H8JKr+f3hzdr9Z0aGwD5i5rLrz2YFQVHqSpUJUlR6gqUYyIKmQiCoCVFImSoCICVJGqSQaAEYCQCMBKggRgJAI4EKgEIEgEcCAAIwEgEYCBh1WVcaFmuulDruaFeUxcJ1zs5TFWNcas+TKVDZAoNbMwNXtsNzfpseI4Q6UW5VVlZjVmgegH1kxYMS6dkVSodkUkuvO4FkBttxzMdt9/lM+61/HExJ7TKcwbb3sZLZGZhzVytuPeXe9jtsaO00+JoF1LjJzKtsEccz468iB3oV3+UOK8dhehFJz+8bIsb997/AMuXus4deEe6TzAPzrsRzfha+/XfyqZ+WVt4eUUvFWQ4kIPM4AApuYk/lF70PXyG0wabLkdfYp7tEc1KaLFRZYjuObb6y4Xw49K5Qc1GgF6fPm6neZdPwYNkKZAQN2YcxB6dQLsdjt+Ud4nUL+OtDWhseIF1dHTlxqFDEAAe7063XmNjNPhGVy/+6z5L90sWbmYHoFvZfp23radDxXhmnCj/AHshBDJk94GqNjY35D0+hqaOLCmMD2SuwUFQcgTlvb3uVQF7Db07xOph4XWtxDiOQuAjNioBuVGOy1sb8yb+cL8Rzq4DsHUqjrk/MjbAny6yPh5izPuzG2L2eY+vn+vea+o1igopxnJjHKnukqzhRtXKPdUXf27SzKWWLU8EwZsTM+S+ZOYUA3sybIII6dSD9JpcFTIismRw/KQEYHqoFfPqCPpGzcWXCjY0+JuXk5651VjTIxHXYkfb6YOEagl6Pw0VB9TuN/PaXm2M++Zf+ripKjVJU2YEqCo9QVAQiSo9QVASoKj1BUBKkj1JArQI4EAEyAQggQgSARwIVAIwEgEcCAAIwEIEIEDX1OQIjE15i/MdpVJmZmUBiDdAUdjVC/p0ljxdLxHetx+u0rOCDnysMjLzB0AOw5gF7+X4f/Ey6n7bfj6/TveFeGFyIjN6EE7m+pP6n9Z0y8KIUIbKiviomgdh/naZ+CuDjSvICW4SZyN/KqnT8PJ+IChsP7mafEuCKffXZgNj3sTqESDKlio8TzuvGuLcMc5qIbkc7lTyt1GwHnLrT8JAxKNzQ3FAfoNp2WfhgLFqkOiobftU4ytPKPN+IaCwAii022BU9TXy+Uqnxtjv3N+u5JUfNq/meqjhKe9t8W58pR8b4GrKdvlLNhfGvI9fqQMlk2RsKAoGh08q7Td4JxAc4xgc3OwbuGU/5X95j8WcN9m9qNgo6dt95reGFD6hexCt29P+5vzJY8nVs6sdzUFRgJKmjEtQVGqSoCVBUeoKgJUFR6kqAlSRqkgVoEyARQI6iEECOBABHAhRAjASAQgQIBGAkAjAQKvxCxGlci7HLVdd2A/mc1wjNystCy3LQFncUK/Qj6zruLY+bT5hVn2bkfMKSJQeBtKuTWIrUVVWavWjOevjvj+0ey+G0cYU5z7xAPW+06nHuJzo1KYkVmuthsLiDxXhQWSAO1kdJhHpstdUFkInIjx7ow3KXINgdqvtvLvTcZxZDSMDsD9xc62OPHpYMlzG2MRTqVEr9dx3DhFu1fKvKPTqSt/kqVnE0HKZUN450palJb1qq+dmYc/ibFkNXQINEec5rqSuB8c4HX3x0Jrp5g/9TnPCCH/UWBsEZr/Sd74yCvpHPUUHBnJeDce+Zv6FHy3JmvF9MPzT+TqYKhgqdsgIi1HqCoC1JUaoJULUFRqkqAtSRqkgVqiOBFUTIBAIEcCACMBAIEYCQCMBAgEYCQCECBbcH4bg1HNjfNyZmUsmMcu63RYg7kX5So8PeHho+K5MBdWrEWxkbFlKjse4+v8Abq+H6JF06ajkJyJjLAqBzfG5oH/Os1smlx6rKc7A8mXAqKfhdCGJDKfwut7EbgiYXq7ZXrnEnMsbHF1BA5jVAkX28z+04riWq01O2RspVSOb2aqpWyAL+Kr/AORWem6PQKyMmQtkKlU535S5UKCOYgC92Y3XczV1PhjG6ZMbY0fFk+JCK73YIIIN0dj1nE+ut9Y8q02k02V2OB35lKhvaorLbfCPao5XejW3Xbadl4Z0z+1Qbimqj2P+XL/h3hPT6fG+JMSqmQg5ASzl66AlidvT1MOLRqvEEQIShwF/iakIYICQTRZhtddEM66m1eesmLjjIOPCz/lW55HxEPnLNkd1QEilHOws+pUDy635Az07xgirpM3IjMwRjyqzITQ6hhuCOoI8ppaLg+NseK0tkCuCQBZKj3q33qTMpL69vJ0bRI1AaoOHOIf72PZr3HJycw7b8tdpdaM48htWZm6NznmPl1Fb32IUjynYanwXpjn/ANV/pubKXD/GRjL315b86Pzm1pfDiB2yOiqWINIAAK7es66s/TnmWfXJ8doaIozblQqjqW3HQd9pspw7TaPFjx8rZM2pdRzDqvkT2Cjp63N3jfDEfmYD32VsCtewRMpIXl6dhv1NCbfB1OZHd0ACPyqTfNyqaBP1s/Wc7k9OueZbvUUZEFTPqk5cjr5ZHH2YzFPQ8VLUFRqkqAtQVGqCVC1BUeoCIC1JDJArVmRYizIsIYRhFEcQphGEAjCAQIRIIwgd3wVVyaNFB/DTV2piD+xmPiyLj9nyCgvubfv/AD9ZU+G+JIinHkPKQ3Pja6G9cyH0NCXXFQHx8yKeXqbIofKYdTK9fPW8xn0eoqm/CQA3pXRv4P08pbK99JyuiympaaRHPwuVHl2nLrNWeV0RS7EAAWWJ2E0uHDndsrCi9BQR7yot8gP3Zq7c5EznRLszszkbrzmwD6CVmLjWJMwxFl52tuUsAxo+8QOpHSJ9WT16WfE8dizNDhWZUPsmoVsh7MvYD1HSvSafiHxPhxhQXQc7UC7AD6X1Mmh1KZrpbWhZ9Y6+66k/jldIQJoa3PyilrmI2voPU+n7xGVlGzEj5mVOtzML+sjiRoa1xz41XoGUC+p+ZlzjRFXIdh7Ty8z/ANC5zelByZx6WZZcW4iqq2NAObk5By9EB+L6nYTqTfS3qcy2ufzvzO7fmZm+5JiVDBN3iSoIZIAqAxoJULBGgMASSSQK1ZkWIsyLKhljCKJkEiiIwgEYQCIwgEIgETc0vEMmPZWJQiijG1r+JqCESWa6ls+Ok0R2Vh0IEvtCwnNcKe0A7j+8uNJqK79J57Mr1z3NdDtU47jPhpMmY5gaf8JocyHuUPa7MstTx7Fjfld1S+nMwA/WV+p8YaRNkZcrb0eZVX7n+BDrmdb6inxeE0yMxzs2Vl2VmA90X2A6TrOEaDHp0GNL5RfVixv1JlBk8bJ8KJjDnrbjI3nsq7mI3jBAffw5RewdMOUhj8uW4d9c957jrNTQBI6TmOJ5LJA6mWOj17ZMZYrkQFbAyIyN9mFysyMCxPlIzVvO2MkKaJFEjrMBmTKbZj6xZvzPTy99baSSSSdOEghglEghkhAghggCSGSBWrHWKsdZUOIwiiOIUwjCKIwkBEaARhAIhEAhEC24USEJH4WIPyIEsUaiGG4M0eBCw6/I/vNhm5GKnp2/tMO/7PXxf4xcYcOJl9/Gjg9Q6g/vJj0OlT4MePH6BFCzHonBA3lg2hXIKP6TmVpOs/bWL4EshsAbpfugzBp3Tm5gRkcnYj4V+UJ8M6bm5uUE/wBIubQ0iY1paAHlLtdXrY0uNaqsZA6nac5kflX1M3eL6pQ1E0FtjfpKdWbIDkohfw35eZkk9srclCSSSel5CmCEwyBZJJJUCSSSAJIYIAkkkgV6xxFWOJUMI4iiMIBEcRRHEKIjCAQiQESSx4ZwfPqCAiEJ3yMCEAvrff5CdanBk0wRMYV3onJlcKW7UFHYdf0ktybV55245nw98b/Jf5lrrtMGUzbdTzCzfXyA+0yvjsTDq7dermeMxzWHVvibla67HavkZd4uKgAbny32mlrNKDdic5r9Nnxi8ORlrojBXQ+lN0+lRjp2n/rCnv8AWaGq4uKYg7C//M4BeI8Q5uQpj+Zxn/8AUscGDJkr2rkj8igKn2H8x4pWVnbUP5Ywf/vv+3+eUt8mnrHQHSPoNJQ6SxyYvdqNL8xz76Z1HMyOF/MUYL96mGdXpMBIBV2Rh+U7H0IOxmbLw9MzomXDTvarqdOAour/ANxO3Q77/Oa89ysOvx2fHHQSx4pwfNpyedS2Ps6i1Pz8j85XztmEWNJCFghgMCQQwQBJDJAr1jiIsyLKhhHEURhAYCMJd8F8M59RTkezxn8bg239K9/nsJ2/CvDWmwUQnO/58lM30HRfpCuK4T4az56Yj2WM/jcGz/SvU/PYTs+G+GNLholPaON+bJTfZegl4qgQkQNfNiLKyg8tqVBXblJFAj5TR9gETlA6Ct+v1MtqmrrE2sfIzjubNacdZ6UOZPeMK9JmyLMF1MZG2sOfHK7U6UHtLdtxNbJ6yrrn8ujvtX0mXT6Oq2lowEKJC6XFioRmWZiIAN5DR0q0ZdaJLKnys/oRK3Em8vdDjpbPf9peOfbPvrIyMlg3v/Mo+J+F8GW2QeyfzQe4fmv9qnQkQVPQ87zLiXANRgsshdPzpbL9R1H1lVPYisqeJeHtPnssnI5/Hj91vr2P1geYyTpOJeEs2O2xkZVHb4cn26H7/Sc46kEgggg0QRRB9RIFMEMECSSSQNBZkWY1EsOFcPfUZFx4+p3LHoq9yZUY9JpXyuExoXc9Ao/U+QnoPh/wimKsmo5cmTqE640+h+I/OW/BeD4tKgXGu5+Jj8Tn1P8AEtQIUFUCNJJIoSXJclwCDAy3JDAqdZpSLI3X9vnK58Z38505E1cmlW7Ar0/tM+uf8a89/queR+3eY3IltqNHvY28xK7U6Zh03nDWZWqSPSMkC6didxNtdKeX5wuNVRZ+UyY0JO0scGgNUBZ7ze03D1Xdtz5dv+5Zza467ka2i0Nnmb4R+stgIQIDNeecYddXqpJBcM6cpJJJIARKbjHAcOeyy8r1s6bN9fP6y6gIlV5PxXheTTPyuLU/DkA91v7H0mhPV+J6FMuNkdbU/p6j1nmfE9E2DI2Nt63VvzL2MYjTkkkgaKz1Dwlwf/T47cf7j0z/APHyX6fvc5DwZwz2ub2ri8eCnN9Gf8I/n6DznpOm6X8ifrKjdWNMKPuB2P7zLOVGSAwXCmgKyXDcBCDF5iJlkIhCDIO8a4pSLyeW0AsL7XMTadT2/WZrMN+kWSrLZ8Yhpk8oVxKOiiZLhuTIeV/1AJCagJMWpURnguELGqUKBGqSAmQGSAQwDAYZiL2xHYQI85TxTw72qcyj30BZa77WV+w+4nV9jKnUseT2n5SG/WdQeX3JPSv/AE/S/wDxp9pIRj4LoV0+kx4wKdgHyefMRbfbYfSXWFfiH/FT+81MvU+imbuP4l9Vr9opAY7A+RBm1NVx1EzYXtQfpJVPJIDJIJJEJkDSh7huJJAeSLcMgkNQQwJJBJCpJJJCJATDBUAXIBDUMokMkkgDGhNXB0J8zMmbJsflBgXYSg525cbH0M0NRjrAw/4/xNrWtfIn5jZ+Qi60e4w/4n9pYKWx5yRPaJ5/vJOkWz9W/p/vNwdU+v7SSTmkHL1k0vwn+oySQrKIWhkkGMySSSgySSSAwiGSBJJJJBJJJIEkkkgSSSSBJJJJRIH6H5QyQNJvhM2cPQSSSjXzf+8v9J/eDXfA39J/aSSBzMkkk6R//9k=",
        },
        {
            name: "Nevada",
            singer: "Vicetone",
            path: "./asset/songs/Nevada.mp3",
            image: "data:image/jpeg;base64,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",
        },
        
    ],
    defineProperties: function(){
        Object.defineProperty(this,'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },
    render: function(){
        const htmls = this.songs.map((song,index) =>{
            return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
            <div class="thumb"
                style = "background-image: url(${song.image})">
            </div>
            <div class="body">
                <h3 class = "title">${song.name}</h3>
                <p class = "author">${song.singer}</p>
            </div>
            <div class="option">
                <i class = "fas fa-ellipsis-h"></i>
            </div>
        </div>
            `
        })
        playlist.innerHTML = htmls.join('');
    },
   
    handleEvents: function(){
        const cdWidth = cd.offsetWidth;
        const _this = this;
        //Scroll playlist
        document.onscroll = function(){
            const newCdWidth = cdWidth - window.scrollY;
            cd.style.width =  newCdWidth > 0?newCdWidth + 'px':0;         
            cd.style.opacity = newCdWidth/cdWidth   
        }

        //Rotate CD/pause
        const cdThumbRotate = cdThumb.animate([
            {
                transform: 'rotate(360deg)'
            }
        ],{
            duration: 10000,//10 seconds
            iterations: Infinity
        })
        cdThumbRotate.pause();

        //Xu ly khi click play
        playBtn.onclick = function(){  
            if(_this.isPlaying){
                audio.pause();
                cdThumbRotate.pause();
            }
            else{
                audio.play();
                cdThumbRotate.play();
            }
        }

        //Khi song được play
        audio.onplay = function(){
            _this.isPlaying = true;
            player.classList.add('playing');

        }

        //Khi song bị pause
        audio.onpause = function(){
            _this.isPlaying = false;
            player.classList.remove('playing');
        }

        //Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
            const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
            progress.value = progressPercent;
        }

        //Khi tua
        progress.onchange = function(e){
            const seekTime = audio.duration * e.target.value / 100;
            audio.currentTime = seekTime;
        }

        //Click backward
        backWawrdbtn.onclick = function(){
            this.classList.add('active');
            if(_this.isRandom){
                _this.randomSong();
            }
            else{
                _this.backSong();

            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        }

        //click next
        nextBtn.onclick = function(){
            if(_this.isRandom){
                _this.randomSong();
            }
            else{
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        }

        //Xử lý bật tắt nút random
        randomBtn.onclick = function(){
            _this.isRandom = !_this.isRandom;
            this.classList.toggle('active',_this.isRandom);          
            
        }

        //Xử lý bật tắt nút repeat
        repeatBtn.onclick = function(){
            _this.isRepeat = !_this.isRepeat;
            this.classList.toggle('active',_this.isRepeat);

        }

        //Xử lý khi audio ended
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play();
            }
            else{
                nextBtn.click();
            }
        }

        //Xử lý click vào playlist
        playlist.onclick = function(e){
            const songNode = e.target.closest('.song:not(.active)');
            if(songNode|| e.target.closest('.option')){
                //Xử lý khi click vào song 
                if(songNode){
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                    
                }

                //Xử lý khi click vào song option
                if(e.target.closest('.option')){

                }
            }
        }
    },
    randomSong: function(){
        let newIndex;
        do{
            newIndex = Math.floor(Math.random() * this.songs.length);
        }while(newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    backSong: function(){
        if(this.currentIndex == 0){
            this.currentIndex = this.songs.length - 1;
        }
        else{
            this.currentIndex--;
        }
        this.loadCurrentSong();
    },
    nextSong: function(){
        this.currentIndex++;
        if(this.currentIndex > this.songs.length - 1){
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    scrollToActiveSong: function(){
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        },300)
    },
    
    loadCurrentSong: function(){
        


        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path;


    },



    start: function(){
        //Định nghĩa các thuộc tính cho Object
        this.defineProperties();

        //Xử lý các sự kiện
        this.handleEvents();

        //Load current song on UI 
        this.loadCurrentSong();


        //Render playlist
        this.render();
    },
}
app.start();
