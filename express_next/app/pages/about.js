import fetch from 'node-fetch'
import Link from 'next/link'

const About = (props) => (
  <div>
    <p>About Page</p>
    <p>Hello {props.name}!</p>
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
)

export async function getStaticProps() {
  const json = await fetch('http://192.168.99.100/api')
  const obj = await json.json()
  return {
    props: obj,
  }
}

export default About