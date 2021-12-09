
import Link from 'next/link'
export default function Logo() {
    return (
        <Link href="/">
            <a>
                <img src={'/logo.png'} style={{ marginLeft: "20%", width: 240, height: 180, marginTop: 10, marginBottom: 20 }} />
            </a>
        </Link>
    )
}