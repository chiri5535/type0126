const questions = [
  {
    question: '将来のお金について考えたとき、今のあなたに一番近い気持ちは？',
    options: [
      { text: 'まずはもっと知識をつけてから動きたい', type: 'A' },
      { text: '気にはなるけれど、毎日が忙しくて後回しになりがち', type: 'B' },
      { text: '貯金はある程度してきたけれど、このままでいいのか不安', type: 'C' },
      { text: '収入を増やしたい気持ちは強く、いろいろ試してみたい', type: 'D' }
    ]
  },
  {
    question: '投資や副収入の話を聞いたとき、最も近い反応は？',
    options: [
      { text: '興味はあるけれど、失敗しないためにもっと調べたくなる', type: 'A' },
      { text: 'やった方がいいと思うけれど、時間も気力も足りない', type: 'B' },
      { text: '何もしないのも不安だけれど、大きく減るのはもっと怖い', type: 'C' },
      { text: '面白そうと思って動くけれど、長く続かないこともある', type: 'D' }
    ]
  },
  {
    question: 'これまでお金を増やすために行動できなかった一番の理由は？',
    options: [
      { text: '判断ミスをしたくなくて、決めきれなかった', type: 'A' },
      { text: '家事・仕事・家族のことで自分のことまで手が回らなかった', type: 'B' },
      { text: '何を選べば安全なのかわからず、そのままになっていた', type: 'C' },
      { text: 'その場その場で動いて、仕組みとして積み上がらなかった', type: 'D' }
    ]
  },
  {
    question: 'あなたにとって理想的な資産づくりはどれですか？',
    options: [
      { text: '納得して理解しながら、一歩ずつ着実に進められること', type: 'A' },
      { text: '忙しくても無理なく続けられること', type: 'B' },
      { text: '大きなリスクを避けながら、堅実に増やしていけること', type: 'C' },
      { text: '今の収入源に加えて、もう一つ強い柱ができること', type: 'D' }
    ]
  },
  {
    question: '新しいことを始めるときの自分の傾向に近いのは？',
    options: [
      { text: '準備はしっかりするが、始めるまでに時間がかかる', type: 'A' },
      { text: 'やろうと思っても、日々の予定に埋もれてしまう', type: 'B' },
      { text: '慎重に比べすぎて、決め手がなくなってしまう', type: 'C' },
      { text: 'とりあえず始めるが、方向性がぶれやすい', type: 'D' }
    ]
  },
  {
    question: '今のあなたが一番欲しいものは？',
    options: [
      { text: '自信を持って動ける判断基準', type: 'A' },
      { text: 'お金のことを整えるための時間と余裕', type: 'B' },
      { text: '貯めるだけではない、増やす感覚', type: 'C' },
      { text: '頑張り続けなくても積み上がる仕組み', type: 'D' }
    ]
  },
  {
    question: 'もし100万円の余裕資金があったら、どうする可能性が高いですか？',
    options: [
      { text: 'まずは勉強して、使い方をじっくり考える', type: 'A' },
      { text: '使い道を考えたいが、忙しくて後回しになりそう', type: 'B' },
      { text: 'とりあえず預金に置いておくと思う', type: 'C' },
      { text: '何か新しい挑戦や収入につながることに使いたくなる', type: 'D' }
    ]
  },
  {
    question: '周りで投資や副業を始めている人を見ると、どう感じますか？',
    options: [
      { text: '私も気になるけれど、まだ準備不足な気がする', type: 'A' },
      { text: 'すごいと思うけれど、今の私には余裕がない', type: 'B' },
      { text: '気になるけれど、自分には少し怖い世界にも感じる', type: 'C' },
      { text: '刺激を受けて、自分も何かやりたくなる', type: 'D' }
    ]
  },
  {
    question: 'あなたが一番安心できる進め方は？',
    options: [
      { text: '基礎から順番に学び、納得してから進むこと', type: 'A' },
      { text: '手間が少なく、生活の中で無理なく進められること', type: 'B' },
      { text: '守りを固めながら、少しずつ増やしていくこと', type: 'C' },
      { text: '行動しながら改善して、結果につなげていくこと', type: 'D' }
    ]
  },
  {
    question: '今のあなたに最も必要だと思う一言は？',
    options: [
      { text: '完璧に準備しなくても、始めながら学べば大丈夫', type: 'A' },
      { text: '忙しい中でも、自分のお金を整える時間を持っていい', type: 'B' },
      { text: '貯めるだけでなく、お金にも働いてもらっていい', type: 'C' },
      { text: '稼ぐ力を、積み上がる資産に変えていける', type: 'D' }
    ]
  }
];

const results = {
  A: {
    title: '学びすぎ準備型',
    description: 'あなたはとても真面目で、きちんと理解してから進みたいタイプです。慎重さは大きな強みですが、準備に時間をかけすぎることで、行動のタイミングを逃しやすい傾向もあります。',
    challenge: '情報は集まっているのに、決めきれず前に進みにくいこと。',
    firststep: '完璧な準備を目指すより、小さく試して判断基準を育てることから始めてください。'
  },
  B: {
    title: 'がんばり屋停滞型',
    description: 'あなたは責任感が強く、日々のことをしっかりこなしているタイプです。ただ、自分のお金や未来のことは後回しになりやすく、気づくと時間だけが過ぎてしまうことがあります。',
    challenge: '忙しさの中で、自分のための資産づくりの時間が取れないこと。',
    firststep: 'まずは短時間でできるお金の整理から始めて、無理なく続く仕組みを作ってください。'
  },
  C: {
    title: '堅実だけど眠らせ型',
    description: 'あなたはお金に対して誠実で、これまでしっかり守ってきたタイプです。その一方で、守ることが中心になりすぎて、お金を活かして増やす視点が育ちにくいことがあります。',
    challenge: '預金だけでは不安でも、次の一歩が見えにくいこと。',
    firststep: '守る視点を大切にしながら、少額でもお金に働いてもらう感覚を持つことから始めてください。'
  },
  D: {
    title: '勢い先行チャレンジ型',
    description: 'あなたは行動力があり、新しいことに挑戦するエネルギーを持ったタイプです。収入を増やす力はある一方で、単発で終わったり、積み上がる仕組みに変える前に次へ行きやすい傾向があります。',
    challenge: '行動力はあるのに、資産として残りにくいこと。',
    firststep: '新しい挑戦を増やす前に、今ある行動を仕組み化して積み上がる形に整えてください。'
  }
};

let currentQuestion = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };

const titleScreen = document.getElementById('title-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const retryBtn = document.getElementById('retry-btn');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const questionTitle = document.getElementById('question-title');
const optionsContainer = document.getElementById('options-container');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const resultChallenge = document.getElementById('result-challenge');
const resultFirststep = document.getElementById('result-firststep');

function switchScreen(hideScreen, showScreen) {
  hideScreen.style.opacity = '0';
  hideScreen.style.transform = 'translateY(20px)';

  setTimeout(() => {
    hideScreen.classList.remove('active');
    showScreen.classList.add('active');

    setTimeout(() => {
      showScreen.style.opacity = '1';
      showScreen.style.transform = 'translateY(0)';
    }, 50);
  }, 300);
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressFill.style.width = progress + '%';
  progressText.textContent = `質問 ${currentQuestion + 1} / ${questions.length}`;
}

function displayQuestion() {
  const question = questions[currentQuestion];
  questionTitle.textContent = question.question;
  optionsContainer.innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option.text;
    button.onclick = () => selectAnswer(option.type);

    setTimeout(() => {
      button.style.opacity = '1';
      button.style.transform = 'translateX(0)';
    }, index * 100);

    button.style.opacity = '0';
    button.style.transform = 'translateX(-20px)';
    button.style.transition = 'opacity 0.4s ease, transform 0.4s ease, border-color 0.3s ease, background 0.3s ease';

    optionsContainer.appendChild(button);
  });

  updateProgress();
}

function selectAnswer(type) {
  scores[type]++;

  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.disabled = true);

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }, 500);
}

function calculateResult() {
  let maxScore = 0;
  let resultType = 'A';

  const priority = ['A', 'B', 'C', 'D'];

  for (const type of priority) {
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      resultType = type;
    }
  }

  return resultType;
}

function showResult() {
  const resultType = calculateResult();
  const result = results[resultType];

  resultTitle.textContent = result.title;
  resultDescription.textContent = result.description;
  resultChallenge.textContent = result.challenge;
  resultFirststep.textContent = result.firststep;

  switchScreen(questionScreen, resultScreen);
}

function resetQuiz() {
  currentQuestion = 0;
  scores = { A: 0, B: 0, C: 0, D: 0 };
  switchScreen(resultScreen, titleScreen);
}

startBtn.addEventListener('click', () => {
  switchScreen(titleScreen, questionScreen);
  displayQuestion();
});

retryBtn.addEventListener('click', resetQuiz);
