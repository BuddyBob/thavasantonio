import CodeBlock from '../../../CodeBlock'
import NavBar from '../../../NavBar/NavBar'
import React from 'react'
import gHub from '../../../../assets/Links/Github.png'
import vbBanner from '../../../../assets/VocabularyBot/vocab-banner.png'

export default function VB(){
    return (
        <div>
            <NavBar/>
            <div className="post-container">
                <div className="post-inner">
                    <div className="content">
                        <h1 className="post-title"> Vocabulary Bot, A Homework Buddy</h1>
                            <h2 className="post-subtitle">What is it? <input type="image" width="40px" src={gHub} alt="GitHub" className="github-link" onClick={() => window.open("https://github.com/BuddyBob/VocabBot")}/> </h2>
                            <p>
                                The idea is very similar to my Mathletics Bot. I was assigned to do a certain amount of hours of vocabulary homework on a website called
                                vocabulary.com. This eventually became tedious as the answers became quite repetitive due to their lack of their data. That right their, lack of data, 
                                gave me the great idea of creating a bot to answer the questions for me.
                            </p>
                            <input width="100%" className="post-img" type="image" alt="img" src={vbBanner}/>

                            <h2 className="post-subtitle">How does it work?</h2>
                            <p>
                                Written in Python, the bot uses Selenium to navigate the website and beautiful soup to scrape data. Additionally, in order to find answers to the given questions,
                                the bot would use resources such as PyDictionary and other api's from rapidapi.com.
                            </p>

                            <h2 className="post-subtitle">Step By Step</h2>
                            <p>
                                The logic for this bot is far more complicated and intricate than my mathletics bot. Not only does this script need to use Selenium to navigate, 
                                it needs a wide array of resources to get a correct answer. Math is quite simple as 1+2=3 or 4*5=20. However vocabulary needs some more thought 
                                into getting a correct answer. 
                            </p>
                            <p>
                                <strong>1) import modules and select assignment links </strong>
                                <CodeBlock codeString=
{`import time
from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
#url = "https://www.vocabulary.com/lists/23380/practice"
#url = "https://www.vocabulary.com/lists/7701690/practice"
...more
`}                              
                                language="python"/>
                    </p>
                    <p>
                        <strong>2) login => open assignment </strong>
                        <CodeBlock codeString=
{`def main():
    login()
    assignment()
`}                  language="python"/>
                    login() will use selenium to navigate through google's login process. <br/>
                    assignment() will open up one of the given url's and call scrapper() (step 3)
                    </p>
                    <p>
                        <strong>3) scrape the questions </strong>
                        This section of code is far to large to be posted here, check out the github link provided above to check the full code of this project.
                        However, the idea is that I parse the question possible answers. The following layout is how the majority of the questions are structured.
                        <CodeBlock codeString=
{`what does the word **"abhor"** mean? (**_**meaning bolded)
# love
# despise
# fulfill
# generosity
`}              language="python"/>
                    </p>
                    <p>
                        <strong>4) look for synonyms </strong>
                        Using bs4, I can find the bolded word and look for synonyms using PyDictionary and other api's.
                        <CodeBlock codeString=
{`#function1
def getDef(word):

    url = "https://wordsapiv1.p.rapidapi.com/words/"+str(word)

#function2

def getSyns(word):
    synonyms = []
    url = "https://synonyms-word-info.p.rapidapi.com/v1/word"

#function3 
syns = dictionary.synonym(word) 

#function4 (actual vocabulary.com dictionary)
s_link = "https://www.vocabulary.com/dictionary/"
link = s_link + word
html = urlopen(link)
soup = BeautifulSoup(html, "html.parser")
findDef = (soup.findAll('div', attrs={'class': 'definition'}))
source_dic = unidecode(soup.prettify())
`}                  language="python"/>
                    function1 is fairly straight forward. It uses wordsapiv1 to get a few different definitions for our bolded question.<br/><br/>
                    function2 uses synonyms-word-info to find similar words to our bolded questions<br/><br/>
                    function3 uses a python module called PyDictionary to find synonyms<br/><br/>
                    function4 makes use of vocabulary.com's dictionary which acts as a fail safe if the other methods do not provide an accurate answer.<br/><br/>
                    These lists are then all combined into a single one.
                    </p>
                    <p>
                        <strong>5) find the correct answer </strong>
                        In order to find the right answer, we rate each possible answer.
                        <CodeBlock codeString=
{`for option in options:
for item in option:
    if item in newDef:
        a += 1
`}                  language="python"/>
                    Based on how many times an option is found in newDef list, we can add a point to it.
                    This will help us find the highest/most likely rated answer.
                    </p>
                    <h2 className="post-subtitle">All Done</h2>
                    <p>
                        Similar to my mathleticsBot, I created this project at the start of my programming journey. Since then I have learnt quite a bit more about programming.
                        Looking back on the code, there are definitely some things I would do differently. However, I am still proud of this accomplishment as it was one of my first more complex projects.
                        <br/>
                        DISCLAIMER: This bot no longer is maintained as I no longer have an account on the website. Feel free to check it out and makes some adjustments.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  