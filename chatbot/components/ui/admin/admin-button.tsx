"use client"

import {redirect} from "next/navigation";

export default function AdminButton({text, url} : {text: string, url: string}) {
  return (
    <>
      <button className="bg-black rounded-full w-48 h-12 text-white text-2xl" onClick={() => redirect(url)}>
        {text}
      </button>
    </>
  )
}
