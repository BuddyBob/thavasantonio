import React from 'react'
import NavBar from '../../NavBar'
import CodeBlock from '../../CodeBlock'


export default function LC(){
  return (
    <div>
        <NavBar/>
        <div className="post-container">
            <div className="post-inner">
                <div className="content">
                    <h1 className="post-title"> I <span role="img" aria-label="heart">❤️</span> List Comprehension </h1>
                        <h2 className="post-subtitle">Lists</h2>
                        <p> 
                            If you've been programming in Python for a while, you've undoubtedly encountered the fundamental python feature <strong> List </strong>. 
                            They are a collection of items, which can be of any type stored in a single variable. Here are 2 simple ways to create a list:

                            <br/>
                            <br/>
                            <li>
                                <strong> Hardcoded (not dynamic): 
                                    <CodeBlock codeString={'my_list = ["apple", "orange", "grape" ]'} language={"python"}/>
                                </strong>
                            </li>
                            <li>
                                <strong> Dynamically (No thanks, i'm ok!):
                                    <CodeBlock codeString={
                                                        `my_list=[]\nfor i in range(3):\n\tmy_list.append(i)`

                                    } language={"python"}/>
                                </strong>
                            </li>
                            <br/>
                            While these are all very legal methods, python is known for its elegant and easy to write syntax. So why not take advantage of one of pythons most distinctive feature list comprehension. 

                        </p>


                        <h2 className="post-subtitle">List Comprehension</h2>
                        <p>
                            List comprehension is a syntactic construct that allows you to create a list in one line of code. 
                            <br/>
                            <br/>
                            <h3>Benifets: </h3>
                                <li>Elegant and easy to write</li>
                                <li>Can be used for mapping and filtering</li>
                                <li>Higher performance</li>
                            <br/>
                            <br/>
                            <h3>Basic Syntax</h3>
                            <CodeBlock codeString={'your_list = [your_function for i in [iterate]]'} language={"python"}/>
                            This means that for every iteration, a function can be preformed on i

                            <br/>
                            <br/>
                            <h3>Example</h3>
                            <CodeBlock codeString={'multiplied = [number*2 for number in range(5)]'} language={"python"}/>
                            <h3>Output:</h3>
                            <CodeBlock codeString={'multiplied = [0, 2, 4, 6, 8]'} language={"python"}/>
                        </p>

                        <h2 className="post-subtitle">Using Conditions</h2>
                        <p>
                            When creating a list using list comprehensions, you can use conditions
                            <br/>
                            <br/>
                            <br/>
                            <h3><strong>IF</strong></h3>
                            Lets say you want to create a list of numbers that are divisible by 2. 
                            <br/>
                            <br/>
                            Lengthy code (I'll pass):
                            <CodeBlock codeString={'divisible_by_2 = []\nfor number in range(10):\n\tif number % 2 == 0:\n\t\tdivisible_by_2.append(number)'} language={"python"}/>
                            <br/>
                            List Comprehension: 
                            <br/>
                            <CodeBlock codeString={'divisible_by_2 = [number for number in range(10) if number % 2 == 0]'} language={"python"}/>
                            <br/>
                            Output:
                            <CodeBlock codeString={'divisible_by_2 = [0, 2, 4, 6, 8]'} language={"python"}/>

                            Here we create a list called divisible_by_2. We then iterate through a range of 10, and check if it is divisible by 2, we append it to the list.
                            <br/>
                            <br/>
                            <br/>
                            <h3><strong>IF & ELSE</strong></h3>
                            Using the same example, how could we create a new list by iterating through a range of numbers and checking if it is odd or even.
                            The end result should look something like: <br/>["even", "odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd"]
                            <br/>
                            <br/>
                            We can achieve the result by using an if statement to append "even" and an else statement to append "odd" 
                            <br/>
                            <br/>
                            Lengthy code:
                            <CodeBlock codeString={'even_or_odd = []\nfor number in range(10):\n\tif number % 2 == 0:\n\t\teven_or_odd.append("even")\n\telse:\n\t\teven_or_odd.append("odd")'} language={"python"}/>
                            <br/>
                            List Comprehension:
                            <CodeBlock codeString={'even_or_odd = ["even" if number % 2 == 0 else "odd" for number in range(10)]'} language={"python"}/>
                            <br/>
                            Output:
                            <CodeBlock codeString={'even_or_odd = ["even", "odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd"]'} language={"python"}/>

                        </p>

                        <h2 className="post-subtitle">Matrix Manipulation</h2>
                        <p>
                            Nested list iterations can be a bit confusing but list comprehension simplifies this process. 
                            <br/>
                            <br/>
                            <h3><strong>Flatten List</strong></h3>
                            <br/>
                            Say we had a 2d list of numbers.
                            <br/>
                            <CodeBlock codeString={'my_matrix = [[1,2,3],[4,5,6],[7,8,9]]'} language={"python"}/>
                            <br/>

                            In order to flatten the list we can use two for loops. Below we iterate through my_matrix (row) and then iterate through each row (number). Lastly we append the number to flattened_matrix.
                            <br/>
                            <CodeBlock codeString={'flattened_matrix = [number for row in my_matrix for number in row]'} language={"python"}/>
                            <br/>
                            Output:
                            <CodeBlock codeString={'flattened_matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9]'} language={"python"}/>
                            
                            <br/>
                            <br/>

                            <h3><strong>Matrix Transpose</strong></h3>
                            <br/>
                            Transpose of a matrix is a task that can be done using a nested for loop. However there is a neat trick to do this in one line using list comprehensions.
                            Suppose we had the 3x2 matrix below
                            <br/>
                            <CodeBlock codeString={'my_matrix = [[1,2],[3,4],[5,6]]'} language={"python"}/>
                            <br/>
                            To transpose the matrix we iterate through the range ( my_matrix's first list length ) --{'>'} i
                            Using another list comprehension, we iterate through the range ( my_matrix's length) --{'>'} j
                            Inside this list comprehension we append the value of my_matrix[j][i] to the transposed_matrix
                            <br/>
                            <CodeBlock codeString={'transposed_matrix = [[my_matrix[j][i] for j in range(len(my_matrix))] for i in range(len(my_matrix[0]))]'} language={"python"}/>
                            <br/>
                            Output:
                            <CodeBlock codeString={'transposed_matrix = [[1, 3, 5], [2, 4, 6]]'} language={"python"}/>
                        </p>

                </div>
            </div>
        </div>
    </div>
  )
}

