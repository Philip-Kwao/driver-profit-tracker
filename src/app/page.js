import Form from '@/components/Form'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm">
        <h1 className='text-center text-4xl font-extrabold uppercase'>driver account system</h1>
        <div className='flex flex-col  lg:flex-row justify-between items-center'>
          <Form background={"bg-green-600"} database={"myIncome"} title={"My Income"}/>
          <Form background={"bg-red-600"} database={"myExpense"} title={"My Expense"}/>
        </div>
      </div>
    </main>
  )
}
