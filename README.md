# CiceroAI

![Cicero](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bust_of_Cicero_%281st-cent._BC%29_-_Palazzo_Nuovo_-_Musei_Capitolini_-_Rome_2016.jpg/230px-Bust_of_Cicero_%281st-cent._BC%29_-_Palazzo_Nuovo_-_Musei_Capitolini_-_Rome_2016.jpg)

### “Cultivation to the mind is as necessary as food to the body.”

\- Marcus Tullius Cicero

#### A multi-function educational website to assist students, especially those that come from low-income families.


## Inspiration
![SparkNotes](https://www.sparknotes.com/images/banner-homepage.svg)

We were inspired by services such as SparkNotes, which provides handy summaries that, in our experience, help us engage with texts. They are especially useful for people with learning disabilities, like dyslexia, who can sometimes find it hard to read long passages. Even though we love SparkNotes, it does have its limitations, notably a lack of options. While it does have some notable books, it is missing many more that students might have to read in school. There is also a lack of support for articles or any other text forms. Of course, a lack of options is only natural as it takes a lot of time and effort to manually read and write summaries for books. However, with a large natural language processing model trained on billions of words, it is possible to automate this task, making it more efficient. When we looked more into the natural language processing model, we were amazed at the many uses and possibilities of it. So, inspired by our personal experiences with education, we utilized its versatility through prompt engineering to create other functions to enhance the users’ learning experience. One of these features was a grammar and spelling checker, which could be especially useful for those with learning disabilities such as dyslexia and dysgraphia. We were inspired by the rising mental health crisis which has greatly affected the ability of students to learn (around 10% of children suffer from anxiety).
## What it does
One of the functions of Cicero is it allows users to input text and returns a summary of it that contains the most crucial information. Another function is giving feedback to students to help them correct spelling mistakes and analyzing the text to inform the students of the mood of their writing. However, understanding the text isn't always enough, as mental health also plays a big role in how students learn. We have recognized this as a factor, and have subsequently added a chatbot feature to check in and gauge how students are feeling, acting as a therapist to improve the mental health of users.
## How we built it
We used Velo to create our frontend and backend with JavaScript and NodeJS. We used cohere’s API to access their large language model for text generation and sentiment analysis. We had to finetune the parameters to manipulate the model into returning what we wanted.
## Challenges we ran into
A challenge we ran into was having to use a different language then we were used to. We are familiar with Python, and not so much JavaScript, so we had some difficulties using it. We also had trouble connecting our frontend to our backend and doing asynchronous programming for the first time.
## Accomplishments that we're proud of
- Building an interactive frontend 
- Calling the cohere API using prompt engineering for multiple purposes
- Linking the Velo website to our domain
- Two members learning how to do hackathons for the first time!
## What we learned
- Connecting backend with the frontend properly using JavaScript
- How to make a good-looking frontend using Velo by Wix
- Different uses of cohere and how to implement them
## What's next for CiceroAI
- Creating greater synergy between each function of the website
- Using data from sentiment analysis to impact how the bot speaks to the user.
- Translations to other languages to help ESL students
- Modify the parameters of calls to the cohere api to make it more precise


Built With : Velo, Cohere, JavaScript, NodeJS
