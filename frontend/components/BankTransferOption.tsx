import React from 'react'
import Image from 'next/image'
import { bank } from '.'

const BankTransferOption = () => {
  return (
    <div className=' text-center overflow-scroll'>

      <p className=' text-lg mb-5 font-semibold'>ACCOUNT DETAILS</p>
      <p className=' text-lg px-12'>This account expires in <span className=' font-bold' >26:41</span> and can only be used for this transaction</p>
      <div className=' mt-10 flex flex-col gap-2'>

        <div className=' text-lg bg-[#EDEFF1] flex justify-between px-5 py-3 rounded-[10px]'>
          <p>Account Name:</p>
          <p className=' font-bold'>Remita Checkout</p>
        </div>

        <div className=' text-lg bg-[#EDEFF1] flex justify-between px-5 py-3 rounded-[10px]'>
          <p>Account Number:</p>
          <p className=' font-bold'>0033014183</p>
        </div>

        <div className=' text-lg bg-[#EDEFF1] flex justify-between px-5 py-3 rounded-[10px]'>
          <p className=' font-normal'>Bank Name:</p>
          <p className=' font-bold'>Stanbic IBTC <span></span> </p>
        </div>

        <div className=' text-lg bg-[#EDEFF1] flex justify-between px-5 py-3 rounded-[10px]'>
          <p>Total Amount:</p>
          <p className=' font-bold'>NGN 1,000.00</p>
        </div>


        <p className=' my-3 text-lg px-12 '>Please make a transfer to the account details above</p>


        <button className=' bg-[#2B9D80BF] py-5 text-2xl text-white rounded-l-full '>I’ve sent the money</button>

      </div>
    </div>
  )
}

export default BankTransferOption