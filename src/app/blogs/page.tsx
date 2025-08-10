import Link from 'next/link'

export default function page() {
  return (
    <div className="flex w-screen h-screen fixed overflow-hidden flex-col items-center justify-center min-h-screen text-center">
      <style className="jsx">
        {`
          .blogs {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 20px;
          }
          .blogItem {
            padding: 16px;
            border-radius: 8px;
            background-color: #e1e6abff;
            box-shadow: 0 3px 5px rgba(0, 0, 0, 3);
          }
        `} 
      </style>
      <h1 className="text-4xl sm:text-3xl italic font-serif font-bold">
        This is blog page
      </h1>
      <div className="blogs ">
          
          <div className="cursor-pointer ">
          <div className="blogItem mt-5 ">
            <Link href="/blogpost/javaScript">
            <h1 className="text-2xl  text-blue-500 mt-5 sm:text-lg font-bold font-mono tracking-tight text-center sm:text-left">
              How to Learn JavaScript in 2025?
            </h1></Link>
            <p>JavaScript used to create interactive and responsive features on websites.</p>
          </div>
          <div className="blogItem mt-5">
            <Link href="/blogpost/ml">
            <h1 className="text-2xl text-orange-800 mt-5 sm:text-lg font-bold font-mono tracking-tight text-center sm:text-left">
              How to Learn Machine Learning in 2025?
            </h1></Link>
            <p>Machine Learning improve from experience without being explicitly programmed.</p>
          </div>
          <div className="blogItem mt-5">
            <Link href="/blogpost/ai">
            <h1 className="text-2xl text-yellow-900 mt-5 sm:text-lg font-bold font-mono tracking-tight text-center sm:text-left">
              How to Learn AI in 2025?
            </h1></Link>
            <p>Artificial Intelligence (AI) is the simulation of human intelligence by machines.</p>
          </div>
          </div>
        </div>

      <div className="mt-10">
        Click it : <Link className="text-blue-400 align-right justify-end text-right" href="/blogs/some-slug"> <b>Some-slug</b></Link>
      </div>
    </div>
  );
}
