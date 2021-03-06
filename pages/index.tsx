/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { cardStyle } from '../styles/index.ts';

const Home: NextPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Head>
        <title>Strip Finance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="relative bg-black text-white">
        <section className="body-font bg-black">
          <div
            className="absolute hidden sm:block md:block  lg:block xl:block 2xl:block"
            style={{ top: '-5rem', right: '-40rem' }}
          >
            <img src="/background/bg-crystal-1.png" alt="" />
          </div>
          <div
            className="absolute hidden sm:block md:block  lg:block xl:block 2xl:block"
            style={{ top: '10rem', left: '0rem' }}
          >
            <img src="/background/bg-crystal-2.png" alt="" />
          </div>
          <div
            className="absolute block sm:hidden md:hidden  lg:hidden xl:hidden 2xl:hidden"
            style={{ top: '18rem', right: '-11rem' }}
          >
            <img src="/background/bg-crystal-3.png" alt="" />
          </div>
          <div className="relative container mx-auto flex flex-col px-5 py-24 justify-center items-center">
            <Link href="https://strip.finance/">
              <img
                className="w-2/12  mb-10 object-cover object-center rounded"
                alt="hero"
                src="/img/logo.png"
              />
            </Link>
            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">
                Multi Faucet For Testnet
              </h1>
              <p className="mb-8 leading-relaxed">
                Enter your address bellow to claim all supported testnet tokens in one go
                white_check_mark eyes raised_hands 5:43 The faucet drips 1 ETH, 1 wETH, 500 DAI, and
                10000 SUSDT
              </p>
              <div className="w-full pb-10" style={cardStyle}>
                <div className="w-full justify-center items-end">
                  <div className="py-6 text-left px-6 border-b-2 border-gray-500">
                    Request Tokens
                  </div>
                  {isLoggedIn ? (
                    <div className="py-6 px-6 relative mr-4 text-left">
                      <div className="leading-7 mb-4 text-lg text-white">
                        Enter your Ethereum address to receive tokens:
                      </div>
                      <input
                        type="text"
                        id="hero-field"
                        name="hero-field"
                        placeholder="Enter Address"
                        className="w-full bg-black bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                      <button type="button" className="gradient-button my-6">
                        Enter valid address
                      </button>
                    </div>
                  ) : (
                    <div className="px-6">
                      <div className="text-left py-6">
                        To prevent faucet botting, you must sign in with Twitter. We request
                        read-only access.
                      </div>
                      <button type="button" className="gradient-button">
                        Sign In With Twitter
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};

export default Home;
