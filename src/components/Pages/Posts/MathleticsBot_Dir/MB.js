import CodeBlock from '../../../CodeBlock'
import NavBar from '../../../NavBar/NavBar'
import React from 'react'
import gHub from '../../../../assets/Links/Github.png'
import mbPage from '../../../../assets/MathleticsBot/mathletics-page.webp'

export default function MB(){
    return (
        <div>
            <NavBar/>
            <div className="post-container">
                <div className="post-inner">
                    <div className="content">
                        <h1 className="post-title"> Mathletics Bot a <br/> Homework Buddy <input type="image" width="40px" src={gHub} alt="GitHub" className="github-link" onClick={() => window.open("https://github.com/BuddyBob/MathleticsBot")}/>  </h1>
                            <h2 className="post-subtitle">What The Heck?</h2>
                            <p>
                                Mathletics is a website that teachers use to assign math homework. 
                                Generally, teachers assign hundreds of tedious math problems and after sometime, it becomes a pain. 
                                The Mathletics Bot is a program that automates the process of solving these problems. 
                                <br/>
                                <input width="100%" className="post-img" type="image" alt="img" src={mbPage}/>
                            </p>

                            <h2 className="post-subtitle">How Does it Work?</h2>
                            <p>
                                The Mathletics Bot uses a Python package called Selenium. It helps users take control of their web browser and automate their interactions.
                                In addition to using Selenium, I needed to install a web driver for my browser (Chrome). 
                                A WebDriver is a remote control interface that helps users take control of user agents. 
                                In simpler terms, it sends direct behaviors/instructions to a web browser to help automate interactions that we may have to do manually.
                                <br/>
                            </p>

                            <h2 className="post-subtitle">Program Explanation</h2>
                            <p>
                                <strong> 1) The script starts by importing the necessary packages. </strong>
                                <CodeBlock codeString=
                                {'from selenium import webdriver\nfrom webdriver_manager.chrome import ChromeDriverManager\nimport time\nimport datetime\n'} 
                                language={"python"}/>
                                We need to use the ChromeDriverManager to install the web driver for Chrome. Selenium is the package we used to automate the process.<br/><br/>
                                Time, a default Python package, is used to add delays to the program (simulates users thinking).<br/><br/>
                                Finally, datetime is used to run a program for a certain amount of time. My teacher would assign 1 hour of mathletics a week so datetime would repeat this script for 1 hour.
                            </p> 
                            <p>
                                <strong>2) The next step would be to open mathletics.com and sign in.</strong>
                                <CodeBlock codeString=
{`s=Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=s)
driver.get(link)
user = wait.until(visible((By.XPATH,'//*[@id="username"]'))).send_keys('usr')
pwd = wait.until(visible((By.XPATH,'//*[@id="password"]'))).send_keys('pwd',Keys.ENTER)
`}
                                language={"python"}/>
                                The first line of code installs the web driver for Chrome. The second line opens the Chrome browser and navigates to mathletics.com.
                                We then wait until the sing up form is visible and enter our username and password. Finally, we press enter to sign in.<br/><br/>
                                Note: In order to access elements on the page, we followed the following format.<br/>
                                <CodeBlock codeString=
{`WebDriverWait(driver, 20).until(EC.visibility_of_element_located((By.XPATH,"//*[@id="element"]"))).function()
#: This line is shortened to 
#  wait.until(visible((By.XPATH,'//*[@id="element"]'))).function() for readability
#: xpath's will also be shortened for readability
`}
                                language={"python"}/>
                            </p>
                            <p>
                                <strong>3) The couple of lines navigate the user to the homework assignment </strong>
                                <CodeBlock codeString=
{`play = wait.until(visible((By.XPATH,'//*[@id="play_button"]'))).click()
live = wait.until(visible((By.XPATH,'//*[@id="carousel-game-content"]'))).click()
level = wait.until(visible((By.XPATH,'//*[@id="+str(level)+"]'))).click()
go = wait.until(visible((By.XPATH,'//*[@id="game"]'))).click()
`}
                                language={"python"}/>
                            </p>
                            <p>
                                <strong>4) At this point, the homework assignment has started and we need to read the question</strong><br/>
                                Due to the hours of experience i've had with mathletics, I already knew the format of the questions
                                <CodeBlock codeString=
{`a+b=c / a-b=c
c=a+b / c=a-b
a*b=c / a/b=c
a of b = c

...more
`}
                            language={"python"}/>
                            Now, all I needed to do was read the question and solve it
                            <CodeBlock codeString=
{`#access problem
problem = wait.until(visible((By.XPATH,'//*[@id="problem"]'))).text.split(' ')
#problem solving...
#answer
solved = wait.until(visible((By.XPATH,'//*[@id="answer_box"]))).send_keys(int(answer),Keys.ENTER)
`}
                            language={"python"}/>
                            Due to the length of this operation, I have not posted the code here. Feel free to check out the github repo posted above. 
                            After, answering one question, the program will loop back to step 4 and repeat the process.
                            </p>
                            <p>
                                <strong>5) All over again </strong>
                                <br/>
                                After the homework is fully completed, we press the play again button to repeat the assignment. This is all done through a nested for loop.
                                Due to selenium's ever changing framework and mathletics' ever changing structure, I have implemented a catch all exception to spit out any errors to help users understand what is going wrong. 
                            </p>
                            <p>
                                <strong>6) End the program </strong><br/>
                                As I said earlier, I was told to do an hour of mathletics a week. To do this, I used the datetime module to keep track of time.
                                It writes to a file how long assignments take and overall how long the program has been running.
                                <CodeBlock codeString=
{`#start time
start = datetime.datetime.now()
#end time
for i in range(50): 
    script(start)
end = datetime.datetime.now()
duration = end - start
`} 
                            language={"python"}/>

                            </p>
                            <h2 className="post-subtitle">Let it GOOOOO</h2>
                            <p>
                                The Mathletics Bot was one of my first projects that I was proud of. It was a great learning experience and I was able to learn a lot about web scraping and automation.
                                <br/><br/>
                                The problem with most of my automating projects are that the structure of websites change and selenium gets updated consistently. It becomes to much to handle so my code becomes outdated.
                                <br/><br/>
                                
                                All in all, I am proud of this project and I hope you enjoyed reading about it.
                                
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  