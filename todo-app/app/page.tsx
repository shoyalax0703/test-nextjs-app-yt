import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

// Components
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};


// Page component
const Page: NextPage = () => {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Welcome to my Next.js app!</h1>
        <p>This is a simple and fancy app built with Next.js and TypeScript.</p>
      </main>
    </div>
  );
};

export default Page;
