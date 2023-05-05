import React from 'react'

const Blog = () => {
  return (
    <div>
      <div className='text-center my-8 md:space-y-4 space-y-2'>
        <p className='md:text-4xl md:font-bold text-2xl font-semibold'>Welcome To Our Blog Page</p>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
          <span>Download as pdf</span>
        </button>
      </div>
      <div className='md:px-20 px-8 md:space-y-8 md:mb-20 mb:10'>
        <section>
          <h1 className='md:text-2xl text:xl md:font-semibold text-zinc-600'>The differences between uncontrolled and controlled components.</h1>
          <hr className='text-gray-600 border-[1px] w-11/12 my-2' />
          <p>In React, components can be classified as controlled or uncontrolled based on how they handle user input. <br />
            <span>1. Uncontrolled Components:
              Uncontrolled components are components that manage their state internally, and their state is not controlled by React. In other words, the state of an uncontrolled component is managed by the browser, and React only reads the current value of the component when it needs to. For example, an HTML form element such as input or textarea is an uncontrolled component because its state is managed by the browser.

              Uncontrolled components are generally easier to use and require less code, but they can be difficult to test and can lead to unpredictable behavior because they rely on the state of the browser.</span> <br />

            <span>2. Controlled Components:
              Controlled components are components that are fully controlled by React, meaning that their state is managed by React and not the browser. A controlled component receives its current value as a prop from its parent component, and whenever the value changes, it notifies its parent component via a callback function. <br />
              Controlled components are generally more complex than uncontrolled components, but they provide better control over the behavior of the component and make it easier to test and reason about the state of the component. Controlled components are often used in forms or input fields where the value needs to be managed by the application.
            </span> <br />



            In summary, the main difference between uncontrolled and controlled components in React is how they handle state. Uncontrolled components manage their state internally, whereas controlled components have their state managed by React and receive their current value as a prop from their parent component.</p>
        </section>
        <section>
          <h1 className='md:text-2xl text:xl md:font-semibold text-zinc-600'>How to validate React props using Proptypes</h1>
          <hr className='text-gray-600 border-[1px] w-11/12 my-2' />
          <p>
            To validate React props using PropTypes, follow these steps:
          </p>
          <ol className='md:space-y-4 space-y-2'>
            <li>1.Install PropTypes library: If you don't have PropTypes installed already, use 'npm install prop-types' to install it.</li>
            <li>
              2.Import PropTypes: In the component where you want to validate props, import PropTypes using import PropTypes from 'prop-types'.
            </li>
            <li>3.Define propTypes: Define propTypes as a static property of the component. The propTypes object should have a property for each prop that you want to validate, and the value of the property should be a PropTypes validator.
            </li>
            <li>4.Validate props: PropTypes validators will automatically check the props passed to the component, and if any of the props fail validation, a warning will be logged in the console. Simply render the component with the props you want to validate.
            </li>
          </ol>
          <p>That's it! Using PropTypes is a simple and effective way to validate your React props and catch errors early.
          </p>
        </section>
        <section>
          <h1 className='md:text-2xl text:xl md:font-semibold text-zinc-600'>Differences Between Express.js and node.js</h1>
          <hr className='text-gray-600 border-[1px] w-11/12 my-2' />
          <p>
            Here are some of the key differences between Node.js and Express.js:
          </p>
          <ol className='md:space-y-4 space-y-2'>
            <li>1.Node.js is a runtime environment, while Express.js is a web framework built on top of Node.js.
            </li>
            <li>
              2.Node.js provides a set of core modules that enable developers to build server-side applications, whereas Express.js provides a set of features for building web applications and APIs.
            </li>
            <li>3.Node.js provides a non-blocking I/O model, which allows it to handle a large number of requests simultaneously, whereas Express.js provides middleware to handle common web development tasks and simplify the process of building web applications.
            </li>
            <li>4.Node.js is lower-level and more customizable, whereas Express.js provides a higher-level abstraction and a consistent API for handling web requests and responses.
            </li>
          </ol>
          <p>In summary, Node.js is a runtime environment that enables developers to run JavaScript code outside of a web browser, while Express.js is a web framework built on top of Node.js that provides a set of features for building web applications and APIs.
          </p>
        </section>
        <section>
        <h1 className='md:text-2xl text:xl md:font-semibold text-zinc-600'>What is a custom hook, and why will you create a custom hook?</h1>
          <hr className='text-gray-600 border-[1px] w-11/12 my-2' />
          <p>A custom hook is a reusable piece of code in React that allows you to share stateful logic between components. You can create a custom hook to share logic between components, hide implementation details, or reuse logic in different contexts. Creating a custom hook involves defining a function that encapsulates the shared logic and returning an object with the necessary state and functions.</p>
        </section>
      </div>
    </div>
  )
}

export default Blog