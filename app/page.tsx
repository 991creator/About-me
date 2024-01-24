import Navi from '@/components/navi'
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'

export default function Home() {
  return (
    <>
    <div className='flex flex-col h-screen w-screen bg-white'>
      <div className='flex justify-center items-start w-full'>
        <Navi></Navi>
      </div>
      <div className='flex flex-col justify-center items-center h-full p-[25px]'>
        <div className="flex flex-col justify-center items-start bg-black p-[25px] rounded-3xl">
          <div className='flex flex-row justify-start items-center'>
            <div className='flex justify-center items-center h-[60px] w-[60px] bg-pink-400  rounded-full mr-[15px]'>
            </div>
            <p className='text-xl text-white'>Andrey Konuhow</p>
          </div>
        <p className='text-white text-3xl mt-[15px]'>Привет, приятно познакомиться :)</p>
        </div>  
        </div>
    </div>
    <div className='h-[55px] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
    </div>
    <div className='flex flex-col bg-black justify-start w-screen p-[25px] md:p-[50px]'>
      <div className='flex flex-col w-full justify-end items-end'>
        <p className='bg-white text-black px-[25px] py-[15px] mb-[25px] rounded-2xl max-w-[350px] md:max-w-[450px] text-xl'>Я Андрей, люблю постигать новое и считаю, что нет ничего невозможного. Могу слушать подкаст о динамическом и статическом рендеринге веб приложений, делая подход на брусьях. Соблюдаю дзен, но иногда увлекаюсь одним делом на пару дней, забывая обо всем. Сейчас, активно изучаю направление BI аналитики с ML инструментами (математика не оч D: ).</p>
        <p className='bg-white text-black px-[25px] py-[15px] mb-[25px] rounded-2xl'></p>
      </div>
      <div className='flex flex-col w-full justify-end items-start'>
        <p className='bg-white text-black px-[25px] py-[15px] mb-[25px] rounded-2xl max-w-[350px] md:max-w-[450px] text-xl'>Как с тобой связаться?!?!??! </p>
        <p className='bg-white text-black px-[25px] py-[15px] mb-[25px] rounded-2xl'></p>
      </div>
      <div className='flex flex-col w-full justify-end items-end'>
        <Link className='bg-white text-black hover:bg-purple-400 px-[25px] py-[15px] mb-[25px] rounded-2xl max-w-[350px] md:max-w-[450px] transition ease-in duration-100 text-xl' href="https://github.com/991creator" target="_blank">GitHub (рабочий)</Link>
      </div>
      <div className='flex flex-col w-full justify-end items-end'>
        <Link className='bg-white text-black hover:bg-purple-400 px-[25px] py-[15px] mb-[25px] rounded-2xl max-w-[350px] md:max-w-[450px] transition ease-in duration-100 text-xl' href="https://github.com/991dev" target="_blank">GitHub (личный)</Link>
      </div>
      <div className='flex flex-col w-full justify-end items-end'>
        <Link className='bg-white text-black hover:bg-blue-300 px-[25px] py-[15px] mb-[25px] rounded-2xl max-w-[350px] md:max-w-[450px] transition ease-in duration-100 text-xl' href="https://t.me/konuhow" target="_blank">@Telegram</Link>
        <p className='bg-white text-black px-[25px] py-[15px] mb-[25px] rounded-2xl'></p>
      </div>
    </div>
    </>
  )
}
