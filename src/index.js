import React from 'react'
import ReactDOM from 'react-dom'
import { join } from 'lodash'
import { cube } from './util'
import PropTypes from 'prop-types'
import Foo from './foo'

const Hello = ({ names, foo, bar }) => {
  console.log(cube(8))
  return (
    <div>
      <h1>Hello {join(names.map(n => n.toLowerCase()), ', ')}!</h1>
      <pre>{JSON.stringify({ ...foo, ...bar })}</pre>
      <Foo />

      <style jsx>{`
        pre {
          color: goldenrod;
          background-color: black;
        }
      `}</style>
    </div>
  )
}

Hello.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
  foo: PropTypes.object,
  bar: PropTypes.object
}

ReactDOM.render(
  <div>
    <Hello
      names={['foo', 'bar', 'bazzz']}
      foo={{ a: 1, b: 2 }}
      bar={{ x: 42, y: 3 }}
    />
    <style jsx global>{`
      * {
        box-sizing: border-box;
        font-family: consolas;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'development') {
  module.hot.accept()
}
