// // 연습문제1 - 서울에 살고 있는 친구들만 나이순 정렬

// const friends = [
//   {name: 'victoria', age: 13, city: 'seoul'},
//   {name: 'sun', age: 34, city: 'busan'},
//   {name: 'johseb', age: 25, city: 'busan'},
//   {name: 'syleemomo', age: 9, city: 'seoul'},
//   {name: 'hannah', age: 41, city: 'daegu'},
//   {name: 'shara', age: 37, city: 'seoul'},
//   {name: 'martin', age: 28, city: 'daegu'},
//   {name: 'gorgia', age: 39, city: 'seoul'},
//   {name: 'nana', age: 24, city: 'busan'},
//   {name: 'dannel', age: 19, city: 'seoul'},
// ]
// function onlyseoul (city){
//   return city.city === 'seoul'
// }
// const seoulFriend = friends.filter(onlyseoul)

// function age (a,b){
//   return a.age - b.age
// }
// const young = seoulFriend.sort(age)
// console.log(young)

// // 연습문제2 -똥이나 shit 은 💩 로, fuck 은 ❤️ 로 교체
// const rootDiv = document.getElementById('root')

// const lyrics = `
// Don't, don't worry 'bout \n
// Don't worry \n
// Don't worry \n
// Don't, don't worry 'bout me \n
// 오지랖 떨지 말고 신경 꺼 \n
// 온 세상이 날 등져도 I don't give a fuck \n
// God is watchin' over me 나 죽을 일 없어 \n
// 내 걱정은 세상에서 제일 쓸데없는 짓 \n
// 부정적인 shit, man I ain't got time \n
// 썸머소닉 to 코첼라, 글라스톤베리가 다음 \n
// 일상이 축제니까 감사하기도 바빠 \n
// Middle finger to the Devil, stop fuckin' up my vibe! \n
// 영화처럼 살았네 \n
// 역경이 상대역인데 웃으며 환영해 \n
// 그 정도는 돼야 내가 인생 연기를 해주잖냐 \n
// 보여줘야지, 사방이 아역들인데 \n
// 애들이 배우잖아 \n
// 내 혼을 베어다가 아낌없이 준 내 아티스트리 \n
// 다 남을 깎아내릴 때 난 나를 깎아 나눴지 \n
// 'Cause I am Groot motherfucker \n
// Ay mind yo fuckin' business 너는 내 걱정 안 해도 돼 \n
// 부러우면 그냥 부럽다고 말해도 돼 \n
// 네가 신경 안 써줘도 나는 잘 지내거든 \n
// Don't you worry 'bout me \n
// You know I'm fly muthafucka \n
// Baby never give a fuck about a thang \n
// 그게 나에 관한 거라면 더욱더 no thanks \n 
// Baby never give a fuck about a thang \n
// 내 걱정은 no thanks \n
// 신경써줘서 고마워 \n
// 아가미 달린 시키 알아서 헤엄 치니 \n
// Take care of yourself \n
// 치킨 다리 먼저 겟할 걱정이나 해 \n
// 모지리 이미지야 이리 잘하니 zip your lips huh? \n
// 대장인 척 해도 소화 못해 거기서 쳇기 쳇기 \n
// 쉬운 게 아니야, 무대는 'bout your 객기 \n
// 체크해 motherfuckers, my lyrics \n
// Motherfucker 만 써도 이젠 혐이라 하는 시대, shit \n
// Rhyme에 R도 모르는 대중은 프로듀서가 됐고 \n
// 농사짓는 울 삼촌은 거의 엔터 제작 대표 \n
// 조카는 음평가 태도 \n
// 내가 니 안줏거리지만 내가 느그 상사 느그 선생 아니듯이 \n
// 느그들이 누굴 평가하고 하면 띠꺼워 \n
// 내 사생활이 궁금하면 니가 내 엄마해 새꺄 알겠어? \n
// Ay mind yo fuckin' business 너는 내 걱정 안 해도 돼 \n
// 부러우면 그냥 부럽다고 말해도 돼 \n
// 네가 신경 안 써줘도 나는 잘 지내거든 \n
// Don't you worry 'bout me \n
// You know I'm fly muthafucka \n
// Baby never give a fuck about a thang \n
// 그게 나에 관한 거라면 더욱더 no thanks \n
// Baby never give a fuck about a thang \n
// 내 걱정은 no thanks, ya \n
// 경쟁은 관심 밖, 돌린 눈과 귀 \n
// 틈만 나면 찾고 있네, 다음 휴가지 \n
// 나이 들어 보니까 인생은 주관식 \n
// 남 보기보다 중요해, 내 삶이 둔 가치 \n
// 고이 무렵부터 내 갈 길을 걸어 \n
// 나도 안 한 내 걱정을 해준 분들 여럿 \n
// 덕분에 내 할 일에만 매진한 결과 \n
// 난 이제 돈과 시간 모두 몇 배를 더 벌어 \n
// 너 할 일 해, 시간이 돈인데 \n
// 다 먹고 살만한가 봐? 두 손 놀리네 \n
// 날 한 방 먹일 생각이면 좀 더 고민해 \n
// 대식가인 내겐 먹어봐야 겨우 요기인데 \n
// 난 물먹어도 절망 안에 배영 \n
// 잠수타도 14년째 곡이 배를 채워 \n
// 불통보다 소통이 더 유행이니까 \n
// 다 들어 줄게, 불만 있는 놈들 먼저 줄부터 세워 (걱정하지 말아요) \n
// 야야 난 first class 양아치에 third class 연예인 \n
// 내 Hollywood style 연애는 엄마의 스트레스 원인 \n
// 삶은 계속되는 이별여행, 쉴틈없이 나는 꺼내 \n
// 이번 애인은 의사였으면 해, 정신병원에 \n
// 틈만 나면 한 눈 팔아, 나는 오급 장애죠 \n
// 나의 불행은 너의 행복, 그래 맘껏 즐겨줘 \n
// 망막 기증까진 오바야, 날 그만 걱정해줘 \n
// 나는 저 멀리 보고 살아, 한쪽으로도 \n
// 힙합씬은 여전히 내겐 오백의 삼십 사이즈 \n
// 내 영혼이 살기엔 너무 좆만해서 탄식 하 \n
// 나는 오로지 나의 존망만이 관심사 \n
// 욕을 존나 쳐먹어도 찌지 않아, 망신살 \n
// "출근 안하는 CEO", "허슬 안하는 랩퍼" \n
// "내 거품 속에서 목욕하는 그녀들은 왜 예뻐?" \n
// 성실한 이름들 사이에 이제 나는 못 껴 \n
// 난 시간에 쫒겨 살해당한 내 시체를 자주 목격 \n
// 앨범은 내 때가 되면 내, 비난은 발매가 되면 해 \n
// 기다려주는 팬들에게 미안해 기분 개같았는데 \n
// 돈도 좆도 안되는 대체 왜 너네가 negative? \n
// 니 오빠 똥꼬나 더 긁어줘라 fuck your magnetic \n
// 백날 씨부려대봤자 내 입만 아픔 \n
// 에픽 앨범에 난 똥을 싸질러놨구 \n
// 이건 내가 예전에 깠던 Born Hater Part 2 \n
// 일동 기립 박수 안 칠거면 내 얼굴에 칵 투 \n
// Ay mind yo fuckin' business 너는 내 걱정 안 해도 돼 \n
// 부러우면 그냥 부럽다고 말해도 돼 \n
// 네가 신경 안 써줘도 나는 잘 지내거든 \n
// Don't you worry 'bout me \n
// You know I'm fly muthafucka \n
// Baby never give a fuck about a thang \n
// 그게 나에 관한 거라면 더욱더 no thanks \n
// Baby never give a fuck about a thang \n
// 내 걱정은 no thanks \n
// You get one life \n
// 나한테 낭비하지 마라 \n
// Can I live my life? \n
// Let me live it how I wanna \n
// 내 걱정은 no thanks (내 걱정은 no thanks) \n
// 내 걱정은 no thanks (내 걱정은 no thanks) \n
// 내 걱정은 no thanks (thank you) \n
// I am
// `

// const modifiedSentence = lyrics
//                          .split(' ')
//                          .map(function(word){
//                           if(word.includes('똥') || word.includes('shit')){
//                            return '💩'
//                           } else if(word.includes('fuck')){
//                             return `❤️`
//                           }else{return word} }
//                           )
//                          .join(' ')

// console.log(modifiedSentence)
// rootDiv.innerHTML = modifiedSentence

// // 연습문제3 - 알파벳 많이나오는 순서대로 정리
// const novel = `
// Sherlock Holmes she is always the
// woman. I have seldom heard him mention her under any other name. In his
// eyes she eclipses and predominates the
// whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and
// that one particularly, were abhorrent to his cold,
// precise but admirably balanced mind. He was, I
// take it, the most perfect reasoning and observing
// machine that the world has seen, but as a lover he
// would have placed himself in a false position. He
// never spoke of the softer passions, save with a gibe
// and a sneer. They were admirable things for the observer—excellent for drawing the veil from men’s
// motives and actions. But for the trained reasoner
// to admit such intrusions into his own delicate and
// finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all
// his mental results. Grit in a sensitive instrument, or
// a crack in one of his own high-power lenses, would
// not be more disturbing than a strong emotion in
// a nature such as his. And yet there was but one
// woman to him, and that woman was the late Irene
// Adler, of dubious and questionable memory.
// I had seen little of Holmes lately. My marriage
// had drifted us away from each other. My own
// complete happiness, and the home-centred interests which rise up around the man who first finds
// himself master of his own establishment, were sufficient to absorb all my attention, while Holmes,
// who loathed every form of society with his whole
// Bohemian soul, remained in our lodgings in Baker
// Street, buried among his old books, and alternating
// from week to week between cocaine and ambition,
// the drowsiness of the drug, and the fierce energy of
// his own keen nature. He was still, as ever, deeply
// attracted by the study of crime, and occupied his
// immense faculties and extraordinary powers of observation in following out those clues, and clearing
// up those mysteries which had been abandoned as
// hopeless by the official police. From time to time
// I heard some vague account of his doings: of his
// summons to Odessa in the case of the Trepoff murder, of his clearing up of the singular tragedy of
// the Atkinson brothers at Trincomalee, and finally
// of the mission which he had accomplished so delicately and successfully for the reigning family of
// Holland. Beyond these signs of his activity, however, which I merely shared with all the readers of
// the daily press, I knew little of my former friend
// and companion.
// `

// const classified = {}
// const specialCharacters = '`~!@#$%^&*()-_=+|\<>,.?/:;\'"—’'
// const alphabetFrequency = []

// const alpha = novel.split('')
// console.log(alpha)


// function count(letters){
//   const lowLetter = letters.toLowerCase()
//   if(specialCharacters.includes(lowLetter) || lowLetter.includes(' ') || lowLetter.includes('\n')){
//   return lowLetter
//   }
//   console.log(lowLetter)
//   if(!classified[lowLetter]) classified[lowLetter] = 0 //classified[lowLetter]가 아니면 0으로 초기화해서 담겠다 (classified안에 lowLetter가 없으면)
//   classified[lowLetter]++
// }

// alpha.forEach(count)

// // for (let classi in classified){
  
// //   alphabetFrequency.push(`${classi} : ${classified[classi]}`)
// // }
// // console.log(classified)
// // console.log(alphabetFrequency)

// // function nono(){

// //   return alphabetFrequency
// // }

// // alphabetFrequency.filter(nono)

// // function higher (a,b){
// //   return b - a
// // }
// // console.log(alphabetFrequency.sort(higher))

// console.log(classified)

// // console.log(Object.entries(classified).sort((a, b) => a[1] - b[1]))

// const result = Object.entries(classified).sort((a, b) => b[1] - a[1])

// console.log(result)

// const resultNew = result.map(element => element.join(':'))
// console.log(resultNew)

// // 4번문제 - 검색어를 입력하면 하이라이트 적용
// const lyricsEl = document.getElementById('lyrics')
// const searchEl = document.getElementById('search')

// const lyrics = `
// 어느새 빗물이 \n
// 내 발목에 고이고 \n
// 참았던 눈물이 \n
// 내 눈가에 고이고 I cry \n
// 텅 빈 방엔 시계소리 \n
// 지붕과 입 맞추는 비의 소리 \n
// 오랜만에 입은 코트 주머니 속에 반지 \n
// 손 틈새 스며드는 memory \n
// 며칠 만에 나서보는 밤의 서울 \n
// 고인 빗물은 작은 거울 \n
// 그 속에 난 비틀거리며 아프니까 \n
// 그대 없이 난 한 쪽 다리가 짧은 의자 \n
// 둘이서 쓰긴 작았던 우산 \n
// 차가운 세상에 섬 같았던 우산 \n
// 이젠 너무 크고 어색해 \n
// 그대 곁에 늘 젖어있던 왼쪽 어깨 (뭐해?) \n
// 기억의 무게에 고개 숙여보니 \n 
// 버려진 듯 풀어진 내 신발끈 \n
// 허나 곁엔 오직 비와 바람 \n
// (없다) 잠시라도 우산을 들어줄 사람 \n
// And I cry \n
// 어느새 빗물이 \n
// 내 발목에 고이고 \n
// 참았던 눈물이 \n
// 내 눈가에 고이고 I cry \n
// 그대는 내 머리 위의 우산 \n
// 어깨 위에 차가운 비 내리는 밤 \n
// 내 곁에 그대가 습관이 돼버린 나 \n
// 난 그대 없이는 안 돼요. Alone in the rain \n
// Alone in the rain, rain, rain \n
// Nothin' but pain, pain, pain \n
// Girl, I just want you to know \n
// Alone in the rain, rain, rain \n
// Nothin' but pain, pain, pain \n
// And I just can't let you go \n
// 하늘의 눈물이 고인 땅 \n
// 별을 감춘 구름에 보인 달 \n
// 골목길 홀로 외로운 구두 소리 \n
// 메아리에 돌아보며 가슴 졸인 맘 \n
// 나를 꼭 닮은 그림자 \n
// 서로가 서로를 볼 수 없었던 우리가 \n
// 이제야 둘인가? 대답을 그리다 \n
// 머릿속 그림과 대답을 흐린다 \n
// 내 눈엔 너무 컸던 우산 \n
// 날 울린 세상을 향해 접던 우산 \n
// 영원의 약속에 활짝 폈던 우산 \n
// 이제는 찢겨진 우산 아래 두 맘 \n
// 돌아봐도 이젠 없겠죠 \n
// 두 손은 주머니 속 깊게 넣겠죠 \n
// 이리저리 자유롭게 걸어도 \n
// 두 볼은 가랑비에도 쉽게 젖겠죠 \n
// 난 열어놨어, 내 마음의 문을 \n
// 그댄 내 머리 위의 우산 \n
// 그대의 그림자는 나의 그늘 \n
// 그댄 내 머리 위의 우산 \n
// 나의 곁에 \n
// 그대가 없기에 \n
// 나 창 밖에 우산을 들고 \n 
// 기다리던 그대, I cry \n
// 그대는 내 머리 위의 우산 \n
// 어깨 위에 차가운 비 내리는 밤 \n
// 내 곁에 그대가 습관이 돼버린 나 \n
// 난 그대 없이는 안 돼요. I need you back in my life \n
// 그대는 내 머리 위의 우산 \n
// 어깨 위에 차가운 비 내리는 밤 \n
// 내 곁에 그대가 없는 반쪽의 세상 \n
// 그대 나 없이는 안 돼요. Forever in the rain \n
// 버려진 우산 \n
// 버려진 우산 \n
// I need you back \n
// 버려진 우산 \n
// Without you \n
// `
// function display(view){
//   lyricsEl.innerHTML = view}
// function data(e){
// console.log(e.target.value)
// const keyword = e.target.value


// if(keyword !== ''){
// const word = lyrics
//                   .split(' ')
//                   .map(word => {if(word.toLowerCase().includes(keyword.toLowerCase())) return `<div class='highlight'>${word}</div>` 
//                                                                                        else return word})
//                   .join(' ')
//                   display(word)}
// else { display(lyrics)}

// }
// display(lyrics)
// searchEl.addEventListener('input',data)

// 5번문제 - 비속어는 아이콘 교체
const commentInput = document.getElementById('user-comment-input') // 사용자 댓글 입력창
const userComments = document.getElementById('user-comments') // 사용자 댓글 리스트 출력

const submitBtn = document.getElementById('user-comment-add') //  사용자 댓글 추가 버튼
const comments = [] // 사용자 댓글목록 배열
const insults = ['shit', 'fuck', 'poop', 'dumb', '새끼', '놈', '똥', '씨발', '좇', '시발', '좆', '죽어', '뒤져', '병신', '년']


// 댓글 정보로부터 댓글에 대한 DOM 객체 생성 및 반환
function buildElement(comment){
    const com = document.createElement('div')
    com.innerHTML = `${comment}`
    com.classList.add('comment')
    return com
}
// comments 배열을 이용하여 화면에 댓글목록 보여주기
function displayComments(comments){
    userComments.innerHTML = ''
    for (let comment of comments){
      view = buildElement(comment)
      userComments.appendChild(view)
    }
}

// 입력창 초기화
function initInput(){
    commentInput.value = ''
}

// 댓글 추가하기
function addComment(){
    const comment = commentInput.value
    if(comment !== ''){
      comments.push(comment)
      console.log(comments)
    }else{
        alert('You need to give a comment !')
    }

    function nono(word){
      if(insults.includes(word)){return '😊'}
      else {return word}

    
    }
    const good = comments.map(nono)
    displayComments(good)
}
submitBtn.addEventListener('click', addComment)