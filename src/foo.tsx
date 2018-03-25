import React from 'react'

export default class Foo extends React.Component {
  bar: { [key: string]: number } = {
    a: 1,
    b: 2,
    c: 3
  }

  render () {
    return (
      <div>
        Blafoo: {JSON.stringify(this.bar)}
        <style jsx>{`
          div {
            color: blue;
          }
        `}</style>
      </div>
    )
  }
}
