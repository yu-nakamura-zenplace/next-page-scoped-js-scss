import Link from "next/link";

import "./layout.scss"

export default function Layout({ children }: { children: React.ReactNode; }) {
  return <div className="mx-auto max-w-7xl px-6 lg:px-8 p-2 pl-40 bg-amber-50">
    <header>
      <h1>Next SCSS Page Scope</h1>
    </header>
    <nav className="global-nav">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/not-jsx">Not JSX(HTML)</Link></li>
      </ul>
    </nav>
    <section>
      {children}
    </section>
  </div>;
}