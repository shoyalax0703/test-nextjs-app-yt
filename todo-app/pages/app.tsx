// Page.tsx
import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm py-6 px-6">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

const Page: NextPage = () => {
  return (
    <div className="font-sans min-h-screen antialiased text-gray-900">
      <NavBar />
      <main>
        <div className="hero py-16">
          <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="hero-text col-span-6">
                <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">Welcome to my Next.js app!</h1>
                <p className="text-xl text-gray-700 mt-4">This is a simple and fancy app built with Next.js and TypeScript.</p>
              </div>
              <div className="hero-image col-span-6">
                <img className="mx-auto h-64 w-64" src="/hero-image.svg" alt="Hero Image"/>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center">Features</h2>
            <div className="flex items-center justify-center mt-12">
              <div className="m-4 text-center">
                <img className="mx-auto w-24" src="/feature-1.svg" alt="Feature 1"/>
                <h3 className="text-xl mt-4 font-semibold text-gray-700">Feature 1</h3>
                <p className="mt-2 text-gray-600">Description for Feature 1.</p>
              </div>
              <div className="m-4 text-center">
                <img className="mx-auto w-24" src="/feature-2.svg" alt="Feature 2"/>
                <h3 className="text-xl mt-4 font-semibold text-gray-700">Feature 2</h3>
                <p className="mt-2 text-gray-600">Description for Feature 2.</p>
              </div>
              <div className="m-4 text-center">
                <img className="mx-auto w-24" src="/feature-3.svg" alt="Feature 3"/>
                <h3 className="text-xl mt-4 font-semibold text-gray-700">Feature 3</h3>
                <p className="mt-2 text-gray-600">Description for Feature 3.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="py-6 flex justify-center items-center space-x-4">
            <p>© 2023 Your Website</p>
            <a href="#" className="text-blue-500 hover:text-blue-700">Privacy Policy</a>
            <a href="#" className="text-blue-500 hover:text-blue-700">Terms and Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
