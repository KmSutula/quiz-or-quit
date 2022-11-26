<h1>Quiz or Quit?</h1>

<h3>Live at: https://kmsutula.github.io/quiz-or-quit/</h3>

<h2>📋 Summary:</h2> 
<p>A quiz application that pulls trivia questions/answers from the Open Trivia Database API and provides a score based on performance. 
Game options like number of questions, difficulty, and category are customizable by the user. The design is based on an 80s video game, drawing on this theme with on neon colors and pixelated text and elements. The site was built mobile-first.</p>

<p>This is the final Solo Project of Bob Ziroll's React Course on Scrimba designed and developed from scratch by me.</p>

<h2>⚒️ Built with:</h2>
<ul>
<li>HTML 5</li>
<li>CSS 3</li>
<li>JavaScript</li>
<li>React</li>
<li>Framer Motion</li>
</ul>

<h2>🚧 Obstacles/What I Learned:</h2>
<p>As I spend more time building in React, I realize that a key part of successful React applications is determining ahead of time which components you will need to create, and what should or shouldn't be combined into one component. In developing this project, I found that I needed to add a Loading component in the case that the API call took extra time, and I also ended up separating my Header component to prevent some unnecessary re-renders.</p>
<p>This project required lots of functions for many different actions. One that I struggled with was shuffling the correct answer into the incorrect ones. Initially, I did this in the individual Question component, but found when I was changing the selected answer prop due to user input, the answers would reshuffle with every rerender. Once I moved this function into the Question List, I was able to shuffle the answers during the API call, which prevented this bug.</p>
<p>The functionality of this quiz app relies heavily on state and changing props with user input, and there was a lot of trial and error to make every feature function. </p>

<h2>📸 Screenshots:</h2>
<img src="https://user-images.githubusercontent.com/94947661/204109814-0ddf6333-ae42-492a-88d1-d0809866953b.png">
<img src="https://user-images.githubusercontent.com/94947661/204109815-df9908ce-23a7-43cd-8a93-c5eaccaa099a.png">
<img src="https://user-images.githubusercontent.com/94947661/204109816-12192835-b249-41cb-8fa5-6499f16417ac.png">

