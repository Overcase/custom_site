export default function (context) {
  console.log(context.req, process.server, 'context')
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}