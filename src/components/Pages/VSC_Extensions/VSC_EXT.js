import React from 'react'
import NavBar from '../../NavBar'
import CodeBlock from '../../CodeBlock'
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

                    <h2 className="post-subtitle">Github Copilot</h2>
                    <p>
                        While not fully open to the public yet, <a href="https://marketplace.visualstudio.com/items?itemName=GitHub.copilot" target="_blank"><u>Github Copilot</u></a> is definitely one the most useful and productive extensions out there. It similar to Tabnine or Kite but is much more powerful.
                        Created by OpenAI, it understands your code and uses Github code to match it. What I found most useful is its ability to convert your logic (comments, function names) to code.
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
                        If suggestion code does not show up, you can press ctrl + enter to receive multiple options. Github Copilot can even finish your functions. 
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
                        This extensions is a technical preview and not yet fully open to the public, however you can hop on the wait list and hope for the best. Overall, github copilot is a great tool to greatly improve productivity. 
                    </p>

                    <h2 className="post-subtitle">Material Icon Theme</h2>
                    <br/>
                    <p>
                        With over 12.4 million installs, <a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme" target="_blank"><u>Material Icon Theme</u></a> is a great extension that gives you a library of visually pleasing file icons to replace to ugly default ones.<br/><br/>
                        While this is not a productivity boost, it sure helps with organizations and makes working with big projects much more pleasing. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
