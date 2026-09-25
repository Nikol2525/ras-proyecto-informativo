export default function Footer({ texto }) {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {texto}</p>
    </footer>
  )
}