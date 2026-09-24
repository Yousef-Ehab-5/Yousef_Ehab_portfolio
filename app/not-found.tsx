import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="detail-page">
      <p className="eyebrow">404</p>
      <h1>That page isn’t here.</h1>
      <p>Explore the portfolio to find a project.</p>
      <Link className="button primary" href="/">
        Back to portfolio
      </Link>
    </main>
  );
}
