import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1><b>Error 404 | Page Not Found</b></h1>
            <p>tekan link dibawah ini untuk kembali ke halaman:</p>
            <Link to='/'>Home</Link>
            <Link to='/explore'>Explore</Link>
            <Link to='/messages'>Messages</Link>
        </div>
    )
}