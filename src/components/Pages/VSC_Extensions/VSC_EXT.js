import React from 'react'
import NavBar from '../../NavBar'
import CodeBlock from '../../CodeBlock'
import AutoCloseTag from '../../../assets/VSC_Extensions/AutoCloseTag.png'
import GitHubCopilot from '../../../assets/VSC_Extensions/GitHubCopilot.png'
import MaterialIconTheme from '../../../assets/VSC_Extensions/MaterialIconTheme.png'
import CodeSpellChecker from '../../../assets/VSC_Extensions/CodeSpellChecker.png'
import BannerComments from '../../../assets/VSC_Extensions/BannerComments.png'
import BannerCommentExample from '../../../assets/VSC_Extensions/BannerCommentExample.png'
import Polacode from '../../../assets/VSC_Extensions/Polacode.png'
import PolacodeExample from '../../../assets/VSC_Extensions/PolacodeExample.png'
import CSG from '../../../assets/VSC_Extensions/CSG.png'

export default function VSC_EXT() {
  return (
    <div>
        <NavBar/>
        <div className="post-container">
            <div className="post-inner">
                <div className="content">
                    <h1 className="post-title">Mi Favorito <br/> VS Code Extensiones </h1>
                    <h2 className="post-subtitle">Visual Studio Code</h2>
                    <p>
                        I've been using Visual Studio Code for two years now after migrating from Sublime Text.
                        While a more powerful application the main reason why I love VS Code is because of its customizability. 
                        In an effort to improve my efficiency, I have installed quite a few extensions over the years. <br/> <br/>
                        Here are some of the most handy dandy extensions I use quite often.

                    </p>

                    <h2 className="post-subtitle">GitHub Copilot</h2>
                    <p>
                        <input width="100%" className="post-img" type="image" alt="img" src={GitHubCopilot}/>
                        While not fully open to the public yet, <a href="https://marketplace.visualstudio.com/items?itemName=GitHub.copilot" target="_blank" rel="noopener noreferrer"><u>GitHub Copilot</u></a> is definitely one the most useful and productive extensions out there. It's similar to Tabnine or Kite but is much more powerful.
                        GitHub Copilot is powered by the OpenAI Codex AI system and trained on public internet text and billions of lines of code. What I found most useful is its ability to convert your logic (comments, function names) to code.
                        <br/>
                        <br/>
                        Example:
                        <br/>
                        <CodeBlock codeString={'#create a list of the 1-10'} language="python"/>
                        <br/>
                        Output:
                        <br/>
                        <CodeBlock codeString={'number_list = list(range(1,11))\nprint(number_list)'} language="python"/>
                        <br/>
                        If suggestion code does not show up, you can press ctrl + enter to receive multiple options. GitHub Copilot can even finish your functions. 
                        <br/>
                        <br/>
                        Example:
                        <br/>
                        <CodeBlock codeString={'def create_list_of_odd_numbers():'} language="python"/>
                        <br/>
                        Output:
                        <br/>
                        <CodeBlock codeString={'def create_list_of_odd_numbers():\n\treturn [x for x in range(1, 100) if x % 2 == 1]'} language="python"/>
                        <br/>
                        This extensions is a technical preview and not yet fully open to the public, however you can hop on the wait list and hope for the best. Overall, GitHub Copilot is a great tool to greatly improve productivity. 
                    </p>

                    <h2 className="post-subtitle">Material Icon Theme</h2>
                    <br/>
                    <p>
                        <input width="100%" className="post-img" type="image" alt="img" src={MaterialIconTheme}/>
                        With over 12.4 million installs, <a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"  rel="noopener noreferrer" target="_blank"><u>Material Icon Theme</u></a> is a great extension that gives you a library of visually pleasing file icons to replace the ugly default ones.<br/><br/>
                        While this is not a productivity boost, it sure helps with organizations and makes working with big projects much more pleasing. 
                    </p>

                    <h2 className="post-subtitle">Auto Close</h2>
                    <p>
                        <input width="100%" className="post-img" type="image" alt="img" src={AutoCloseTag}/>
                        <figure class="quote">
                            <blockquote>&#8220; After typing in the closing bracket of the opening tag, the closing tag will be inserted automatically. &#8221;</blockquote>
                        </figure>
                        <br/>
                        Ever get tired of missing your closing tag and scrolling through your code in a desperate attempt to find the problem? Well  <a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"  rel="noopener noreferrer" target="_blank"><u>Auto Close Tag</u></a> is here to help.
                        Auto Close Tag is an extremely helpful extension that speeds up your html writing process and helps prevent headaches. This is something I highly recommend installing.  
                    </p>

                    <h2 className="post-subtitle">Code Spell Checker</h2>
                    <p>
                        <input width="100%" className="post-img" type="image" alt="img" src={CodeSpellChecker}/>
                        Indians are generally good at spelling as the last 9 spelling bees in the US were won by Indians. 
                        However, I may be anomaly as I can't spell to save a life. Hence why I have Code Spell Checker installed.<br/><br/>
                        With spelling mistakes appearing everywhere, this extensions recognizes these errors and provides possible solutions as a Quick Fix ( cmd + .)
                        What makes Code Spell Checker so great is its ability to recognize abbreviations, and technical terms. This way it doesn't mark unnecessary terms. 
                    </p>

                    <h2 className="post-subtitle">Banner Comments</h2>
                    <p>
                        <input width="100%" className="post-img" type="image" alt="img" src={BannerComments}/>
                        Banner Comments is a treasure of an extension. While it may be a very small add-on, it can be so helpful; Banner Comments creates big and prominent comments in your code
                        to help categorize certain sections. <br/><br/>

                        Furthermore, it provides 3 different sizes (h1, h2, h3) to help organize your code better. 
                        <br/>
                        <br/>
                        Example:
                        <br/>
                        <input width="100%" className="post-img" type="image" alt="img" src={BannerCommentExample}/>
                        <br/>
                        Quite often, I find myself using these comments as they help me keep track of where everything is while scrolling through large files. 
                    </p>
                    
                    <h2 className="post-subtitle">CSG</h2>
                    <p>
                        <input width="100%" className="post-img" type="image" alt="img" src={CSG}/>
                        Now of course I have to include my own extension in this list. CSG is a class snippet generator which pretty much makes creating a class template seamless. 
                        One down side is this only works in Python but I will be updating it soon to support multiple languages.
                        <br/><br/>
                        When using CSG, "csg" is your prefix, "a" is for arguments, "f" is for functions, and "o" for objects. You can add integers after the letters to indicate the amount of arguments, functions or objects you want.
                        <br/>
                        Syntax:
                        <br/>
                        <CodeBlock codeString={'csg_a(count)_f(count)_o(count)'} language="python"/>
                        <br/>
                        Here is an example of how to create a class with two arguments, two functions and one object:
                        <br/>
                        <CodeBlock codeString={'csg_a2_f2_o1'} language="python"/>
                        <br/>
                        This will create a template which you then can fill in with your own arguments and function names etc.
                        <br/>
                        <CodeBlock codeString={'class Name:\n\tdef __init__(self,arg1, arg2):\n\t\tself.arg1 = arg1\n\t\tself.arg2 = arg2\n\tdef func1(self):\n\t\tpass\n\tdef func2(self):\n\t\tpass\nobj = Name(arg1, arg2)\n'} language="python"/>       
                    </p>

                    <h2 className="post-subtitle">Polacode</h2>
                    <p>
                        <input width="100%" className="post-img" type="image" alt="img" src={Polacode}/>
                        💰 One dollar says you were wondering how I got that clean screenshot of "HELLO" in the Banner Comments sections. Well, I used Polacode. This extensions may not be a productivity booster,
                        but it sure helps share my code in a clean way without all the extra buttons Visual Studio Code offers. 
                        <br/>
                        <input width="100%" className="post-img" type="image" alt="img" src={PolacodeExample}/>
                    </p>

                    <h2 className='post-subtitle'>All Done</h2>
                    <p> 
                        I hoped you enjoyed this post and were able to find a few new extensions for your VS Code workspace!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
