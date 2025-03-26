import React, { useState } from 'react';
import s from './Disc.module.scss';

const Disc = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false); // Новое состояние для отображения результата

  const questions = [
    {
      question: "Как зовут главного героя аниме 'Наруто'?",
      options: ['Наруто Узумаки', 'Саске Учиха', 'Какаши Хатаке'],
      correctAnswer: 'Наруто Узумаки',
      image:
        'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/05/naruto-s-sage-of-six-paths-mode-over-naruto-vs-sasuke.jpg',
    },
    {
      question: 'В каком аниме главный герой учится быть алхимиком?',
      options: ['Fullmetal Alchemist', 'Bleach', 'One Piece'],
      correctAnswer: 'Fullmetal Alchemist',
      image:
        'https://cover.imglib.info/uploads/anime/3961/background/e80e2a99-3d75-4c72-a8e1-d28a91f2bc30.jpg',
    },
    {
      question:
        'Какое аниме рассказывает о девушке, ставшей искусственным человеком?',
      options: ['Tokyo Ghoul', 'Ghost in the Shell', 'Naruto'],
      correctAnswer: 'Ghost in the Shell',
      image:
        'https://uchi.imgix.net/general/anime2.png?crop=focalpoint&domain=uchi.imgix.net&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=558&ixlib=php-3.3.1&q=82&usm=20&w=992',
    },
    {
      question: "Как зовут сестру Эдварда Элрика в 'Стальном алхимике'?",
      options: ['Роза Элрик', 'Алиса Элрик', 'Элизабета Элрик'],
      correctAnswer: 'Роза Элрик',
      image:
        'https://www.afisha.uz/uploads/media/2024/03/24977cd96d89a4ea693b994dd0aed51c_m.jpg',
    },
    {
      question:
        'Как называется аниме, в котором главный герой попадает в виртуальную реальность?',
      options: ['Sword Art Online', 'One Piece', 'Attack on Titan'],
      correctAnswer: 'Sword Art Online',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZNOpTE6A94hvE7-_X_IIlP4UndHjsGJHfJg&s',
    },
    {
      question:
        'В каком аниме главный герой является демоном, но пытается стать человеком?',
      options: ['Demon Slayer', 'Tokyo Ghoul', 'Blue Exorcist'],
      correctAnswer: 'Blue Exorcist',
      image:
        'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1640285/7a5648e9925fc0c92ab83a911e9d908e/960',
    },
    {
      question:
        'Какая аниме-серия начинается с того, как герой выигрывает уникальное кольцо?',
      options: ['Naruto', 'One Piece', 'Yu-Gi-Oh!'],
      correctAnswer: 'Yu-Gi-Oh!',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCI4AfQ7eK8zX1fhiH2WUEViy000ZSiq1pcyd8I0NtwsSG4URRdj2AgyESHTixPoWA04&usqp=CAU',
    },
    {
      question:
        'Как называется аниме, где герой сражается с огромными существами, похожими на титанов?',
      options: ['Attack on Titan', 'Bleach', 'Dragon Ball Z'],
      correctAnswer: 'Attack on Titan',
      image:
        'https://newcdn.igromania.ru/mnt/articles/9/3/c/8/9/a/32337/html/more/_fdd363ee92996e66c33571d_1920xH.webp',
    },
    {
      question: 'Как называется аниме, где маги борются за титул короля магии?',
      options: ['Fairy Tail', 'Black Clover', 'Naruto'],
      correctAnswer: 'Black Clover',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIO5mPz2y34UZ6rOCsPiCaOgMR4cqtmm5x_vVtErzoitVyTaRAJkTqHHj5aOpRPQWbPS4&usqp=CAU',
    },
    {
      question:
        'Как называется аниме, где главный герой путешествует с командой на корабле в поисках сокровищ?',
      options: ['One Piece', 'Naruto', 'Dragon Ball'],
      correctAnswer: 'One Piece',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthpX-plxzLbAPnVfL_MoAAfL7km4BHTaCzA&s',
    },
  ];

  const handleAnswer = (answer) => {
    const correct = answer === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true); // Показываем результат после последнего вопроса
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <>
      {/* <div className={s.quizContainer}></div> */}
      <div className={s.slider}>
        <div className={s.slide}></div>
        <div className={s.slide}></div>
        <div className={s.slide}></div>
        <div className={s.slide}></div>
        <div className={s.slide}></div>
      </div>

      <div className={s.disc}>
        {showResult ? (
          <div className={s.resultContainer}>
            <h1>Игра окончена!</h1>
            <p>
              Ваш итоговый счёт: {score} из {questions.length}
            </p>
            <button className={s.restartButton} onClick={restartQuiz}>
              Начать заново
            </button>
          </div>
        ) : (
          <>
        
            <h1 className={s.anime}>Аниме Викторина</h1>
            <img
              className={s.quizImage}
              src={questions[currentQuestion].image}
              alt="Anime"
            />
            <p className={s.question}>{questions[currentQuestion].question}</p>
            <div className={s.options}>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={s.optionButton}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {showFeedback && (
              <div
                className={`${s.feedback} ${
                  isCorrect ? s.correct : s.incorrect
                }`}
              >
                {isCorrect ? 'Правильно! 🎉' : 'Неправильно! 😢'}
              </div>
            )}
            <p className={s.score}>Ваш счёт: {score}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Disc;
