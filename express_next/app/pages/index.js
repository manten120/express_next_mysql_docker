import fetch from 'node-fetch'
import Link from 'next/link'

const Index = (props) => (
  <div>
    <p>id: {props.id}</p>
    <p>name: {props.name}</p>
    <Link href="/about">
      <a>About Page</a>
    </Link>
  </div>
)

export async function getStaticProps() {
  const json = await fetch('http://hogehoge/api')
  const obj = await json.json()
  return {
    props: obj,
  }
}

export default Index