module.exports = (body) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        <link rel="stylesheet" href="../index.css">
        <title>richard joe</title>
      </head>
      <body>
        ${body}
      </body>
    </html>
  `
}
