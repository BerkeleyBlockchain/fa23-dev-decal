'use client'
import Link from 'next/link'
import icon from '@/public/images/b@bicon.png'
import { ethers } from 'ethers';
//Change This File
interface Window {
  ethereum: any;
}

declare var window: Window;
export default function Header() {
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access

        // We don't need to check if MetaMask is locked, we can just try to get the signer and wait for the user to authorize.

        // Get the user's address, uncomment after u have defined address
        // console.log('Connected with address:', address);
      } catch (error) {
        console.error('User rejected connection:', error);
      }
    } else {
      console.log('Please install MetaMask!');
    }
  }
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8" viewBox="0 0 344 311" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M99.6697 56.9812L129.683 4.17965C131.151 1.59598 133.894 0 136.866 0H199.209C205.563 0 209.539 6.87177 206.373 12.3803L176.024 65.1818C174.55 67.7461 171.818 69.3271 168.861 69.3271H106.853C100.517 69.3271 96.5387 62.4895 99.6697 56.9812Z" fill="#FECB33"/>
                <path d="M7.01755 218.312L37.0305 165.511C38.4991 162.927 41.242 161.331 44.2139 161.331H106.557C112.91 161.331 116.887 168.203 113.721 173.712L83.3722 226.513C81.8983 229.077 79.1661 230.658 76.2084 230.658H14.201C7.86498 230.658 3.88656 223.821 7.01755 218.312Z" fill="#FECB33"/>
                <path d="M229.901 298.006L259.914 245.205C261.382 242.621 264.125 241.025 267.097 241.025H329.44C335.794 241.025 339.77 247.897 336.604 253.405L306.255 306.207C304.782 308.771 302.049 310.352 299.092 310.352H237.084C230.748 310.352 226.77 303.515 229.901 298.006Z" fill="#EAA536"/>
                <path d="M300.419 298.006L270.406 245.205C268.937 242.621 266.194 241.025 263.222 241.025H200.879C194.526 241.025 190.55 247.897 193.716 253.405L224.064 306.207C225.538 308.771 228.27 310.352 231.228 310.352H293.235C299.571 310.352 303.55 303.515 300.419 298.006Z" fill="#FECB33"/>
                <path d="M162.168 248.16L131.331 302.905C129.866 305.504 127.115 307.113 124.131 307.113H58.0786C51.6399 307.113 47.6752 300.074 51.0119 294.568L86.5968 235.842H154.969C161.29 235.842 165.27 242.652 162.168 248.16Z" fill="#FECB33"/>
                <path d="M120.917 298.812L87.933 241.76C86.4447 239.185 86.4544 236.01 87.9586 233.445L120.943 177.193C124.111 171.79 131.903 171.738 135.142 177.099L169.134 233.352C170.712 235.963 170.722 239.232 169.16 241.854L135.169 298.906C131.94 304.325 124.075 304.274 120.917 298.812Z" fill="#EAA536"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M231.167 165.219C235.342 172.366 243.482 186.396 247.605 194.116L253.969 194.326C255.017 194.36 255.644 195.508 255.105 196.409L249.714 205.421C249.458 205.85 248.99 206.106 248.491 206.091L238.361 205.782C237.331 205.751 236.699 204.641 237.197 203.739L240.237 198.243L223.315 168.023C222.946 168.442 222.617 168.902 222.335 169.398L192.322 222.2C189.191 227.708 193.169 234.546 199.505 234.546H261.513C264.47 234.546 267.203 232.965 268.677 230.401L299.025 177.599C302.191 172.091 298.215 165.219 291.861 165.219H231.167Z" fill="#FECB33"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M140.262 145.781C144.437 138.634 152.577 124.604 156.7 116.884L163.064 116.674C164.112 116.64 164.739 115.492 164.2 114.591L158.809 105.579C158.553 105.15 158.085 104.894 157.586 104.909L147.456 105.218C146.426 105.249 145.794 106.359 146.292 107.261L149.332 112.758L132.41 142.977C132.041 142.558 131.712 142.098 131.43 141.602L101.417 88.8001C98.2859 83.2918 102.264 76.4542 108.6 76.4542H170.608C173.565 76.4542 176.298 78.0351 177.771 80.5995L208.12 133.401C211.286 138.91 207.31 145.781 200.956 145.781H140.262Z" fill="#FECB33"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M154.05 105.017L157.586 104.909C158.085 104.894 158.553 105.15 158.81 105.579L164.2 114.591C164.739 115.492 164.113 116.64 163.064 116.674L156.7 116.884C152.782 124.221 145.235 137.256 140.913 144.667C142.113 145.37 143.526 145.781 145.08 145.781H207.088C210.045 145.781 212.777 144.2 214.251 141.636L244.6 88.8344C247.766 83.3259 243.79 76.4541 237.436 76.4541H175.093C172.121 76.4541 169.378 78.0501 167.91 80.6338L154.05 105.017Z" fill="#EAA536"/>
              </svg>

            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <button className="btn-sm text-white bg-yellow-600 hover:bg-yellow-700 ml-3" onClick={connectWallet}>
                  Connect Wallet
                </button>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  )
}
