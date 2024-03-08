'use client'
import Image from 'next/image'
import React, { useState } from 'react';
import { ethers } from 'ethers';
//Change this File
interface Window {
  ethereum: any;
}

declare var window: Window;


export default function Contracts() {
  const [contractAddress, setContractAddress] = useState('');
  const [functionCall, setFunctionCall] = useState('');


  const makeContractCall = async () => {
    // Setup the provider
    // Note: This example uses the default provider, you might want to use a specific provider (like MetaMask)


    // Setup the contract
    // Note: You'll need the ABI for your contract to create a contract instance

    // Make the contract call
    // Note: This assumes `functionCall` is the name of a function that takes no arguments, uncomment the console
    // once you have filled in below
    // console.log('Transaction sent:', tx);
  };
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Lets Make Some Contract Calls</h2>
            <p className="text-xl text-gray-400">You will be copying and pasting the block below in order to create a new call</p>
          </div>
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st Contract Call */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <form action="#" method="POST">
                <div className="mb-4">
                  <label htmlFor="contractAddress" className="block text-sm font-medium text-white">
                    Contract Address
                  </label>
                  <input 
                    type="text" 
                    name="contractAddress" 
                    id="contractAddress"
                    value={contractAddress}
                    onChange={(e) => setContractAddress(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md bg-gray-900 text-white placeholder-gray-500"
                    placeholder="Enter contract address"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="functionCall" className="block text-sm font-medium text-white">
                    Function Call
                  </label>
                  <input 
                    type="text" 
                    name="functionCall" 
                    id="functionCall"
                    value={functionCall} 
                    onChange={(e) => setFunctionCall(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md bg-gray-900 text-white placeholder-gray-500"
                    placeholder="Enter function call"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full p-2 mt-4 bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-400"
                  onClick={makeContractCall}
                >
                  Make Contract Call
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
