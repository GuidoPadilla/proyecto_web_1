/* eslint-disable react/jsx-filename-extension */
import path from 'path'
import fs from 'fs'
import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'

import App from '../client/components/App'

const PORT = process.env.PORT || 3006
const app = express()

app.get('/', (req, res) => {
  const contenido = ReactDOMServer.renderToString(<App />)
  const indexFile = path.resolve('../../dist/index.html')
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Oops, better luck next time!')
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${contenido}</div>`),
    )
  })
})

app.use(express.static('../../dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${PORT}`)
})
